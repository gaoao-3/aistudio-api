import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { loginPhaseFromUrl } from "../src/accounts/login-session-manager.js";

describe("Google login phase detection", () => {
  it("recognizes the current Google v3 login routes", () => {
    assert.equal(loginPhaseFromUrl("https://accounts.google.com/v3/signin/identifier?continue=x"), "identifier");
    assert.equal(loginPhaseFromUrl("https://accounts.google.com/v3/signin/challenge/pwd?continue=x"), "pwd");
    assert.equal(loginPhaseFromUrl("https://accounts.google.com/v3/signin/challenge/totp?continue=x"), "totp");
    assert.equal(loginPhaseFromUrl("https://accounts.google.com/v3/signin/challenge/selection?continue=x"), "selection");
    assert.equal(loginPhaseFromUrl("https://aistudio.google.com/"), undefined);
  });
});
