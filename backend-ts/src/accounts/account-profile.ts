export type AccountTier = "unknown" | "free" | "pro" | "ultra";
export type MembershipDateKind = "renewal" | "expiry";

export interface AccountProfile {
  readonly email: string | null;
  readonly nickname: string | null;
  readonly avatar_url: string | null;
  readonly tier: AccountTier;
  readonly tier_label: string | null;
  readonly membership_next_at: string | null;
  readonly membership_next_at_kind: MembershipDateKind | null;
}

export interface AccountProfileSnapshot {
  readonly ai_studio_header?: string;
  readonly ai_studio_body?: string;
  readonly profile_text?: string;
  readonly profile_heading?: string;
  readonly subscription_text?: string;
  readonly image_urls?: readonly string[];
}

const EMAIL_PATTERN = /[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/u;
const GENERIC_HEADINGS = new Set([
  "google account",
  "google 账号",
  "account",
  "账号",
  "personal info",
  "个人信息",
  "home",
  "首页",
  "family",
  "family and sharing",
  "people & sharing",
  "payments & subscriptions",
  "security",
  "data & privacy",
  "家庭",
  "家庭和共享",
  "付款和订阅",
  "安全性",
  "数据和隐私",
]);

function lines(value: string | undefined): string[] {
  return (value ?? "")
    .split(/\r?\n|\s{2,}/u)
    .map(item => item.replace(/\s+/gu, " ").trim())
    .filter(Boolean);
}

function clean(value: string | undefined): string | null {
  const result = value?.replace(/\s+/gu, " ").trim() ?? "";
  return result ? result : null;
}

export function isGenericProfileLabel(value: string | null | undefined): boolean {
  const normalized = clean(value ?? undefined)?.toLowerCase() ?? "";
  return !normalized || GENERIC_HEADINGS.has(normalized);
}

function isUsableNickname(value: string | null, email: string | null): boolean {
  if (!value || value.length > 120 || value.includes("@")) return false;
  return !isGenericProfileLabel(value) && value !== email;
}

function tierLineKind(value: string): AccountTier | undefined {
  const normalized = value
    .replace(/[|·•]/gu, " ")
    .replace(/\s+/gu, " ")
    .trim()
    .toLowerCase();
  if (/^(google\s+ai\s+)?ultra$|^ai\s+ultra$|google\s+ai\s+ultra|ai\s+ultra|ultra\s*(会员|层级|计划)$/u.test(normalized)) return "ultra";
  if (/^(google\s+ai\s+)?pro$|^ai\s+pro$|google\s+ai\s+pro|ai\s+pro|pro\s*(会员|层级|计划)$|专业版/u.test(normalized)) return "pro";
  if (/^(free|免费)(\s*(tier|plan|层级|版|计划))?$|升级/u.test(normalized)) return "free";
  return undefined;
}

function findTier(header: string, body: string, subscriptionText: string): { tier: AccountTier; label: string | null } {
  const headerLines = lines(header);
  const emailIndex = headerLines.findIndex(line => EMAIL_PATTERN.test(line));
  const nearby = emailIndex >= 0
    ? headerLines.slice(Math.max(0, emailIndex - 3), emailIndex + 4)
    : headerLines;
  for (const line of [...nearby, ...lines(subscriptionText)]) {
    const tier = tierLineKind(line);
    if (tier && tier !== "free") return { tier, label: tier === "ultra" ? "Google AI Ultra" : "Google AI Pro" };
  }
  const freeLine = [...nearby, ...lines(body), ...lines(subscriptionText)].find(line => tierLineKind(line) === "free");
  if (freeLine) return { tier: "free", label: /free/iu.test(freeLine) ? "Free tier" : "免费层级" };
  return { tier: "unknown", label: null };
}

const MONTHS: Readonly<Record<string, number>> = {
  jan: 1, january: 1,
  feb: 2, february: 2,
  mar: 3, march: 3,
  apr: 4, april: 4,
  may: 5,
  jun: 6, june: 6,
  jul: 7, july: 7,
  aug: 8, august: 8,
  sep: 9, sept: 9, september: 9,
  oct: 10, october: 10,
  nov: 11, november: 11,
  dec: 12, december: 12,
};

function isoDate(year: number, month: number, day: number): string | null {
  if (year < 2000 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) return null;
  const value = new Date(Date.UTC(year, month - 1, day));
  if (value.getUTCFullYear() !== year || value.getUTCMonth() !== month - 1 || value.getUTCDate() !== day) return null;
  return value.toISOString();
}

function parseDate(value: string): string | null {
  const chinese = /(20\d{2})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/u.exec(value);
  if (chinese) return isoDate(Number(chinese[1]), Number(chinese[2]), Number(chinese[3]));

  const ymd = /(20\d{2})[\/-](\d{1,2})[\/-](\d{1,2})/u.exec(value);
  if (ymd) return isoDate(Number(ymd[1]), Number(ymd[2]), Number(ymd[3]));

  const monthDayYear = /\b([A-Za-z]{3,9})\s+(\d{1,2})(?:st|nd|rd|th)?(?:,)?\s+(20\d{2})\b/iu.exec(value);
  if (monthDayYear) return isoDate(Number(monthDayYear[3]), MONTHS[monthDayYear[1]?.toLowerCase() ?? ""] ?? 0, Number(monthDayYear[2]));

  const dayMonthYear = /\b(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]{3,9})(?:,)?\s+(20\d{2})\b/iu.exec(value);
  if (dayMonthYear) return isoDate(Number(dayMonthYear[3]), MONTHS[dayMonthYear[2]?.toLowerCase() ?? ""] ?? 0, Number(dayMonthYear[1]));
  return null;
}

