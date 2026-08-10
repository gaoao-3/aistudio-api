// ---------- 共享数据结构类型 ----------

export type Role = 'user' | 'assistant';

export interface ToolCall {
  id?: string;
  name?: string;
  arguments?: unknown;
  signature?: string;
}

export type AttachmentKind = 'image' | 'audio' | 'video' | 'document';

export interface Attachment {
  name: string;
  mime_type: string;
  data_url: string;
  kind: AttachmentKind;
  size?: number;
}

export interface Message {
  role: Role;
  content: string;
  images?: string[];
  attachments?: Attachment[];
  thinking?: string;
  showThinking?: boolean;
  toolCalls?: ToolCall[];
  error?: string;
}

export type OnOff = 'on' | 'off';

export interface RunConfig {
  thinking: string;
  search: OnOff;
  stream: OnOff;
  temperature: number;
  topP: number;
  maxTokens: number;
  safety: OnOff;
}

export interface ModelInfo {
  id: string;
}

export interface ModelStat {
  requests?: number;
  success?: number;
  rate_limited?: number;
  errors?: number;
  prompt_tokens?: number;
  completion_tokens?: number;
  total_tokens?: number;
  last_used?: string;
}

export type Stats = Record<string, ModelStat>;

/** 按天用量（与后端 DailyUsage 对应，date 为 UTC YYYY-MM-DD） */
export interface DailyModelUsage {
  requests?: number;
  prompt_tokens?: number;
  completion_tokens?: number;
  total_tokens?: number;
}

export type DailyUsage = Record<string, Record<string, DailyModelUsage>>;

export interface Account {
  id: string;
  name?: string | null;
  email?: string | null;
  nickname?: string | null;
  avatar_url?: string | null;
  tier?: 'unknown' | 'free' | 'pro' | 'ultra' | null;
  tier_label?: string | null;
  membership_next_at?: string | null;
  membership_next_at_kind?: 'renewal' | 'expiry' | null;
  profile_updated_at?: string | null;
  profile_error?: string | null;
  created_at?: string;
  success?: number;
  rate_limited?: number;
  error?: number;
  requests?: number;
  errors?: number;
  is_available?: boolean;
  cooldown_remaining?: number;
  last_rate_limited?: string | null;
  [key: string]: unknown;
}

export interface RotationConfig {
  mode: string;
  cooldown: number;
}

export interface StepContent {
  type: string;
  text?: string;
  data?: string;
  uri?: string;
  mime_type?: string;
}

export interface InteractionStep {
  type: string;
  id?: string;
  name?: string;
  arguments?: unknown;
  signature?: string;
  content?: StepContent[];
  summary?: StepContent[];
}

export interface HistoryItem {
  id: string;
  model?: string;
  created?: string;
  status?: string;
  steps?: InteractionStep[];
}

export type LoginStepKind = 'email' | 'password' | 'otp' | 'selection' | 'manual';

export interface LoginStep {
  kind: LoginStepKind;
  prompt?: string;
  sensitive?: boolean;
  options?: string[];
}

export interface RemoteLoginState {
  open: boolean;
  sessionId: string;
  step: LoginStep | null;
  input: string;
  error: string;
  submitting: boolean;
  timer: ReturnType<typeof setTimeout> | null;
}

/** 服务设置页「请求体大小限制」状态（数值均为 MiB） */
export interface RuntimeConfigState {
  loading: boolean;
  saving: boolean;
  loaded: boolean;
  error: string;
  notice: string;
  restartRequired: boolean;
  inputMiB: number | null;
  configuredMiB: number | null;
  effectiveMiB: number;
  maxMiB: number;
}

/** GET/PUT /config/runtime 响应 */
export interface RuntimeConfigResponse {
  effective_body_limit_bytes?: number;
  configured_body_limit_bytes?: number | null;
  body_limit_max_bytes?: number;
  restart_required?: boolean;
  ok?: boolean;
  body_limit_bytes?: number;
  detail?: unknown;
}

export interface ToastState {
  show: boolean;
  msg: string;
  t: ReturnType<typeof setTimeout> | null;
}

export interface CookieModalState {
  open: boolean;
  cookies: string;
  name: string;
  email: string;
  importing: boolean;
}

export interface ApiKey {
  id: string;
  name?: string;
  prefix?: string;
  created_at?: string;
  last_used?: string;
}

/** POST /v1beta/interactions 请求体 */
export interface InteractionRequest {
  model: string;
  input: InteractionStep[];
  store: boolean;
  generation_config?: Record<string, unknown>;
  stream?: boolean;
  tools?: { type: string }[];
  safety_settings?: { category: string; threshold: string }[];
}

/** Alpine 魔术属性（x-data 方法内通过 this 访问） */
export interface AlpineMagics {
  $watch(expr: string, cb: () => void, opts?: { deep?: boolean }): void;
  $refs: Record<string, HTMLElement>;
  $nextTick(cb: () => void): void;
}
