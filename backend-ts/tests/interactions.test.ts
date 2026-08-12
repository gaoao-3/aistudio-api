import assert from "node:assert/strict";
import test from "node:test";
import {
  inputToContents,
  interactionToGeminiRequest,
  outputToSteps,
  parseInteractionCreateRequest,
  stepsToContents,
} from "../src/index.js";

test("preserves function call id and thought signature", () => {
  const contents = stepsToContents([
    {
      type: "function_call",
      id: "call-1",
      name: "run_code",
      arguments: { language: "python", code: "print(1)" },
      signature: "sig-1",
    },
  ]);

  assert.equal(contents[0]?.role, "model");
  assert.deepEqual(contents[0]?.parts[0]?.functionCall, {
    name: "run_code",
    args: { language: "python", code: "print(1)" },
    id: "call-1",
  });
  assert.equal(contents[0]?.parts[0]?.thoughtSignature, "sig-1");
});

test("resolves a function result name from the previous call", () => {
  const contents = stepsToContents([
    { type: "function_call", id: "call-2", name: "get_weather", arguments: {} },
    { type: "function_result", call_id: "call-2", result: [{ type: "text", text: "晴天" }] },
  ]);

  assert.deepEqual(contents[1]?.parts[0]?.functionResponse, {
    name: "get_weather",
    response: { result: "晴天" },
    id: "call-2",
  });
});

test("does not pass a raw content array to a function response", () => {
  const contents = inputToContents({
    type: "function_result",
    call_id: "call-3",
    name: "run_code",
    result: [
      { type: "text", text: "stdout" },
      { type: "image", data: "abc", mime_type: "image/gif" },
    ],
  });

  const result = contents[0]?.parts[0]?.functionResponse?.response.result;
  assert.equal(typeof result, "string");
  assert.match(String(result), /stdout/);
});

test("builds a request from history and current input", () => {
  const request = interactionToGeminiRequest(
    { model: "gemini-3.6-flash", input: "继续回答" },
    [{ type: "user_input", content: [{ type: "text", text: "第一轮" }] }],
  );

  assert.deepEqual(request.contents.map((content) => content.parts[0]?.text), ["第一轮", "继续回答"]);
});

test("preserves Google Files URIs in multimedia content", () => {
  const request = interactionToGeminiRequest({
    model: "gemini-3.6-flash",
    input: { type: "document", uri: "https://generativelanguage.googleapis.com/v1beta/files/file_42", mime_type: "application/pdf" },
  });

  assert.deepEqual(request.contents[0]?.parts[0]?.fileData, {
    fileUri: "https://generativelanguage.googleapis.com/v1beta/files/file_42",
    mimeType: "application/pdf",
  });
});

test("requires a call id when converting model tool calls", () => {
  assert.throws(
    () => outputToSteps({ function_calls: [{ name: "run_code", args: {} }] }),
    /missing call_id/,
  );
});

test("validates external Interactions JSON before conversion", () => {
  const request = parseInteractionCreateRequest({
    model: "gemini-3.6-flash",
    input: {
      type: "function_result",
      call_id: "call-4",
      result: { stdout: "ok", resource_filter: [null, { source: "history" }] },
    },
  });

  assert.equal(request.model, "gemini-3.6-flash");
  assert.deepEqual(request.input, {
    type: "function_result",
    call_id: "call-4",
    result: { stdout: "ok", resource_filter: [null, { source: "history" }] },
  });
});

test("accepts AI Studio built-in tools", () => {
  const request = parseInteractionCreateRequest({
    model: "gemini-3.6-flash",
    input: "搜索今天的新闻",
    tools: [{ type: "google_search" }, { type: "code_execution" }],
  });

  assert.deepEqual(request.tools, [{ type: "google_search" }, { type: "code_execution" }]);
  assert.deepEqual(interactionToGeminiRequest(request).tools, request.tools);
});

test("reports the exact path for malformed function arguments", () => {
  assert.throws(
    () => parseInteractionCreateRequest({
      model: "gemini-3.6-flash",
      input: {
        type: "function_call",
        id: "call-5",
        name: "run_code",
        arguments: { resource_filter: undefined },
      },
    }),
    /input\.arguments\.resource_filter: /,
  );
});
