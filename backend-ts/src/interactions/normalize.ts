import type {
  AudioContent,
  FunctionResultStep,
  GeminiContent,
  GeminiGenerateRequest,
  GeminiPart,
  ImageContent,
  InteractionContent,
  InteractionCreateRequest,
  InteractionStep,
  ModelOutput,
  ModelOutputStep,
  JsonValue,
  TextContent,
} from "./types.js";

const CONTENT_TYPES = new Set<InteractionContent["type"]>(["text", "image", "audio", "document"]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isContent(value: unknown): value is InteractionContent {
  return isRecord(value) && typeof value.type === "string" && CONTENT_TYPES.has(value.type as InteractionContent["type"]);
}

function asJsonValue(value: unknown, path: string): JsonValue {
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item, index) => asJsonValue(item, `${path}[${index}]`));
  }
  if (isRecord(value)) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, asJsonValue(item, `${path}.${key}`)]));
  }
  throw new TypeError(`${path} must be JSON-compatible`);
}

function contentToPart(content: InteractionContent): GeminiPart | null {
  switch (content.type) {
    case "text":
      return { text: content.text };
    case "image":
    case "audio":
    case "document":
      if (content.data && content.mime_type) {
        return { inlineData: { mimeType: content.mime_type, data: content.data } };
      }
      if (content.uri) {
        return {
          fileData: {
            fileUri: content.uri,
            ...(content.mime_type ? { mimeType: content.mime_type } : {}),
          },
        };
      }
      // Remote HTTP URI fetching is deliberately kept outside this pure protocol layer.
      return null;
  }
}

function contentMessage(role: GeminiContent["role"], content: readonly InteractionContent[]): GeminiContent | null {
  const parts = content.map(contentToPart).filter((part): part is GeminiPart => part !== null);
  return parts.length > 0 ? { role, parts } : null;
}

function functionResultValue(result: FunctionResultStep["result"]): JsonValue {
  if (Array.isArray(result)) {
    const values: readonly unknown[] = result;
    const textItems = values.filter(
      (item): item is TextContent => isRecord(item) && item.type === "text" && typeof item.text === "string",
    );
    if (textItems.length === values.length) {
      return textItems.map((item) => item.text).join("\n");
    }
    // Never pass a raw content array into the browser wire encoder.  It is a
    // JSON value at the public API boundary, but AI Studio's internal function
    // response field is a map/scalar field.
    return JSON.stringify(result);
  }
  return asJsonValue(result, "function_result.result");
}

function stepToContents(step: InteractionStep): GeminiContent[] {
  switch (step.type) {
    case "user_input": {
      const message = contentMessage("user", step.content);
      return message ? [message] : [];
    }
    case "model_output": {
      const message = contentMessage("model", step.content);
      return message ? [message] : [];
    }
    case "thought": {
      const parts = (step.summary ?? [])
        .filter((item) => item.type === "text" && item.text.length > 0)
        .map((item) => ({
          text: item.text,
          thought: true,
          ...(step.signature ? { thoughtSignature: step.signature } : {}),
        }));
      return parts.length > 0 ? [{ role: "model", parts }] : [];
    }
    case "function_call": {
      return [{
        role: "model",
        parts: [{
          functionCall: { name: step.name, args: step.arguments, id: step.id },
          ...(step.signature ? { thoughtSignature: step.signature } : {}),
        }],
      }];
    }
    case "function_result": {
      const response = { result: functionResultValue(step.result) };
      return [{
        role: "user",
        parts: [{ functionResponse: { name: step.name ?? "unknown", response, id: step.call_id } }],
      }];
    }
  }
}

export function stepsToContents(steps: readonly InteractionStep[]): GeminiContent[] {
  const namesByCallId = new Map<string, string>();
  const contents: GeminiContent[] = [];
  for (const step of steps) {
    if (step.type === "function_call") {
      namesByCallId.set(step.id, step.name);
      contents.push(...stepToContents(step));
      continue;
    }
    if (step.type === "function_result" && !step.name) {
      const name = namesByCallId.get(step.call_id);
      contents.push(...stepToContents(name ? { ...step, name } : step));
      continue;
    }
    contents.push(...stepToContents(step));
  }
  return contents;
}

export function inputToContents(input: InteractionCreateRequest["input"]): GeminiContent[] {
  if (typeof input === "string") {
    return input.length > 0 ? [{ role: "user", parts: [{ text: input }] }] : [];
  }
  if (isContent(input)) {
    const message = contentMessage("user", [input]);
    return message ? [message] : [];
  }
  if (Array.isArray(input)) {
    if (input.length === 0) return [];
    if (input.every(isContent)) {
      const message = contentMessage("user", input);
      return message ? [message] : [];
    }
    return stepsToContents(input as readonly InteractionStep[]);
  }
  return stepsToContents([input as InteractionStep]);
}

function resolveInputFunctionNames(
  input: InteractionCreateRequest["input"],
  history: readonly InteractionStep[],
): InteractionCreateRequest["input"] {
  const names = new Map(history.flatMap(step => step.type === "function_call" ? [[step.id, step.name] as const] : []));
  if (names.size === 0) return input;
  const resolve = (value: InteractionContent | InteractionStep): InteractionContent | InteractionStep => {
    if (value.type !== "function_result" || value.name) return value;
    const name = names.get(value.call_id);
    return name ? { ...value, name } : value;
  };
  if (Array.isArray(input)) {
    if (input.every(isContent)) return input;
    return (input as readonly InteractionStep[]).map(item => resolve(item) as InteractionStep);
  }
  if (typeof input === "string") return input;
  return resolve(input as InteractionContent | InteractionStep);
}

export function interactionToGeminiRequest(
  request: InteractionCreateRequest,
  history: readonly InteractionStep[] = [],
): GeminiGenerateRequest {
  if (!request.model.trim()) throw new TypeError("model is required");
  const contents = [...stepsToContents(history), ...inputToContents(resolveInputFunctionNames(request.input, history))];
  if (contents.length === 0) throw new TypeError("input is required");
  return {
    contents,
    ...(request.system_instruction ? { systemInstruction: { role: "user", parts: [{ text: request.system_instruction }] } } : {}),
    ...(request.tools ? { tools: request.tools } : {}),
  };
}

export function outputToSteps(output: ModelOutput): InteractionStep[] {
  const steps: InteractionStep[] = [];
  if (output.thinking) {
    steps.push({ type: "thought", status: "done", summary: [{ type: "text", text: output.thinking }] });
  }
  const calls = output.function_calls ?? [];
  for (const call of calls) {
    if (!call.call_id) throw new TypeError(`function call ${call.name} is missing call_id`);
    steps.push({
      type: "function_call",
      status: "waiting",
      id: call.call_id,
      name: call.name,
      arguments: call.args,
      ...(call.thought_signature ? { signature: call.thought_signature } : {}),
    });
  }
  const content: InteractionContent[] = [
    ...(output.text ? [{ type: "text", text: output.text } satisfies TextContent] : []),
    ...((output.images ?? []) satisfies readonly ImageContent[]),
    ...((output.audio ?? []) satisfies readonly AudioContent[]),
  ];
  if (content.length > 0) {
    const modelOutput: ModelOutputStep = { type: "model_output", status: "done", content };
    steps.push(modelOutput);
  }
  return steps;
}
