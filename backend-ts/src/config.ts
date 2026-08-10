import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

function findProjectRoot(start: string): string {
  let current = resolve(start);
  for (;;) {
    if (existsSync(join(current, "package.json")) && existsSync(join(current, "backend-ts")) && existsSync(join(current, "frontend"))) {
      return current;
    }
    const parent = dirname(current);
    if (parent === current) throw new Error(`Unable to locate project root from ${start}`);
    current = parent;
  }
}

const moduleDir = dirname(fileURLToPath(import.meta.url));
export const projectRoot = resolve(process.env.AISTUDIO_PROJECT_ROOT ?? findProjectRoot(moduleDir));
export const runtimeRoot = resolve(process.env.AISTUDIO_RUNTIME_ROOT ?? projectRoot);
dotenv.config({ path: join(runtimeRoot, ".env"), quiet: true });

function intEnv(name: string, fallback: number): number {
  const raw = process.env[name];
  if (!raw) return fallback;
  const value = Number.parseInt(raw, 10);
  return Number.isFinite(value) ? value : fallback;
}

function boolEnv(name: string, fallback: boolean): boolean {
  const raw = process.env[name]?.trim().toLowerCase();
  if (!raw) return fallback;
  return !["0", "false", "no", "off"].includes(raw);
}

function envKeys(): Set<string> {
  const keys = new Set<string>();
  for (const name of ["AISTUDIO_API_KEY", "AISTUDIO_API_KEYS"]) {
    for (const value of (process.env[name] ?? "").split(/[\n,]/u)) {
      const key = value.trim();
      if (key) keys.add(key);
    }
  }
  return keys;
}

function rotationModeEnv(): "round_robin" | "lru" | "least_rl" {
  const value = process.env.AISTUDIO_ACCOUNT_ROTATION_MODE?.trim();
  return value === "lru" || value === "least_rl" ? value : "round_robin";
}

export const settings = {
  host: process.env.AISTUDIO_HOST ?? "0.0.0.0",
  port: intEnv("AISTUDIO_PORT", 8000),
  browserHeadless: boolEnv("AISTUDIO_BROWSER_HEADLESS", true),
  browserTimeoutMs: intEnv("AISTUDIO_BROWSER_TIMEOUT_MS", 120_000),
  bodyLimitBytes: Math.max(1_024, intEnv("AISTUDIO_API_BODY_LIMIT_BYTES", 32 * 1024 * 1024)),
  loginTimeoutMs: intEnv("AISTUDIO_LOGIN_TIMEOUT_MS", 10 * 60 * 1000),
  loginSessionRetentionMs: intEnv("AISTUDIO_LOGIN_SESSION_RETENTION_MS", 10 * 60 * 1000),
  authFile: process.env.AISTUDIO_AUTH_FILE ? resolve(process.env.AISTUDIO_AUTH_FILE) : undefined,
  proxyUrl: process.env.AISTUDIO_PROXY_URL ?? process.env.HTTPS_PROXY ?? process.env.HTTP_PROXY,
  upstreamApiKey: process.env.AISTUDIO_UPSTREAM_API_KEY ?? "",
  upstreamApiKeyExplicit: Boolean(process.env.AISTUDIO_UPSTREAM_API_KEY?.trim()),
  embeddingBaseUrl: (process.env.AISTUDIO_EMBEDDING_BASE_URL ?? "https://generativelanguage.googleapis.com/v1beta").replace(/\/$/u, ""),
  staticDir: join(projectRoot, "static"),
  apiKeysFile: resolve(process.env.AISTUDIO_APIKEYS_FILE ?? join(runtimeRoot, "data", "apikeys.json")),
  interactionsDir: resolve(process.env.AISTUDIO_INTERACTIONS_DIR ?? join(runtimeRoot, "data", "interactions")),
  accountsDir: resolve(process.env.AISTUDIO_ACCOUNTS_DIR ?? join(runtimeRoot, "data", "accounts")),
  statsFile: resolve(process.env.AISTUDIO_STATS_FILE ?? join(runtimeRoot, "data", "stats.json")),
  interactionsTtlSeconds: intEnv("AISTUDIO_INTERACTIONS_TTL_SECONDS", 604800),
  accountRotationMode: rotationModeEnv(),
  accountCooldownSeconds: Math.max(0, intEnv("AISTUDIO_ACCOUNT_COOLDOWN_SECONDS", 60)),
  accountMaxRetries: Math.max(1, intEnv("AISTUDIO_ACCOUNT_MAX_RETRIES", 3)),
  accountProfileRefreshMs: Math.max(60_000, intEnv("AISTUDIO_ACCOUNT_PROFILE_REFRESH_MS", 6 * 60 * 60 * 1000)),
  modelDefaultsFile: resolve(process.env.AISTUDIO_MODEL_DEFAULTS_FILE ?? join(runtimeRoot, "config.yaml")),
  configuredApiKeys: envKeys(),
};
