$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$snapshotRoot = Join-Path $PSScriptRoot "multi-market-backup-2026-03-16"

if (-not (Test-Path $snapshotRoot)) {
  throw "Snapshot folder not found: $snapshotRoot"
}

if (Test-Path (Join-Path $repoRoot "src")) {
  Remove-Item -Recurse -Force (Join-Path $repoRoot "src")
}

Copy-Item -Recurse -Force (Join-Path $snapshotRoot "src") $repoRoot
Copy-Item -Force `
  (Join-Path $snapshotRoot "package.json"), `
  (Join-Path $snapshotRoot "package-lock.json"), `
  (Join-Path $snapshotRoot "postcss.config.mjs"), `
  (Join-Path $snapshotRoot "next.config.ts") `
  $repoRoot

Write-Output "Restored multi-market backup from March 16, 2026."
