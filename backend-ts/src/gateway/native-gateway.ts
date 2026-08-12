import { NativeBrowserSession } from "./browser-session.js";
import { normalizeGeminiRequest } from "./gemini-normalize.js";
import { parseAIStudioResponse, toGeminiResponse } from "./response-parser.js";
import { rewriteWireBody } from "./wire-codec.js";
import type { AistudioContent } from "./wire-codec.js";
import { fetchModelCatalog } from "./model-catalog.js";
import { IncrementalAIStudioParser } from "./incremental-parser.js";
import type { AccountProfile } from "../accounts/account-profile.js";

export function functionResponseRejected(status: number, body: string): boolean {
  if (status < 400) return false;
  const lowered = body.toLowerCase();
  return [
    "permission",
    "禁止访问",
    "invalid value",
    "unexpected list for single non-message field",
    "request contains an invalid argument",
  ].some(marker => lowered.includes(marker));
}

function hasFunctionResponse(contents: readonly AistudioContent[]): boolean {
  return contents.some(content => content.parts.some(part => Boolean(part.functionResponse)));
}

export function flattenFunctionContents(contents: readonly AistudioContent[]): AistudioContent[] {
  const lines: string[] = [];
  for (const content of contents) {
    for (const part of content.parts) {
      if (part.functionCall) lines.push(`[assistant tool call: ${part.functionCall[0]}]\n${JSON.stringify(part.functionCall[1])}`);
      else if (part.functionResponse) lines.push(`[tool result: ${part.functionResponse[0]}]\n${JSON.stringify(part.functionResponse[1])}`);
      else if (part.text) lines.push(part.text);
    }
  }
  return [{ role: "user", parts: [{ text: lines.join("\n\n") }] }];
}

export class NativeGateway {
  private modelCache: { readonly expires: number; readonly models: Record<string, unknown>[] } | undefined;
  constructor(private readonly session = new NativeBrowserSession()) {}

  async warmup(): Promise<void> {
    await this.session.warmup();
  }

  async switchAuth(authFile: string): Promise<void> {
    await this.session.switchAuth(authFile);
    this.modelCache = undefined;
  }

  async models(): Promise<Record<string, unknown>[]> {
    if (this.modelCache && this.modelCache.expires > Date.now()) return structuredClone(this.modelCache.models);
    const models = await fetchModelCatalog(this.session);
    this.modelCache = { models: structuredClone(models), expires: Date.now() + 60 * 60 * 1000 };
    return models;
  }

  async generate(model: string, body: unknown): Promise<Record<string, unknown>> {
    return this.generateInternal(model, body);
  }

  async generateStream(
    model: string,
    body: unknown,
    onResponse: (response: Record<string, unknown>) => void,
    signal?: AbortSignal,
  ): Promise<Record<string, unknown>> {
    return this.generateInternal(model, body, onResponse, signal);
  }

  private async generateInternal(
    model: string,
    body: unknown,
    onResponse?: (response: Record<string, unknown>) => void,
    signal?: AbortSignal,
  ): Promise<Record<string, unknown>> {
    const normalized = normalizeGeminiRequest(model, body);
    const template = await this.session.captureTemplate(normalized.model);
    const generation = normalized.generationConfig;
    const makeBody = async (contents: readonly AistudioContent[], tools: unknown[][] | null, sanitizePlainText: boolean): Promise<string> => {
      const snapshot = await this.session.generateSnapshot(contents);
      return rewriteWireBody(template.body, {
        model: normalized.model,
        contents,
        snapshot,
        systemInstruction: normalized.systemInstruction,
        tools,
        safetySettings: normalized.safetySettings,
        generationConfig: generation,
        ...(typeof generation.temperature === "number" ? { temperature: generation.temperature } : {}),
        ...(typeof generation.topP === "number" ? { topP: generation.topP } : {}),
        ...(typeof generation.topK === "number" ? { topK: generation.topK } : {}),
        ...(typeof generation.maxOutputTokens === "number" ? { maxTokens: generation.maxOutputTokens } : {}),
        sanitizePlainText,
        disableThinking: normalized.model.toLowerCase().includes("gemini-2.5-flash-image"),
      });
    };
    const replay = async (wireBody: string): Promise<{ status: number; body: string }> => {
      if (!onResponse) return this.session.replay(wireBody);
      const parser = new IncrementalAIStudioParser();
      return this.session.replayStream(wireBody, raw => {
        for (const chunk of parser.feed(raw)) {
          const parsed = parseAIStudioResponse(JSON.stringify(chunk));
          const candidate = parsed.candidate;
          if (candidate.text || candidate.thinking || candidate.parts.some(part => "functionCall" in part || "inlineData" in part)) {
            onResponse(toGeminiResponse(parsed));
          }
        }
      }, signal);
    };
    let response = await replay(await makeBody(normalized.contents, normalized.tools, false));
    if (functionResponseRejected(response.status, response.body) && hasFunctionResponse(normalized.contents)) {
      const flattened = flattenFunctionContents(normalized.contents);
      response = await replay(await makeBody(flattened, normalized.tools, true));
      if (functionResponseRejected(response.status, response.body)) {
        response = await replay(await makeBody(flattened, null, true));
      }
    }
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`AI Studio upstream returned HTTP ${response.status}: ${response.body.slice(0, 500)}`);
    }
    return toGeminiResponse(parseAIStudioResponse(response.body));
  }

  async inspectAccountProfile(): Promise<AccountProfile> {
    return this.session.inspectAccountProfile();
  }

  async close(): Promise<void> {
    await this.session.close();
  }
}
