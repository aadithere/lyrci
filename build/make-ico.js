import fs from 'node:fs'

const sizes = [16, 24, 32, 48, 64, 128, 256]
const pngs = sizes.map((size) => fs.readFileSync(`build/icon-${size}.png`))

const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(sizes.length, 4)

const dir = Buffer.alloc(16 * sizes.length)
let offset = 6 + dir.length

sizes.forEach((size, i) => {
  const png = pngs[i]
  const at = i * 16
  dir.writeUInt8(size >= 256 ? 0 : size, at)
  dir.writeUInt8(size >= 256 ? 0 : size, at + 1)
  dir.writeUInt8(0, at + 2)
  dir.writeUInt8(0, at + 3)
  dir.writeUInt16LE(1, at + 4)
  dir.writeUInt16LE(32, at + 6)
  dir.writeUInt32LE(png.length, at + 8)
  dir.writeUInt32LE(offset, at + 12)
  offset += png.length
})

fs.writeFileSync('build/icon.ico', Buffer.concat([header, dir, ...pngs]))
console.log('icon.ico', fs.statSync('build/icon.ico').size, 'bytes')
