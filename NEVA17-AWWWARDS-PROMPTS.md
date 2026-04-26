# NEVA17 x Awwwards — 6 Design Prompts

Gebaseerd op award-winning architectuur websites (Fluid Glass, Carles Faus, Studio X, Lanterne Architectes) gecombineerd met het NEVA17 project.

---

## PROMPT 1 — "Fluid Glass" stijl (Premium Glazing)
**Inspiratie: fluid.glass door Exo Ape — Awwwards SOTD 7.77/10 — Nuxt.js, GSAP, Vercel**

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

Herbouw de Woonklasse homepage in de stijl van fluid.glass (Awwwards SOTD). Dit is een premium architectuur website met de volgende kenmerken:

### KLEURENPALET
- Achtergrond: warm off-white/cream (#F5F0EB)
- Tekst: near-black (#1A1A1A)
- Accent: dark charcoal (#2D2D2D) voor buttons
- Wit (#FFFFFF) voor tekst op donkere achtergronden

### TYPOGRAFIE
- Headings: Groot serif font (gebruik "Playfair Display" of "Cormorant Garamond"), hero heading 80-120px met clamp()
- Body: Clean sans-serif ("Inter" of "DM Sans"), 16-18px
- Sectie labels: Monospace/uppercase, letterspacing 0.2em, 12-14px, voorafgegaan door een diamant symbool (◆) — bijv. "◆ ONZE PROJECTEN"
- CTA buttons: Monospace uppercase met pijl-icoon (↳), donkere achtergrond, witte tekst, rounded

### LAYOUT & SECTIES

1. **HERO (100vh)**: Fullscreen achtergrondfoto (gebruik villa-bergen-1.jpg of penthouse-amsterdam-1.jpg). Gecentreerde grote serif headline "Uitzonderlijk vakmanschap voor wie bouwt met visie." in wit. Top: Woonklasse logo links, "OFFERTE AANVRAGEN" rechts met pijl. Onderaan: floating donkere pill-shaped navigatiebar (fixed) met logo-icon, paginanaam, en hamburger menu.

2. **INTRO (cream achtergrond)**: Links "◆ INTERIEUR SPECIALISTEN" label. Rechts: bodytekst over Woonklasse. Ruime whitespace (120px+ padding verticaal).

3. **OVER ONS**: "◆ OVER WOONKLASSE" label. Grote gecentreerde serif heading als mission statement over 3-4 regels. Daaronder: donkere CTA button "WIE WE ZIJN" met pijl.

4. **PROJECTEN COLLECTIE**: "◆ ONZE PROJECTEN" label. Links: grote foto (dubbel-penthouse/1.jpg) met witte serif overlay tekst "Penthouse". Rechts: beschrijving + "BEKIJK PROJECTEN" CTA. Daaronder: horizontaal scrollende rij van 3 projectkaarten (afbeelding + wit label), verspringende hoogtes. Gebruik: complete-renovatie/1.jpg, luxe-afwerking/1.jpg, totaalverbouwing/1.jpg.

5. **SHOWROOM SECTIE**: Fullwidth architectuurfoto (canal-residence-1.jpg, donkere mood). Overlay serif heading links "Waar precisie en creativiteit samenkomen." Rechts: adresgegevens + "SHOWROOM" button. Subtiel parallax scroll effect.

6. **UITGELICHTE PROJECTEN**: Lijst met horizontale lijnen. Projectnaam links + tags in pill badges rechts + pijl link. Bij hover: projectfoto verschijnt achter tekst. Projecten: "Dubbel Penthouse — Amsterdam", "Complete Renovatie — Zuid-Holland", "Luxe Afwerking — Utrecht", "Totaalverbouwing — Noord-Holland", "Drielaagse Transformatie — Den Haag".

7. **TESTIMONIAL**: Links: ronde portretfoto. Rechts: groot serif citaat. Daaronder: naam + titel in klein monospace. Google Review badge rechtsonder.

8. **CTA SECTIE**: Lichtgrijs rounded card. "◆ WAAR VISIE WERKELIJKHEID WORDT" label. Grote serif heading. Twee buttons: filled "ONZE AANPAK" + outlined "NEEM CONTACT OP". Rechts: subtiele architecturale lijntekening.

9. **FOOTER**: Fullwidth hero foto van architectuur. Gigantische transparante watermark tekst "Woonklasse" eroverheen. Onderste balk: copyright, sociale links, juridische links, credit.

### ANIMATIES (GSAP + Framer Motion)
- Lenis smooth scroll
- Headings: woord-voor-woord reveal op scroll
- Afbeeldingen: schalen van 0.8 naar 1.0 met opacity fade bij scroll-enter
- Parallax op hero en showroom afbeeldingen
- Floating nav: verbergt bij scroll down, verschijnt bij scroll up
- Hover op projectlijst: thumbnail verschijnt en volgt cursor
- CTA buttons: pijl schuift naar rechts bij hover

### RESPONSIVE
- Mobiel: enkele kolom, kleinere typografie, hamburger menu opent fullscreen overlay
- Floating nav compacter op mobiel
- Afbeeldingen stapelen verticaal
```

---

## PROMPT 2 — "Carles Faus" stijl (Avant-garde Gallery)
**Inspiratie: carlesfaus.com door Caleta Studio — Awwwards Honorable Mention — WebGL, Sanity, Figma**

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

Herbouw de Woonklasse homepage in de stijl van carlesfaus.com (Awwwards Honorable Mention). Dit is een avant-garde architectuur portfolio dat past in EEN viewport zonder scrollen.

### KLEURENPALET
- Achtergrond: puur wit (#FFFFFF)
- Tekst: zwart (#000000)
- Puur monochromatisch — de foto's voegen alle kleur toe

### TYPOGRAFIE
- Navigatie & labels: Monospace font ("JetBrains Mono" of "Space Mono"), uppercase, in brackets: [OVER ONS], [PROJECTEN], [CONTACT]
- Projectnamen: Monospace in brackets met categoriecodes: [DUBBEL PENTHOUSE][AMS] [→]
- Alles in monospace voor consistentie
- Taalwisselaar: [NL]/[EN]/[DE] rechtsboven

### LAYOUT — SINGLE VIEWPORT (100vh, GEEN SCROLL)

1. **NAVIGATIE (top)**: Woonklasse logo-icon links, dan gelijkmatig verdeeld [OVER ONS] [PROJECTEN] [CONTACT], taalwisselaar [NL]/[EN]/[DE] rechts.

2. **CENTRAAL — PROJECT CAROUSEL**: Actief projectbeeld groot en gecentreerd (~60% viewport breedte). Vorige/volgende projectbeelden zichtbaar als kleinere thumbnails aan de zijkanten, deels afgesneden. Pixelation/mozaiek dissolve transitie-effect bij wisselen. Projectnaam OVER de actieve afbeelding als monospace: [DUBBEL PENTHOUSE][AMS] [→]. Links/rechts ronde pijlknoppen (○ met < >). Gebruik voor de slides:
   - dubbel-penthouse/1.jpg — [DUBBEL PENTHOUSE][AMS]
   - complete-renovatie/1.jpg — [COMPLETE RENOVATIE][ZH]
   - luxe-afwerking/1.jpg — [LUXE AFWERKING][UTR]
   - totaalverbouwing/1.jpg — [TOTAALVERBOUWING][NH]
   - drielaagse-transformatie/1.jpg — [DRIELAAGSE TRANSFORMATIE][DH]

3. **VERSPREIDE THUMBNAILS**: Kleine asymmetrisch geplaatste thumbnails rondom de carousel:
   - Linksboven: apartment-amsterdam-1.jpg (interieur)
   - Linksonder: penthouse-zoetermeer-2.jpg (detail)
   - Rechtsboven: villa-bergen-1.jpg (exterieur)
   - Rechtsonder: canal-residence-3.jpg (project)
   Deze zijn VEEL kleiner dan de hoofdcarousel.

4. **FOOTER BAR (altijd zichtbaar, onderkant)**: [COOKIES] [PRIVACY] links, [NIEUWS] center-links met kleine thumbnail, [INSTAGRAM] [LINKEDIN] gecentreerd, [W.D.C] rechts, [PERS] uiterst rechts.

### CAROUSEL GEDRAG
- Alleen horizontale navigatie (geen verticaal scrollen op homepage)
- CSS/Canvas pixelation dissolve transitie (gebruik CSS filter of een lichtgewicht canvas shader — GEEN zware Three.js dependency)
- Elke slide toont een ander project met beeld en naam
- Ronde navigatieknoppen links en rechts
- Subtiele parallax op verspreide thumbnails bij muisbeweging

### PROJECTPAGINA (bij klik)
- Fade/dissolve transitie
- Volledige projectgalerij met grote beelden uit de projectmappen
- Projectdetails, locatie, specificaties
- Monospace typografie doorheen

### ANIMATIES
- Pixelation dissolve effect op beeldtransities (het kenmerkende effect — implementeer met CSS pixelated filter + opacity transition, of canvas imageData manipulatie)
- Muis-parallax op verspreide thumbnail afbeeldingen
- Smooth carousel sliding met easing
- Hover: beelden schalen subtiel, cursor verandert
- Page load: beelden fade in gestaffeld vanuit verschillende posities

### RESPONSIVE
- Mobiel: carousel wordt swipeable (Swiper), verspreide thumbnails verborgen
- Navigatie wordt hamburger menu
- Footer links klappen in
```

---

## PROMPT 3 — "Studio X" stijl (Warm Editorial)
**Inspiratie: thisisstudiox.com door Jordan Gilroy — Awwwards Nominee**

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

Herbouw de Woonklasse homepage in de stijl van thisisstudiox.com (Awwwards Nominee). Warm, editorial interieur design met een verfijnd kleurenpalet.

### KLEURENPALET
- Primair achtergrond: warm cream/linnen (#F5F0E8)
- Tekst: donker houtskool (#2A2420)
- Accent: levendig oranje-rood (#E8461E) voor CTAs
- Secundair: warm grijs (#9B9590) voor subtiele tekst
- Donkere secties: rijke chocolade/hout-tinten uit fotografie

### TYPOGRAFIE
- Hero heading: Elegant serif met gemixte gewichten. Sleutelwoorden in ITALIC met underline. Zeer groot (80-140px). Gebruik "Cormorant Garamond" of "Playfair Display".
- Sectie labels: Tussen haakjes: (Over ons), (Projecten), (Inzichten) — lowercase, klein sans-serif, lichtgrijs
- Body: Clean serif, 16-18px
- Nummers: Lichtgewicht groot serif voor processtappen (01, 02, 03, 04)

### LAYOUT & SECTIES

1. **HERO (100vh)**: Fullscreen donkere interieurfotografie (penthouse-amsterdam-1.jpg, warme verlichting). Grote gecentreerde serif tekst met gemixte opmaak: "Wij ontwerpen innovatieve interieurs voor high-end _woningen_, _penthouses_, en _villa's_." waarbij "woningen", "penthouses", "villa's" italic + underlined zijn. GEEN zichtbare navigatie bij load — alleen de floating bottom bar.

2. **FLOATING BOTTOM NAV (fixed)**: Pill-shaped balk, frosted glass achtergrond. Links: Woonklasse logo-icon. Midden: "Menu" tekst met hamburger icoon. Rechts: "Contact" button in oranje-rood (#E8461E) rounded pill. Blijft zichtbaar tijdens hele scroll.

3. **(Over ons) SECTIE**: Label "(Over ons)" in lichtgrijs, links. Grote linkerfoto (tall, ~50% breedte) — canal-residence-2.jpg. Rechts: bodytekst over Woonklasse. Daaronder: oranje-rode CTA "Meer over ons" pill + ronde pijlknop. Rechtsonder: kleine offset afbeelding (apartment-amsterdam-3.jpg) voor asymmetrie.

4. **(Projecten) — DONKERE SECTIE**: Fullwidth donkere achtergrondfoto (dubbel-penthouse/5.jpg). "(Projecten)" label. Grote serif projectnamen overlaid, scattered layout: "Dubbel Penthouse(AMS)", "Complete Renovatie(ZH)", "Luxe Afwerking(UTR)", "Totaalverbouwing(NH)", "Villa Bergen(NH)". Semi-transparant wit, meer zichtbaar bij hover.

5. **PROCES SECTIE (lichte achtergrond)**: Horizontaal scrollende rij van 4 stappen:
   - 01 Concept — "We verhelderen doelen, beperkingen en wensen"
   - 02 Ontwerp — "We vertalen strategie naar een helder ruimtelijk concept"
   - 03 Uitvoering — "We ontwikkelen het concept tot gecoordineerde plannen"
   - 04 Oplevering — "We realiseren het ontwerp tot in het kleinste detail"
   Elk met "Meer info ↗" link. Onder elke stap een foto uit de projectmappen.

6. **PARTNER LOGO'S**: Verspreide/masonry layout van logokaarten op warm beige achtergrond, verschillende groottes, onregelmatige hoogtes. Subtiele fade-in animatie.

7. **TESTIMONIAL**: Links: klantnaam + bedrijf. Rechts: groot serif italic citaat. Navigatiepijlen voor meerdere testimonials.

8. **FULLWIDTH BEELD**: Prachtige interieurfotografie edge-to-edge (luxe-afwerking/10.jpg). Parallax scroll effect.

9. **(Inzichten) BLOG SECTIE**: "(Inzichten)" label. 3-kolom grid van blogposts. Elk: grote afbeelding, datum, bold headline, excerpt. Oranje-rode "Meer van onze blog" pill button.

10. **FOOTER / CTA**: Links: artistieke motion-blur foto. Midden: "Offerte aanvragen" oranje pill + "Plan een gesprek" outline pill. Daaronder: navigatielinks, sociale media, juridisch. Warm cream achtergrond.

### ANIMATIES (GSAP + Framer Motion + Lenis)
- Lenis smooth scroll
- Hero tekst: woorden faden sequentieel in bij laden
- Afbeeldingen: clip-path reveal (wipe van links/onder) bij scroll-enter
- Sectie labels "(Over ons)" etc: fade in van opacity 0
- Processtappen: horizontaal scroll getriggerd door verticaal scroll
- Partner logo's: gestaffelde fade-in met lichte opwaartse beweging
- Floating nav: verschijnt na scrollen voorbij hero
- Hover op projectnamen: opacity verandert, lichte beweging
- CTA buttons: achtergrondkleur vult van links bij hover
- Afbeeldingen: subtiele scale (1.0 naar 1.05) bij scroll

### RESPONSIVE
- Mobiel: enkele kolom, hero tekst kleiner maar nog steeds serif met italic
- Processtappen stapelen verticaal
- Floating nav compacter
- Blog grid wordt enkele kolom
```

---

## PROMPT 4 — "Hybrid Dark" stijl (Fluid Glass x Studio X mashup)
**Mix van de donkere elegantie van Fluid Glass met de warme accenten van Studio X**

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

Herbouw de Woonklasse homepage als een luxe donker-thema website die de elegantie van fluid.glass combineert met de warme accenten van thisisstudiox.com.

### KLEURENPALET
- Primair achtergrond: diep donkergrijs/antraciet (#0F0F0F)
- Secundair achtergrond: warm donkerbruin (#1A1714)
- Tekst: warm wit/cream (#F5F0E8)
- Accent: goud (#C9A96E) voor highlights en hover states
- CTA accent: warm oranje (#E8641E) voor primaire knoppen
- Subtiel: warm grijs (#6B6560) voor secundaire tekst

### TYPOGRAFIE
- Headings: Luxe serif ("Cormorant Garamond" of "Playfair Display"), 80-140px voor hero, goud kleur
- Sectie labels: Monospace uppercase met ◆ symbool, goud kleur, letterspacing 0.3em
- Body: Lichte sans-serif ("Inter" of "DM Sans"), cream kleur, 16-18px
- Speciale woorden in headings: italic + goud underline

### LAYOUT & SECTIES

1. **HERO (100vh)**: Donkere fullscreen video/foto achtergrond (penthouse-amsterdam-1.jpg met donkere overlay 60%). Grote serif heading in cream/goud: "Uitzonderlijk _vakmanschap_ voor wie bouwt met _visie_" (italic woorden in goud). Top: Woonklasse logo in goud/cream links, "OFFERTE AANVRAGEN" met gouden pijl rechts. Floating bottom nav: donkere glasmorfisme pill met gouden accenten.

2. **INTRO (donkere achtergrond #1A1714)**: "◆ INTERIEUR SPECIALISTEN" in goud monospace. Groot serif citaat in cream. Veel ademruimte (150px+ padding).

3. **PROJECTEN SHOWCASE**: Split-screen effect. Links: grote foto (dubbel-penthouse/1.jpg) met zachte reveal animatie. Rechts: projectinfo met gouden nummer "01", projectnaam in serif, locatie, en "BEKIJK PROJECT →" in goud. Bij scrollen wisselen de projecten. 5 projecten totaal, elk met eigen foto en details.

4. **STATISTIEKEN BALK**: Horizontale donkere balk met gouden nummers: "150+ Projecten", "25 Jaar Ervaring", "5.0 Google Review", "100% Op Maat". Nummers tellen op bij scroll-enter.

5. **PROCES SECTIE**: Donkere achtergrond. 4 stappen verticaal met grote gouden nummers (01-04). Elke stap heeft een horizontale lijn erboven, titel in cream serif, beschrijving in grijs. Hover: achtergrond licht op met subtiele projectfoto.

6. **FULLWIDTH BEELD**: Cinematic architectuurfoto (villa-bergen-1.jpg) met parallax. Gecentreerde grote serif tekst in wit: "Waar precisie en creativiteit samenkomen."

7. **TESTIMONIALS**: Donkere achtergrond. Groot serif italic citaat in cream. Gouden aanhalingstekens ("). Klantnaam in goud monospace. Auto-play carousel met Swiper.

8. **CONTACT CTA**: Donkere card met gouden rand (1px). Heading in goud serif. Twee buttons: filled oranje "OFFERTE AANVRAGEN" + outlined goud "PLAN EEN GESPREK". Subtiele glow-effect op hover.

9. **FOOTER**: Zeer donkere achtergrond (#0A0A0A). Woonklasse logo groot en gecentreerd in goud. Daaronder: navigatielinks in cream, sociale iconen in goud, juridische links in grijs. Subtiele gouden lijn als scheiding.

### ANIMATIES
- Lenis smooth scroll met donkere scrollbar
- Headings: letter-by-letter reveal met gouden glow
- Afbeeldingen: cinematic wipe reveal (horizontaal)
- Gouden nummers: count-up animatie bij scroll-enter
- Parallax op alle grote afbeeldingen
- Floating nav: glasmorfisme-effect versterkt bij scrollen
- Hover op projecten: afbeelding schaalt subtiel, gouden border verschijnt
- Cursor: custom gouden cirkel cursor op desktop
- Page load: elegant fade-in met gouden shimmer

### RESPONSIVE
- Mobiel: behoud donker thema, gouden accenten
- Floating nav aangepast voor mobiel
- Projecten stacked in plaats van split-screen
- Statistieken in 2x2 grid
```

---

## PROMPT 5 — "Architectural Collage" stijl (Carles Faus x Fluid Glass mashup)
**Mix van de galerij-layout van Carles Faus met de scroll-diepte van Fluid Glass**

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

Herbouw de Woonklasse homepage als een architecturale collage-website die de verspreide galerij-esthetiek van carlesfaus.com combineert met de scrolldiepte en secties van fluid.glass.

### KLEURENPALET
- Achtergrond: puur wit (#FFFFFF) voor collage secties
- Alternerende secties: warm off-white (#F8F5F0)
- Tekst: zwart (#000000)
- Accenten: geen kleur — puur monochromatisch
- Foto's zijn de enige kleurbron

### TYPOGRAFIE
- Navigatie: Monospace in brackets [OVER ONS] [PROJECTEN] [CONTACT] — gelijkmatig verdeeld
- Headings: Mix van groot monospace (voor labels) en elegant serif (voor statements)
- Projectnamen: Monospace met locatiecodes [DUBBEL PENTHOUSE][AMS]
- Body: Clean monospace, 15-16px
- Grote decoratieve nummers: ultra-thin serif, 200px+ voor sectienummers

### LAYOUT & SECTIES

1. **HERO — COLLAGE VIEW (100vh)**: Witte achtergrond. Verspreide asymmetrische foto's op verschillende posities en groottes:
   - Centraal: middelgrote foto (penthouse-amsterdam-1.jpg) met monospace label [FEATURED]
   - Linksboven: kleine foto (apartment-amsterdam-2.jpg), gedraaid -3deg
   - Rechtsboven: middelgrote foto (villa-bergen-1.jpg)
   - Linksonder: kleine detail foto (canal-residence-4.jpg)
   - Rechtsonder: middelgrote foto (dubbel-penthouse/3.jpg)
   Top nav: Woonklasse logo links, [OVER ONS] [PROJECTEN] [CONTACT] verdeeld, [NL]/[EN] rechts.
   Alle foto's hebben subtiele parallax bij muisbeweging.
   Foto's hebben hover-effect: lichte schaal + schaduw.

2. **SCROLL TRANSITION**: Bij scrollen voorbij hero verdwijnen de verspreide foto's en transformeert de pagina naar een meer gestructureerde layout. Smooth morphing animatie.

3. **MANIFESTO SECTIE (wit)**: Grote gecentreerde serif tekst over 4-5 regels: mission statement. Monospace label erboven. Veel whitespace (200px+ padding).

4. **PROJECTEN GRID — ASYMMETRISCH**: Geen standaard grid — afbeeldingen geplaatst in een organische collage:
   - Groot beeld links (60% breed, dubbel-penthouse/1.jpg) met [DUBBEL PENTHOUSE][AMS] overlay
   - Kleiner beeld rechts-midden (30% breed, complete-renovatie/1.jpg) met label
   - Nog kleiner beeld linksonder (25% breed, luxe-afwerking/1.jpg) met label
   - Alle beelden verschijnen gestaffeld bij scrollen
   - Hover: monospace projectdetails verschijnen

5. **HORIZONTALE SCROLL STRIP**: Een horizontale strip met alle 5 projecten als grote beelden die horizontaal scrollen bij verticaal scrollen. Elke afbeelding heeft daaronder in monospace: [PROJECTNAAM] — [LOCATIE] — [JAAR].

6. **DETAIL COLLAGE**: Twee rijen van detail/materialenfoto's in wisselende groottes. Gebruik close-up foto's uit de projectmappen (bijv. luxe-afwerking/15.jpg, dubbel-penthouse/20.jpg). Sommige met monospace captions.

7. **OVER ONS — SPLIT**: Links: grote serif heading. Rechts: monospace bodytekst. Daaronder: een enkele grote architectuurfoto (villa-bergen-3.jpg) die fullwidth uitstrekt met parallax.

8. **CONTACT — MINIMALISTISCH**: Gecentreerd op witte achtergrond. Grote serif: "Laten we samenwerken." Daaronder: monospace email en telefoonnummer. Twee buttons in outlined monospace: [OFFERTE AANVRAGEN] [PLAN EEN GESPREK]

9. **FOOTER**: Witte achtergrond. Horizontale lijn als scheiding. Monospace links verdeeld: [INSTAGRAM] [LINKEDIN] [PRIVACY] [COOKIES]. Copyright en credit rechts. Klein Woonklasse logo-icon gecentreerd boven de lijn.

### ANIMATIES (GSAP + Framer Motion)
- Lenis smooth scroll
- Hero collage: foto's parallax bewegen bij muisbeweging (elk met eigen snelheid/richting)
- Scroll transition: hero foto's animeren naar hun grid posities
- Afbeeldingen: staggered fade-in met scale (0.9 → 1.0)
- Horizontale scroll strip: GSAP ScrollTrigger pin + horizontal scroll
- Monospace tekst: typewriter-achtig reveal effect op scroll
- Grote nummers: fade in met lichte verticale slide
- Hover op afbeeldingen: zachte scale + monospace label verschijnt
- Page transitions: witte fade

### RESPONSIVE
- Mobiel: collage wordt verticale stack
- Horizontale scroll wordt verticale scroll
- Navigatie wordt hamburger in bracket stijl [☰]
- Behoud monospace esthetiek
- Foto's worden fullwidth gestapeld
```

---

## PROMPT 6 — "Lanterne Architectes" stijl (Bold Monochrome Peach)
**Inspiratie: lanternearchitectes.com door Mambo Mambo — Awwwards Honorable Mention**

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

Herbouw de Woonklasse homepage in de stijl van lanternearchitectes.com (Awwwards Honorable Mention). Een bold, warm, monochroom design met maximale typografische impact.

### KLEURENPALET — STRIKT MONOCHROMATISCH
- Achtergrond: zacht peach/blush (#FCEAE4) — dit is de ENIGE achtergrondkleur, overal
- Tekst & alles: warm donkerrood/vermillion (#D4421A) — navigatie, headings, body, labels, links, ALLES
- Geen zwart, geen wit, geen grijs — puur duotoon peach + rood
- Foto's zijn de enige elementen die andere kleuren introduceren

### TYPOGRAFIE — HET BELANGRIJKSTE ELEMENT
- Hero heading: EXTREEM groot condensed sans-serif bold (gebruik "Anton", "Bebas Neue", of "Oswald" 900). Minstens 200-300px hoog. Moet het beeldscherm VULLEN. Heeft een 3D perspectief effect (CSS transform: perspective + rotateX) zodat de tekst naar achteren kantelt.
- Sectie headings: Zelfde condensed bold font, 100-200px, splitlayout (woord links, woord rechts met grote gap ertussen) bijv. "ONZE" links en "PROJECTEN" rechts
- Sectie labels: Monospace uppercase met bullet (●), klein (12-14px), letterspacing 0.15em — bijv. "● ONZE EXPERTISES"
- Body tekst: Serif font ("Cormorant Garamond" of "Playfair Display"), 20-24px, regelmatige line-height
- Links/CTAs: Serif met underline, geen buttons — puur typografisch
- Navigatie: Serif, gewoon formaat, geen uppercase — elegant en casual

### LAYOUT & SECTIES

1. **HERO (100vh)**: Zachte peach achtergrond. GIGANTISCHE condensed bold tekst "WOONKLASSE" op 2 regels, met 3D perspectief (tekst kantelt subtiel naar achteren via CSS perspective). De tekst DOMINEERT het hele scherm. Een kleine portret/team-foto zweeft OVER de tekst heen, beweegt mee met de muis (cursor-follow effect via useMousePosition). Nav bovenaan: links "Projecten", "Architectuur", "Interieurs" — rechts "Over ons", "Pers", "Contact" — alles in serif, vermillion kleur.

2. **INTRO TEKST**: Grote serif bodytekst (22-26px) links uitgelijnd, max 60% breedte. Geen heading, alleen een alinea die het bedrijf beschrijft. Veel witruimte rondom. Tekst verschijnt met scroll-triggered word-by-word reveal.

3. **PROJECTEN SECTIE**: Dunne horizontale lijn als scheiding. "ONZE" uiterst links en "PROJECTEN" uiterst rechts in gigantische condensed bold (150-200px), zelfde rij. Daaronder: asymmetrisch grid van projectfoto's. Foto's zijn standaard GEBLURD (CSS filter: blur(20px)) en worden SCHERP bij hover of wanneer ze in viewport center komen bij scroll. Elke foto heeft categorielabels eronder: "SCHUIFDEUREN" "RESIDENTIEEL" als monospace uppercase tags. Projectnaam in serif eronder. Layout: 2 kolommen, links groter (~55%), rechts kleiner (~35%), verspringende posities.

4. **EXPERTISES SECTIE**: "● ONZE EXPERTISES" label linksboven. Links: grote serif tekst (mission statement, 4-5 regels). Rechts: twee expertise-blokken verticaal gestapeld:
   - "SCHUIFDEUREN" in gigantische condensed bold (100px+)
   - Beschrijving in serif eronder
   - "Ontdek meer" link met underline
   Dan:
   - "VASTE BEGLAZING" in gigantische condensed bold
   - Beschrijving + link

5. **OVER ONS SECTIE**: "● OVER ONS" label. Gigantische condensed bold heading verspreid over 3-4 regels: "EEN PRAKTIJK GERICHT OP VAKMANSCHAP EN SAMENWERKING" (elk woord vult de breedte). Links: geblurde foto die scherp wordt bij scroll. Rechts: serif bodytekst met bedrijfsverhaal. "Over ons" link met underline.

6. **CTA / FOOTER**: Dunne horizontale lijn. "● LATEN WE SAMENWERKEN" label links. "Neem contact op" link rechts met underline. Gigantische condensed bold split: "EEN" uiterst links, "PROJECT?" uiterst rechts (met het vraagteken als outline/stroke in plaats van filled). Daaronder: dunne lijn, copyright "© Woonklasse 2026" in klein serif.

### ANIMATIES (GSAP + Framer Motion)
- Lenis smooth scroll
- Hero tekst: 3D perspectief animatie — tekst kantelt van plat (0deg) naar lichte hoek bij laden (of vice versa). Subtiele parallax bij scrollen.
- Cursor-follow foto: klein portret/projectfoto volgt de muis met easing (gebruik Framer Motion useMotionValue + useSpring). Foto zweeft OVER de hero tekst heen.
- Projectfoto blur effect: standaard blur(20px), bij scroll naar viewport center of hover → blur(0px) transition over 0.6s ease-out. Dit is het KENMERKENDE effect van de hele site.
- Tekst reveal: woorden faden in (opacity 0→1) sequentieel bij scroll
- Gigantische headings: slide in van onder (translateY 50px → 0) met stagger per woord
- Sectie labels (● LABEL): fade in van links
- Links met underline: underline groeit van 0% naar 100% breedte bij hover
- Page transitions: zachte fade met peach kleur
- Horizontale lijnen: groeien van 0 naar 100% breedte bij scroll-enter

### SIGNATURE EFFECTEN (wat deze site uniek maakt)
1. **Blur-to-sharp foto's**: ALLE projectfoto's laden geblurd en worden scherp — dit creëert mysterie en focus
2. **3D perspectief typografie**: de hero tekst heeft diepte door CSS perspective
3. **Cursor-volgende foto**: een klein beeld dat met de muis meebeweegt over de hero
4. **Puur duotoon**: ALLEEN peach + rood, geen andere kleuren — radicaal consistent
5. **Split headings**: "WOORD" links ... "WOORD" rechts met enorme gap — dramtisch en architecturaal

### RESPONSIVE
- Mobiel: hero tekst wordt kleiner maar blijft condensed bold en dominant (min 60px)
- Perspectief effect subtielr op mobiel
- Cursor-follow uitschakelen op touch devices
- Foto's worden full-width gestapeld
- Split headings worden gestapeld (woord boven woord)
- Blur effect blijft maar triggert bij scroll in viewport
- Navigatie wordt compact hamburger menu
```

---

## PROMPT 7 — "Shift5" stijl (Defense-Tech Minimal)
**Inspiratie: shift5.io — Minimalistisch tech/defense design met monospace data-esthetiek, bold oranje accenten, en clip-path reveals**

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

Herbouw de Woonklasse homepage in de stijl van shift5.io. Dit is een strak, minimalistisch tech-design met bold kleuraccenten en data-visualisatie elementen. De esthetiek combineert defense-tech precisie met architecturaal vakmanschap.

### KLEURENPALET
- Achtergrond: puur wit (#FFFFFF) — clean, geen warmte
- Tekst: near-black (#202020) — niet volledig zwart, net zachter
- Accent: bold oranje-rood (#FF5841) — gebruikt voor CTA's, footer, hover states
- Footer: volledig #FF5841 oranje-rood achtergrond met #202020 donkere blokken erin
- Hover states: kleurinversie (wit tekst op #202020, of #FF5841 tekst op donker)
- Geen gradiënten — hard kleurcontrast, flat design

### TYPOGRAFIE
- Headings: Clean sans-serif (gebruik "Inter" of "DM Sans"), 500 weight, UPPERCASE text-transform
- Hero heading: 60-80px, uppercase, tight letter-spacing (-.24px), strakke regels
- Body: Dezelfde sans-serif, 16px, regulier weight
- Labels & data: Monospace font ("JetBrains Mono"), 12-14px, voor technische labels en status-indicatoren
- Sectie labels: Monospace uppercase, klein (12px), met submenu-pijlen (↳) voor geneste items
- Lijnhoogte: 1.33 op labels, 1.5 op body tekst
- GEEN serif fonts — alles sans-serif + monospace

### LAYOUT & SECTIES

1. **NAVBAR (fixed top)**:
   - Strakke horizontale navigatie, wit/transparant
   - Links: Woonklasse logo (compact)
   - Midden: Menu items in sans-serif — "Diensten", "Projecten", "Over Ons", "Inzichten", "Contact"
   - Submenu's met ↳ pijlen voor geneste items (bijv. Diensten → Schuifdeuren, Vast Glas, etc.)
   - Rechts: CTA button "OFFERTE" in #202020 met #FF5841 tekst, border-radius 24px
   - Mobiel: hamburger toggle, fullscreen donker overlay menu

2. **HERO (100vh)**:
   - Wit achtergrond, geen foto (!) — puur typografisch
   - Grote uppercase headline: "Uitzonderlijk Vakmanschap Voor Elk Project, Elk Detail, Elke Visie."
   - Daaronder: subtitel in regulier gewicht "Premium interieurafwerking voor veeleisende projecten in heel Nederland."
   - Rechts of onderaan: "SYSTEEM STATUS" dashboard-element in monospace
     - Lijst van 6-8 "monitored systems" in monospace: "SCHUIFDEUREN", "VAST GLAS", "DAKBEGLAZING", "GEVELS", "BALUSTRADES", "INTERIEUR"
     - Elke item toont een binaire code-achtige string (00000000) die subtiel animeert
     - Groene/oranje status dots naast elk item
   - CTA button: "Ontdek onze aanpak." in #202020 pill-button met #FF5841 tekst

3. **NIEUWS / ERKENNING SECTIE**:
   - 3 horizontale kaarten/tiles naast elkaar
   - Elk met headline + korte beschrijving
   - Voorbeelden: "Woonklasse Genomineerd voor Dutch Design Award 2026", "Nieuw: Geïntegreerde Domotica Oplossingen", "Woonklasse Erkend als Top Aannemer Noord-Holland"
   - Strakke borders, geen schaduwen, geen afbeeldingen
   - Hover: achtergrond wordt #202020, tekst wordt wit

4. **DIENSTEN GRID**:
   - 4 gelijke kolommen (2x2 op tablet, 1 kolom mobiel)
   - Elke kaart: monospace label bovenaan, headline, korte beschrijving
   - Diensten: "Schuifdeuren" / "Vast Glas" / "Dakbeglazing" / "Gevels & Balustrades"
   - Onderaan elke kaart: "Ontdek →" link in #FF5841
   - Hover: subtiele border-kleur verandering naar #FF5841
   - Geen afbeeldingen in de kaarten — puur tekst en witruimte

5. **PROJECTEN SHOWCASE**:
   - Grote uitgelichte project-afbeelding links (dubbel-penthouse/1.jpg)
   - border-radius: 8px op ALLE afbeeldingen
   - Lazy loading: afbeelding start met opacity 0, fade naar opacity 1 bij laden
   - Rechts: projectnaam, datum, beschrijving, "Bekijk Project →" link
   - Daaronder: lijst van 5-6 recente projecten als horizontale rijen
     - Elk: datum in monospace | projectnaam | locatie | "→" pijl rechts
     - Hover: hele rij krijgt #FF5841 accent kleur
   - Afbeeldingen als accent, niet als primair element

6. **CONTACT / CTA SECTIE**:
   - Heading: "Klaar om uw visie te realiseren?"
   - Multi-step formulier:
     - Stap 1: Email input (groot, 5rem hoogte) met "Doorgaan" submit button (absolute positioned rechts in input)
     - Stap 2: Naam, bedrijf, functie, onderwerp-selectie (Algemene Vraag, Offerte Aanvraag, Showroom Bezoek)
     - Optioneel berichtveld
   - Submit button: #202020 achtergrond, #FF5841 tekst, border-radius 24px
   - Will-change: transform, opacity op het formulier voor vloeiende animaties

7. **FOOTER**:
   - Volledig #FF5841 (oranje-rood) achtergrond — BOLD, opvallend
   - Binnenin: #202020 donkere blokken met rounded corners (8px)
   - Blok 1: Nieuwsbrief aanmelding (donker input field)
   - Blok 2: Footer navigatie in 2 kolommen
     - Kolom 1: "Diensten" + links (Schuifdeuren, Vast Glas, Dakbeglazing, Gevels)
     - Kolom 2: "Over Ons" + links (Bedrijf, Vacatures, Inzichten, Contact)
   - SVG iconen (40x24px) in #FF5841 kleur boven tekst in donkere blokken
   - Onderste rij:
     - Woonklasse logo (44px icoon)
     - Adres: "Industrieweg 17, 1234 AB Amsterdam"
     - Telefoon: "+31 (0)20 123 4567"
     - Email: "info@woonklasse.nl"
   - Copyright: "©2026 Woonklasse B.V."
   - Links: Privacy, Voorwaarden, Cookies
   - Tagline in groot: "Gebouwd in Nederland. Voor Nederland."
   - Clip-path animatie: blokken revealen van onder naar boven met `inset(100% 0 0 0)` → `inset(0)` bij scroll

### ANIMATIES (GSAP + Framer Motion)
- Lenis smooth scroll
- Clip-path reveals: footer blokken animeren met `clip-path: inset(100% 0 0 0)` → `inset(0 0 0 0)` bij scroll-trigger
- Lazy image loading: opacity 0 → 1 met fade transition (300ms ease)
- Will-change: transform, opacity op formulier-elementen voor GPU-versnelling
- Hover states: achtergrondkleur transitions (200ms) op kaarten en rijen
- Status dashboard: monospace tekst tikt als typewriter effect, binaire strings roteren subtiel
- Multi-step form: velden slide in met transform translateY
- Headings: fade-up bij scroll (translateY: 20px → 0, opacity: 0 → 1)
- Pijlen (→) schuiven 8px naar rechts bij hover
- Geen parallax, geen blur effecten — alles scherp en precies

### UNIEKE KENMERKEN
- Data-dashboard esthetiek: monospace binaire strings als decoratief element (defense-tech look)
- Kleurinversie hover states: elementen wisselen tussen wit/donker/oranje
- Bold oranje footer: breekt met de witte pagina, creëert visueel anker
- Multi-step formulier: progressive disclosure, email eerst, dan uitklappen
- Submenu pijlen (↳) voor hiërarchische navigatie
- Geen decoratieve elementen — functie boven ornament
- Border-radius 8px op media, 24px op buttons — twee niveaus van afronding

### RESPONSIVE
- Mobiel: 1 kolom layout, hamburger menu, gereduceerde padding (1.6-3.2rem)
- Footer blokken stapelen verticaal
- Diensten grid: 1 kolom
- Projectenlijst: compacter, datum verborgen
- Status dashboard: kleiner, 4 items i.p.v. 8
- Formulier: full-width, submit button onder input i.p.v. erin
- Navigatie wordt fullscreen donker overlay menu met grote links
- Logo verplaatst naar rechtsboven in footer op mobiel
```

---

## Samenvatting

| # | Naam | Stijl | Kleur | Kenmerk |
|---|------|-------|-------|---------|
| 1 | Fluid Glass | Premium corporate | Cream + donker | ◆ labels, floating dark nav, parallax |
| 2 | Carles Faus | Avant-garde gallery | Puur wit + zwart | [BRACKETS], single viewport, pixel dissolve |
| 3 | Studio X | Warm editorial | Cream + oranje-rood | (haakjes), italic+underline, frosted nav |
| 4 | Hybrid Dark | Luxe donker | Antraciet + goud | Gouden accenten, cinematic reveals, glasmorfisme |
| 5 | Architectural Collage | Scattered gallery | Wit monochromatisch | Verspreide foto's, asymmetrisch, parallax collage |
| 6 | Lanterne Architectes | Bold monochrome | Peach + vermillion rood | Blur-to-sharp foto's, 3D perspectief typo, cursor-follow, duotoon |
| 7 | Shift5 | Defense-tech minimal | Wit + oranje-rood (#FF5841) | Data-dashboard UI, monospace binaire strings, clip-path reveals, bold oranje footer, multi-step form |
