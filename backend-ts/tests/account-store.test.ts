import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, it } from "node:test";
import { AccountStore, parseGoogleCookies } from "../src/accounts/account-store.js";

describe("native account cookies", () => {
  it("parses Google cookie strings for Playwright storage state", () => {
    const cookies = parseGoogleCookies("SID=one; SAPISID=two; broken; __Host-GAPS=skip");
    assert.deepEqual(cookies.map(cookie => cookie.name), ["SID", "SAPISID"]);
    assert.equal(cookies[0]?.domain, ".google.com");
    assert.equal(cookies[0]?.httpOnly, false);
    assert.equal(cookies[0]?.sameSite, "None");
  });

  it("persists a browser storage state as a managed account", async () => {
    const directory = await mkdtemp(join(tmpdir(), "aistudio-login-account-"));
    try {
      const store = new AccountStore(directory);
      const saved = await store.saveStorageState({
        name: "测试账号",
        email: "test@example.com",
        storageState: {
          cookies: [{ name: "SID", value: "secret", domain: ".google.com", path: "/" }],
          origins: [],
        },
      });
      assert.equal(saved.account.name, "测试账号");
      assert.equal(saved.account.email, "test@example.com");
      assert.match(saved.account.id, /^acc_/u);
      const auth = JSON.parse(await readFile(saved.authFile, "utf8")) as { cookies: { name: string }[] };
      assert.equal(auth.cookies[0]?.name, "SID");
      assert.equal((await store.active())?.id, saved.account.id);
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
});
