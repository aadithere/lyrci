import { app, BrowserWindow, ipcMain, net } from 'electron'
import electronUpdater from 'electron-updater'
import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const { autoUpdater } = electronUpdater

let win = null
let npProc = null
let restartTimer = null
let latest = { playing: false, apps: [] }
let updateState = { state: 'idle', version: null, percent: 0, message: null }
let updateTimer = null

function startNowPlaying() {
  if (npProc) return
  // PowerShell cannot read a script from inside app.asar, so packaged builds
  // get a copy in resources/ via the extraResources config.
  const script = app.isPackaged
    ? path.join(process.resourcesPath, 'nowplaying.ps1')
    : path.join(__dirname, 'nowplaying.ps1')
  npProc = spawn('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', script], {
    windowsHide: true,
    stdio: ['ignore', 'pipe', 'ignore'],
  })

  let buffer = ''
  npProc.stdout.setEncoding('utf8')
  npProc.stdout.on('data', (chunk) => {
    buffer += chunk
    let cut
    while ((cut = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, cut).trim()
      buffer = buffer.slice(cut + 1)
      if (!line.startsWith('{')) continue
      try {
        latest = JSON.parse(line)
      } catch {
        /* ignore malformed line */
      }
    }
  })

  const restart = () => {
    npProc = null
    restartTimer = setTimeout(startNowPlaying, 2500)
  }
  npProc.on('exit', restart)
  npProc.on('error', restart)
}

const clean = (value) =>
  String(value || '')
    .replace(/\s*[([].*?[)\]]\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

async function fetchLyrics(query) {
  const headers = { 'User-Agent': 'Verci/1.0 (desktop lyrics app)' }
  const title = clean(query.title)
  const artist = clean(query.artist)
  const album = clean(query.album)
  const duration = Number(query.duration) || 0
  if (!title) return { synced: null, plain: null }

  const params = new URLSearchParams({ track_name: title, artist_name: artist })
  if (album) params.set('album_name', album)
  if (duration) params.set('duration', String(Math.round(duration)))

  try {
    const res = await net.fetch(`https://lrclib.net/api/get?${params}`, { headers })
    if (res.ok) {
      const hit = await res.json()
      if (hit?.syncedLyrics || hit?.plainLyrics) {
        return { synced: hit.syncedLyrics || null, plain: hit.plainLyrics || null, title: hit.trackName, artist: hit.artistName }
      }
    }
  } catch {
    /* fall through to search */
  }

  try {
    const res = await net.fetch(`https://lrclib.net/api/search?${new URLSearchParams({ q: `${title} ${artist}` })}`, { headers })
    if (res.ok) {
      const list = await res.json()
      const hit = Array.isArray(list) ? list.find((item) => item.syncedLyrics) || list[0] : null
      if (hit?.syncedLyrics || hit?.plainLyrics) {
        return { synced: hit.syncedLyrics || null, plain: hit.plainLyrics || null, title: hit.trackName, artist: hit.artistName }
      }
    }
  } catch {
    /* no lyrics available */
  }

  if (artist) {
    try {
      const res = await net.fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`, { headers })
      if (res.ok) {
        const hit = await res.json()
        if (hit?.lyrics) return { synced: null, plain: hit.lyrics, title, artist }
      }
    } catch {
      /* third provider unavailable */
    }
  }

  return { synced: null, plain: null }
}

function sendUpdateState(patch) {
  updateState = { ...updateState, ...patch }
  if (win && !win.isDestroyed()) win.webContents.send('update-state', updateState)
}

function setupUpdater() {
  if (!app.isPackaged) return
  autoUpdater.autoDownload = true
  autoUpdater.autoInstallOnAppQuit = true
  autoUpdater.on('checking-for-update', () => sendUpdateState({ state: 'checking' }))
  autoUpdater.on('update-available', (info) => sendUpdateState({ state: 'available', version: info.version, percent: 0 }))
  autoUpdater.on('update-not-available', () => sendUpdateState({ state: 'current' }))
  autoUpdater.on('download-progress', (progress) =>
    sendUpdateState({ state: 'downloading', percent: Math.round(progress.percent || 0) }),
  )
  autoUpdater.on('update-downloaded', (info) => sendUpdateState({ state: 'ready', version: info.version, percent: 100 }))
  autoUpdater.on('error', (error) => sendUpdateState({ state: 'error', message: String(error?.message || error) }))

  const check = () =>
    autoUpdater.checkForUpdates().catch((error) =>
      sendUpdateState({ state: 'error', message: String(error?.message || error) }),
    )
  setTimeout(check, 5000)
  updateTimer = setInterval(check, 30 * 60 * 1000)
}

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 880,
    minWidth: 760,
    minHeight: 560,
    backgroundColor: '#050506',
    autoHideMenuBar: true,
    title: 'Verci',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0b0b10',
      symbolColor: '#e8e8ee',
      height: 44,
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) win.loadURL(process.env.VITE_DEV_SERVER_URL)
  else win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'))
}

app.whenReady().then(() => {
  ipcMain.handle('now-playing', () => latest)
  ipcMain.handle('lyrics', (_event, query) => fetchLyrics(query || {}))
  ipcMain.handle('update-state', () => updateState)
  ipcMain.handle('update-check', () => {
    if (app.isPackaged) autoUpdater.checkForUpdates().catch(() => {})
    return updateState
  })
  ipcMain.handle('update-install', () => {
    if (app.isPackaged) autoUpdater.quitAndInstall()
  })
  startNowPlaying()
  createWindow()
  setupUpdater()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('before-quit', () => {
  if (restartTimer) clearTimeout(restartTimer)
  if (updateTimer) clearInterval(updateTimer)
  if (npProc) npProc.kill()
})
