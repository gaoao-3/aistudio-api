import { settings } from "../config.js";
import { AsyncMutex, readJsonFile, writeJsonFile } from "../storage/atomic-json.js";

export interface ModelStats {
  requests: number;
  success: number;
  rate_limited: number;
  errors: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  last_used: string | null;
}

export interface DailyModelUsage {
  requests: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

/** 按天用量：date(YYYY-MM-DD, UTC) -> model -> 用量 */
export type DailyUsage = Record<string, Record<string, DailyModelUsage>>;

/** 按天数据保留天数 */
const DAILY_RETENTION_DAYS = 90;

function emptyStats(): ModelStats {
  return { requests: 0, success: 0, rate_limited: 0, errors: 0, prompt_tokens: 0, completion_tokens: 0, total_tokens: 0, last_used: null };
}

function emptyDaily(): DailyModelUsage {
  return { requests: 0, prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toDailyUsage(value: unknown): DailyModelUsage {
  const raw = isRecord(value) ? value : {};
  return {
    requests: Number(raw.requests ?? 0),
    prompt_tokens: Number(raw.prompt_tokens ?? 0),
    completion_tokens: Number(raw.completion_tokens ?? 0),
    total_tokens: Number(raw.total_tokens ?? 0),
  };
}

export class StatsStore {
  private readonly mutex = new AsyncMutex();
  private models: Record<string, ModelStats> | undefined;
  private daily: DailyUsage | undefined;

  constructor(private readonly file = settings.statsFile) {}

  async snapshot(): Promise<{ models: Record<string, ModelStats>; totals: Omit<ModelStats, "last_used">; daily: DailyUsage }> {
    await this.ensureLoaded();
    const models = structuredClone(this.models ?? {});
    const totals = Object.values(models).reduce((sum, item) => ({
      requests: sum.requests + item.requests,
      success: sum.success + item.success,
      rate_limited: sum.rate_limited + item.rate_limited,
      errors: sum.errors + item.errors,
      prompt_tokens: sum.prompt_tokens + item.prompt_tokens,
      completion_tokens: sum.completion_tokens + item.completion_tokens,
      total_tokens: sum.total_tokens + item.total_tokens,
    }), { requests: 0, success: 0, rate_limited: 0, errors: 0, prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 });
    return { models, totals, daily: structuredClone(this.daily ?? {}) };
  }

  async record(model: string, event: "success" | "rate_limited" | "errors", usage?: Record<string, unknown>): Promise<void> {
    await this.mutex.run(async () => {
      await this.ensureLoaded();
      const now = new Date();
      const stats = this.models![model] ??= emptyStats();
      stats.requests += 1;
      stats[event] += 1;
      stats.last_used = now.toISOString();

      const date = now.toISOString().slice(0, 10);
      const dayBucket = (this.daily![date] ??= {});
      const dayUsage = (dayBucket[model] ??= emptyDaily());
      dayUsage.requests += 1;

      if (event === "success" && usage) {
        const prompt = Number(usage.promptTokenCount ?? usage.total_input_tokens ?? usage.prompt_tokens ?? 0);
        const visible = Number(usage.candidatesTokenCount ?? usage.completion_tokens ?? 0);
        const thought = Number(usage.thoughtsTokenCount ?? usage.total_thought_tokens ?? 0);
        const total = Number(usage.totalTokenCount ?? usage.total_tokens ?? prompt + visible + thought);
        const safePrompt = Number.isFinite(prompt) ? prompt : 0;
        const safeCompletion = Number.isFinite(visible + thought) ? visible + thought : 0;
        const safeTotal = Number.isFinite(total) ? total : 0;
        stats.prompt_tokens += safePrompt;
        stats.completion_tokens += safeCompletion;
        stats.total_tokens += safeTotal;
        dayUsage.prompt_tokens += safePrompt;
        dayUsage.completion_tokens += safeCompletion;
        dayUsage.total_tokens += safeTotal;
      }

      this.pruneDaily(now);
      await writeJsonFile(this.file, { models: this.models, daily: this.daily });
    });
  }

  /** 剪除超过保留期的按天数据（YYYY-MM-DD 字典序即时间序） */
  private pruneDaily(now: Date): void {
    if (!this.daily) return;
    const cutoff = new Date(now.getTime() - DAILY_RETENTION_DAYS * 86400000).toISOString().slice(0, 10);
    for (const date of Object.keys(this.daily)) {
      if (date < cutoff) delete this.daily[date];
    }
  }

  private async ensureLoaded(): Promise<void> {
    if (this.models && this.daily) return;
    const raw = await readJsonFile(this.file);
    this.models = {};
    this.daily = {};
    if (!isRecord(raw)) return;

    // 兼容两种文件格式：
    //   旧格式（顶层即模型映射）与 新格式 { models, daily }
    const newFormat = isRecord(raw.models) && isRecord(raw.daily);
    const source = (newFormat ? raw.models : raw) as Record<string, unknown>;
    for (const [model, value] of Object.entries(source)) {
      if (!isRecord(value)) continue;
      this.models[model] = {
        requests: Number(value.requests ?? 0),
        success: Number(value.success ?? 0),
        rate_limited: Number(value.rate_limited ?? 0),
        errors: Number(value.errors ?? 0),
        prompt_tokens: Number(value.prompt_tokens ?? 0),
        completion_tokens: Number(value.completion_tokens ?? 0),
        total_tokens: Number(value.total_tokens ?? 0),
        last_used: typeof value.last_used === "string" ? value.last_used : null,
      };
    }

    const dailyRaw = isRecord(raw.daily) ? raw.daily : {};
    for (const [date, perModel] of Object.entries(dailyRaw)) {
      if (!isRecord(perModel)) continue;
      const bucket: Record<string, DailyModelUsage> = {};
      for (const [model, value] of Object.entries(perModel)) {
        bucket[model] = toDailyUsage(value);
      }
      this.daily[date] = bucket;
    }
  }
}
