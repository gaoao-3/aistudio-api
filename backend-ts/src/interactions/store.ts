import { mkdir, readdir, readFile, rm, stat } from "node:fs/promises";
import { join } from "node:path";
import { settings } from "../config.js";
import { AsyncMutex, writeJsonFile } from "../storage/atomic-json.js";
import type { InteractionStep } from "./types.js";

export interface StoredInteraction {
  readonly previous_interaction_id?: string | null;
  readonly interaction?: Record<string, unknown> & { steps?: readonly InteractionStep[]; created?: string };
  readonly [key: string]: unknown;
}

function safeId(id: string): boolean {
  return /^[A-Za-z0-9_-]+$/u.test(id);
}

export class InteractionStore {
  private readonly mutex = new AsyncMutex();

  constructor(
    readonly directory = settings.interactionsDir,
    readonly ttlSeconds = settings.interactionsTtlSeconds,
  ) {}

  async save(id: string, record: StoredInteraction): Promise<void> {
    if (!safeId(id)) throw new TypeError(`Invalid interaction id: ${id}`);
    await this.mutex.run(async () => {
      await mkdir(this.directory, { recursive: true });
      await this.cleanup();
      await writeJsonFile(this.path(id), record);
    });
  }

  async get(id: string): Promise<StoredInteraction | undefined> {
    if (!safeId(id)) return undefined;
    try {
      const value = JSON.parse(await readFile(this.path(id), "utf8")) as unknown;
      return typeof value === "object" && value !== null && !Array.isArray(value)
        ? value as StoredInteraction
        : undefined;
    } catch {
      return undefined;
    }
  }

  async list(): Promise<StoredInteraction[]> {
    return this.mutex.run(async () => {
      await mkdir(this.directory, { recursive: true });
      await this.cleanup();
      const records: StoredInteraction[] = [];
      for (const entry of await readdir(this.directory, { withFileTypes: true })) {
        if (!entry.isFile() || !entry.name.endsWith(".json")) continue;
        const record = await this.get(entry.name.slice(0, -5));
        if (record) records.push(record);
      }
      return records.sort((left, right) => String(right.interaction?.created ?? "").localeCompare(String(left.interaction?.created ?? "")));
    });
  }

  async delete(id: string): Promise<boolean> {
    if (!safeId(id)) return false;
    try {
      await rm(this.path(id));
      return true;
    } catch {
      return false;
    }
  }

  async loadHistorySteps(id: string): Promise<InteractionStep[]> {
    const chain: StoredInteraction[] = [];
    const seen = new Set<string>();
    let current: string | undefined = id;
    while (current && !seen.has(current)) {
      seen.add(current);
      const record = await this.get(current);
      if (!record) throw new Error(`Interaction not found: ${current}`);
      chain.push(record);
      current = typeof record.previous_interaction_id === "string" ? record.previous_interaction_id : undefined;
    }
    return chain.reverse().flatMap((record) => [...(record.interaction?.steps ?? [])]);
  }

  private path(id: string): string {
    return join(this.directory, `${id}.json`);
  }

  private async cleanup(): Promise<void> {
    if (this.ttlSeconds === 0) return;
    const cutoff = Date.now() - this.ttlSeconds * 1000;
    let entries;
    try {
      entries = await readdir(this.directory, { withFileTypes: true });
    } catch {
      return;
    }
    await Promise.all(entries.filter((entry) => entry.isFile() && entry.name.endsWith(".json")).map(async (entry) => {
      const path = join(this.directory, entry.name);
      try {
        if ((await stat(path)).mtimeMs < cutoff) await rm(path);
      } catch {
        // Ignore races and unreadable files.
      }
    }));
  }
}

