// Bouwt een PNG-format .ico (16/32/48) uit de gegenereerde favicon-PNG's.
const fs = require('fs');
const path = require('path');

const pub = path.join(__dirname, '..', 'public');
const sizes = [16, 32, 48];
const pngs = sizes.map((s) => fs.readFileSync(path.join(pub, `favicon-${s}.png`)));

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(pngs.length, 4); // count

let offset = 6 + 16 * pngs.length;
const dirs = [];
pngs.forEach((png, i) => {
  const sz = sizes[i];
  const dir = Buffer.alloc(16);
  dir.writeUInt8(sz >= 256 ? 0 : sz, 0); // width
  dir.writeUInt8(sz >= 256 ? 0 : sz, 1); // height
  dir.writeUInt8(0, 2); // palette
  dir.writeUInt8(0, 3); // reserved
  dir.writeUInt16LE(1, 4); // color planes
  dir.writeUInt16LE(32, 6); // bits per pixel
  dir.writeUInt32LE(png.length, 8); // size of image data
  dir.writeUInt32LE(offset, 12); // offset
  offset += png.length;
  dirs.push(dir);
});

const ico = Buffer.concat([header, ...dirs, ...pngs]);
fs.writeFileSync(path.join(__dirname, '..', 'src', 'app', 'favicon.ico'), ico);
console.log('favicon.ico written:', ico.length, 'bytes');
