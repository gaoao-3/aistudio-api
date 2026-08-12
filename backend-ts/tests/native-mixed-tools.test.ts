import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { partitionMixedTools } from "../src/gateway/native-gateway.js";
import { buildToolsFromNames } from "../src/gateway/wire-codec.js";

describe("native mixed tool compatibility", () => {
  it("separates AI Studio built-ins from custom function declarations", () => {
    const builtin = buildToolsFromNames(["google_search"], "gemini-3.1-pro-preview")[0]!;
    const custom = [null, [["record"]]];
    assert.deepEqual(partitionMixedTools([builtin, custom]), {
      builtins: [builtin],
      functions: [custom],
    });
  });
});
