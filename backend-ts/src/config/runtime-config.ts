import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { runtimeRoot, settings } from "../config.js";

export const MIN_BODY_LIMIT_BYTES = 1_024;
export const MAX_BODY_LIMIT_BYTES = 128 * 1024 * 1024;
const BODY_LIMIT_ENV_NAME = "AISTUDIO_API_BODY_LIMIT_BYTES";
const BODY_LIMIT_LINE = new RegExp(`^\\s*${BODY_LIMIT_ENV_NAME}\\s*=\\s*["']?(\\d+)["']?\\s*(?:#.*)?$`, "mu");

export interface RuntimeConfigView {
  readonly effective_body_limit_bytes: number;
  readonly configured_body_limit_bytes: number;
  readonly body_limit_max_bytes: number;
  readonly restart_required: boolean;
}

export function normalizeBodyLimit(value: unknown): number {
  if (typeof value !== "number" || !Number.isSafeInteger(value)) {
    throw new TypeError("body_limit_bytes 必须是整数");
  }
  if (value < MIN_BODY_LIMIT_BYTES || value > MAX_BODY_LIMIT_BYTES) {
    throw new RangeError(`body_limit_bytes 必须在 ${MIN_BODY_LIMIT_BYTES} 到 ${MAX_BODY_LIMIT_BYTES} 字节之间`);
  }
  return value;
}

export class RuntimeConfigStore {
  private readonly envFile: string;
  private readonly effectiveBodyLimitBytes: number;

  constructor(envFile = join(runtimeRoot, ".env"), effectiveBodyLimitBytes = settings.bodyLimitBytes) {
    this.envFile = envFile;
    this.effectiveBodyLimitBytes = effectiveBodyLimitBytes;
  }

  async read(): Promise<RuntimeConfigView> {
    const configured = await this.readConfiguredBodyLimit();
    return {
      effective_body_limit_bytes: this.effectiveBodyLimitBytes,
      configured_body_limit_bytes: configured ?? this.effectiveBodyLimitBytes,
      body_limit_max_bytes: MAX_BODY_LIMIT_BYTES,
      restart_required: configured !== undefined && configured !== this.effectiveBodyLimitBytes,
    };
  }

  async saveBodyLimit(value: number): Promise<RuntimeConfigView> {
    const bodyLimitBytes = normalizeBodyLimit(value);
    let source = "";
    try {
      source = await readFile(this.envFile, "utf8");
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code;
      if (code !== "ENOENT") throw error;
    }

    const line = `${BODY_LIMIT_ENV_NAME}=${bodyLimitBytes}`;
    const next = BODY_LIMIT_LINE.test(source)
      ? source.replace(BODY_LIMIT_LINE, line)
      : `${source}${source.length === 0 || source.endsWith("\n") ? "" : "\n"}${line}\n`;
    await mkdir(dirname(this.envFile), { recursive: true });
    await writeFile(this.envFile, next, "utf8");
    return this.read();
  }

  private async readConfiguredBodyLimit(): Promise<number | undefined> {
    let source: string;
    try {
      source = await readFile(this.envFile, "utf8");
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") return undefined;
      throw error;
    }
    const match = BODY_LIMIT_LINE.exec(source);
    if (!match?.[1]) return undefined;
    const value = Number.parseInt(match[1], 10);
    return Number.isSafeInteger(value) && value >= MIN_BODY_LIMIT_BYTES && value <= MAX_BODY_LIMIT_BYTES ? value : undefined;
  }
}
