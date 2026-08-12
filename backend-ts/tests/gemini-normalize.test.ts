import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { encodeSchemaToWire, normalizeGeminiRequest } from "../src/gateway/gemini-normalize.js";

describe("Gemini request normalization", () => {
  it("normalizes tool declarations and preserves tool turn ids", () => {
    const result = normalizeGeminiRequest("gemini-3.5-flash", {
      contents: [
        { role: "model", parts: [{ functionCall: { name: "weather", args: { city: "上海" }, id: "call_1" }, thoughtSignature: "sig" }] },
        { role: "user", parts: [{ functionResponse: { name: "weather", response: { value: 24 }, id: "call_1" } }] },
      ],
      tools: [{ functionDeclarations: [{ name: "weather", parameters: { type: "object", properties: { city: { type: "string" } }, required: ["city"] } }] }],
    });
    assert.deepEqual(result.contents[0]?.parts[0]?.functionCall, ["weather", { city: "上海" }, "call_1"]);
    assert.equal(result.contents[0]?.parts[0]?.thoughtSignature, "sig");
    assert.deepEqual(result.contents[1]?.parts[0]?.functionResponse, ["weather", { value: 24 }, "call_1"]);
    assert.deepEqual(result.tools?.[0]?.[1], [["weather", null, [6, null, null, null, null, null, [["city", [1]]]]]]);
  });

  it("normalizes AI Studio built-in tools only when explicitly requested", () => {
    const withoutTools = normalizeGeminiRequest("gemini-3.5-flash", {
      contents: [{ role: "user", parts: [{ text: "hello" }] }],
    });
    assert.equal(withoutTools.tools, null);

    const withTools = normalizeGeminiRequest("gemini-3.5-flash", {
      contents: [{ role: "user", parts: [{ text: "search" }] }],
      tools: [{ googleSearch: {} }, { codeExecution: {} }],
    });
    assert.deepEqual(withTools.tools, [
      [null, null, null, [null, [[]]]],
      [[]],
    ]);
  });

  it("enables server-side tool context circulation for Gemini 3 mixed tools", () => {
    const result = normalizeGeminiRequest("gemini-3.1-pro-preview", {
      contents: [{ role: "user", parts: [{ text: "search and call" }] }],
      tools: [
        { googleSearch: {} },
        { functionDeclarations: [{ name: "record", parameters: { type: "OBJECT" } }] },
      ],
    });
    assert.equal(result.includeServerSideToolInvocations, true);
  });

  it("encodes nested JSON schema branches", () => {
    assert.deepEqual(encodeSchemaToWire({ type: "array", items: { type: "integer" } }), [5, null, null, null, null, [3]]);
  });

  it("maps Gemini fileData URIs to AI Studio file references", () => {
    const result = normalizeGeminiRequest("gemini-3.5-flash", {
      contents: [{ role: "user", parts: [{ fileData: {
        mimeType: "application/pdf",
        fileUri: "https://generativelanguage.googleapis.com/v1beta/files/file_123",
      } }] }],
    });
    assert.deepEqual(result.contents[0]?.parts[0], { fileId: "file_123" });
  });

  it("accepts a data URI in fileData as inline media", () => {
    const result = normalizeGeminiRequest("gemini-3.5-flash", {
      contents: [{ role: "user", parts: [{ fileData: { fileUri: "data:text/plain;base64,SGk=" } }] }],
    });
    assert.deepEqual(result.contents[0]?.parts[0], { inlineData: ["text/plain", "SGk="] });
  });
});
