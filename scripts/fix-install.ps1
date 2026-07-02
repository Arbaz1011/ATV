# Fixes broken node_modules when the project lives on OneDrive.
# OneDrive sync conflicts with npm's thousands of small files.
# Run: powershell -ExecutionPolicy Bypass -File scripts/fix-install.ps1

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot
$DepsRoot = "C:\dev\atv-deps"

Write-Host "Project: $ProjectRoot"
Write-Host "Dependencies folder (outside OneDrive): $DepsRoot"

# Remove broken local node_modules (junction = rmdir only; folder = rimraf)
$nm = "$ProjectRoot\node_modules"
if (Test-Path $nm) {
    $item = Get-Item $nm -Force -ErrorAction SilentlyContinue
    if ($item.LinkType -eq "Junction") {
        Write-Host "Removing existing junction..."
        cmd /c "rmdir `"$nm`"" | Out-Null
    } else {
        Write-Host "Removing broken node_modules (may take a minute)..."
        $ErrorActionPreference = "Continue"
        npx --yes rimraf "$nm" 2>$null
        Start-Sleep -Seconds 2
        if (Test-Path $nm) {
            cmd /c "rmdir /s /q `"$nm`"" 2>$null
        }
        $ErrorActionPreference = "Stop"
    }
}

New-Item -ItemType Directory -Force -Path $DepsRoot | Out-Null
Copy-Item "$ProjectRoot\package.json" "$DepsRoot\package.json" -Force
if (Test-Path "$ProjectRoot\package-lock.json") {
    Copy-Item "$ProjectRoot\package-lock.json" "$DepsRoot\package-lock.json" -Force
}

Set-Location $DepsRoot
if (Test-Path "node_modules") {
    Write-Host "Removing old deps node_modules..."
    cmd /c "rmdir /s /q node_modules" 2>$null
}

Write-Host "Installing packages with npm 10 (this may take a few minutes)..."
npx --yes npm@10.9.2 install --no-audit --no-fund
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Set-Location $ProjectRoot
Write-Host "Linking node_modules junction..."
cmd /c "mklink /J `"$ProjectRoot\node_modules`" `"$DepsRoot\node_modules`""

Set-Location $ProjectRoot
if (-not (Test-Path "node_modules\next\dist\bin\next")) {
    Write-Host "ERROR: Install incomplete. Try: cd C:\dev\atv-deps && npx npm@10 install" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Done. From project folder run: npm run dev"
Write-Host "If npm run dev fails silently, use: node node_modules\next\dist\bin\next dev"
Write-Host ""
Write-Host "Recommended: develop from C:\dev\atv (copy synced) to avoid OneDrive issues."
