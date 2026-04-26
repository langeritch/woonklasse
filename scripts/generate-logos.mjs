import fs from 'fs';
import sharp from 'sharp';
import path from 'path';

const OUT = 'public/logos';

// ── Path data (internal 10240×10240 coord space, Y-up) ──────────────
const ICON_PATHS = [
  `M4605 7340 c-280 -186 -511 -337 -513 -335 -3 2 -4 98 -3 213 1 114 -1 216 -5 225 l-6 17 -324 0 -324 0 0 -450 0 -450 -335 -222 -334 -223 -1 -237 c0 -131 2 -238 4 -238 3 0 258 168 568 373 1493 990 1778 1177 1788 1177 15 0 680 -440 680 -449 0 -7 -770 -529 -897 -609 l-53 -34 0 -229 0 -229 10 0 c6 0 301 194 656 431 354 237 651 429 658 426 7 -3 302 -197 655 -431 353 -234 644 -426 647 -426 2 0 4 107 4 238 l0 237 -1013 672 c-1191 791 -1347 893 -1350 892 -1 0 -231 -153 -512 -339z`,
  `M4484 6586 l-199 -133 -3 -1382 -2 -1381 210 0 210 0 0 1515 c0 834 -4 1515 -9 1515 -4 0 -98 -60 -207 -134z`,
  `M5583 5909 l-43 -30 0 -1095 0 -1094 210 0 210 0 0 790 c0 435 2 790 5 790 3 0 87 -50 188 -112 366 -223 484 -295 564 -344 l82 -49 1 -537 0 -538 340 0 340 0 0 90 0 90 -160 0 -160 0 0 890 0 890 -173 115 c-96 63 -177 115 -180 115 -4 0 -7 -144 -7 -320 0 -176 -3 -320 -6 -320 -8 0 -171 98 -544 328 -494 305 -604 372 -615 372 -5 -1 -29 -14 -52 -31z`,
  `M3252 5765 l-172 -115 0 -890 0 -890 -160 0 -160 0 0 -90 0 -90 340 0 340 0 2 537 3 538 342 210 343 210 0 233 c0 127 -2 232 -5 232 -3 0 -24 -12 -48 -27 -23 -15 -176 -109 -339 -209 l-298 -183 0 325 c0 178 -3 324 -8 324 -4 0 -85 -52 -180 -115z`,
  `M5113 5593 l-203 -136 0 -884 0 -883 210 0 210 0 0 1020 c0 561 -3 1020 -7 1019 -5 0 -99 -62 -210 -136z`,
];

