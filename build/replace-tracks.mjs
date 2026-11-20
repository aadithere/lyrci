import fs from 'node:fs'

const path = 'src/main.js'
let source = fs.readFileSync(path, 'utf8')
const start = source.indexOf('const TRACKS = [')
const end = source.indexOf('/* ---------------- styles', start)
if (start < 0 || end < 0) throw new Error('markers not found')

const replacement = `const TRACKS = [
  {
    title: 'Waiting for playback',
    artist: 'Spotify · Apple Music',
    album: '',
    duration: 240,
    art: 'linear-gradient(150deg, #2a2330, #12101a 60%, #07070b)',
    palette: { c1: '#f4f4f5', c2: '#fb6e90', c3: '#9b9ba3' },
    lines: [],
  },
]

`

source = source.slice(0, start) + replacement + source.slice(end)
fs.writeFileSync(path, source)
console.log('tracks replaced')
