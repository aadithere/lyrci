$target = 'C:\Users\Aadit\Desktop\lyrci\.test-install'
$un = Join-Path $target 'Uninstall Verci.exe'
if (Test-Path $un) {
  $p = Start-Process -FilePath $un -ArgumentList '/S' -Wait -PassThru
  Write-Output "uninstaller-exit=$($p.ExitCode)"
}
Start-Sleep -Seconds 3
Write-Output "dir-exists=$(Test-Path $target)"
Write-Output "desktop-shortcut=$(Test-Path (Join-Path $env:USERPROFILE 'Desktop\Verci.lnk'))"
Write-Output "startmenu-shortcut=$(Test-Path (Join-Path $env:APPDATA 'Microsoft\Windows\Start Menu\Programs\Verci.lnk'))"