const TEXT_PATHS = [
  `M1700 3170 c0 -3 44 -138 98 -300 l98 -295 76 -3 77 -3 61 188 c34 103 65 191 68 195 4 4 34 -79 68 -185 l61 -192 75 -3 75 -3 12 28 c6 15 51 150 100 298 l88 270 -15 9 c-16 9 -111 1 -123 -11 -4 -5 -35 -95 -69 -202 l-63 -194 -8 15 c-8 15 -84 246 -110 336 -7 23 -18 47 -25 53 -7 5 -39 9 -71 7 l-58 -3 -65 -197 c-35 -109 -67 -198 -70 -198 -3 0 -33 88 -68 194 l-63 195 -28 6 c-33 7 -121 4 -121 -5z`,
  `M 2715 2872 a 322,322 0 1,0 644,0 a 322,322 0 1,0 -644,0 z M 2847 2872 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0 z`,
  `M 3458 2872 a 322,322 0 1,0 644,0 a 322,322 0 1,0 -644,0 z M 3590 2872 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0 z`,
  `M4258 3173 l-28 -4 0 -300 0 -300 73 3 72 3 5 172 5 172 65 -78 c36 -43 101 -122 145 -175 l79 -96 58 0 58 0 -2 303 -3 302 -65 -1 -65 -1 -3 -177 -2 -177 -151 180 -151 181 -31 -1 c-18 -1 -44 -4 -59 -6z`,
  `M4956 3173 c-3 -3 -6 -141 -6 -305 l0 -299 73 3 72 3 3 76 3 77 34 38 35 39 30 -35 c17 -19 60 -72 97 -117 l66 -83 84 0 c45 0 83 3 83 7 0 5 -166 215 -247 314 l-13 16 120 128 c66 71 120 132 120 136 0 4 -35 5 -77 3 l-78 -4 -127 -130 c-70 -72 -129 -130 -130 -130 -2 0 -4 57 -5 126 -1 70 -4 128 -5 129 -8 6 -126 13 -132 8z`,
  `M5620 2875 l0 -305 225 0 225 0 0 60 0 60 -150 0 -150 0 -2 243 -3 242 -72 3 -73 3 0 -306z`,
  `M6371 3163 c-18 -34 -261 -582 -261 -589 0 -2 33 -4 73 -4 l72 0 26 63 25 62 142 3 141 3 20 -48 c12 -27 25 -55 29 -63 l9 -15 77 -3 c42 -2 76 -1 76 1 0 3 -42 94 -94 205 -52 110 -113 242 -136 295 l-42 94 -51 7 c-80 9 -96 7 -106 -11z m128 -251 c23 -51 41 -95 41 -97 0 -3 -41 -5 -91 -5 l-91 0 5 13 c37 96 83 194 89 189 3 -4 25 -49 47 -100z`,
  `M6997 3165 c-21 -8 -52 -24 -69 -36 -36 -26 -67 -90 -68 -138 0 -46 35 -105 79 -129 20 -11 77 -30 126 -42 50 -13 102 -28 116 -36 55 -28 43 -77 -23 -94 -53 -15 -129 -5 -197 26 -29 13 -57 24 -61 24 -4 0 -17 -23 -30 -51 l-22 -52 14 -9 c31 -22 101 -48 158 -59 70 -14 162 -7 217 16 133 56 164 209 60 289 l-35 27 -103 25 c-57 15 -114 32 -126 40 -29 18 -30 55 -2 80 l20 18 67 0 67 0 49 -22 c27 -12 50 -22 51 -22 1 0 12 23 24 50 12 28 19 55 16 60 -3 5 -30 18 -61 29 l-55 21 -87 -1 c-48 0 -104 -7 -125 -14z`,
  `M7582 3167 c-48 -18 -102 -65 -118 -103 -32 -77 -6 -163 62 -201 21 -11 84 -33 139 -47 54 -15 107 -34 117 -43 40 -36 9 -79 -64 -89 -53 -7 -138 10 -187 38 -19 10 -39 17 -46 14 -6 -2 -20 -25 -30 -51 l-18 -48 23 -17 c32 -24 118 -50 192 -57 35 -3 88 0 120 6 65 14 130 57 153 100 8 17 15 54 15 83 l0 54 -17 24 c-9 14 -24 31 -33 38 -25 21 -91 48 -150 61 -82 18 -138 40 -144 57 -3 8 -1 25 4 38 l9 24 36 12 37 12 52 -7 c28 -3 71 -15 95 -26 24 -10 45 -18 46 -17 1 2 11 27 23 56 l21 53 -47 22 -47 21 -105 3 -105 3 -33 -13z`,
  `M8060 2875 l0 -305 240 0 240 0 0 60 0 60 -165 0 -165 0 0 65 0 65 140 0 140 0 0 60 0 60 -140 0 -140 0 0 60 0 60 160 0 161 0 -3 58 -3 57 -232 3 -233 2 0 -305z`,
];

const UNDERLINE = `M 2200 2400 L 8050 2400 L 8050 2355 L 2200 2355 Z`;

