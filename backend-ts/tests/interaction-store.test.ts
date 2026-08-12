import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { InteractionStore, type StoredInteraction } from "../src/interactions/store.js";

function record(id: string, created: string, previous?: string): StoredInteraction {
  return {
    interaction: {
      id,
      created,
      steps: [{ type: "user_input", content: [{ type: "text", text: id }] }],
    },
    previous_interaction_id: previous ?? null,
  };
}

test("keeps only the newest configured number of interactions", async (t) => {
  const directory = await mkdtemp(join(tmpdir(), "aistudio-interaction-store-"));
  t.after(async () => { await rm(directory, { recursive: true, force: true }); });
  const store = new InteractionStore(directory, 0, 3);

  await store.save("old_0", record("old_0", "2026-08-01T00:00:00.000Z"));
  await store.save("old_1", record("old_1", "2026-08-02T00:00:00.000Z"));
  await store.save("chain_a", record("chain_a", "2026-08-03T00:00:00.000Z"));
  await store.save("chain_b", record("chain_b", "2026-08-04T00:00:00.000Z", "chain_a"));
  await store.save("chain_c", record("chain_c", "2026-08-05T00:00:00.000Z", "chain_b"));

  const records = await store.list();
  assert.deepEqual(records.map(item => item.interaction?.id), ["chain_c", "chain_b", "chain_a"]);
  assert.equal(await store.get("old_0"), undefined);
  assert.equal(await store.get("old_1"), undefined);
  assert.deepEqual((await store.loadHistorySteps("chain_c")).map(step => {
    if (step.type !== "user_input") return undefined;
    const content = step.content[0];
    return content?.type === "text" ? content.text : undefined;
  }), ["chain_a", "chain_b", "chain_c"]);
});
