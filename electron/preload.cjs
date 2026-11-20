const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('verci', {
  desktop: true,
  nowPlaying: () => ipcRenderer.invoke('now-playing'),
  lyrics: (query) => ipcRenderer.invoke('lyrics', query),
  updateState: () => ipcRenderer.invoke('update-state'),
  checkForUpdates: () => ipcRenderer.invoke('update-check'),
  installUpdate: () => ipcRenderer.invoke('update-install'),
  onUpdateState: (callback) => {
    const handler = (_event, state) => callback(state)
    ipcRenderer.on('update-state', handler)
    return () => ipcRenderer.removeListener('update-state', handler)
  },
})