function findMembershipDate(snapshot: AccountProfileSnapshot): { at: string; kind: MembershipDateKind } | null {
  const source = [snapshot.subscription_text, snapshot.profile_text, snapshot.ai_studio_body]
    .flatMap(value => lines(value));
  for (let index = 0; index < source.length; index += 1) {
    const candidate = source.slice(index, index + 3).join(" ");
    const kind: MembershipDateKind | null = /renew|next\s+(?:payment|billing)|续订|续费|下次付款|下次扣款|自动续费/iu.test(candidate)
      ? "renewal"
      : /expire|expiration|expiry|ends?\s+on|到期|有效期/iu.test(candidate)
        ? "expiry"
        : null;
    if (!kind) continue;
    const at = parseDate(candidate);
    if (at) return { at, kind };
  }
  return null;
}

function findEmail(snapshot: AccountProfileSnapshot): string | null {
  for (const value of [snapshot.ai_studio_header, snapshot.profile_text, snapshot.ai_studio_body]) {
    const match = EMAIL_PATTERN.exec(value ?? "");
    if (match?.[0]) return match[0];
  }
  return null;
}

function findNickname(snapshot: AccountProfileSnapshot, email: string | null): string | null {
  const heading = clean(snapshot.profile_heading);
  if (isUsableNickname(heading, email)) return heading;
  const profileLines = lines(snapshot.profile_text);
  const emailIndex = profileLines.findIndex(line => email ? line.includes(email) : EMAIL_PATTERN.test(line));
  const candidates = emailIndex >= 0
    ? [...profileLines.slice(Math.max(0, emailIndex - 3), emailIndex), ...profileLines.slice(emailIndex + 1, emailIndex + 3)]
    : profileLines.slice(0, 8);
  return candidates.map(clean).find(candidate => isUsableNickname(candidate, email)) ?? null;
}

function findAvatar(snapshot: AccountProfileSnapshot): string | null {
  return (snapshot.image_urls ?? [])
    .map(clean)
    .find((url): url is string => Boolean(url && /(?:googleusercontent\.com|ggpht\.com)/iu.test(url))) ?? null;
}

export function parseAccountProfileSnapshot(snapshot: AccountProfileSnapshot): AccountProfile {
  const email = findEmail(snapshot);
  const tier = findTier(snapshot.ai_studio_header ?? "", snapshot.ai_studio_body ?? "", snapshot.subscription_text ?? "");
  const membershipDate = findMembershipDate(snapshot);
  return {
    email,
    nickname: findNickname(snapshot, email),
    avatar_url: findAvatar(snapshot),
    tier: tier.tier,
    tier_label: tier.label,
    membership_next_at: membershipDate?.at ?? null,
    membership_next_at_kind: membershipDate?.kind ?? null,
  };
}
