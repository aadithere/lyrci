$w = New-Object -ComObject WScript.Shell
$paths = @(
  (Join-Path $env:USERPROFILE 'Desktop\Verci.lnk'),
  (Join-Path $env:APPDATA 'Microsoft\Windows\Start Menu\Programs\Verci.lnk')
)
foreach ($p in $paths) {
  if (Test-Path $p) {
    $s = $w.CreateShortcut($p)
    Write-Output "$p -> $($s.TargetPath)"
  }
}
