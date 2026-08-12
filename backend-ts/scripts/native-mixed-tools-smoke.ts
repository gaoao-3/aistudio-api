import { resolve } from "node:path";
import { NativeBrowserSession } from "../src/gateway/browser-session.js";
import { NativeGateway } from "../src/gateway/native-gateway.js";

interface GeminiPart {
  readonly text?: string;
  readonly thought?: boolean;
  readonly thoughtSignature?: string;
  readonly functionCall?: {
    readonly name?: string;
    readonly args?: Record<string, unknown>;
    readonly id?: string;
  };
}

interface GeminiContent {
  readonly role: "user" | "model";
  readonly parts: GeminiPart[];
}

function argument(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function candidateContent(response: Record<string, unknown>): GeminiContent | undefined {
  const candidates = response.candidates;
  if (!Array.isArray(candidates) || !candidates[0] || typeof candidates[0] !== "object") return undefined;
  const content = (candidates[0] as { content?: unknown }).content;
  if (!content || typeof content !== "object") return undefined;
  const role = (content as { role?: unknown }).role;
  const parts = (content as { parts?: unknown }).parts;
  return role === "model" && Array.isArray(parts) ? content as GeminiContent : undefined;
}

const authFile = argument("--auth-file") ?? process.env.AISTUDIO_AUTH_FILE;
if (!authFile) throw new Error("Usage: tsx scripts/native-mixed-tools-smoke.ts --auth-file <auth.json> [--model <model>]");

const session = new NativeBrowserSession(resolve(authFile));
const gateway = new NativeGateway(session);
try {
  const requestedModel = argument("--model");
  const models = await gateway.models();
  const names = models.flatMap(item => typeof item.name === "string" ? [item.name.replace(/^models\//u, "")] : []);
  const model = requestedModel
    ?? names.find(name => /^gemini-3(?:\.|-)/u.test(name) && !/(?:image|tts)/u.test(name.toLowerCase()))
    ?? names.find(name => name.startsWith("gemini-") && !/(?:image|tts)/u.test(name.toLowerCase()));
  if (!model) throw new Error("AI Studio model catalog did not contain a compatible Gemini text model");

  const tools = [
    { googleSearch: {} },
    {
      functionDeclarations: [{
        name: "record_search_result",
        description: "必须在完成 Google 搜索后调用，用于记录搜索得到的标题。",
        parameters: {
          type: "OBJECT",
          properties: { title: { type: "STRING", description: "搜索结果中的页面标题" } },
          required: ["title"],
        },
      }],
    },
  ];
  const prompt = "先使用 Google 搜索查找 Google AI for Developers 官网的 Gemini API 页面标题，然后必须调用 record_search_result 记录标题；不要直接给最终答案。";
  const first = await gateway.generate(model, {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    tools,
    toolConfig: { includeServerSideToolInvocations: true },
    generationConfig: { temperature: 0, maxOutputTokens: 1024 },
  });
  const firstContent = candidateContent(first);
  const functionCall = firstContent?.parts.find(part => part.functionCall)?.functionCall;
  const firstSummary = {
    model,
    accepted: true,
    partKinds: firstContent?.parts.map(part => part.functionCall ? "functionCall" : part.thought ? "thought" : "text") ?? [],
    functionCall: functionCall ? {
      name: functionCall.name,
      hasId: Boolean(functionCall.id),
      hasSignature: Boolean(firstContent?.parts.find(part => part.functionCall)?.thoughtSignature),
    } : null,
  };
  if (!firstContent || !functionCall?.name || !functionCall.id) {
    console.log(JSON.stringify({ first: firstSummary, second: { attempted: false } }));
    process.exitCode = 2;
  } else {
    const second = await gateway.generate(model, {
      contents: [
        { role: "user", parts: [{ text: prompt }] },
        firstContent,
        {
          role: "user",
          parts: [{
            functionResponse: {
              name: functionCall.name,
              id: functionCall.id,
              response: { recorded: true, title: String(functionCall.args?.title ?? "unknown") },
            },
          }],
        },
      ],
      tools,
      toolConfig: { includeServerSideToolInvocations: true },
      generationConfig: { temperature: 0, maxOutputTokens: 1024 },
    });
    const secondContent = candidateContent(second);
    const visibleText = secondContent?.parts
      .filter(part => part.thought !== true)
      .map(part => part.text ?? "")
      .join("") ?? "";
    console.log(JSON.stringify({
      first: firstSummary,
      second: {
        attempted: true,
        completed: visibleText.length > 0,
        partKinds: secondContent?.parts.map(part => part.functionCall ? "functionCall" : part.thought ? "thought" : "text") ?? [],
        textPreview: visibleText.slice(0, 160),
      },
    }));
    if (visibleText.length === 0) process.exitCode = 2;
  }
} finally {
  await gateway.close();
}
