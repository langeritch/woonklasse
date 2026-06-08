# Analyse Badkamerstijl, suggesties en verbeterpunten

_Opgesteld: 2026-06-08. Op basis van een SEO-audit, een mobiel/toegankelijkheid/performance-audit en handmatige controle._

Deze lijst is geprioriteerd. Bovenaan staat wat in deze sessie al is opgelost, daaronder wat nog openstaat (hoog naar laag), en onderaan ideeen voor toevoegingen.

---

## Al opgelost (ronde 3)

- **Alle kernpagina's herstyled naar de nieuwe bs26-look**: prijzen, diensten, stijlen, portfolio, adviesgesprek en de blog (index + artikel) zijn nu consistent met de homepage (koel palet, Cormorant serif, afgeronde kaarten, pill-knoppen). Het homepage-adviesformulier (HeroAdviesTool) is mee omgezet.
- **Prijscalculator** behouden en werkend; FAQ's overal toegankelijk gemaakt (aria).
- **Adres-bug gefixt**: adviesgesprek toonde nog het oude Amsterdamse adres (hardcoded), nu uit `CONTACT` (Leerdam).
- **Linkfixes**: circulaire `/kosten`-link weg op prijzen, stadslinks naar schone `/<stad>`.
- GSAP clip-path reveals vervangen door framer `whileInView` (reduced-motion-proof) op de herschreven pagina's.

> Let op: de ~50 SEO-stadspagina's gebruiken nog bewust het oude `bsv2`-design (geparkeerd).

## Al opgelost (ronde 2)

- **Cookie-consent (AVG)**: Google Analytics en Clarity laden nu pas na toestemming, via een consent-banner. Keuze wordt onthouden.
- **Reduced-motion afgerond**: Lenis smooth-scroll en de hero-video respecteren nu ook `prefers-reduced-motion`.
- **Broodkruimels**: redundante/geredirecte `/badkamerstijl`-laag verwijderd op diensten, prijzen, kosten.
- **Openingstijden-schema**: verlopende `validThrough`-datum verwijderd.
- **Stijlen-carousel**: aria-labels, betere alt-teksten en een trailing spacer voor mobiel.

## Al opgelost in deze sessie

- **Video scherper en kleiner.** Opnieuw geencodeerd op hoge kwaliteit (crf 18) en kleiner getoond (max 340px breed), zodat hij niet meer pixelig oogt op retina-schermen.
- **FAQPage structured data** op de homepage toegevoegd (kans op FAQ-rich-results in Google).
- **Kleurcontrast** van de grijze bodytekst verhoogd naar WCAG AA (was te licht, ~3,4:1, nu ~5,4:1).
- **Dubbele `<main>`** opgelost (homepage was een tweede `<main>` binnen de layout-`<main>`).
- **prefers-reduced-motion** gerespecteerd: globale CSS-regel plus `<MotionConfig reducedMotion="user">` op de homepage.
- **FAQ-accordion toegankelijk**: `aria-controls`, `aria-labelledby`, `role="region"` toegevoegd.
- **Organisatie-schema** in de root-layout gecorrigeerd (verkeerd Woonklasse-e-mailadres, miste `url` en `@id`).
- **"Kosten" uit het menu** gehaald (linkte naar een URL die 301-redirect naar /prijzen).
- **Hero-eyebrow** verplaatst zodat hij op mobiel niet meer achter de vaste navbalk verdwijnt.
- **Betere alt-teksten + video aria-label** op de homepage.

---

## Hoog (eerst doen)

1. **Kernpagina's hebben nog de OUDE look.** Alleen de homepage is herontworpen in de nieuwe koele stijl. `diensten`, `prijzen`, `stijlen`, `portfolio`, `blog` en `adviesgesprek` gebruiken nog het oude warme `bsv2`-design. Dit is visueel het grootste verbeterpunt: de site voelt nu inconsistent zodra je doorklikt. Aanbeveling: deze pagina's stap voor stap naar de nieuwe `bs26`-stijl trekken.

2. **Cookie/consent ontbreekt (juridisch).** De site laadt Google Analytics en Microsoft Clarity (tracking) zonder zichtbare cookie-toestemming. Onder de AVG/Telecomwet is dat in Nederland niet toegestaan zonder consent. Voeg een consent-banner toe en laad de trackers pas na toestemming.

