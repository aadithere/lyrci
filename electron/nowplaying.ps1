$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
  $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'
})[0]

function Await($WinRtTask, $ResultType) {
  $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
  $netTask = $asTask.Invoke($null, @($WinRtTask))
  $netTask.Wait(-1) | Out-Null
  $netTask.Result
}

[Windows.Media.Control.GlobalSystemMediaTransportControlsSessionManager, Windows.Media.Control, ContentType = WindowsRuntime] | Out-Null
$manager = Await ([Windows.Media.Control.GlobalSystemMediaTransportControlsSessionManager]::RequestAsync()) ([Windows.Media.Control.GlobalSystemMediaTransportControlsSessionManager])

function Get-SessionApps {
  $apps = @()
  try {
    foreach ($s in @($manager.GetSessions())) {
      try {
        $appInfo = $s.GetPlaybackInfo()
        $apps += [ordered]@{
          id      = [string]$s.SourceAppUserModelId
          playing = ($appInfo.PlaybackStatus.ToString() -eq 'Playing')
        }
      } catch {
        $apps += [ordered]@{ id = [string]$s.SourceAppUserModelId; playing = $false }
      }
    }
  } catch {
    $apps = @()
  }
  return @($apps)
}

while ($true) {
  try {
    $session = $manager.GetCurrentSession()
    $apps = Get-SessionApps
    if ($null -eq $session) {
      $idle = [ordered]@{ playing = $false; apps = @($apps) }
      Write-Output ($idle | ConvertTo-Json -Compress -Depth 5)
    } else {
      $props = Await ($session.TryGetMediaPropertiesAsync()) ([Windows.Media.Control.GlobalSystemMediaTransportControlsSessionMediaProperties])
      $timeline = $session.GetTimelineProperties()
      $info = $session.GetPlaybackInfo()
      $obj = [ordered]@{
        title    = [string]$props.Title
        artist   = [string]$props.Artist
        album    = [string]$props.AlbumTitle
        position = [math]::Round($timeline.Position.TotalSeconds, 2)
        duration = [math]::Round($timeline.EndTime.TotalSeconds, 2)
        playing  = ($info.PlaybackStatus.ToString() -eq 'Playing')
        source   = [string]$session.SourceAppUserModelId
        apps     = @($apps)
      }
      Write-Output ($obj | ConvertTo-Json -Compress -Depth 5)
    }
  } catch {
    Write-Output '{"playing":false,"apps":[]}'
  }
  [Console]::Out.Flush()
  Start-Sleep -Milliseconds 900
}
