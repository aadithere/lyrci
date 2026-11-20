const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('verci', {
  desktop: true,
  nowPlaying: () => ipcRenderer.invoke('now-playing'),
  lyrics: (query) => ipcRenderer.invoke('lyrics', query),
})
