import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { request as httpRequest } from "node:http";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { setTimeout as delay } from "node:timers/promises";
import { ApiKeyStore } from "../src/auth/api-key-store.js";
import { buildApp } from "../src/app.js";
import type { BackendBridge } from "../src/bridge/backend-bridge.js";
import { InteractionStore } from "../src/interactions/store.js";

class MockBridge implements BackendBridge {
  readonly calls: Array<{ method: string; params: Readonly<Record<string, unknown>> }> = [];

  async start(): Promise<void> {}
  async stop(): Promise<void> {}
  status(): Readonly<{ running: boolean; pid?: number }> { return { running: true, pid: 1234 }; }

  async request<T>(
    method: string,
    params: Readonly<Record<string, unknown>> = {},
    onChunk?: (chunk: string) => void,
    _signal?: AbortSignal,
  ): Promise<T> {
    this.calls.push({ method, params });
    if (method === "health") return { status: "ok", busy: false } as T;
    if (method === "stats") return { models: {}, totals: { requests: 0 } } as T;
    if (method === "models") return [] as T;
    if (method === "generate") return { candidates: [{ content: { role: "model", parts: [{ text: "ok" }] } }] } as T;
    if (method === "interaction_create") {
      if (onChunk) onChunk("data: [DONE]\n\n");
      return { id: "int_mock", status: "completed", steps: [] } as T;
    }
    return { ok: true } as T;
  }
}

class AbortBridge extends MockBridge {
  aborted = false;

  override async request<T>(
    method: string,
    params: Readonly<Record<string, unknown>> = {},
    onChunk?: (chunk: string) => void,
    signal?: AbortSignal,
  ): Promise<T> {
    if (method !== "interaction_create" || !onChunk || !signal) {
      return super.request(method, params, onChunk, signal);
    }
    onChunk("data: {\"event_type\":\"interaction.created\"}\n\n");
    return new Promise<T>((_resolve, reject) => {
      signal.addEventListener("abort", () => {
        this.aborted = true;
        const error = new Error("aborted");
        error.name = "AbortError";
        reject(error);
      }, { once: true });
    });
  }
}

async function fixture() {
  const directory = await mkdtemp(join(tmpdir(), "aistudio-fastify-"));
  const bridge = new MockBridge();
  const apiKeys = new ApiKeyStore(join(directory, "apikeys.json"));
  const interactions = new InteractionStore(join(directory, "interactions"), 0);
  const app = await buildApp({
    services: { bridge, apiKeys, interactions },
    logger: false,
    serveStatic: false,
    runtimeConfigFile: join(directory, ".env"),
  });
  return { app, bridge, apiKeys, interactions, directory };
}

test("health is public and served by the bridge", async (t) => {
  const state = await fixture();
  t.after(async () => { await state.app.close(); await rm(state.directory, { recursive: true, force: true }); });
  const response = await state.app.inject({ method: "GET", url: "/health" });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), { status: "ok", busy: false });
  assert.equal(state.bridge.calls[0]?.method, "health");
});

test("auth check advertises native runtime capabilities", async (t) => {
  const state = await fixture();
  t.after(async () => { await state.app.close(); await rm(state.directory, { recursive: true, force: true }); });
  const response = await state.app.inject({ method: "GET", url: "/auth/check" });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().capabilities.gateway, "native");
  assert.equal(response.json().capabilities.automatic_login, process.platform === "win32" || Boolean(process.env.DISPLAY || process.env.WAYLAND_DISPLAY));
  assert.equal(response.json().capabilities.remote_login, true);
  assert.equal(response.json().capabilities.streaming, "incremental");
});

test("account login routes dispatch start, input, status, and cancellation", async (t) => {
  const state = await fixture();
  t.after(async () => { await state.app.close(); await rm(state.directory, { recursive: true, force: true }); });
  assert.equal((await state.app.inject({ method: "POST", url: "/accounts/login/start", payload: { remote: true, name: "test" } })).statusCode, 403);
  const key = (await state.apiKeys.create("login-test")).key;
  const headers = { authorization: `Bearer ${key}` };
  assert.equal((await state.app.inject({ method: "POST", url: "/accounts/login/start", headers, payload: { remote: true, name: "test" } })).statusCode, 200);
  assert.equal((await state.app.inject({ method: "GET", url: "/accounts/login/status/login_1", headers })).statusCode, 200);
  assert.equal((await state.app.inject({ method: "POST", url: "/accounts/login/input", headers, payload: { session_id: "login_1", value: "123456" } })).statusCode, 200);
  assert.equal((await state.app.inject({ method: "DELETE", url: "/accounts/login/login_1", headers })).statusCode, 200);
  assert.deepEqual(state.bridge.calls.slice(-4).map(call => call.method), ["login_start", "login_status", "login_input", "login_cancel"]);
});

test("system status identifies Fastify and the native backend", async (t) => {
  const state = await fixture();
  t.after(async () => { await state.app.close(); await rm(state.directory, { recursive: true, force: true }); });
  const response = await state.app.inject({ method: "GET", url: "/system/status" });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().server, "fastify");
  assert.deepEqual(response.json().bridge, { running: true, pid: 1234 });
});

