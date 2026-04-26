export type BlogCategory = 'inspiratie' | 'kosten' | 'materialen' | 'tips' | 'trends';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
};

export const CATEGORIES: { id: BlogCategory; label: string }[] = [
  { id: 'inspiratie', label: 'Inspiratie' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'materialen', label: 'Materialen' },
  { id: 'tips', label: 'Tips' },
  { id: 'trends', label: 'Trends' },
];

export const CATEGORY_LABEL: Record<BlogCategory, string> = {
  inspiratie: 'Inspiratie',
  kosten: 'Kosten',
  materialen: 'Materialen',
  tips: 'Tips',
  trends: 'Trends',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'wat-kost-een-badkamer-renovatie-in-2026',
    title: 'Wat kost een badkamer renovatie in 2026?',
    excerpt:
      'Actuele prijzen, de factoren die de kosten bepalen en hoe je verrassingen voorkomt. Een complete kostengids voor de Nederlandse badkamer.',
    category: 'kosten',
    date: '2026-04-15',
    heroImage: '/badkamerstijl/2200xxs(43).jpg',
    metaTitle: 'Wat kost een badkamer renovatie in 2026? | Badkamerstijl',
    metaDescription:
      'Actuele prijzen voor een badkamer renovatie in 2026: van € 5.000 tot € 60.000+. Lees waar je geld naartoe gaat en hoe je binnen budget blijft.',
    content: `Een badkamer renovatie is in 2026 een serieuze investering. De prijzen van bouwmaterialen zijn de afgelopen jaren fors gestegen, en goede vakmensen blijven schaars. Tegelijk is een doordacht gerealiseerde badkamer één van de meest waardetoevoegende verbouwingen aan je woning. In dit artikel zetten we de actuele prijzen op een rij, leggen we uit waar het geld naartoe gaat, en geven we tips om binnen budget te blijven — zonder concessies aan kwaliteit.

## Wat kost een gemiddelde badkamer renovatie?

Voor een complete renovatie — inclusief sloop, leidingwerk, tegels, sanitair en arbeid — moet je in 2026 rekenen op € 12.000 tot € 25.000 voor een gemiddelde Nederlandse badkamer van 6 tot 8 m². Dat is ongeveer 8 tot 12 procent hoger dan vier jaar geleden. De stijging zit vooral in arbeid en in keramische tegels van Europese herkomst.

- Kleine badkamer (tot 5 m²): vanaf € 7.000
- Gemiddelde badkamer (5 tot 8 m²): € 12.000 – € 22.000
- Ruime badkamer (8 tot 12 m²): € 18.000 – € 35.000
- Master ensuite (12 m² en groter): € 30.000 – € 60.000+

Belangrijk om te weten: deze ranges zijn richtprijzen. Een vaste aanneemsom op maat kun je pas opstellen na een opname op locatie, omdat de staat van de bestaande badkamer en het leidingwerk veel uitmaakt.

## Welke factoren bepalen de prijs?

De grootste prijsverschillen ontstaan door materiaalkeuze, leidingwerk en afwerking. Hieronder de vier belangrijkste factoren op een rij.

### Afmetingen van de ruimte

Hoe groter, hoe duurder — maar de relatie is niet lineair. Een badkamer van 4 m² heeft bijna evenveel leidingen, sanitair en arbeidsuren nodig als een van 7 m². De meerprijs voor een grotere ruimte zit vooral in extra tegels en vloeroppervlak. Reken voor elke extra vierkante meter op € 800 tot € 1.500 in materiaal en arbeid.

### Materiaalkeuze

Het verschil tussen standaard keramische tegels (€ 25–40 per m²) en grootformaat porselein (€ 80–150 per m²) of echte natuursteen (€ 150–400 per m²) is enorm. Hetzelfde geldt voor sanitair: een hangtoilet kost vanaf € 250 in basisuitvoering, een Geberit AquaClean douche-WC al snel € 1.800 – € 3.500. Bij topmerken als Dornbracht of Vola tikken kraanwerken alleen al € 800 – € 2.500 per stuk aan.

### Leidingwerk en installatie

Het behouden van de bestaande aansluitingen scheelt fors. Ga je toilet, douche of wastafel verplaatsen, dan komt er hak- en breekwerk bij, vaak ook nieuwe afvoerleidingen onder de vloer. Reken op € 1.500 – € 4.000 meerprijs voor een complete herindeling. In monumentale panden kan dit oplopen door extra constructieve eisen.

### Afwerkingsniveau

Onder afwerking valt verlichting, ventilatie, vloerverwarming en de details — denk aan inbouwnissen met indirecte LED, nat-gepolijste wandafwerking en designsifons. Hier kan een badkamer heel snel duurder of goedkoper worden zonder dat het zichtbaar is op de plattegrond.

## Vier pakketten in beeld

Bij Badkamerstijl werken we met vier transparante pakketten zodat je vooraf weet wat je kunt verwachten:

- **Basis (€ 5.000 – € 12.000)**: een nette renovatie met betrouwbaar middensegment sanitair en strak tegelwerk.
- **Standaard (€ 12.000 – € 22.000)**: designkranen, grootformaat tegels, vloerverwarming en LED-spiegel.
- **Premium (€ 22.000 – € 35.000)**: topmerken, vrijstaand bad, maatwerk meubels en 3D-ontwerp.
- **Luxe (€ 35.000 – € 60.000+)**: echte natuursteen, designmerken als Dornbracht, sauna of stoomdouche.

[Bekijk alle pakketten met inhoud per tier op onze prijzenpagina](/prijzen).

## Hoe vermijd je verrassingen op de eindfactuur?

De grootste budget-overschrijdingen komen vaak niet door de offerte zelf, maar door tussentijdse keuzes: alsnog een dubbele wastafel, een duurder kraanmerk, of de wens om een muur te verplaatsen tijdens de bouw. Drie praktische tips:

1. Werk vooraf met een vaste aanneemsom, niet met nacalculatie. Wij rekenen alleen meerwerk wanneer jij zelf een wijziging aanvraagt.
2. Reserveer 5 à 10% van je budget voor onvoorziene zaken zoals verborgen vocht of een verrotte ondervloer in oudere woningen.
3. Maak materiaalkeuzes vóór de bouw start. Twijfel achteraf kost extra arbeid en vertraging.

## Wanneer renoveren in 2026?

De wachttijden bij goede aannemers liggen in 2026 tussen de 4 en 12 weken. In het voorjaar en de zomer lopen die op; tussen oktober en februari is het vaak rustiger en kun je sneller starten. Plan je adviesgesprek dus tijdig.

Werk je in een grote stad als [Amsterdam](/badkamerstijl/amsterdam), [Utrecht](/badkamerstijl/utrecht) of [Rotterdam](/badkamerstijl/rotterdam)? Daar gelden vaak iets hogere richtprijzen vanwege bereikbaarheid en parkeerkosten. Buiten de Randstad liggen de gemiddelde kosten ongeveer 5 tot 10 procent lager.

## Klaar voor jouw renovatie?

Wij maken binnen vijf werkdagen een gespecificeerde offerte op maat, met een vaste aanneemsom en een duidelijke planning. Geen verborgen kosten, geen nacalculatie. Plan een gratis adviesgesprek en wij komen vrijblijvend langs om je wensen op te nemen.`,
  },
  {
    slug: '10-badkamer-trends-voor-2026',
    title: '10 badkamer trends voor 2026',
    excerpt:
      'Van diepgekleurde tegels tot smart home integratie: de tien belangrijkste badkamer trends van 2026, met onze visie op wat blijft en wat een hype is.',
    category: 'trends',
    date: '2026-03-22',
    heroImage: '/badkamerstijl/2200xxs(30).jpg',
    metaTitle: '10 Badkamer Trends 2026 | Wat is hot? | Badkamerstijl',
    metaDescription:
      'De tien belangrijkste badkamer trends voor 2026: kleur, materiaal, sanitair en techniek. Met onze visie op tijdloze keuzes vs. korte hypes.',
    content: `Trends in de badkamer veranderen langzamer dan in de mode-industrie, maar ook hier verschuiven kleuren, materialen en vormen elk seizoen. In 2026 zien we een duidelijke beweging weg van het strakke witte minimalisme van een paar jaar geleden. Warmer, donkerder, meer karakter. Hieronder de tien meest invloedrijke trends die we dit jaar in onze projecten terugzien — met onze eigen visie erbij.

## 1. Diepe, gedempte kleuren

Donkergroen, mosterdgeel en oxbloed nemen de plek in van pastels. Vooral in combinatie met messing of geborsteld nikkel maken deze tonen een statement zonder schreeuwerig te worden. Onze tip: kies één wand of de wastafelmeubel in kleur en houd de rest neutraal — anders wordt het snel te druk.

## 2. Microcement op de wanden

In plaats van tegels zien we steeds vaker microcement: een naadloze, licht gestructureerde afwerking die je in praktisch elke kleur kunt mengen. Het oogt rustig, is voegloos (dus minder schoonmaakwerk) en past bij zowel moderne als landelijke stijlen. Wel een specialist nodig om vakkundig aan te brengen.

## 3. Vrijstaande baden in nieuwe vormen

Het ovale, neutrale vrijstaande bad is geëvolueerd. We zien steeds meer geometrische varianten: rechthoekig met zachte randen, of asymmetrisch in solid surface. Designmerken als Antonio Lupi en Agape lopen voorop. Voor een [luxe badkamerproject](/prijzen) is dit vaak hét pronkstuk.

## 4. Verticale tegels in visgraat

Visgraat blijft populair, maar dan groter en verticaal toegepast. Tegels van 5×30 cm of zelfs 10×60 cm in verticale visgraat geven hoogte en een ambachtelijk karakter, vooral in mat groen, taupe of terracotta.

## 5. Designkranen in mat zwart en geborsteld brons

Chroom is op zijn retour. In 2026 kiezen onze klanten massaal voor mat zwart, geborsteld brons of geborsteld nikkel. Hansgrohe AXOR, Dornbracht Tara en Vola HV1 leveren prachtige series in deze afwerkingen. Combineer wel consistent — meng geen brons met chroom in dezelfde ruimte.

## 6. Inloopdouche met grootformaat porselein

In plaats van vele kleine tegels zien we steeds vaker de gehele douchewand in één plaat van 120×280 cm of zelfs 160×320 cm. Marmeruitstraling in porselein, zonder voegen die uitslijten. Strak, hygiënisch en luxueus tegelijk.

## 7. Verborgen techniek

Inbouwkranen waarbij alleen de uitloop zichtbaar is, douche-WC's die er identiek uitzien als een gewoon hangtoilet, en thermostaten die plat in de wand zitten. Techniek wordt onzichtbaar, vorm krijgt voorrang. Geberit en Hansgrohe lopen voorop met geïntegreerde oplossingen.

## 8. Smart home integratie

Verlichting die zich aanpast aan het tijdstip, vloerverwarming die je per dag programmeert, muziek via Sonos in de spiegel: in 2026 is smart home in de badkamer geen extra meer maar een verwachting bij een Premium of Luxe renovatie. Wij integreren dit standaard via KNX of Loxone.

## 9. Spa-elementen in de privébadkamer

Sauna's, stoomdouches en hammam-elementen migreren van wellness-resorts naar particuliere badkamers. Voor een ruime master ensuite is een infrarood-cabine van 110×110 cm prima inpasbaar voor € 4.000 – € 8.000 inclusief installatie.

## 10. Natuurlijke materialen, eerlijk gebruikt

Hout, echte natuursteen, lokaal geproduceerde keramiek. Klanten vragen steeds vaker naar herkomst en duurzaamheid. We zien een groei in Nederlands of Belgisch geproduceerde tegels en in FSC-gecertificeerd hout voor meubels en plafonds.

## Wat verdwijnt: trends die we minder zien

Net zo interessant als wat opkomt is wat afneemt. Drie keuzes die rond 2020-2022 dominant waren maar in 2026 op hun retour zijn:

- **Volledig wit, glanzend en steriel** — aan de uitstraling van een doktersruimte zijn klanten klaar. Warmte en textuur zijn terug.
- **Mozaïek-stroken als accent** — het horizontale "fresco-bandje" met mozaïek is gedateerd geraakt. Liever één doordachte tegel dan een trucje.
- **Kleine glanzende metro-tegels** — nog steeds verkrijgbaar, maar minder gevraagd. Grootformaat heeft het overgenomen.

## Wat blijft, wat is hype?

Niet elke trend is een verstandige keuze voor een badkamer die 15 tot 20 jaar mee moet gaan. Onze ervaring:

- **Tijdloos**: vrijstaande baden, mat zwarte of geborsteld brons kranen, microcement, grootformaat porselein, verborgen techniek
- **Cyclisch**: zeer specifieke kleuren (mosterdgeel of bordeauxrood kunnen over 7 jaar gedateerd ogen), exotische tegelvormen, hyper-trendy decortegels
- **Investering altijd waard**: kwaliteit van het tegelwerk, sanitair van topmerken, doordachte verlichting in lagen, een ruime inloopdouche

Een goede vuistregel: kies de basis tijdloos (tegels, sanitair, kraanwerk in neutrale kleur) en breng trends in via elementen die je zonder grote ingreep kunt vervangen — een spiegel, een meubel, accessoires. Dan veroudert je badkamer langzaam met je smaak mee.

## Inspiratie nodig?

Bekijk onze [stijlen-pagina](/stijlen) voor concrete voorbeelden van hoe we deze trends in 2026-projecten toepassen. Of plan direct een [gratis adviesgesprek](/adviesgesprek) — wij komen langs en bespreken welke trends bij jouw woning en smaak passen.`,
  },
  {
    slug: 'kleine-badkamer-inrichten-15-slimme-tips',
    title: 'Kleine badkamer inrichten: 15 slimme tips',
    excerpt:
      'Een kleine badkamer hoeft niet krap te voelen. Vijftien praktische tips om een ruimte van 3 tot 5 m² ruimer, lichter en luxer te maken.',
    category: 'tips',
    date: '2026-03-08',
    heroImage: '/badkamerstijl/2200xxsxm(26).jpg',
    metaTitle: 'Kleine Badkamer Inrichten: 15 Tips | Badkamerstijl',
    metaDescription:
      'Vijftien praktische tips om een kleine badkamer ruimer en luxer te laten voelen. Van slimme indeling tot tegelkeuze en verlichting.',
    content: `Een kleine badkamer is een uitdaging — maar geen reden om water bij de wijn te doen. Met de juiste indeling, materiaalkeuzes en lichtplan voelt zelfs een ruimte van 3 m² verrassend royaal. We hebben honderden compacte badkamers gerenoveerd in vooral grachtenpanden en jaren-zestig flats, en hieronder delen we de vijftien tips die het meeste verschil maken.

## Indeling en plattegrond

### 1. Kies een inloopdouche, geen cabine

Een douchecabine breekt de ruimte visueel in tweeën. Een inloopdouche met één glasplaat (of zelfs zonder, met vloerverwarming voor sneller drogen) houdt het zicht open en laat de tegels doorlopen. Resultaat: de badkamer oogt direct groter.

### 2. Hang het toilet op

Hangende toiletten met inbouwreservoir winnen 20–30 cm ten opzichte van staande modellen. De lege vloer eronder maakt schoonmaken makkelijker en geeft visueel ruimte. Geberit Sigma is hier de gouden standaard.

### 3. Wastafel boven het toilet

In zeer kleine badkamers (onder 4 m²) zien we steeds vaker wastafels die boven het inbouwreservoir hangen. Met een Geberit Monolith of vergelijkbaar systeem combineer je twee functies in 70 cm muurlengte.

### 4. Kies een hoekdouche

Wanneer een rechthoekige inloopdouche niet past, biedt een hoekoplossing met twee glaspanelen verrassend veel comfort op weinig vloeroppervlak — vanaf 90×90 cm.

## Tegels en materialen

### 5. Eén tegel, vloer én wand

Het laten doorlopen van dezelfde tegel op vloer en wand maakt visuele grenzen onzichtbaar. Vooral bij grootformaat (60×60 of 60×120) zorgt dit voor rust en ruimte.

### 6. Grote tegels, weinig voegen

Een kleine ruimte oogt groter met weinig lijnen. Kies tegels van minimaal 60×60 cm — of nog beter, 60×120. Smalle voegen in een tegel-passende kleur maken het effect compleet.

### 7. Lichte tinten als basis

Wit, crème, zacht grijs en taupe reflecteren licht en geven ruimte. Donkere accenten kun je toevoegen via een wastafelmeubel of kraanwerk in mat zwart.

### 8. Spiegelend porselein

Een gepolijste keramische tegel reflecteert licht zonder de make-upspiegel-look van glanzende keramiek. Subtieler dan glas, ruimtegevender dan mat.

## Verlichting en techniek

### 9. Lagen verlichting

Werk met drie lagen: algemeen plafondlicht (inbouwspots), taakverlichting bij de spiegel (LED-strip rondom of geïntegreerd) en sfeerlicht (indirect onder een nis of meubel). Verschillende schakelgroepen geven flexibiliteit op elk moment van de dag.

### 10. Spiegel met verlichting en demist

Een grote spiegel — bij voorkeur de hele wandbreedte — verdubbelt de gevoelsruimte. Kies een model met geïntegreerde LED en demist-functie zodat je hem altijd helder hebt.

### 11. Vloerverwarming als comfort én ruimte

Met vloerverwarming kun je de radiator weghalen en een hele wand vrijmaken. Dat scheelt al snel 10–15 cm muurdiepte plus ruimte voor handdoekrekken.

## Opbergruimte en details

### 12. Inbouwnissen in plaats van planchets

Een nis in de doucherwand of naast het bad geeft opbergruimte zonder dat er iets uitsteekt. Werk hem af met dezelfde tegels en eventueel indirecte LED voor sfeer.

### 13. Hoge kasten in plaats van brede

Een smalle hoge kast (30–40 cm breed, vloer tot plafond) geeft veel opbergruimte zonder vloeroppervlak op te eten. Ideaal in de hoek of naast de wastafel.

### 14. Wandgemonteerd badkamermeubel

Hangende meubels laten de vloer doorlopen, wat ruimte suggereert en schoonmaken vergemakkelijkt. Onderbouwverlichting kan extra sfeer geven.

### 15. Glas in plaats van wand

Wanneer je toch een scheidingswand nodig hebt — bijvoorbeeld tussen wastafel en douche — kies dan een dunne glasplaat in plaats van een gemetselde muur. Visueel open, functioneel afgescheiden.

## Bonus: wat doe je met de deur?

In een kleine badkamer zit elke vierkante centimeter in de openslag van de deur. Twee oplossingen die meters opleveren:

- **Schuifdeur in de muur**: een Eclisse-systeem laat de deur in de muur verdwijnen. Vraagt 12 cm muurdiepte vrij, maar levert in opening hetzelfde op.
- **Naar buiten openende deur**: andersom hangen kost niets en geeft binnen direct meer bewegingsruimte.

## Wat kost een kleine badkamer renoveren?

Voor een complete renovatie van een badkamer onder 5 m² rekenen wij in 2026 op € 7.000 tot € 14.000. Dat is gemiddeld iets per vierkante meter dan een grotere badkamer, omdat het basiswerk (sloop, leidingen, sanitair) vrijwel hetzelfde is. Een uitgebreide kostenuitleg vind je op onze [prijzenpagina](/prijzen).

## Veelgemaakte fouten

In kleine badkamers zien we drie fouten regelmatig terugkomen:

1. Te veel verschillende materialen — meer dan twee tegelsoorten in een kleine ruimte oogt rommelig.
2. Te kleine tegels — mozaïek mag, maar niet als hoofdmateriaal in een ruimte onder 5 m².
3. Standaard verlichting — één plafondlamp is nooit genoeg voor sfeer of taakverlichting.

## Persoonlijk advies?

In dichtbevolkte steden als [Amsterdam](/badkamerstijl/amsterdam) en [Den Haag](/badkamerstijl/den-haag) renoveren wij regelmatig kleine badkamers in grachtenpanden en appartementen. Wij weten precies welke vierkante centimeter telt. Plan een [gratis adviesgesprek](/adviesgesprek) en wij komen langs om de mogelijkheden te bespreken — vaak blijkt er meer mogelijk dan je denkt.`,
  },
  {
    slug: 'badkamer-tegels-kiezen-complete-gids',
    title: 'Badkamer tegels kiezen: complete gids',
    excerpt:
      'Keramiek, porselein of natuursteen? Welk formaat past bij je ruimte? Een complete gids voor het kiezen van badkamertegels in 2026.',
    category: 'materialen',
    date: '2026-02-19',
    heroImage: '/badkamerstijl/2200xxs(27).jpg',
    metaTitle: 'Badkamer Tegels Kiezen: Complete Gids | Badkamerstijl',
    metaDescription:
      'Hoe kies je de juiste badkamertegels? Een complete gids over soorten, formaten, patronen, kleuren en onderhoud — door specialisten.',
    content: `Tegels bepalen voor een groot deel hoe een badkamer eruitziet en aanvoelt. De keuze gaat verder dan kleur: formaat, materiaal, slijtklasse, voegen en plaatsing maken net zoveel verschil. In deze gids leggen we uit waar je op moet letten, welke valkuilen er zijn, en hoe wij keuzes maken in onze eigen projecten.

## De drie hoofdsoorten

### Keramische tegels

Keramiek is de meest gangbare badkamertegel: gebakken klei met een geglazuurde toplaag. Voordelen: betaalbaar (€ 25–40 per m²), makkelijk te onderhouden, ruim aanbod in patronen. Nadeel: minder slijtvast dan porselein, vaak iets dunner en gevoeliger voor stoten op de hoeken.

### Porseleinen tegels

Porselein wordt op hogere temperatuur gebakken en heeft een dichtere structuur. Het is harder, vorstbestendig en water-absorbeert vrijwel niet. Prijs: € 40–150 per m², afhankelijk van uitstraling. Grootformaat porselein (60×120 cm of 120×280 cm) is een populaire keuze voor moderne badkamers omdat het weinig voegen vergt.

### Natuursteen

Echte natuursteen — marmer, travertijn, kwartsiet, hardsteen — geeft een unieke uitstraling die geen kunstmateriaal kan evenaren. Elke tegel is anders. Prijs: € 100–400+ per m². Wel onderhoud vereist: marmer moet jaarlijks geïmpregneerd worden om kalk- en zeepvlekken te voorkomen.

## Welk formaat kies je?

Het formaat is een van de meest onderschatte keuzes. Onze vuistregels:

- Tegels van 30×30 of kleiner: alleen gebruiken voor mozaïek-accenten of zeer kleine, klassieke ruimtes
- Tegels van 60×60: veelzijdig, geschikt voor de meeste badkamers
- Tegels van 60×120: modern, weinig voegen, oogt ruim
- Tegels van 90×90 of groter: maakt impressie, vraagt vlakke ondergrond
- Tegels van 120×280 (slabs): luxueus, weinig voegen, geschikt voor doucewanden

Voor een [grootformaat tegelvloer in een ruimte onder 5 m²](/badkamerstijl/blog/kleine-badkamer-inrichten-15-slimme-tips) kun je gerust 60×120 gebruiken — het maakt de ruimte juist groter.

## Patronen en plaatsing

### Recht of versprongen

Recht-onder-elkaar (block bond) is modern en rustig. Half-versprongen (running bond, traditioneel "metselverband") oogt klassieker. Bij grootformaat tegels (60+ cm) wordt versprongen plaatsing afgeraden omdat lichte hoogteverschillen tussen tegels dan zichtbaarder worden.

### Visgraat

Visgraat (herringbone) blijft een tijdloze keuze, vooral in 5×30 of 10×60 formaat. Toepassen op een wand of vloer? Beide werken, maar combineer ze niet in dezelfde ruimte — dat wordt onrustig.

### Verticaal vs horizontaal

Een rechthoekige tegel verticaal geplaatst maakt een ruimte hoger; horizontaal maakt hem breder. Voor lage zolderbadkamers kiezen we bijna altijd verticaal.

## Kleur en sfeer

Witte tegels blijven de meest verkochte keuze, maar in 2026 zien we duidelijk meer experimenteren:

- Wit, crème, zachtgrijs: tijdloos, ruimtegevend, blijft 15+ jaar mooi
- Beige en taupe: warm, past bij hout en messing
- Mat groen of donkerblauw: trendy, statement-makend, mogelijk over 10 jaar gedateerd
- Marmer-look (Calacatta, Carrara): klassiek-luxe, neutraal genoeg om mee te ouderen

Voor wie tijdloos wil bouwen: kies een lichte basis en breng kleur in via accenten (kraanwerk, meubel, accessoires) die je later kunt vervangen.

## Voegen: het ondergeschoven kind

Voegen bepalen meer dan je denkt. Een witte voeg bij een witte tegel oogt rustig; een donkere voeg bij een lichte tegel maakt elke tegel zichtbaar als een raster. Onze voorkeur:

- Voegen in de kleur van de tegel (zelfde toon, één tint donkerder of lichter)
- Smalle voegbreedte (1,5–2 mm) voor moderne uitstraling
- Epoxy voegmiddel in nat-belaste zones (douche, rond bad) — duurder maar onverwoestbaar

## Antislip en R-classificatie

Voor de douchevloer is antislip een vereiste, niet een optie. Let op de R-waarde:

- R9: niet geschikt voor de douche
- R10: minimum voor douchevloeren in privégebruik
- R11+: voorkeur voor zwembaden, sauna's en grote inloopdouches
- Of een PEI-classificatie van minimaal 3 voor vloeren

## Onderhoud per soort

| Materiaal | Onderhoud | Levensduur |
|---|---|---|
| Keramiek geglazuurd | Lage | 25+ jaar |
| Porselein | Lage | 30+ jaar |
| Marmer | Hoge — jaarlijks impregneren | 50+ jaar (met onderhoud) |
| Travertijn | Middel | 30+ jaar |
| Microcement | Middel — 5-jaarlijks coaten | 15–20 jaar |

## Veelgemaakte fouten in tegelkeuze

Drie missers die we regelmatig zien wanneer klanten zelf hebben gekozen:

1. **Te veel kleine tegels**: een ruimte van 5 m² met tegels van 20×20 oogt onrustig. Onder de 30×30 alleen kiezen voor mozaïek-accenten.
2. **Glanzende tegels op de douchevloer**: oogt mooi op het showroomdisplay, maar gevaarlijk glad als nat. Altijd minimaal R10.
3. **Meng-en-match-overdaad**: drie verschillende soorten op één wand wordt zelden mooi. Werk met maximaal twee tegelsoorten en laat één leiden.

## Onze aanpak

In onze [adviesgesprekken](/adviesgesprek) komen we altijd met fysieke samples. Een tegel ziet er onder de showroomverlichting vaak heel anders uit dan in jouw badkamer met daglicht of LED. Wij nemen samples mee naar de woning zodat je écht kunt zien wat het wordt. Voor [Premium en Luxe projecten](/prijzen) bezoeken we samen onze tegel-leveranciers in Tilburg en Houten.

Een goed gekozen tegel gaat dertig jaar mee. De moeite waard om de keuze met aandacht te maken — bij twijfel altijd grootformaat in een neutrale toon. Daar wordt zelden iemand spijt van.`,
  },
  {
    slug: 'inloopdouche-vs-douchecabine-wat-past-bij-jou',
    title: 'Inloopdouche vs douchecabine: wat past bij jou?',
    excerpt:
      'De inloopdouche is hot, maar in sommige situaties is een douchecabine slimmer. We vergelijken beide opties op comfort, kosten en onderhoud.',
    category: 'inspiratie',
    date: '2026-02-05',
    heroImage: '/badkamerstijl/2200xxs(46).jpg',
    metaTitle: 'Inloopdouche of Douchecabine? Complete vergelijking | Badkamerstijl',
    metaDescription:
      'Inloopdouche of douchecabine: welke past bij jouw badkamer? Eerlijke vergelijking op comfort, kosten, onderhoud en geschiktheid per woning.',
    content: `In onze adviesgesprekken komt deze vraag bijna altijd langs: kies ik voor een inloopdouche of een gesloten douchecabine? Het korte antwoord is dat beide werken, maar dat de juiste keuze afhangt van je badkamer, je woonsituatie en je dagelijks gebruik. Hieronder zetten we beide opties eerlijk naast elkaar.

## Wat is wat?

Een **inloopdouche** is een open of half-open doucheruimte zonder deur, vaak met één glazen wand en een afvoer in de vloer. De rest van de badkamer ligt vlak in dezelfde tegel.

Een **douchecabine** is een afgesloten ruimte, doorgaans rechthoekig of vierkant, met glazen wanden of zelfs een dichte achterwand. De toegang is via een schuif- of klapdeur. De cabine staat doorgaans op een douchebak.

## Voordelen van een inloopdouche

### Gevoel van ruimte

Het zicht in de badkamer wordt niet onderbroken door een cabine. Vooral in kleinere ruimtes maakt dit visueel meters verschil. De tegelvloer loopt door, wat de illusie van een grotere ruimte versterkt.

### Tijdloze uitstraling

Een goed ontworpen inloopdouche oogt over 20 jaar nog steeds modern. Cabines hebben sterker een gedateerde look — een witte cabine uit 2005 oogt onmiskenbaar uit 2005.

### Toegankelijk

Geen drempel betekent geen obstakel. Voor wie levensloop-bestendig wil bouwen — handig voor de oude dag of bij beperkte mobiliteit — is een inloopdouche bijna altijd de juiste keuze.

### Makkelijk schoon te maken

Geen kierwerk van schuifdeuren waar zeepresten zich verzamelen, geen rubberen randen die verkleuren. Eén glazen plaat afspoelen en klaar.

## Nadelen van een inloopdouche

### Risico op spatten

Zonder afsluiting kan water ver verder spatten dan je denkt — vooral bij regendouches met grote kop. De rest van de badkamer wordt meer vochtbelast, wat hogere eisen stelt aan ventilatie.

### Vraagt vlakke vloer

Voor een goede waterafvoer moet de vloer perfect afschot hebben (ongeveer 1–2 cm per meter richting de afvoer). Vakwerk vraagt ervaring; foutje hier en je hebt een poel water in de badkamer.

### Tochtgevoeligheid

In een grote of slecht geïsoleerde badkamer kan tocht voelbaar zijn tijdens het douchen. Vloerverwarming en goede ventilatie compenseren dit, maar het is een aandachtspunt.

### Kostentechnisch iets duurder

Een goed gemaakte inloopdouche kost meer aan voorbereiding (afschot, lijngoot, afdichting) dan een kant-en-klare douchebak met cabine. Reken op € 1.000 – € 2.500 meerprijs.

## Voordelen van een douchecabine

### Geheel afgesloten

Geen spatten, geen tocht, geen vocht in de rest van de badkamer. Ideaal in zeer kleine ruimtes waar elke vierkante meter telt.

### Snellere bouw

Een cabine met douchebak kan in een dag worden geplaatst. Een inloopdouche vraagt afschot, lijngoot, betegeling en uithardingstijd — vaak een week extra werk.

### Lagere kosten

Een complete douchebak met cabine begint bij € 800 – € 1.500. Plus de installatie ben je vaak goedkoper uit dan een goed gemaakte inloopdouche.

### Onderhoudsperspectief

Bij een inloopdouche kunnen voegen op de vloer en lijngoten op termijn aandacht vragen. Een douchebak is qua oppervlak veel kleiner en daardoor minder onderhoudsgevoelig.

## Nadelen van een douchecabine

### Beperkt qua maatwerk

Cabines komen in standaardmaten. Een ruimte van 95×95 cm is lastig — dan moet je water bij de wijn doen of toch maatwerk-glas laten maken (wat meteen een groot deel van het kostenvoordeel laat verdampen).

### Schuif- of klapdeur

Schuifdeuren slijten op termijn en zijn lastiger schoon te houden. Klapdeuren vragen openslag-ruimte.

### Drempel

Een douchebak heeft altijd een drempel van enkele centimeters. Niet handig op latere leeftijd, niet ideaal voor kleine kinderen.

### Esthetiek

Eerlijk: in een [luxe project](/prijzen) kies je vrijwel nooit een cabine. Het oogt minder gewoonweg.

## Wat raden wij aan?

Onze ervaring uit honderden projecten:

- **Kies een inloopdouche** als: je badkamer minimaal 5 m² is, je een tijdloze uitstraling wilt, je levensloopbestendig wilt bouwen, of je een ruimer gevoel wilt.
- **Kies een cabine** als: je badkamer onder 4 m² is en elke cm telt, je strak budget hebt, of je een snelle renovatie wilt.

In ongeveer 80% van onze recente projecten kiezen klanten voor een inloopdouche, vooral in [Amsterdam](/badkamerstijl/amsterdam) en [Utrecht](/badkamerstijl/utrecht) waar grachtenpanden om creatieve indelingen vragen.

## Waar je op moet letten bij installatie

Een inloopdouche staat of valt met de installatie. De drie technische punten die het verschil maken tussen "perfect" en "lekkende ellende":

- **Afschot**: minimaal 1,5 cm per meter naar de afvoer. Te weinig en water blijft staan; te veel en het oogt scheef. Wij meten met laser.
- **Afdichting onder de tegels**: een vloeibare smeerafdichting (kimband + tegelijk-toepasbare folie) voorkomt vocht onder de tegels. Voegen alleen zijn niet waterdicht.
- **Lijngoot vs puntafvoer**: een lijngoot (lengte van wand) ziet er strakker uit en werkt beter met grootformaat tegels. Een puntafvoer is € 200–400 goedkoper maar vraagt 4 richtingen afschot wat lastiger te realiseren is.

Bij een douchecabine zijn deze risico's er niet — de bak is fabrieksmatig waterdicht. Daar gaat het er meer om de cabine goed waterpas en strak tegen de muren te plaatsen.

## Persoonlijk advies?

Twijfel je nog? Plan een [gratis adviesgesprek](/adviesgesprek). Wij komen langs, meten op en bespreken welke optie het beste werkt voor jouw badkamer en levensstijl. Geen verkooppraatje — eerlijk advies van mensen die deze keuzes dagelijks zien werken (of niet).`,
  },
  {
    slug: 'badkamer-verbouwen-stap-voor-stap-plan',
    title: 'Badkamer verbouwen: stap-voor-stap plan',
    excerpt:
      'Van eerste idee tot oplevering: een realistisch stappenplan voor een badkamer verbouwing, met tijdlijn, beslismomenten en valkuilen.',
    category: 'tips',
    date: '2026-01-25',
    heroImage: '/badkamerstijl/2200xxs(25).jpg',
    metaTitle: 'Badkamer Verbouwen: Stap-voor-stap plan | Badkamerstijl',
    metaDescription:
      'Een realistisch stappenplan voor je badkamer verbouwing: van oriëntatie en offerte tot uitvoering en oplevering. Inclusief tijdlijn en checklists.',
    content: `Een badkamer verbouwen is overzichtelijker dan veel mensen denken — als je het in stappen aanpakt en weet wat er op elk moment van je verwacht wordt. Hieronder onze beproefde aanpak in tien fases, van eerste idee tot het moment waarop je voor het eerst kunt douchen. Houd rekening met een totale doorlooptijd van zes tot twaalf weken, afhankelijk van seizoen en omvang.

## Fase 1: Oriëntatie (week 0–2)

Verzamel inspiratie. Pinterest, Instagram en magazines zoals Eigen Huis & Interieur zijn nuttig. Maak een moodboard met 10–20 beelden die jouw smaak vangen. Let niet alleen op de "look" maar ook op materialen en sfeer. Schrijf op wat je wel én niet wilt.

In deze fase ook praktisch nadenken:

- Wie gaat de badkamer gebruiken? (alleen, gezin, gasten)
- Heb je een bad nodig of past een ruime inloopdouche beter?
- Hoeveel opbergruimte heb je nodig?
- Welk budget heb je beschikbaar?

## Fase 2: Adviesgesprek en opname (week 2–3)

Plan een gesprek met een specialist. Wij komen vrijblijvend langs, meten op, kijken naar de bestaande situatie (leidingen, ventilatie, ondervloer) en bespreken jouw wensen. Dit duurt doorgaans 60–90 minuten. Reken op:

- Doorlichten van de bestaande badkamer
- Ontdekken van eventuele knelpunten (bijv. gemeenschappelijke afvoer)
- Eerste schets en globale prijsindicatie
- Bespreking van [pakketten](/prijzen)

## Fase 3: Ontwerp en offerte (week 3–5)

Wij maken een gedetailleerd ontwerp inclusief plattegrond, materialenlijst en — bij Premium en Luxe — een 3D-visualisatie. De gespecificeerde offerte bevat een vaste aanneemsom. Belangrijke beslismomenten:

- Definitieve indeling (positie wastafel, toilet, douche, bad)
- Materiaalkeuze tegels (vloer + wand)
- Sanitairmerken (Geberit, Hansgrohe, etc.)
- Verlichting en vloerverwarming
- Eventueel maatwerk meubels

## Fase 4: Akkoord en planning (week 5–6)

Na akkoord op de offerte plannen we de start van de werkzaamheden. Wachttijd is doorgaans 4–8 weken. In deze periode:

- Bestellen wij alle materialen
- Maak je definitieve keuzes (kleur grepen, kraanafwerking)
- Bereiden we de planning voor met onze monteurs

Tip: leg keuzes schriftelijk vast — fouten in deze fase zijn duur om later te corrigeren.

## Fase 5: Voorbereiding thuis (week voor start)

Vóór de start:

- Pak persoonlijke spullen uit de badkamer
- Bedek aangrenzende ruimtes (gang, slaapkamer) met afdekfolie of plaatmateriaal
- Maak een tijdelijke douchplek (logé bij familie, of bij een dagservice in de buurt)
- Zorg voor parkeergelegenheid voor onze busjes

## Fase 6: Sloop (dag 1–3)

We strippen de badkamer compleet: tegels, sanitair, leidingen, vloer. Stof en geluid zijn helaas onvermijdelijk. Wij gebruiken stofzuig-systemen aan onze gereedschappen, maar volledig stofvrij bestaat niet bij sloopwerk.

Ontdekken we tijdens sloop verborgen problemen (vocht, asbest, verrotte ondervloer), dan stoppen we en bespreken het met jou voordat we doorwerken. Geen onaangename verrassingen op de eindfactuur.

## Fase 7: Leidingwerk en ondergrond (dag 3–7)

Onze loodgieter legt nieuwe water- en afvoerleidingen, vaak in combinatie met de elektricien voor stopcontacten en verlichting. Daarna wordt de ondervloer geëgaliseerd en gewaterpas gebracht. Als er vloerverwarming komt, wordt deze nu ingelegd. Een dag uitharding is gebruikelijk voordat we doorgaan.

## Fase 8: Tegelwerk (dag 7–14)

Het tegelwerk is de meest tijdrovende fase. Eerst de vloer (en uitharding), dan de wanden. Voegen worden pas aangebracht na 24–48 uur uitharding van de tegellijm.

Dit is ook de fase waarin de badkamer écht herkenbaar wordt. Elke ochtend kom je beneden en zie je vooruitgang. Als klant kun je nu al een gevoel krijgen van het eindresultaat.

## Fase 9: Afmontage en sanitair (dag 14–18)

Sanitair, kraanwerk, glaswerk, spiegel, verlichting — alles wordt nu geïnstalleerd. Onze monteur loopt elke aansluiting na, controleert lekkages, test thermostaten. De laatste dag wordt de badkamer schoongemaakt en gepoetst.

## Fase 10: Oplevering (dag 18–21)

Wij lopen samen met jou een oplevercheck door. Eventuele restpunten worden binnen één week opgelost. Je krijgt:

- Onderhoudsadvies per materiaal
- Garantiedocumenten (5 tot 10 jaar afhankelijk van het pakket)
- Contactgegevens voor service na oplevering

## Tijdlijn samengevat

- **Voorbereiding (oriëntatie tot start)**: 6–10 weken
- **Uitvoering**: 2–4 weken bij standaard renovatie, 4–6 weken bij luxe of grote ruimtes
- **Totale doorlooptijd**: 8–14 weken

## Veelvoorkomende valkuilen

1. Te laat materialen kiezen — leveringen kunnen 4 tot 8 weken duren
2. Tijdens de bouw nog wijzigingen willen — kost altijd extra geld en tijd
3. Geen rekening houden met tijdelijke douchplek — twee weken zonder badkamer is langer dan je denkt
4. Aannemers kiezen op laagste prijs — verschil in vakmanschap is enorm

## Klaar om te starten?

Wij begeleiden het hele traject van eerste schets tot oplevering. Plan een [gratis adviesgesprek](/adviesgesprek) en wij komen langs voor een opname. Werkzaam in heel Nederland, met regelmatige projecten in [Amsterdam](/badkamerstijl/amsterdam), [Utrecht](/badkamerstijl/utrecht), [Den Haag](/badkamerstijl/den-haag) en [Eindhoven](/badkamerstijl/eindhoven).`,
  },
  {
    slug: 'vloerverwarming-in-de-badkamer-kosten-en-voordelen',
    title: 'Vloerverwarming in de badkamer: kosten en voordelen',
    excerpt:
      'Elektrisch of hydraulisch? Wat kost vloerverwarming in een badkamer en wanneer verdien je het terug? Een eerlijke vergelijking.',
    category: 'materialen',
    date: '2026-01-12',
    heroImage: '/badkamerstijl/2200xxs(29).jpg',
    metaTitle: 'Vloerverwarming Badkamer: Kosten en Voordelen | Badkamerstijl',
    metaDescription:
      'Wat kost vloerverwarming in de badkamer? Vergelijking elektrisch vs hydraulisch, voordelen, terugverdientijd en installatie-eisen.',
    content: `Vloerverwarming is in een nieuwe of gerenoveerde badkamer bijna een standaard geworden. Geen koude tegels op blote voeten, geen radiator die ruimte inneemt, en bij goede uitvoering een lagere energierekening. Maar er zijn twee hoofdsystemen — elektrisch en hydraulisch — met heel verschillende kosten en eigenschappen. In dit artikel leggen we uit welk systeem wanneer past, wat het kost en wanneer je het terugverdient.

## De twee systemen in het kort

### Elektrische vloerverwarming

Een dunne matrix met verwarmingskabels (of een verwarmingsmat) wordt direct onder de vloertegels gelegd. Aangedreven door 230V stroom. Bestuurd via een aparte thermostaat in de badkamer.

### Hydraulische vloerverwarming

Buisjes met warm water lopen onder de vloer, aangesloten op de centrale verwarmingsketel of warmtepomp. Vereist een verdeler in de meterkast of badkamer.

## Kosten op een rij

### Elektrische installatie

- Verwarmingsmat: € 30 – € 60 per m²
- Thermostaat: € 150 – € 350
- Installatie en aansluiting: € 250 – € 500
- **Totaal voor een 6 m² badkamer**: € 600 – € 1.200

### Hydraulische installatie

- Buizen, dichtklep en verdeler: € 80 – € 120 per m²
- Aansluiting op CV-systeem of warmtepomp: € 800 – € 1.500
- Egalisatievloer (extra dik nodig): € 25 – € 40 per m²
- **Totaal voor een 6 m² badkamer**: € 1.500 – € 3.000

### Verbruikskosten

Hier maakt de keuze het meeste verschil:

- Elektrisch: 30–50 watt per m². Reken op € 25–50 per maand bij dagelijks gebruik in een 6 m² badkamer
- Hydraulisch (op CV op gas): € 8–15 per maand
- Hydraulisch (op warmtepomp): € 6–10 per maand

Hydraulisch is op de lange termijn dus 3 tot 5 keer goedkoper in gebruik. De terugverdientijd ten opzichte van elektrisch is 5–8 jaar bij dagelijks gebruik.

## Wanneer kies je elektrisch?

- Bij een renovatie zonder grote bouwingrepen
- Wanneer er geen ruimte is voor extra vloeropbouw
- In een ruimte zonder eenvoudige aansluiting op het CV-systeem
- Wanneer de badkamer de enige ruimte met vloerverwarming wordt

Elektrisch is dus ideaal voor de meeste renovaties in flats en appartementen, en voor [kleinere badkamers](/badkamerstijl/blog/kleine-badkamer-inrichten-15-slimme-tips) waar comfort belangrijker is dan minimale verbruikskosten.

## Wanneer kies je hydraulisch?

- Bij een complete verbouwing waarbij de vloer toch open ligt
- Wanneer je hele woning vloerverwarming heeft of krijgt
- Bij een warmtepomp-installatie (lage temperatuur is ideaal)
- Voor grotere badkamers (vanaf 8 m²) waar verbruikskosten oplopen

## Voordelen van vloerverwarming

### Comfort

Een verwarmde vloer voelt anders aan dan een verwarmde lucht. Warme voeten zijn de meest directe luxe in de badkamer. Vooral 's ochtends maakt het verschil.

### Sneller drogen

Een verwarmde vloer droogt in 30–60 minuten op na het douchen. Dat scheelt schimmelvorming en kalkafzetting.

### Vrije muurruimte

Geen radiator betekent een hele muur extra te benutten — voor een grote spiegel, een handdoekrek of opbergkast. In kleine badkamers is dit goud waard.

### Lagere stooftemperatuur

Vloerverwarming werkt op lage temperatuur (35–45 graden) terwijl radiatoren 60–70 graden vragen. Bij hydraulische systemen is dit een directe energiewinst.

### Esthetiek

Geen lelijke buisjes en kraankoppen. De wanden blijven schoon en strak, wat past bij moderne badkamerontwerpen.

## Eisen aan installatie

### Vloeropbouw

- Elektrisch: 4–8 mm extra hoogte (matjes zijn dun)
- Hydraulisch: 50–80 mm extra hoogte voor isolatie + buizen + tegellijm + tegels

In renovaties met behoud van bestaande deuren kan dit bepalend zijn.

### Tegelkeuze

Niet elke vloer is geschikt. Belangrijk:

- Keramische en porseleinen tegels: prima
- Natuursteen: meestal prima, maar marmer kan bij temperatuurschommelingen barsten — dan met een limiet aan opwarmsnelheid programmeren
- PVC of vinyl: alleen als de fabrikant het expliciet certificeert

### Ondervloer en isolatie

Bij hydraulische systemen is een isolatieplaat onder de buizen essentieel — anders verdwijnt 30% van de warmte naar de verdieping eronder.

## Onderhoud

Beide systemen zijn onderhoudsarm. Punten van aandacht:

- Hydraulisch: jaarlijks ontluchten van de verdeler (15 minuten werk)
- Elektrisch: thermostaat en sensor controleren, batterij vervangen indien aanwezig

Een goed aangelegd vloerverwarmingssysteem gaat 30+ jaar mee zonder noemenswaardig onderhoud.

## Slim programmeren scheelt veel

Een veelgemaakte fout is het systeem 24/7 op temperatuur houden. Dat is zonde van het geld. Onze tips voor een slim verbruik:

- Programmeer twee periodes per dag — bijvoorbeeld 06:30–09:00 en 18:00–22:00
- Zet de vloer 's nachts op 17°C in plaats van uit (sneller op temperatuur dan vanuit koud)
- Combineer met een aanwezigheidssensor of slimme thermostaat (Tado, Nest) die leert van je ritme

Met een goed programma scheelt dit 30–50% verbruik ten opzichte van een continu verwarmde vloer.

## Wat doen wij?

Bij Badkamerstijl integreren we vloerverwarming standaard in onze [Standaard, Premium en Luxe pakketten](/prijzen). Voor renovaties zonder grote bouwingrepen kiezen we doorgaans elektrisch; bij complete verbouwingen of nieuwbouw hydraulisch. Tijdens het [adviesgesprek](/adviesgesprek) bespreken we welk systeem het beste past bij jouw situatie en budget — en welke terugverdientijd realistisch is.

Vloerverwarming is een investering die je elke dag voelt. Voor de meeste klanten is het naast de inloopdouche het detail dat ze nooit meer willen missen.`,
  },
  {
    slug: 'luxe-badkamer-op-budget-zo-doe-je-dat',
    title: 'Luxe badkamer op budget: zo doe je dat',
    excerpt:
      'Een hotel-allure badkamer voor minder dan je denkt. Welke keuzes maken écht verschil — en waarop kun je verstandig besparen?',
    category: 'inspiratie',
    date: '2025-12-18',
    heroImage: '/badkamerstijl/2200xxs(24).jpg',
    metaTitle: 'Luxe Badkamer op Budget: Zo Doe Je Dat | Badkamerstijl',
    metaDescription:
      'Hoe creëer je een luxe gevoel in je badkamer zonder torenhoog budget? Praktische tips voor een hotel-allure renovatie binnen € 12.000 – € 18.000.',
    content: `Een luxe badkamer hoeft niet altijd € 35.000+ te kosten. Met de juiste keuzes — en vooral het slim weglaten van wat geen verschil maakt — kun je voor € 12.000 tot € 18.000 een ruimte creëren die voelt als een hotelbadkamer. De truc zit hem in het herkennen waar luxe écht vandaan komt: niet uit de prijs van een merk, maar uit doordachte details, goed uitgevoerd vakwerk en bewust gekozen accenten.

## Waar luxe echt vandaan komt

Voor onze klanten is "luxe gevoel" zelden een specifiek merk of materiaal. Het is bijna altijd een combinatie van:

- Strak afgewerkt tegelwerk zonder zichtbare voegfouten
- Doordachte verlichting in meerdere lagen
- Eén of twee statement-elementen (een prachtige kraan, een mooie spiegel, een opvallende tegel)
- Veel ruimte tussen objecten — geen prop in de badkamer
- Goed sanitair zonder per se topmerk te zijn

Met die principes als uitgangspunt kun je gericht keuzes maken.

## Tip 1: Investeer in tegels, bespaar op merken

Een Hansgrohe Ecostat thermostaat (€ 350) presteert vrijwel identiek aan een Hansgrohe AXOR (€ 1.200). Het verschil is afwerking en uitstraling — en voor 95% van de mensen niet zichtbaar onder de douche.

Maar het verschil tussen een goedkope keramische tegel en een mooie 60×120 porseleinen tegel ZIE je elke dag. Reken voor elke vierkante meter wand op € 30–50 meerprijs voor een betere tegel — totaal misschien € 800–1.500 verschil. Een kraanwerk-upgrade van € 700–1.500. Conclusie: investeer in tegels, niet in topmerk-kranen.

## Tip 2: Eén statement-element

Niet alles in je badkamer hoeft luxe te zijn. Eén ding dat eruit springt is genoeg. Mogelijkheden:

- Een mooie wandtegel achter de wastafel (bijvoorbeeld marmer-look in groot formaat)
- Een uitzonderlijk kraanwerk in mat zwart of geborsteld brons
- Een vrijstaand bad in een bijzondere vorm
- Een opvallend wastafelmeubel in echt fineer

Door één element te kiezen en de rest rustig te houden, komt dat element extra goed tot zijn recht. Probeer je alles tegelijk luxueus te maken, dan krijg je vaak een chaotische ruimte.

## Tip 3: Goedkope luxe — verlichting

Verlichting is bizar onderschat. Voor € 400–800 kun je drie lagen verlichting maken (algemeen, taak, sfeer) die het verschil maken tussen "normale badkamer" en "spa-gevoel". Specifiek:

- Inbouwspots in warm-witte kleurtemperatuur (3000K)
- LED-strip rondom of in de spiegel
- Indirect licht onder een nis of het wastafelmeubel
- Aparte schakelgroepen — overdag fel licht, 's avonds gedimd

Dit is een investering die je elke dag voelt en die geen vermogend budget vraagt.

## Tip 4: Gebruik grootformaat tegels

Een 120×280 cm porseleinen plaat als doucherwand kost niet veel meer dan veel kleine tegels samen, maar geeft een totaal andere uitstraling. Minder voegen, meer rust, meer hotellook. Een hele wand in één plaat is voor onder de € 600 al haalbaar.

## Tip 5: Bespaar op opbergruimte

Veel klanten willen veel kasten en planken. Maar in de mooiste badkamers zijn opbergplekken juist beperkt — wat zorgt voor een rustige, opgeruimde uitstraling. Eén goed wastafelmeubel met dubbele lade en een hoge smalle kast is voldoende voor twee personen. Dat scheelt vaak € 1.500 – € 2.500 aan maatwerk.

## Tip 6: Kies inloopdouche, niet bad én douche

In een gemiddelde badkamer (5–7 m²) is alleen plek voor één van beide goed uitgevoerd. Een ruime, mooi gemaakte [inloopdouche](/badkamerstijl/blog/inloopdouche-vs-douchecabine-wat-past-bij-jou) maakt meer indruk dan een bad én een krap doucheresje. Heb je beide nodig? Overweeg dan een grotere badkamer of accepteer dat één van beide compromis krijgt.

## Tip 7: Zwart, geborsteld en mat

Mat zwarte of geborsteld nikkelen kraanwerken oogt onmiskenbaar luxer dan glanzend chroom — voor exact dezelfde prijs. Het kost niets extra om voor de mooiere afwerking te kiezen, en het verschil is enorm. Hetzelfde geldt voor handgrepen, douche-armaturen en stopcontact-frames.

## Tip 8: Slim sanitair-merken combineren

Niet alle sanitair hoeft van hetzelfde merk te zijn. Onze ervaring:

- Inbouwreservoir: altijd Geberit (€ 200–400)
- Hangtoilet: middensegment Villeroy & Boch of Duravit (€ 350–600)
- Wastafel: keramiek van een goed merk (€ 200–500)
- Kraanwerk: Hansgrohe Logis-serie of Grohe Eurosmart Cosmopolitan (€ 250–450 per stuk)

Op deze manier blijven sanitair-kosten onder € 2.500 in plaats van € 5.000+ bij topmerken — zonder dat je het ziet of voelt in dagelijks gebruik.

## Tip 9: Goede vakman maakt meer verschil dan duur materiaal

We hebben het regelmatig gezien: een € 20.000 budget bij een onervaren aannemer levert vaak een minder mooie badkamer op dan € 12.000 bij een vakman. Vooral het tegelwerk maakt heel veel verschil. Zoek niet de goedkoopste, zoek de juiste partij.

## Realistisch budgetvoorbeeld: € 14.000

Wat zit er in een € 14.000 badkamer (6 m²) als je deze tips volgt?

- Sloop en afvoer: € 800
- Leidingwerk en aansluitingen: € 1.500
- Vloer- en wandtegels (60×120 keramiek): € 2.200
- Tegelarbeid: € 2.000
- Inloopdouche met thermostaat en regendouche: € 1.200
- Hangtoilet, wastafel en wastafelmeubel: € 1.800
- Designkraanwerk in mat zwart: € 600
- Verlichting (drie lagen + LED-spiegel): € 700
- Elektrische vloerverwarming: € 700
- Diverse afwerking en oplevering: € 1.500
- BTW + ondernemerskosten: inclusief

Niet de meest luxueuze badkamer in onze portefeuille, maar wel een ruimte die voelt als minstens € 25.000.

## Klaar om te beginnen?

In ons [Standaard pakket](/prijzen) (€ 12.000 – € 22.000) zit precies dit soort optimalisatie ingebakken. Plan een [gratis adviesgesprek](/adviesgesprek) en wij laten zien wat er voor jouw budget mogelijk is. Wij zijn eerlijk: liever een goede badkamer voor € 14.000 dan een doorsnee voor € 22.000.`,
  },
];

const postBySlug = new Map(BLOG_POSTS.map((p) => [p.slug, p]));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return postBySlug.get(slug);
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  if (sameCategory.length >= count) return sameCategory.slice(0, count);
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function getPostsByCategory(category: BlogCategory | 'all'): BlogPost[] {
  const filtered =
    category === 'all'
      ? [...BLOG_POSTS]
      : BLOG_POSTS.filter((p) => p.category === category);
  return filtered.sort((a, b) => b.date.localeCompare(a.date));
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export type Heading = { id: string; text: string; level: 2 | 3 };

export function extractHeadings(content: string): Heading[] {
  const lines = content.split('\n');
  const headings: Heading[] = [];
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    if (h2) {
      const text = h2[1].trim();
      headings.push({ id: slugifyHeading(text), text, level: 2 });
    } else if (h3) {
      const text = h3[1].trim();
      headings.push({ id: slugifyHeading(text), text, level: 3 });
    }
  }
  return headings;
}
