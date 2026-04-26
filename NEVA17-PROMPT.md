# Project NEVA17 — Prompt Template

Plak onderstaand blok in een nieuwe chat, gevolgd door je instructie.

---

## Prompt

```
Project: NEVA17
Codebase: /Users/sander/Desktop/Projects/woonklasse-badkamerstijl
Tech: Next.js 16, React 19, Tailwind CSS 4, Framer Motion, GSAP, Swiper, Lenis
Live: https://woonklasse-badkamerstijl.vercel.app
Domeinen: woonklasse.nl / badkamerstijl.nl
Deploy: vercel --prod --yes

## Beschikbare Woonklasse foto's (als visueel voorbeeld)

### Hero/portfolio foto's — /public/woonklasse/
- apartment-amsterdam-{1-5}.jpg
- canal-residence-{1-5}.jpg
- penthouse-amsterdam-{1-5}.jpg
- penthouse-zoetermeer-{1-5}.jpg
- villa-bergen-{1-5}.jpg

### Projectfoto's — /public/woonklasse/projecten/
- complete-renovatie/{1-22}.jpg       (22 foto's)
- drielaagse-transformatie/{1-22}.jpg  (22 foto's)
- dubbel-penthouse/{1-33}.jpg          (33 foto's)
- luxe-afwerking/{1-51}.jpg            (51 foto's)
- totaalverbouwing/{1-33}.jpg          (33 foto's)

### Badkamerstijl foto's — /public/badkamerstijl/
- 2000xxs(3).jpg
- 2200xxs({2,3,4,7,24-32,37,43,44,46,47}).jpg
- 2200xxsxm({26,27,28,36}).jpg

### Badkamer stijl-iconen — /public/badkamers/
- beton.png, japandi.png, klassiek.png, landelijk.png
- luxe.png, marmer.png, modern.png, scandinavisch.png

### Logo's — /public/woonklasse-logo-*.{svg,png} + /public/logos/
Volledige logo-set (horizontaal, verticaal, monochroom, goud, cream, wit, zwart) in SVG + PNG (256–2048px)

### Overige assets
- /public/badkamerstijl-logo-v2.png
- /public/email-hero-badkamerstijl.jpg
- /public/email-hero-woonklasse.jpg
- /public/og-image.png

Gebruik deze foto's als visueel voorbeeld/referentie voor de implementatie.
Lees CLAUDE.md en DOEL.md voor projectregels.

## Instructie:

[PLAK HIER JE INSTRUCTIE]
```