// ── Bounding boxes in internal 10240 space (Y-up) ────────────────────
// Icon: x 2900-7100, y 3690-7460
const ICON = { x1: 2900, y1: 3690, x2: 7100, y2: 7460, cx: 5000, cy: 5575, w: 4200, h: 3770 };
// Text: x 1700-8540, y 2550-3200
const TEXT = { x1: 1700, y1: 2550, x2: 8540, y2: 3200, cx: 5120, cy: 2875, w: 6840, h: 650 };
// Text+underline: y 2355-3200
const TEXT_UL = { x1: 1700, y1: 2355, x2: 8540, y2: 3200, w: 6840, h: 845 };

// ── Color themes ─────────────────────────────────────────────────────
const COLORS = {
  'gold':           { fg: '#c9a96e', bg: null },
  'white':          { fg: '#ffffff', bg: null },
  'black':          { fg: '#1a1a1a', bg: null },
  'gold-on-dark':   { fg: '#c9a96e', bg: '#0a0a0a' },
  'white-on-dark':  { fg: '#ffffff', bg: '#0a0a0a' },
  'gold-on-navy':   { fg: '#c9a96e', bg: '#0d1b2a' },
  'white-on-navy':  { fg: '#ffffff', bg: '#0d1b2a' },
  'gold-on-green':  { fg: '#c9a96e', bg: '#1a2e1a' },
  'cream':          { fg: '#e8d5b0', bg: null },
  'cream-on-dark':  { fg: '#e8d5b0', bg: '#0a0a0a' },
};

// ── Helpers ──────────────────────────────────────────────────────────
function pathsSvg(paths, fill) {
  return paths.map(d => `<path d="${d}" fill="${fill}"/>`).join('');
}

// Calculate transform to map internal bbox to output rectangle
// Internal Y is up, output Y is down → need Y flip
function fitTransform(src, dst) {
  const sx = dst.w / src.w;
  const sy = dst.h / src.h;
  const s = Math.min(sx, sy);
  const scaledW = src.w * s;
  const scaledH = src.h * s;
  // Center in destination
  const ox = dst.x + (dst.w - scaledW) / 2;
  const oy = dst.y + (dst.h - scaledH) / 2;
  // Transform: point (px, py) in internal → (px*s + tx, py*(-s) + ty)
  const tx = ox - src.x1 * s;
  const ty = oy + src.y2 * s; // y2 is top in internal = top in output after flip
  return `translate(${tx.toFixed(2)},${ty.toFixed(2)}) scale(${s.toFixed(6)},${(-s).toFixed(6)})`;
}

// ── SVG builders ─────────────────────────────────────────────────────
function buildStacked(color, underline) {
  const { fg, bg } = COLORS[color];
  const bgRect = bg ? `<rect width="1024" height="1024" fill="${bg}"/>` : '';
  const allPaths = [...ICON_PATHS, ...TEXT_PATHS, ...(underline ? [UNDERLINE] : [])];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">${bgRect}<g transform="translate(0,1024) scale(0.1,-0.1)">${pathsSvg(allPaths, fg)}</g></svg>`;
}

function buildHorizontal(color, underline) {
  const { fg, bg } = COLORS[color];
  const vw = 2400, vh = 1024;
  const bgRect = bg ? `<rect width="${vw}" height="${vh}" fill="${bg}"/>` : '';

  // Icon: fit into left 40% with padding
  const iconDst = { x: 80, y: 120, w: 800, h: 784 };
  const iconTx = fitTransform(ICON, iconDst);

  // Text: fit into right 55% vertically centered
  const textSrc = underline ? TEXT_UL : TEXT;
  const textDst = { x: 1000, y: 340, w: 1320, h: 344 };
  const textTx = fitTransform(textSrc, textDst);

  const textPaths = [...TEXT_PATHS, ...(underline ? [UNDERLINE] : [])];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vw} ${vh}">${bgRect}<g transform="${iconTx}">${pathsSvg(ICON_PATHS, fg)}</g><g transform="${textTx}">${pathsSvg(textPaths, fg)}</g></svg>`;
}

