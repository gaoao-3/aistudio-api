import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { buildToolsFromNames, decodeContents, encodeContent, rewriteWireBody } from "../src/gateway/wire-codec.js";

describe("AI Studio wire codec", () => {
  it("rewrites text requests and sanitizes captured structured output", () => {
    const original = '["models/original",[[[[null,"old"]],"user"]],null,[null,["6"],null,128,0.5,0.8,16,"application/json",[6]],"snapshot",null,null]';
    const parsed = JSON.parse(rewriteWireBody(original, {
      model: "gemma-4-31b-it",
      prompt: "hello",
      snapshot: "fresh",
      maxTokens: 256,
      temperature: 0.2,
      topP: 0.9,
      topK: 32,
    })) as unknown[];
    assert.equal(parsed[0], "models/gemma-4-31b-it");
    assert.equal((parsed[1] as unknown[][])[0]?.[1], "user");
    assert.equal((parsed[3] as unknown[])[3], 256);
    assert.equal((parsed[3] as unknown[])[7], "text/plain");
    assert.equal((parsed[3] as unknown[])[8], null);
    assert.deepEqual((parsed[3] as unknown[])[16], [1, null, null, 3]);
    assert.deepEqual(parsed[2], [7, 8, 9, 10].map(category => [null, null, category, 5]));
  });

  it("preserves tool ids and thought signatures", () => {
    const content = {
      role: "model",
      parts: [{ functionCall: ["weather", { city: "上海" }, "call_1"] as const, thoughtSignature: "sig" }],
    };
    const decoded = decodeContents([encodeContent(content)]);
    assert.deepEqual(decoded[0]?.parts[0]?.functionCall, ["weather", [[["city", [null, null, "上海"]]]], "call_1"]);
    assert.equal(decoded[0]?.parts[0]?.thoughtSignature, "sig");
  });

  it("filters browser built-ins when custom function declarations are present", () => {
    const original = '["models/original",[[[[null,"old"]],"user"]],null,[],"snapshot",null,null]';
    const custom = [null, [["weather"]]];
    const parsed = JSON.parse(rewriteWireBody(original, {
      model: "gemini-3.5-flash",
      prompt: "hello",
      tools: [buildToolsFromNames(["google_search"], "gemini-3.5-flash")[0]!, custom],
    })) as unknown[];
    assert.deepEqual(parsed[6], [custom]);
    assert.deepEqual(parsed[13], [[null, null, "Asia/Shanghai"]]);
  });

  it("uses the image generation wire defaults", () => {
    const original = JSON.stringify(["models/original", [], [[null, null, 7, 4]], Array(27).fill(null), "snapshot", null, null]);
    const parsed = JSON.parse(rewriteWireBody(original, {
      model: "gemini-3.1-flash-image-preview",
      prompt: "draw",
      tools: buildToolsFromNames(["google_search", "image_search"], "gemini-3.1-flash-image-preview"),
    })) as unknown[];
    assert.equal(parsed[2], null);
    assert.deepEqual((parsed[3] as unknown[])[14], [2]);
    assert.deepEqual((parsed[3] as unknown[])[16], [1, null, null, 4]);
    assert.deepEqual(parsed[6], [[null, null, null, [null, [[], []]]]]);
  });

  it("does not send thinking config to image models that reject it", () => {
    const original = JSON.stringify(["models/original", [], null, Array(27).fill(null), "snapshot", null, null]);
    const parsed = JSON.parse(rewriteWireBody(original, {
      model: "gemini-2.5-flash-image",
      prompt: "draw",
      disableThinking: true,
    })) as unknown[];
    assert.equal((parsed[3] as unknown[])[16], null);
  });
});
