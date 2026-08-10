import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { parseAccountProfileSnapshot } from "../src/accounts/account-profile.js";

describe("account profile extraction", () => {
  it("extracts a Google AI tier, identity, and avatar from page snapshots", () => {
    const profile = parseAccountProfileSnapshot({
      ai_studio_header: "Alice\nalice@example.com\nGoogle AI Pro",
      ai_studio_body: "Gemini API 用量",
      profile_text: "Google Account\nAlice\nalice@example.com",
      profile_heading: "Alice",
      image_urls: ["https://lh3.googleusercontent.com/a/avatar=s96-c"],
    });
    assert.deepEqual(profile, {
      email: "alice@example.com",
      nickname: "Alice",
      avatar_url: "https://lh3.googleusercontent.com/a/avatar=s96-c",
      tier: "pro",
      tier_label: "Google AI Pro",
      membership_next_at: null,
      membership_next_at_kind: null,
    });
  });

  it("does not claim a tier when the page contains no membership signal", () => {
    const profile = parseAccountProfileSnapshot({
      ai_studio_header: "alice@example.com",
      ai_studio_body: "Gemini API 用量",
    });
    assert.equal(profile.tier, "unknown");
    assert.equal(profile.tier_label, null);
    assert.equal(profile.membership_next_at, null);
  });

  it("does not treat Google account navigation headings as a nickname", () => {
    const profile = parseAccountProfileSnapshot({
      ai_studio_header: "alice@example.com",
      profile_heading: "Family",
      profile_text: "Family\nGoogle Account\nalice@example.com",
    });
    assert.equal(profile.nickname, null);
  });

  it("extracts a renewal date from the authenticated subscriptions page", () => {
    const profile = parseAccountProfileSnapshot({
      ai_studio_header: "alice@example.com\nGoogle AI Pro",
      subscription_text: "Google AI Pro (5 TB)\nRenews on Jul 13, 2027",
    });
    assert.equal(profile.tier, "pro");
    assert.equal(profile.membership_next_at, "2027-07-13T00:00:00.000Z");
    assert.equal(profile.membership_next_at_kind, "renewal");
  });
});
