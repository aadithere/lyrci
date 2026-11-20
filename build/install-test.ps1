$exe = Join-Path $PSScriptRoot '..\release\Verci-Setup-1.0.0.exe'
$target = 'C:\Users\Aadit\Desktop\lyrci\.test-install'
$p = Start-Process -FilePath $exe -ArgumentList '/S', "/D=$target" -Wait -PassThru
Write-Output "installer-exit=$($p.ExitCode)"
Write-Output "installed=$(Test-Path (Join-Path $target 'Verci.exe'))"
