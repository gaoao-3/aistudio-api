import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { it } from "node:test";
import { StatsStore } from "../src/stats/stats-store.js";

it("persists native gateway usage without discarding prior counters", async () => {
  const directory = await mkdtemp(join(tmpdir(), "aistudio-stats-"));
  try {
    const path = join(directory, "stats.json");
    const store = new StatsStore(path);
    await store.record("model-a", "success", { promptTokenCount: 3, candidatesTokenCount: 2, thoughtsTokenCount: 4, totalTokenCount: 9 });
    await store.record("model-a", "errors");
    const snapshot = await new StatsStore(path).snapshot();
    assert.deepEqual(snapshot.models["model-a"], {
      requests: 2, success: 1, rate_limited: 0, errors: 1,
      prompt_tokens: 3, completion_tokens: 6, total_tokens: 9,
      last_used: snapshot.models["model-a"]?.last_used,
    });
    assert.equal(snapshot.totals.requests, 2);
    // 按天统计：两次记录落在同一个 UTC 日期桶
    const dates = Object.keys(snapshot.daily);
    assert.equal(dates.length, 1);
    const dayUsage = snapshot.daily[dates[0]!]?.["model-a"];
    assert.deepEqual(dayUsage, { requests: 2, prompt_tokens: 3, completion_tokens: 6, total_tokens: 9 });
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

it("loads legacy stats file (top-level model map) and upgrades on next record", async () => {
  const directory = await mkdtemp(join(tmpdir(), "aistudio-stats-"));
  try {
    const path = join(directory, "stats.json");
    const { writeFile } = await import("node:fs/promises");
    await writeFile(path, JSON.stringify({
      "model-b": { requests: 5, success: 5, rate_limited: 0, errors: 0, prompt_tokens: 10, completion_tokens: 20, total_tokens: 30, last_used: "2026-01-01T00:00:00.000Z" },
    }));
    const store = new StatsStore(path);
    const before = await store.snapshot();
    assert.equal(before.models["model-b"]?.total_tokens, 30);
    assert.deepEqual(before.daily, {});
    await store.record("model-b", "success", { promptTokenCount: 1, candidatesTokenCount: 1, totalTokenCount: 2 });
    const after = await new StatsStore(path).snapshot();
    assert.equal(after.models["model-b"]?.requests, 6);
    assert.equal(after.models["model-b"]?.total_tokens, 32);
    assert.equal(Object.keys(after.daily).length, 1);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
