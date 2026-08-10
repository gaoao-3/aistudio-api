export type WireValue = unknown;

export interface AistudioPart {
  readonly text?: string | null;
  readonly inlineData?: readonly [string, string];
  readonly fileId?: string;
  readonly functionCall?: readonly [string, unknown, string?];
  readonly functionResponse?: readonly [string, unknown, string?];
  readonly thoughtSignature?: string;
  readonly thought?: boolean;
}

export interface AistudioContent {
  readonly role: string;
  readonly parts: readonly AistudioPart[];
}

export interface RewriteWireOptions {
  readonly model: string;
  readonly snapshot?: string;
  readonly prompt?: string;
  readonly contents?: readonly AistudioContent[];
  readonly systemInstruction?: AistudioContent | string | null;
  readonly tools?: unknown[][] | null;
  readonly safetySettings?: unknown[][] | null;
  readonly temperature?: number;
  readonly topP?: number;
  readonly topK?: number;
  readonly maxTokens?: number;
  readonly generationConfig?: Readonly<Record<string, unknown>>;
  readonly sanitizePlainText?: boolean;
  readonly safetyOff?: boolean;
  readonly disableThinking?: boolean;
}

const INDEX = {
  model: 0,
  contents: 1,
  safety: 2,
  generation: 3,
  snapshot: 4,
  system: 5,
  tools: 6,
  requestFlag: 10,
  cachedContent: 11,
  timezone: 13,
} as const;

const GENERATION_INDEX: Readonly<Record<string, number>> = {
  stopSequences: 1,
  maxOutputTokens: 3,
  maxTokens: 3,
  temperature: 4,
  topP: 5,
  topK: 6,
  responseMimeType: 7,
  responseSchema: 8,
  presencePenalty: 9,
  frequencyPenalty: 10,
  responseLogprobs: 11,
  logprobs: 12,
  imageOutputMode: 14,
  thinkingConfig: 16,
  mediaResolution: 17,
  outputResolution: 26,
} as const;

export const TOOL_TEMPLATES = {
  code_execution: [[]],
  google_search: [null, null, null, [null, [[]]]],
  google_maps: [null, null, null, null, null, null, null, null, null, null, []],
  url_context: [null, null, null, null, null, null, null, []],
} as const;

function ensureLength(values: unknown[], size: number): void {
  while (values.length < size) values.push(null);
}

function wireArgs(value: unknown): unknown {
  if (!isRecord(value)) return value;
  return [Object.entries(value).map(([key, item]) => [key, wireArgumentValue(item)])];
}