test("runtime body limit can be configured from the API", async (t) => {
  const state = await fixture();
  t.after(async () => { await state.app.close(); await rm(state.directory, { recursive: true, force: true }); });
  const initial = await state.app.inject({ method: "GET", url: "/config/runtime" });
  assert.equal(initial.statusCode, 200);
  const initialPayload = initial.json();
  assert.equal(initialPayload.effective_body_limit_bytes, initialPayload.configured_body_limit_bytes);
  assert.equal(initialPayload.restart_required, false);

  const saved = await state.app.inject({
    method: "PUT",
    url: "/config/runtime",
    payload: { body_limit_bytes: 64 * 1024 * 1024 },
  });
  assert.equal(saved.statusCode, 200);
  assert.equal(saved.json().configured_body_limit_bytes, 64 * 1024 * 1024);
  assert.equal(saved.json().effective_body_limit_bytes, initialPayload.effective_body_limit_bytes);
  assert.equal(saved.json().restart_required, true);

  const reread = await state.app.inject({ method: "GET", url: "/config/runtime" });
  assert.equal(reread.json().configured_body_limit_bytes, 64 * 1024 * 1024);
  assert.equal((await state.app.inject({ method: "PUT", url: "/config/runtime", payload: { body_limit_bytes: 512 } })).statusCode, 422);
  assert.equal((await state.app.inject({ method: "PUT", url: "/config/runtime", payload: { body_limit_bytes: "64MiB" } })).statusCode, 422);
});

test("creating the first API key enables authentication immediately", async (t) => {
  const state = await fixture();
  t.after(async () => { await state.app.close(); await rm(state.directory, { recursive: true, force: true }); });
  const created = await state.app.inject({ method: "POST", url: "/api-keys", payload: { name: "test" } });
  assert.equal(created.statusCode, 201);
  const key = created.json().key as string;
  assert.match(key, /^ask_[a-f0-9]{32}$/u);

  const rejected = await state.app.inject({ method: "GET", url: "/stats" });
  assert.equal(rejected.statusCode, 401);
  const invalidVerify = await state.app.inject({ method: "GET", url: "/auth/verify", headers: { authorization: "Bearer wrong" } });
  assert.equal(invalidVerify.statusCode, 401);
  const validVerify = await state.app.inject({ method: "GET", url: "/auth/verify", headers: { authorization: `Bearer ${key}` } });
  assert.equal(validVerify.statusCode, 200);
  assert.deepEqual(validVerify.json(), { ok: true });
  const accepted = await state.app.inject({ method: "GET", url: "/stats", headers: { authorization: `Bearer ${key}` } });
  assert.equal(accepted.statusCode, 200);
});

test("Gemini generateContent is dispatched without FastAPI", async (t) => {
  const state = await fixture();
  t.after(async () => { await state.app.close(); await rm(state.directory, { recursive: true, force: true }); });
  const response = await state.app.inject({
    method: "POST",
    url: "/v1beta/models/gemini-3-flash-preview:generateContent",
    payload: { contents: [{ role: "user", parts: [{ text: "hello" }] }] },
  });
  assert.equal(response.statusCode, 200);
  const call = state.bridge.calls.find((item) => item.method === "generate");
  assert.equal(call?.params.model, "models/gemini-3-flash-preview");
  assert.equal(call?.params.stream, false);
});

test("accepts an Interactions request above Fastify's default 1 MiB limit", async (t) => {
  const state = await fixture();
  t.after(async () => { await state.app.close(); await rm(state.directory, { recursive: true, force: true }); });
  const text = "x".repeat(1_100_000);
  const response = await state.app.inject({
    method: "POST",
    url: "/v1beta/interactions",
    payload: { model: "gemini-3-flash-preview", input: [{ type: "user_input", content: [{ type: "text", text }] }], store: false },
  });
  assert.equal(response.statusCode, 200);
  assert.equal(state.bridge.calls.at(-1)?.method, "interaction_create");
});

test("Interactions history is read from the TypeScript store", async (t) => {
  const state = await fixture();
  t.after(async () => { await state.app.close(); await rm(state.directory, { recursive: true, force: true }); });
  await state.interactions.save("int_1", {
    interaction: {
      id: "int_1",
      created: "2026-08-09T00:00:00Z",
      steps: [{ type: "user_input", content: [{ type: "text", text: "hello" }] }],
    },
  });
  const response = await state.app.inject({ method: "GET", url: "/v1beta/interactions?limit=1" });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().interactions[0].id, "int_1");
});

test("disconnecting an SSE client aborts the bridge request", async (t) => {
  const directory = await mkdtemp(join(tmpdir(), "aistudio-fastify-abort-"));
  const bridge = new AbortBridge();
  const app = await buildApp({
    services: {
      bridge,
      apiKeys: new ApiKeyStore(join(directory, "apikeys.json")),
      interactions: new InteractionStore(join(directory, "interactions"), 0),
    },
    logger: false,
    serveStatic: false,
  });
  t.after(async () => { await app.close(); await rm(directory, { recursive: true, force: true }); });
  await app.listen({ host: "127.0.0.1", port: 0 });
  const address = app.server.address() as AddressInfo;

  await new Promise<void>((resolve, reject) => {
    const request = httpRequest({
      host: "127.0.0.1",
      port: address.port,
      method: "POST",
      path: "/v1beta/interactions",
      headers: { "content-type": "application/json" },
    }, (response) => {
      response.once("data", () => {
        response.destroy();
        resolve();
      });
    });
    request.once("error", (error) => {
      if ((error as NodeJS.ErrnoException).code === "ECONNRESET") resolve();
      else reject(error);
    });
    request.end(JSON.stringify({ model: "gemini-3-flash-preview", input: "hello", stream: true }));
  });

  await delay(50);
  assert.equal(bridge.aborted, true);
});
