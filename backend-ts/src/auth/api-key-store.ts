import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { settings } from "../config.js";
import { AsyncMutex, readJsonFile, writeJsonFile } from "../storage/atomic-json.js";

export interface ApiKeyPermissions {
  readonly builtin_tools: boolean;
}

export const DEFAULT_API_KEY_PERMISSIONS: ApiKeyPermissions = {
  builtin_tools: true,
};

interface ApiKeyRecord {
  readonly id: string;
  name: string;
  readonly prefix: string;
  readonly hash: string;
  readonly created_at: string;
  last_used: string | null;
  permissions: ApiKeyPermissions;
}

export type ApiKeySummary = Omit<ApiKeyRecord, "hash">;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validRecord(value: unknown): value is ApiKeyRecord {
  if (!isRecord(value)) return false;
  return ["id", "name", "prefix", "hash", "created_at"].every((key) => typeof value[key] === "string");
}

function normalizePermissions(value: unknown): ApiKeyPermissions {
  if (!isRecord(value)) return { ...DEFAULT_API_KEY_PERMISSIONS };
  if (typeof value.builtin_tools === "boolean") return { builtin_tools: value.builtin_tools };
  // Migrate the short-lived per-tool format to the intended single switch.
  const legacyNames = ["google_search", "code_execution", "google_maps", "url_context"];
  return { builtin_tools: !legacyNames.some((name) => value[name] === false) };
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

  async create(name: string, permissions: ApiKeyPermissions = DEFAULT_API_KEY_PERMISSIONS): Promise<ApiKeySummary & { key: string }> {
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
        permissions: normalizePermissions(permissions),
      };
      records.push(record);
      await writeJsonFile(this.path, { keys: records });
      return { ...publicRecord(record), key };
    });
  }

  async update(
    id: string,
    input: { readonly name?: string; readonly permissions?: ApiKeyPermissions },
  ): Promise<ApiKeySummary | undefined> {
    return this.mutex.run(async () => {
      const records = await this.load();
      const record = records.find((item) => item.id === id);
      if (!record) return undefined;
      if (input.name !== undefined) record.name = input.name;
      if (input.permissions !== undefined) record.permissions = normalizePermissions(input.permissions);
      await writeJsonFile(this.path, { keys: records });
      return publicRecord(record);
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
    return (await this.authenticate(key)) !== undefined;
  }

  async authenticate(key: string): Promise<ApiKeySummary | undefined> {
    return this.mutex.run(async () => {
      const candidate = Buffer.from(hashKey(key), "hex");
      const records = await this.load();
      const record = records.find((item) => {
        const expected = Buffer.from(item.hash, "hex");
        return expected.length === candidate.length && timingSafeEqual(expected, candidate);
      });
      if (!record) return undefined;
      const lastUsed = record.last_used ? Date.parse(record.last_used) : 0;
      if (!lastUsed || Date.now() - lastUsed >= 60_000) {
        record.last_used = new Date().toISOString();
        await writeJsonFile(this.path, { keys: records });
      }
      return publicRecord(record);
    });
  }

  private async load(): Promise<ApiKeyRecord[]> {
    const payload = await readJsonFile(this.path);
    const source = isRecord(payload) ? payload.keys : payload;
    if (!Array.isArray(source)) return [];
    return source.filter(validRecord).map((record) => ({
      ...record,
      last_used: typeof record.last_used === "string" ? record.last_used : null,
      permissions: normalizePermissions(record.permissions),
    }));
  }
}