3. **`/kosten` versus `/prijzen` is tegenstrijdig.** De `/kosten`-pagina bevat sterke, keyword-rijke content ("wat kost een badkamer renovatie") met eigen schema, maar wordt 301-geredirect naar `/prijzen` en is dus onvindbaar. De waarde gaat verloren. Kies een model: of de cost-content in `/prijzen` integreren, of `/kosten` weer een echte indexeerbare pagina maken.

4. **Echte reviews en portfolio.** De testimonial ("Familie de Vries") en delen van het portfolio zijn placeholder/algemeen. Echte klantreviews (met bron, bv. Google) en echte projectcases met meer foto's verhogen vertrouwen en conversie sterk. Overweeg `Review`/`AggregateRating` schema zodra er echte reviews zijn.

## Middel

5. **Broodkruimels wijzen naar een geredirecte URL.** Op `diensten`, `prijzen`, `kosten` bevat de BreadcrumbList een `/badkamerstijl`-niveau dat 301-redirect. Verwijder dat tussenniveau (Home -> Diensten), zoals de stadspagina's het al goed doen.

6. **Reduced-motion nog niet overal.** De globale CSS en MotionConfig dekken de homepage-animaties, maar de Lenis smooth-scroll en de autoplay-video starten nog ongeacht de voorkeur. Lenis en de video pauzeren/uitzetten bij `prefers-reduced-motion`.

7. **Alt-teksten op de oude pagina's** zijn nog generiek ("Badkamerstijl portfolio", "Badkamerstijl detail"). Beschrijvend en keyword-relevant maken.

8. **Focus-indicator gebruikt `currentColor`.** Op sommige achtergronden kan de toetsenbord-focusring te weinig contrast hebben. Vervang door een vaste, contrastrijke kleur (bv. de slate-accent of ink).

9. **Stijlen-carousel op mobiel**: de laatste kaart snapt met een restruimte en heeft geen trailing-padding. Voeg een afsluitende spacer of `scroll-padding` toe; geef elke stijl-link een `aria-label`.

## Laag / klein

10. **Openingstijden-schema** heeft `validThrough: 2026-12-31` voor zaterdag; die verdwijnt stilletjes na het jaareinde. Datumgrenzen weghalen of jaarlijks verlengen.

11. **Kleine tik-doelen**: de FAQ-toggle (32px) en de foto-verwijderknopjes in het adviesformulier zijn kleiner dan de aanbevolen 44px. Het hele FAQ-rij is al klikbaar, dus dit is klein.

12. **Rauwe `<img>` in het adviesformulier** (geuploade foto-previews) zonder afmetingen kan kleine layout-shift geven. Expliciete breedte/hoogte zetten.

13. **Twee identieke adviesformulieren** op de homepage (boven en onder). Bewust voor conversie, maar het tweede exemplaar zou lazy gemount kunnen worden om runtime-kosten te sparen.

14. **Stadspagina's**: bevestig de bedoeling. Ze stonden als "geparkeerd" omschreven, maar staan wel in de sitemap en zijn volledig indexeerbaar (met compleet schema). Prima als ze vindbaar moeten zijn; zo niet, dan `noindex` + uit de sitemap.

## Toevoegingen om te overwegen

- **Vakmensen/team-sectie** met echte foto's (vertrouwen).
- **Merken/partners-strip** (Hansgrohe, Grohe, Villeroy & Boch, ...) zoals in het oude ontwerp, als kwaliteitssignaal.
- **Keurmerken/garanties** visueel (installatiegarantie, vaste aanneemsom) als badges.
- **Visueel stappenplan/proces** (Advies -> 3D-ontwerp -> Realisatie -> Oplevering).
- **Before/after-slider** van projecten.
- **Performance**: stadspagina-afbeeldingen en grote hero's in AVIF/WebP serveren; controleren of de `priority`/`sizes` overal kloppen.
- **VideoObject schema** voor de homepage-video (optionele rich-result).
- **Bedankt-/conversiemeting**: bevestig dat het adviesformulier een nette bedankpagina + conversie-event heeft.

---

_Wil je dat ik een of meer van de "Hoog"-punten oppak? De logische volgorde is: (1) cookie-consent, dan (2) de kernpagina's herstijlen, dan (3) de kosten/prijzen-kwestie._
