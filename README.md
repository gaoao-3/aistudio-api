<div align="center">

# aistudi-web-api

**把 Google AI Studio 网页版接入为可调用的 Gemini API 服务**，并提供适合桌面端和手机端使用的 AI Studio 风格 WebUI。

![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-5-000000?style=flat-square&logo=fastify&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=flat-square&logo=nodemon&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

[English](./README_EN.md) · [功能](#功能特性) · [快速开始](#快速开始) · [API 用法](#api-用法) · [WebUI](#webui) · [配置](#配置) · [开发](#开发与验证)

</div>

---

> **项目定位**：底层通过 TypeScript/Fastify、CloakBrowser 和 AI Studio 网页会话完成请求转发，**不是 Google 官方 API，也不等同于 Gemini API Key 直连**。请只在你有权使用的 Google 账号和网络环境中运行。
>
> **项目来源**：基于 [chrysoljq/aistudio-api](https://github.com/chrysoljq/aistudio-api) 继续开发，当前版本已将公开服务、浏览器网关、账号轮询和 WebUI 收口到 TypeScript 实现。

## 双接口一览

| 接口 | 说明 |
|------|------|
| **Gemini 原生接口** | `generateContent`、流式生成、Embedding、模型目录 |
| **Interactions API** | 多轮对话、函数调用、SSE 流式事件和本地 interaction 状态 |

## 功能特性

| 能力 | 说明 |
|------|------|
| **Gemini 原生 API** | 支持 `/v1beta/models/{model}:generateContent`、`:streamGenerateContent`、`:embedContent`、`:batchEmbedContents` 和 `/v1beta/models` |
| **Interactions API** | 支持 `/v1/interactions`、`/v1beta/interactions`、`/v1beta2/interactions` 的创建、查询、列表、删除和 SSE 流式事件 |
| **多模态输入** | WebUI 支持图片、音频、视频、PDF、文本和常见代码文件；支持选择、粘贴、拖拽和手机端文件入口 |
| **媒体协议转换** | 浏览器上传的文件读取为 base64 `inlineData`；原生接口也支持已有 Google Files URI 的 `fileData` |
| **工具调用** | 支持 Gemini 原生 `functionCall` / `functionResponse`，并保留 `thought_signature`，可用于多轮函数调用 |
| **思考链** | 支持思考摘要、SSE 思考增量和 token 统计 |
| **实时模型目录** | 通过已登录的 AI Studio 浏览器上下文读取模型列表，失败时回退到内置列表 |
| **多账号轮询** | 支持 round-robin、LRU、least rate-limited 三种策略；账号遇到 429 或配额限制后自动冷却并切换 |
| **账号资料** | 尝试读取昵称、头像、Google AI Free/Pro/Ultra 层级，以及订阅页面能提供的续费/到期时间；读取失败时保留旧资料 |
| **WebUI** | 包含对话、历史、账号、API 密钥、用量统计和服务设置页面，适配移动端抽屉导航 |
| **安全转发** | CloakBrowser 负责浏览器会话和 BotGuard snapshot，公开 HTTP 服务支持 API Key 鉴权 |

## 运行前提

- [Node.js](https://nodejs.org/) 和 [pnpm](https://pnpm.io/)（仓库锁定的包管理器版本为 pnpm 11）。
- 一个可以正常访问 AI Studio 的 Google 账号。
- 本机登录、远程辅助登录或导入 Cookie，三选一。
- 如果部署在局域网或公网，建议配合 API Key 和 HTTPS 反向代理使用。

## 快速开始

```bash
# 1. 克隆项目
git clone https://github.com/gaoao-3/aistudio-api.git
cd aistudio-api

# 2. 安装前后端依赖
pnpm run setup

# 3. 构建前端静态资源和 TypeScript 后端
pnpm run build

# 4. 启动服务，默认监听 0.0.0.0:3006
pnpm start:fast
```

启动后访问：

```
http://localhost:3006/
```

**首次使用建议按以下顺序操作：**

1. 打开「账号」页面。
2. 使用本机浏览器登录、远程辅助登录，或导入 Google Cookie。
3. 登录完成后回到「对话」页面，选择模型并开始使用。

> **开发提示**：开发过程中修改前端后，重新执行 `pnpm run build`；只修改后端时可以使用 `pnpm start`，它会重新编译 backend-ts 后启动服务，但不会替代根目录的前端构建。

### 运行目录

账号、Cookie、API 密钥、统计、Interactions 和 `.env` 默认保存在项目目录下的 `data/` 和配置文件中。

`backend-ts/start.ps1` 如果发现项目同级存在 `aistudio-api/data`，会优先把它作为运行目录。为了避免多份数据混用，建议显式指定：

```powershell
powershell -File backend-ts/start.ps1 -RuntimeRoot "D:/path/to/aistudio-api" -Port 3006 -SkipBuild
```

也可以在 `.env` 中设置：

```dotenv
AISTUDIO_RUNTIME_ROOT=D:/path/to/aistudio-api
```

> **注意**：远程辅助登录必须先配置 API Key。密码、验证码只在一次性 CloakBrowser 登录会话中转发，不写入日志或账号资料。

## 鉴权

默认未配置 API Key 时接口不要求鉴权，只适合本机临时使用。配置 `AISTUDIO_API_KEY` 或 `AISTUDIO_API_KEYS` 后，支持以下方式：

```
Authorization: Bearer <key>
x-api-key: <key>
x-goog-api-key: <key>
?key=<key>
```

也可以在 WebUI 的「API 密钥」页面创建和删除密钥。完整密钥只在创建时显示一次，请不要提交 `.env`、`data/accounts` 或 `data/apikeys.json`。

## API 用法

### 常用路由

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/health` | 服务健康检查 |
| GET | `/auth/check` | 鉴权和运行能力检查 |
| GET | `/v1beta/models` | 读取实时模型目录 |
| GET | `/v1beta/models/{model}` | 读取单个模型信息 |
| POST | `/v1beta/models/{model}:generateContent` | Gemini 原生非流式生成 |
| POST | `/v1beta/models/{model}:streamGenerateContent` | Gemini 原生 SSE 流式生成 |
| POST | `/v1beta/models/{model}:embedContent` | Gemini Embedding |
| POST | `/v1beta/models/{model}:batchEmbedContents` | 批量 Embedding |
| POST | `/v1/embeddings` | OpenAI 风格 Embedding 返回格式 |
| POST / GET / DELETE | `/v1/interactions` 等 | Interactions 创建、查询和删除 |

### Interactions API

推荐使用 `/v1beta/interactions`。`/v1/interactions` 和 `/v1beta2/interactions` 使用相同的本地实现。

基础请求：

```json
{
  "model": "gemini-3-flash-preview",
  "input": "你好，请介绍一下你自己。"
}
```

多模态请求可以使用 `text`、`image`、`audio`、`document` 内容。`data` 填不带前缀的 base64，`mime_type` 填真实 MIME 类型：

```json
{
  "model": "gemini-3-flash-preview",
  "input": [
    { "type": "text", "text": "请描述这张图片。" },
    { "type": "image", "mime_type": "image/png", "data": "iVBORw0KGgo..." }
  ],
  "store": true
}
```

已有 Google Files 文件可以使用 `uri`：

```json
{
  "model": "gemini-3-flash-preview",
  "input": {
    "type": "document",
    "mime_type": "application/pdf",
    "uri": "https://generativelanguage.googleapis.com/v1beta/files/FILE_ID"
  }
}
```

> **注意**：当前 `uri` 只转换 Google Files URI 或 `data:` URI，不会替你抓取任意 HTTP 文件。函数工具使用 Interactions 的 function 工具格式；Google Search 等 Gemini 原生工具请使用下面的原生接口。

流式请求需要在 JSON 中加入 `stream: true`，服务会返回 `text/event-stream`。多轮请求使用 `previous_interaction_id`。只有 `store` 不为 `false` 的 interaction 才会保存到运行目录，默认保存 7 天；设置 `AISTUDIO_INTERACTIONS_TTL_SECONDS=0` 可永久保留。

官方 Python SDK 可以把 `base_url` 指向本服务：

```python
from google import genai

client = genai.Client(
    api_key="your-secret-token",
    http_options={"base_url": "http://localhost:3006"},
)
result = client.interactions.create(
    model="gemini-3-flash-preview",
    input="你好！",
)
```

### Gemini 原生接口

```json
{
  "contents": [{
    "role": "user",
    "parts": [{ "text": "今天上海天气怎么样？" }]
  }],
  "tools": [{ "googleSearchRetrieval": {} }]
}
```

原生媒体可以使用 `inlineData`：

```json
{
  "contents": [{
    "role": "user",
    "parts": [
      { "text": "请总结这个 PDF。" },
      { "inlineData": { "mimeType": "application/pdf", "data": "JVBERi0x..." } }
    ]
  }]
}
```

或者引用已有 Google Files：

```json
{
  "contents": [{
    "role": "user",
    "parts": [{
      "fileData": {
        "mimeType": "application/pdf",
        "fileUri": "https://generativelanguage.googleapis.com/v1beta/files/FILE_ID"
      }
    }]
  }]
}
```

> **注意**：Embedding 需要配置可以调用 Gemini API 的真实 key。AI Studio 网页使用的公开 key 不能用于 `BatchEmbedContents`：

```dotenv
AISTUDIO_UPSTREAM_API_KEY=your-gemini-api-key
```

## WebUI

| 页面 | 能力 |
|------|------|
| **对话** | 流式输出、思考摘要、工具调用卡片、生图、运行参数、图片/音频/视频/PDF/文本文件上传 |
| **历史** | 读取已保存的 Interactions，载入继续对话或删除；当前对话也会保存在浏览器本地缓存 |
| **账号** | 本机登录、远程登录、Cookie 导入、激活/删除、多账号轮询、昵称头像和会员资料刷新 |
| **API 密钥** | 创建、查看前缀、删除 WebUI API 密钥 |
| **统计** | 按模型查看请求数、成功率、限流、错误和 token 用量 |
| **服务设置** | 调整 API 请求体上限，提示是否需要重启 |

### WebUI 附件说明

点击输入框旁的附件按钮后，手机端会分别显示：

- **图片 / 视频**：相册、相机或摄像机
- **音频 / 文件**：系统文件选择器，读取音频、PDF、文本和代码文件

文件由浏览器读取并转换为 base64 后发送，不会把手机本地路径暴露给后端。WebUI 附件限制为单文件 15 MiB、总大小 16 MiB；服务默认 JSON 请求体上限为 32 MiB。大文件更适合先上传到 Google Files，再通过 `fileUri` 引用。

## 账号轮询与会员资料

账号页面支持多个 Google 账号。轮询策略可以选择：

| 策略 | 说明 |
|------|------|
| `round_robin` | 按顺序轮换 |
| `lru` | 优先较久未使用的账号 |
| `least_rl` | 优先近期限流较少的账号 |

请求遇到 429 或配额限制时，当前账号会进入冷却，服务会在剩余重试次数内尝试其他可用账号。轮询配置可以在 WebUI 保存，也可以通过 `/rotation` 相关接口查看。

账号资料刷新是尽力读取：昵称和头像通常来自 Google 账号页面，会员层级和续费/到期时间来自 AI Studio 或订阅页面。Google 页面结构变化、Cookie 失效或订阅页不可访问时，服务会保留上一次成功资料并在界面显示错误状态。

## 配置

配置可以放在运行目录的 `.env` 文件，也可以使用环境变量。完整示例见 [.env.example](./.env.example)。

### 服务与浏览器

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `AISTUDIO_PROJECT_ROOT` | 自动查找 | 项目根目录 |
| `AISTUDIO_RUNTIME_ROOT` | 项目目录 | 账号、状态、统计和 `.env` 所在运行目录 |
| `AISTUDIO_HOST` | `0.0.0.0` | 监听地址 |
| `AISTUDIO_PORT` | `3006` | 服务端口 |
| `AISTUDIO_API_KEY` / `AISTUDIO_API_KEYS` | 空 | 一个或多个 HTTP API Key |
| `AISTUDIO_APIKEYS_FILE` | `data/apikeys.json` | WebUI 创建的密钥存储文件 |
| `AISTUDIO_BROWSER_HEADLESS` | `true` | 是否无头运行 CloakBrowser |
| `AISTUDIO_BROWSER_TIMEOUT_MS` | `120000` | 浏览器请求超时，单位毫秒 |
| `AISTUDIO_API_BODY_LIMIT_BYTES` | `33554432` | Fastify 请求体上限，默认 32 MiB，最大 128 MiB |
| `AISTUDIO_PROXY_URL` | 系统代理 | CloakBrowser 使用的代理地址 |
| `AISTUDIO_AUTH_FILE` | 自动选择活跃账号 | Playwright storage state 文件 |

### 登录与 Embedding

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `AISTUDIO_LOGIN_TIMEOUT_MS` | `600000` | 登录流程最长等待时间 |
| `AISTUDIO_LOGIN_SESSION_RETENTION_MS` | `600000` | 已结束登录会话保留时间 |
| `AISTUDIO_UPSTREAM_API_KEY` | 内置 AI Studio key | Embedding 必须改为可调用 Gemini API 的真实 key |
| `AISTUDIO_EMBEDDING_BASE_URL` | `https://generativelanguage.googleapis.com/v1beta` | Embedding 上游地址 |

### 数据与账号轮询

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `AISTUDIO_ACCOUNTS_DIR` | `data/accounts` | 账号和 Cookie 存储目录 |
| `AISTUDIO_INTERACTIONS_DIR` | `data/interactions` | Interactions JSON 存储目录 |
| `AISTUDIO_STATS_FILE` | `data/stats.json` | 用量统计文件 |
| `AISTUDIO_INTERACTIONS_TTL_SECONDS` | `604800` | interaction 保留秒数，0 表示不过期 |
| `AISTUDIO_MODEL_DEFAULTS_FILE` | `config.yaml` | 模型默认参数 YAML |
| `AISTUDIO_ACCOUNT_ROTATION_MODE` | `round_robin` | `round_robin` / `lru` / `least_rl` |
| `AISTUDIO_ACCOUNT_COOLDOWN_SECONDS` | `60` | 429 后账号冷却秒数 |
| `AISTUDIO_ACCOUNT_MAX_RETRIES` | `3` | 单次请求最多尝试账号数 |
| `AISTUDIO_ACCOUNT_PROFILE_REFRESH_MS` | `21600000` | 账号资料建议刷新间隔 |

模型级默认工具、思考和生图参数见根目录的 `config.yaml`。WebUI 的服务设置会把新的请求体上限写入运行目录 `.env`，已经运行的进程需要重启后才会生效。

## 能力边界

以下能力在请求时会明确返回错误或按当前实现处理，不会假装已经支持：

- agent、Deep Research、Antigravity 等托管代理
- `background=true` 后台执行
- `file_search` 工具
- 任意 HTTP 文件 URI 自动抓取
- WebUI 之外的 Google Files 大文件自动上传
- `audio` / `video` 作为 `response_format` 的原生输出
- `seed`、`thinking_summaries` 等部分参数不会改变当前网关行为

## 开发与验证

```bash
# 类型检查
pnpm typecheck

# 后端单元测试
pnpm test

# 构建前端和后端
pnpm build

# 后端开发模式
pnpm dev:backend

# 前端开发模式
pnpm dev:frontend
```

## 架构

```text
Gemini SDK / Interactions 客户端 / WebUI
                    │
                    ▼
             Fastify HTTP 服务
      API 鉴权、路由、状态、统计、配置
                    │
                    ▼
          Native TypeScript Bridge
       账号轮询、重试、请求与响应转换
                    │
                    ▼
              Native Gateway
     Gemini JSON → AI Studio 内部 wire body
                    │
                    ▼
              CloakBrowser
    登录 Cookie、BotGuard snapshot、请求重放
                    │
                    ▼
             Google AI Studio
```

服务不会把 Google 密码写入项目文件。账号 Cookie、API 密钥和运行状态仍然属于敏感数据，请将 `data/`、`.env` 和日志文件加入部署环境的访问控制，不要提交到公开仓库。

## 致谢

- [chrysoljq/aistudio-api](https://github.com/chrysoljq/aistudio-api)
- [LuanRT/BgUtils](https://github.com/LuanRT/BgUtils)
- [iBUHub/AIStudioToAPI](https://github.com/iBUHub/AIStudioToAPI)
- [linux.do](https://linux.do)

## License

MIT
