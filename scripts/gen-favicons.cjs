const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync(path.join(__dirname, 'favicon-drop.svg'));
const pub = path.join(__dirname, '..', 'public');

const targets = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['favicon-48.png', 48],
  ['apple-touch-icon.png', 180],
  ['icon-192x192.png', 192],
  ['icon-512x512.png', 512],
];

Promise.all(
  targets.map(([name, size]) =>
    sharp(svg, { density: 600 })
      .resize(size, size)
      .png()
      .toFile(path.join(pub, name))
      .then(() => console.log('wrote', name, size))
  )
)
  .then(() => console.log('all favicons generated'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
