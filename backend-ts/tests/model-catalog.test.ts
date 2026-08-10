import assert from "node:assert/strict";
import { it } from "node:test";
import { parseModelCatalog } from "../src/gateway/model-catalog.js";

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
