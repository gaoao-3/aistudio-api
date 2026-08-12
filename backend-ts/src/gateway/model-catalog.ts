import { createHash } from "node:crypto";
import { NativeBrowserSession } from "./browser-session.js";

const LIST_MODELS_URL = "https://alkalimakersuite-pa.clients6.google.com/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/ListModels";
const ORIGIN = "https://aistudio.google.com";

function signature(timestamp: number, value: string, label: string): string {
  const digest = createHash("sha1").update(`${timestamp} ${value} ${ORIGIN}`).digest("hex");
  return `${label} ${timestamp}_${digest}`;
}

function valueAt(row: unknown[], index: number, fallback: unknown): unknown {
  return row[index] ?? fallback;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function supportsPublicModelOperations(model: unknown): model is Record<string, unknown> {
  if (!isRecord(model) || !Array.isArray(model.supportedGenerationMethods)) return isRecord(model);
  return model.supportedGenerationMethods.includes("generateContent");
}

export function filterSupportedModelCatalog(models: readonly Record<string, unknown>[]): Record<string, unknown>[] {
  return models.filter(supportsPublicModelOperations);
}

export function parseModelCatalog(payload: unknown): Record<string, unknown>[] {
  if (!Array.isArray(payload) || !Array.isArray(payload[0])) return [];
  return payload[0].flatMap(row => {
    if (!Array.isArray(row) || typeof row[0] !== "string" || !row[0]) return [];
    const name = row[0];
    const display = valueAt(row, 3, name.replace(/^models\//u, ""));
    return [{
      name,
      displayName: typeof display === "string" ? display : name.replace(/^models\//u, ""),
      description: typeof row[4] === "string" ? row[4] : "",
      inputTokenLimit: typeof row[5] === "number" ? row[5] : 0,
      outputTokenLimit: typeof row[6] === "number" ? row[6] : 0,
      supportedGenerationMethods: Array.isArray(row[7]) ? row[7] : [],
    }];
  });
}

export async function fetchModelCatalog(session: NativeBrowserSession): Promise<Record<string, unknown>[]> {
  const template = await session.captureTemplate("model-catalog");
  const apiKey = template.headers["x-goog-api-key"];
  if (!apiKey) throw new Error("Active AI Studio browser session did not expose x-goog-api-key");
  const byName = new Map((await session.cookies()).map(cookie => [cookie.name, cookie.value]));
  const timestamp = Math.floor(Date.now() / 1000);
  const labels = [
    ["SAPISID", "SAPISIDHASH"],
    ["__Secure-1PSID", "SAPISID1PHASH"],
    ["__Secure-3PSID", "SAPISID3PHASH"],
  ] as const;
  const authorization = labels.map(([name, label]) => {
    const value = byName.get(name);
    if (!value) throw new Error(`Active browser session is missing ${name}`);
    return signature(timestamp, value, label);
  }).join(" ");
  const response = await session.pageFetch(LIST_MODELS_URL, {
    "content-type": "application/json+protobuf",
    authorization,
    "x-user-agent": "grpc-web-javascript/0.1",
    "x-goog-api-key": apiKey,
    "x-goog-authuser": "0",
  }, "[]");
  if (response.status !== 200) throw new Error(`ListModels returned HTTP ${response.status}`);
  return parseModelCatalog(JSON.parse(response.body));
}
