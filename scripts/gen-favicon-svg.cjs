// Bouwt een vierkante favicon-SVG uit het ECHTE logobestand (badkamerstijl_white.svg):
// neemt alleen de druppel (verwijdert het BADKAMERSTIJL-wordmerk) en crop't naar een
// vierkante tegel rond de druppel. Druppel zit op viewBox-bbox x657 y64 w246 h384 (center 780,256).
const fs = require('fs');
const path = require('path');

const SRC = '/Users/iliaslaghrib/Downloads/colors 2/badkamerstijl_white.svg';
let s = fs.readFileSync(SRC, 'utf8');

// 1. wordmerk (<text>...</text>) eruit
s = s.replace(/<text[\s\S]*?<\/text>\s*/, '');

// 2. vierkante viewBox rond de druppel + donkere tegel ervoor
//    center (780,256), zijde 545 -> viewBox "507.5 -16.5 545 545"
const open =
  '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="507.5 -16.5 545 545">' +
  '<rect x="507.5" y="-16.5" width="545" height="545" rx="109" fill="#1E2326"/>';
s = s.replace(/<svg[^>]*>/, open);

const out = path.join(__dirname, 'favicon-drop.svg');
fs.writeFileSync(out, s);
console.log('written favicon-drop.svg:', s.length, 'bytes');
