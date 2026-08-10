param(
    [string]$RuntimeRoot = "",
    [int]$Port = 3006,
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
$backendRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $backendRoot

if (-not $RuntimeRoot) {
    $siblingRuntime = Join-Path (Split-Path -Parent $projectRoot) "aistudio-api"
    $RuntimeRoot = if (Test-Path (Join-Path $siblingRuntime "data")) { $siblingRuntime } else { $projectRoot }
}
$RuntimeRoot = (Resolve-Path $RuntimeRoot).Path

$env:AISTUDIO_RUNTIME_ROOT = $RuntimeRoot
$env:AISTUDIO_PORT = [string]$Port
$env:AISTUDIO_ACCOUNTS_DIR = Join-Path $RuntimeRoot "data\accounts"

$registryPath = Join-Path $RuntimeRoot "data\accounts\registry.json"
if (Test-Path $registryPath) {
    $registry = Get-Content -Raw $registryPath | ConvertFrom-Json
    if ($registry.active_account_id) {
        $authPath = Join-Path $RuntimeRoot "data\accounts\$($registry.active_account_id)\auth.json"
        if (Test-Path $authPath) {
            $env:AISTUDIO_AUTH_FILE = $authPath
        }
    }
}

Push-Location $backendRoot
try {
    if (-not $SkipBuild) {
        pnpm build
        if ($LASTEXITCODE -ne 0) { throw "TypeScript build failed" }
    }
    node dist/src/server.js
} finally {
    Pop-Location
}
