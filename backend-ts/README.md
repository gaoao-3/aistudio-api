# Fastify backend

The public HTTP server, browser capture/replay gateway, BotGuard integration,
incremental streaming parser, and Interactions state are implemented in
TypeScript. The service does not start Uvicorn, FastAPI, or a Python worker.
Google account onboarding supports both a local headed CloakBrowser window and
a headless, remotely assisted step flow; successful sessions are persisted as
Playwright storage state in the native account store.

## Windows startup

```powershell
pnpm install
.\start.ps1 -Port 8000
```

`start.ps1` automatically reuses the sibling `aistudio-api/data` runtime when
it exists. Override that location with `-RuntimeRoot` or the
`AISTUDIO_RUNTIME_ROOT` environment variable.

## Verification

```powershell
pnpm typecheck
pnpm test
pnpm build
```
