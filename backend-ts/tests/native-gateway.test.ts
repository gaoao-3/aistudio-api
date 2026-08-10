import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { flattenFunctionContents, functionResponseRejected } from "../src/gateway/native-gateway.js";

describe("native gateway tool-result fallback", () => {
  it("recognizes the AI Studio native function response rejection", () => {
    assert.equal(functionResponseRejected(400, "Invalid value (), Unexpected list for single non-message field."), true);
    assert.equal(functionResponseRejected(200, "Invalid value"), false);
  });

  it("preserves the whole tool timeline as textual context", () => {
    assert.deepEqual(flattenFunctionContents([
      { role: "user", parts: [{ text: "weather?" }] },
      { role: "model", parts: [{ functionCall: ["get_weather", { city: "上海" }, "call_1"] }] },
      { role: "user", parts: [{ functionResponse: ["get_weather", { temperature: "28C" }, "call_1"] }] },
    ]), [{
      role: "user",
      parts: [{ text: "weather?\n\n[assistant tool call: get_weather]\n{\"city\":\"上海\"}\n\n[tool result: get_weather]\n{\"temperature\":\"28C\"}" }],
    }]);
  });
});
