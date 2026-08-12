import assert from "node:assert/strict";
import { it } from "node:test";
import type { NativeBrowserSession } from "../src/gateway/browser-session.js";
import { fetchModelCatalog, parseModelCatalog } from "../src/gateway/model-catalog.js";

it("parses AI Studio ListModels protobuf rows", () => {
  assert.deepEqual(parseModelCatalog([[ ["models/test-model", null, null, "Test Model", "desc", 100, 20, ["generateContent"]] ]]), [{
    name: "models/test-model",
    displayName: "Test Model",
    description: "desc",
    inputTokenLimit: 100,
    outputTokenLimit: 20,
    supportedGenerationMethods: ["generateContent"],
  }]);
});

it("uses the API key captured from the logged-in AI Studio page", async () => {
  const session = {
    async captureTemplate() {
      return { url: "https://example.test/generate", headers: { "x-goog-api-key": "page-key" }, body: "[]" };
    },
    async cookies() {
      return [
        { name: "SAPISID", value: "sid" },
        { name: "__Secure-1PSID", value: "sid-1p" },
        { name: "__Secure-3PSID", value: "sid-3p" },
      ];
    },
    async pageFetch(url: string, headers: Readonly<Record<string, string>>, body: string) {
      assert.match(url, /MakerSuiteService\/ListModels$/u);
      assert.equal(headers["x-goog-api-key"], "page-key");
      assert.match(headers.authorization ?? "", /^SAPISIDHASH /u);
      assert.equal(body, "[]");
      return {
        status: 200,
        body: JSON.stringify([[ ["models/session-model", null, null, "Session Model", "", 10, 20, ["generateContent"]] ]]),
      };
    },
  } as unknown as NativeBrowserSession;

  const models = await fetchModelCatalog(session);
  assert.equal(models[0]?.name, "models/session-model");
});
