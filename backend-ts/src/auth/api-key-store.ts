import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { settings } from "../config.js";
import { AsyncMutex, readJsonFile, writeJsonFile } from "../storage/atomic-json.js";

interface ApiKeyRecord {
  readonly id: string;
  readonly name: string;
  readonly prefix: string;
  readonly hash: string;
  readonly created_at: string;
  last_used: string | null;
}

export type ApiKeySummary = Omit<ApiKeyRecord, "hash">;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validRecord(value: unknown): value is ApiKeyRecord {
  if (!isRecord(value)) return false;
  return ["id", "name", "prefix", "hash", "created_at"].every((key) => typeof value[key] === "string");
}

function hashKey(key: string): string {
  return createHash("sha256").update(key, "utf8").digest("hex");
}

function publicRecord(record: ApiKeyRecord): ApiKeySummary {
  const { hash: _hash, ...summary } = record;
  return summary;
}

export class ApiKeyStore {
  private readonly mutex = new AsyncMutex();

  constructor(readonly path = settings.apiKeysFile) {}

  async list(): Promise<ApiKeySummary[]> {
    return this.mutex.run(async () => (await this.load()).map(publicRecord));
  }

  async hasKeys(): Promise<boolean> {
    return this.mutex.run(async () => (await this.load()).length > 0);
  }

  async create(name: string): Promise<ApiKeySummary & { key: string }> {
    return this.mutex.run(async () => {
      const records = await this.load();
      const key = `ask_${randomBytes(16).toString("hex")}`;
      let id: string;
      do id = `ak_${randomBytes(8).toString("hex")}`;
      while (records.some((record) => record.id === id));
      const record: ApiKeyRecord = {
        id,
        name,
        prefix: key.slice(0, 10),
        hash: hashKey(key),
        created_at: new Date().toISOString(),
        last_used: null,
      };
      records.push(record);
      await writeJsonFile(this.path, { keys: records });
      return { ...publicRecord(record), key };
    });
  }

  async delete(id: string): Promise<boolean> {
    return this.mutex.run(async () => {
      const records = await this.load();
      const index = records.findIndex((record) => record.id === id);
      if (index < 0) return false;
      records.splice(index, 1);
      await writeJsonFile(this.path, { keys: records });
      return true;
    });
  }

  async verify(key: string): Promise<boolean> {
    return this.mutex.run(async () => {
      const candidate = Buffer.from(hashKey(key), "hex");
      const records = await this.load();
      const record = records.find((item) => {
        const expected = Buffer.from(item.hash, "hex");
        return expected.length === candidate.length && timingSafeEqual(expected, candidate);
      });
      if (!record) return false;
      const lastUsed = record.last_used ? Date.parse(record.last_used) : 0;
      if (!lastUsed || Date.now() - lastUsed >= 60_000) {
        record.last_used = new Date().toISOString();
        await writeJsonFile(this.path, { keys: records });
      }
      return true;
    });
  }

  private async load(): Promise<ApiKeyRecord[]> {
    const payload = await readJsonFile(this.path);
    const source = isRecord(payload) ? payload.keys : payload;
    if (!Array.isArray(source)) return [];
    return source.filter(validRecord).map((record) => ({
      ...record,
      last_used: typeof record.last_used === "string" ? record.last_used : null,
    }));
  }
}