function buildIconOnly(color) {
  const { fg, bg } = COLORS[color];
  const vw = 1024, vh = 1024;
  const bgRect = bg ? `<rect width="${vw}" height="${vh}" fill="${bg}"/>` : '';
  const dst = { x: 100, y: 100, w: 824, h: 824 };
  const tx = fitTransform(ICON, dst);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vw} ${vh}">${bgRect}<g transform="${tx}">${pathsSvg(ICON_PATHS, fg)}</g></svg>`;
}

function buildTextOnly(color, underline) {
  const { fg, bg } = COLORS[color];
  const src = underline ? TEXT_UL : TEXT;
  const aspect = src.w / src.h;
  const vh = 120;
  const vw = Math.round(vh * aspect);
  const bgRect = bg ? `<rect width="${vw}" height="${vh}" fill="${bg}"/>` : '';
  const pad = 8;
  const dst = { x: pad, y: pad, w: vw - pad * 2, h: vh - pad * 2 };
  const tx = fitTransform(src, dst);
  const textPaths = [...TEXT_PATHS, ...(underline ? [UNDERLINE] : [])];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vw} ${vh}">${bgRect}<g transform="${tx}">${pathsSvg(textPaths, fg)}</g></svg>`;
}

// ── Generate ─────────────────────────────────────────────────────────
async function main() {
  const svgFiles = [];

  for (const color of Object.keys(COLORS)) {
    for (const ul of [false, true]) {
      const suf = ul ? '-underline' : '';

      // Stacked
      let name = `woonklasse-stacked-${color}${suf}`;
      let svg = buildStacked(color, ul);
      let p = `${OUT}/stacked/svg/${name}.svg`;
      fs.writeFileSync(p, svg);
      svgFiles.push({ p, name, layout: 'stacked', w: 1024, h: 1024 });

      // Horizontal
      name = `woonklasse-horizontal-${color}${suf}`;
      svg = buildHorizontal(color, ul);
      p = `${OUT}/horizontal/svg/${name}.svg`;
      fs.writeFileSync(p, svg);
      svgFiles.push({ p, name, layout: 'horizontal', w: 2400, h: 1024 });

      // Text only
      name = `woonklasse-text-${color}${suf}`;
      svg = buildTextOnly(color, ul);
      p = `${OUT}/text-only/svg/${name}.svg`;
      fs.writeFileSync(p, svg);
      svgFiles.push({ p, name, layout: 'text-only', w: 1200, h: 120 });
    }

    // Icon only (no underline variant)
    const name = `woonklasse-icon-${color}`;
    const svg = buildIconOnly(color);
    const p = `${OUT}/icon-only/svg/${name}.svg`;
    fs.writeFileSync(p, svg);
    svgFiles.push({ p, name, layout: 'icon-only', w: 1024, h: 1024 });
  }

  console.log(`Generated ${svgFiles.length} SVG files`);

  // ── Rasterize to PNG + WebP ────────────────────────────────────────
  const SIZES = [256, 512, 1024, 2048];

  for (const { p: svgPath, name, layout, w, h } of svgFiles) {
    const svgBuf = fs.readFileSync(svgPath);
    const aspect = w / h;

    for (const size of SIZES) {
      const outH = size;
      const outW = Math.round(size * aspect);

      await sharp(svgBuf).resize(outW, outH).png().toFile(`${OUT}/${layout}/png/${name}-${size}.png`);
      if (outW <= 4096 && outH <= 4096) {
        await sharp(svgBuf).resize(outW, outH).webp({ quality: 95 }).toFile(`${OUT}/${layout}/webp/${name}-${size}.webp`);
      }
    }
    console.log(`  ${name}`);
  }

  // Count
  let total = 0;
  (function count(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true }))
      e.isDirectory() ? count(path.join(dir, e.name)) : total++;
  })(OUT);

  console.log(`\nTotal: ${total} files`);
}

main().catch(console.error);