function wireArgumentValue(value: unknown): unknown {
  if (isRecord(value)) return [null, wireArgs(value)];
  if (Array.isArray(value)) return [null, null, value.map(wireArgumentValue)];
  return [null, null, value];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function encodePart(part: AistudioPart): unknown[] {
  if (part.fileId) return [null, null, null, null, null, [part.fileId]];
  if (part.inlineData) {
    const result: unknown[] = [null, null, [...part.inlineData]];
    if (part.thoughtSignature) {
      ensureLength(result, 15);
      result[14] = part.thoughtSignature;
    }
    return result;
  }
  if (part.functionCall) {
    const [name, args, callId] = part.functionCall;
    const call: unknown[] = [name, wireArgs(args)];
    if (callId) call.push(callId);
    const result: unknown[] = Array.from({ length: 11 }, () => null);
    result[10] = call;
    if (part.thoughtSignature) {
      ensureLength(result, 15);
      result[14] = part.thoughtSignature;
    }
    return result;
  }
  if (part.functionResponse) {
    const [name, response, callId] = part.functionResponse;
    const functionResponse: unknown[] = [name, wireArgs(response)];
    if (callId) functionResponse.push(callId);
    const result: unknown[] = Array.from({ length: 12 }, () => null);
    result[11] = functionResponse;
    return result;
  }
  const result: unknown[] = [null, part.text ?? null];
  if (part.thought) {
    ensureLength(result, 13);
    result[12] = 1;
  }
  if (part.thoughtSignature) {
    ensureLength(result, 15);
    result[14] = part.thoughtSignature;
  }
  return result;
}

export function encodeContent(content: AistudioContent): unknown[] {
  return [content.parts.map(encodePart), content.role];
}

export function decodePart(raw: unknown): AistudioPart {
  if (!Array.isArray(raw)) return {};
  if (Array.isArray(raw[5]) && typeof raw[5][0] === "string") return { fileId: raw[5][0] };
  if (Array.isArray(raw[2]) && typeof raw[2][0] === "string" && typeof raw[2][1] === "string") {
    return { inlineData: [raw[2][0], raw[2][1]], ...(typeof raw[14] === "string" ? { thoughtSignature: raw[14] } : {}) };
  }
  const call = Array.isArray(raw[10]) ? raw[10] : Array.isArray(raw[3]) ? raw[3] : undefined;
  if (call) {
    const name = typeof call[0] === "string" ? call[0] : "unknown";
    const args = call[1] ?? {};
    const callId = typeof call[2] === "string" ? call[2] : undefined;
    return {
      functionCall: callId ? [name, args, callId] : [name, args],
      ...(typeof raw[14] === "string" ? { thoughtSignature: raw[14] } : {}),
    };
  }
  const response = Array.isArray(raw[11]) ? raw[11] : Array.isArray(raw[4]) ? raw[4] : undefined;
  if (response) {
    const name = typeof response[0] === "string" ? response[0] : "unknown";
    const value = response[1] ?? {};
    const callId = typeof response[2] === "string" ? response[2] : undefined;
    return { functionResponse: callId ? [name, value, callId] : [name, value] };
  }
  return {
    ...(raw[1] === null || typeof raw[1] === "string" ? { text: raw[1] as string | null } : {}),
    ...(raw[12] === 1 ? { thought: true } : {}),
    ...(typeof raw[14] === "string" ? { thoughtSignature: raw[14] } : {}),
  };
}

export function decodeContents(raw: unknown): AistudioContent[] {
  if (!Array.isArray(raw)) return [];
  const result: AistudioContent[] = [];
  for (const item of raw) {
    if (!Array.isArray(item) || !Array.isArray(item[0]) || typeof item[1] !== "string") continue;
    result.push({ role: item[1], parts: item[0].map(decodePart) });
  }
  return result;
}

function isFunctionTool(tool: unknown): boolean {
  return Array.isArray(tool) && Array.isArray(tool[1]) && tool[1].length > 0;
}

function isBuiltinTool(tool: unknown): boolean {
  if (!Array.isArray(tool)) return false;
  if (Object.values(TOOL_TEMPLATES).some(template => JSON.stringify(template) === JSON.stringify(tool))) return true;
  return Array.isArray(tool[3]);
}

function setGenerationValue(values: unknown[], name: string, value: unknown): void {
  const index = GENERATION_INDEX[name];
  if (index === undefined) return;
  ensureLength(values, index + 1);
  values[index] = value;
}

export function rewriteWireBody(originalBody: string, options: RewriteWireOptions): string {
  const parsed: unknown = JSON.parse(originalBody);
  if (!Array.isArray(parsed)) throw new Error("Captured AI Studio request body must be an array");
  const body = structuredClone(parsed) as unknown[];
  ensureLength(body, INDEX.timezone + 1);
  const model = options.model.startsWith("models/") ? options.model : `models/${options.model}`;
  const normalizedModel = model.slice("models/".length).toLowerCase();
  const isImage = normalizedModel.includes("image");
  const isTts = normalizedModel.includes("tts");
  body[INDEX.model] = model;
  if (options.contents) body[INDEX.contents] = options.contents.map(encodeContent);
  else if (options.prompt !== undefined) body[INDEX.contents] = [encodeContent({ role: "user", parts: [{ text: options.prompt }] })];
  if (options.snapshot !== undefined) body[INDEX.snapshot] = options.snapshot;
  if (options.systemInstruction !== undefined) {
    body[INDEX.system] = typeof options.systemInstruction === "string"
      ? encodeContent({ role: "user", parts: [{ text: options.systemInstruction }] })
      : options.systemInstruction ? encodeContent(options.systemInstruction) : null;
  } else {
    body[INDEX.system] = null;
  }

  const generation = Array.isArray(body[INDEX.generation]) ? body[INDEX.generation] as unknown[] : [];
  body[INDEX.generation] = generation;
  if (options.maxTokens !== undefined) setGenerationValue(generation, "maxOutputTokens", options.maxTokens);
  if (options.temperature !== undefined) setGenerationValue(generation, "temperature", options.temperature);
  if (options.topP !== undefined) setGenerationValue(generation, "topP", options.topP);
  if (options.topK !== undefined) setGenerationValue(generation, "topK", options.topK);
  for (const [name, value] of Object.entries(options.generationConfig ?? {})) {
    if (value !== undefined && value !== null) setGenerationValue(generation, name, value);
  }

  if (!isTts && !options.disableThinking) {
    if ((options.sanitizePlainText ?? true) && !isImage) {
      setGenerationValue(generation, "responseMimeType", "text/plain");
      setGenerationValue(generation, "responseSchema", null);
      setGenerationValue(generation, "thinkingConfig", null);
    }
    if (generation[16] == null) setGenerationValue(generation, "thinkingConfig", [1, null, null, isImage ? 4 : 3]);
  } else {
    for (const index of [7, 8, 14, 16]) if (index < generation.length) generation[index] = null;
  }
  if (isImage) {
    if (generation[14] == null) setGenerationValue(generation, "imageOutputMode", [2]);
    for (const index of [7, 13, 17]) if (index < generation.length) generation[index] = null;
    if (options.disableThinking) setGenerationValue(generation, "thinkingConfig", null);
    body[INDEX.safety] = null;
  } else if (options.safetySettings !== undefined) {
    body[INDEX.safety] = options.safetySettings;
  } else if (options.safetyOff || normalizedModel.startsWith("gemma-") || normalizedModel.startsWith("gemini-")) {
    body[INDEX.safety] = [7, 8, 9, 10].map(category => [null, null, category, 5]);
  }

  let tools = options.tools ?? null;
  if (tools?.some(isFunctionTool)) tools = tools.filter(tool => !isBuiltinTool(tool));
  body[INDEX.tools] = tools;
  if (!isImage) {
    if (tools?.length) {
      body[INDEX.timezone] = body[INDEX.timezone] ?? [[null, null, "Asia/Shanghai"]];
      setGenerationValue(generation, "responseMimeType", null);
      setGenerationValue(generation, "responseSchema", null);
    } else {
      body.length = Math.min(body.length, 11);
    }
  }
  return JSON.stringify(body);
}

export function buildToolsFromNames(names: readonly string[], model: string): unknown[][] {
  const normalized = model.replace(/^models\//u, "").toLowerCase();
  const isImage = normalized.includes("image");
  if (isImage) {
    let google = false;
    let image = false;
    for (const raw of names) {
      const name = raw.trim().toLowerCase();
      if (["google_search_and_image_search", "image_google_search_and_image_search"].includes(name)) google = image = true;
      else if (["google_search", "image_google_search"].includes(name)) google = true;
      else if (["image_search", "google_image_search"].includes(name)) image = true;
      else throw new Error(`Tool ${raw} is not allowed for model ${model}`);
    }
    if (!google && !image) return [];
    return [[null, null, null, [null, google && image ? [[], []] : google ? [[]] : [null, []]]]];
  }
  const allowed = normalized.startsWith("gemini-")
    ? new Set(["google_search", "code_execution", "google_maps", "url_context"])
    : new Set(["google_search", "code_execution"]);
  return names.map(raw => {
    const name = raw.trim().toLowerCase() as keyof typeof TOOL_TEMPLATES;
    if (!allowed.has(name) || !(name in TOOL_TEMPLATES)) throw new Error(`Tool ${raw} is not allowed for model ${model}`);
    return structuredClone(TOOL_TEMPLATES[name]) as unknown as unknown[];
  });
}
