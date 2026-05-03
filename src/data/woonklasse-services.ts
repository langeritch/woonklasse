export type ServiceTier = {
  label: string;
  range: string;
  desc: string;
  highlights: string[];
  featured?: boolean;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type ServiceFaq = { q: string; a: string };

export type WoonklasseService = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  intro: string;
  longIntro: string;
  keywords: string[];
  image: string;
  averagePrice: string;
  averageDuration: string;
  tiers: ServiceTier[];
  included: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  relatedCities: string[];
};

const STANDARD_PROCESS: ServiceProcessStep[] = [
  {
    step: '01',
    title: 'Intake & opname',
    desc: 'Een vaste projectleider komt vrijblijvend langs voor een grondige opname. We luisteren naar uw wensen, meten de ruimte op en bespreken het budget.',
  },
  {
    step: '02',
    title: 'Ontwerp & offerte',
    desc: 'Binnen 10 werkdagen ontvangt u een gedetailleerde offerte met vaste prijs, materiaalkeuzes, planning en een 3D-impressie waar relevant.',
  },
  {
    step: '03',
    title: 'Uitvoering',
    desc: 'Eigen vakmensen voeren het werk uit volgens de afgesproken planning. U heeft één vast aanspreekpunt en wekelijks een voortgangsrapportage.',
  },
  {
    step: '04',
    title: 'Oplevering & garantie',
    desc: 'We leveren op met een gezamenlijke check, een garantieboek en alle documentatie. Tot 10 jaar garantie op constructief werk.',
  },
];

const ALL_CITIES = [
  'amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven',
  'tilburg', 'groningen', 'almere', 'breda', 'nijmegen',
  'apeldoorn', 'haarlem', 'arnhem', 'enschede',
];

export const WOONKLASSE_SERVICES: WoonklasseService[] = [
  {
    slug: 'badkamer-renovatie',
    name: 'Badkamer renovatie',
    shortName: 'Badkamer',
    metaTitle: 'Wat kost een badkamer renovatie? — Specialist | Woonklasse',
    metaDescription:
      'Complete badkamer renovatie vanaf €8.500. Sloop, sanitair, tegelwerk, vloerverwarming en elektra — alles uit één hand. Vaste prijs, eigen vakmensen, tot 10 jaar garantie.',
    heroEyebrow: 'Dienst · Sanitair & tegelwerk',
    heroTitle: 'Badkamer renovatie',
    heroTitleAccent: 'specialist sinds 2008',
    intro:
      'Een nieuwe badkamer in 2 tot 4 weken — sloop, leidingwerk, tegelwerk en sanitair door één team.',
    longIntro:
      'Een badkamer renovatie raakt elk vakgebied: loodgieterij, elektra, tegelwerk, stucwerk en timmerwerk. Bij Woonklasse hebben we die specialisten in vaste dienst, zodat we strakke planningen kunnen maken en de kwaliteit op elk niveau borgen. Of u nu een wellness-badkamer met inloopdouche en vrijstaand bad wenst, of een compacte badkamer renovatie voor een huurappartement — wij maken vooraf een vaste prijs en houden ons daaraan.',
    keywords: [
      'badkamer renovatie',
      'wat kost een badkamer renovatie',
      'badkamer specialist',
      'badkamer verbouwen',
      'badkamer renovatie kosten',
      'complete badkamer',
    ],
    image: '/woonklasse/apartment-amsterdam-2.jpg',
    averagePrice: '€8.500 — €30.000',
    averageDuration: '2 — 4 weken',
    tiers: [
      {
        label: 'Basis',
        range: '€8.500 — €13.500',
        desc: 'Standaard badkamer tot 6 m² — sanitair, tegelwerk en mechanische ventilatie vervangen.',
        highlights: ['Standaard sanitair', 'Wand- en vloertegels', 'Doorlooptijd 2 — 3 weken'],
      },
      {
        label: 'Comfort',
        range: '€13.500 — €22.000',
        desc: 'Middenklasse afwerking met inloopdouche, vloerverwarming en designradiator.',
        highlights: ['Inloopdouche met glaswand', 'Elektrische vloerverwarming', 'Hoogwaardig sanitair'],
        featured: true,
      },
      {
        label: 'Luxe',
        range: '€22.000 — €40.000+',
        desc: 'Wellness-badkamer met vrijstaand bad, regendouche en maatwerk meubel.',
        highlights: ['Vrijstaand bad & regendouche', 'Natuursteen of grootformaat tegels', 'Maatwerk badmeubel'],
      },
    ],
    included: [
      'Volledige sloop en afvoer van bestaand sanitair',
      'Loodgieterswerk: water-, riool- en cv-leidingen',
      'Elektra volgens NEN 1010 — inclusief groep voor vloerverwarming',
      'Wand- en vloertegelwerk inclusief voegwerk en kitwerk',
      'Plaatsing van sanitair, kranen, douchewand en accessoires',
      'Mechanische ventilatie of WTW-aansluiting',
      'Eindreiniging en oplevering met garantieboek',
    ],
    process: STANDARD_PROCESS,
    faqs: [
      {
        q: 'Wat kost een badkamer renovatie gemiddeld?',
        a: 'Een complete badkamer renovatie ligt tussen €8.500 (basis, 4-6 m²) en €30.000 (luxe afwerking met vrijstaand bad). Bij Woonklasse ontvangt u een vaste prijs vooraf — geen meerwerk-verrassingen.',
      },
      {
        q: 'Hoe lang duurt een badkamer verbouwing?',
        a: 'Een gemiddelde badkamer renovatie duurt 2 tot 3 weken. Bij maatwerk met natuursteen of bijzondere installaties kan het oplopen tot 4 weken. We plannen alle vakmensen achter elkaar zodat er geen stilstand is.',
      },
      {
        q: 'Kan ik thuis blijven wonen tijdens de renovatie?',
        a: 'Ja — als u nog een tweede toilet of badkamer heeft. Anders adviseren we tijdelijk uit te wijken, of we plaatsen een tijdelijke toiletvoorziening.',
      },
      {
        q: 'Krijg ik garantie op een nieuwe badkamer?',
        a: 'Wij geven 10 jaar garantie op leidingwerk, 5 jaar op sanitair en installaties en 2 jaar op tegelwerk en kitwerk. U ontvangt een garantieboek met alle fabrieksgaranties.',
      },
    ],
    relatedCities: ['amsterdam', 'utrecht', 'haarlem', 'almere', 'rotterdam', 'den-haag'],
  },
  {
    slug: 'keuken-renovatie',
    name: 'Keuken renovatie',
    shortName: 'Keuken',
    metaTitle: 'Wat kost een keuken renovatie? — Specialist | Woonklasse',
    metaDescription:
      'Complete keuken renovatie vanaf €7.500: sloop, leidingwerk, tegelwerk, elektra en montage. Maatwerk keukens met vaste prijs, eigen monteurs en tot 10 jaar garantie.',
    heroEyebrow: 'Dienst · Maatwerk keukens',
    heroTitle: 'Keuken renovatie',
    heroTitleAccent: 'op maat geplaatst',
    intro:
      'Een nieuwe keuken inclusief sloop, leidingwerk en montage — door één partij in 1 tot 3 weken geplaatst.',
    longIntro:
      'De keuken is het hart van uw woning. Een keuken renovatie is meer dan alleen het meubel plaatsen — het vraagt om aanpassingen aan elektra, water, gas, ventilatie en vaak ook het tegel- of vloerwerk. Woonklasse coördineert het hele traject. Wij werken met diverse keukenleveranciers en kunnen ook een bestaande keuken behouden en alleen het werkblad of de fronten vervangen.',
    keywords: [
      'keuken renovatie',
      'wat kost een keuken plaatsen',
      'keuken specialist',
      'keuken verbouwen',
      'keuken renovatie kosten',
      'maatwerk keuken',
    ],
    image: '/woonklasse/penthouse-amsterdam-2.jpg',
    averagePrice: '€7.500 — €35.000',
    averageDuration: '1 — 3 weken',
    tiers: [
      {
        label: 'Basis',
        range: '€7.500 — €13.000',
        desc: 'Standaard keuken vervangen — bestaand layout behouden, nieuwe units en apparatuur.',
        highlights: ['Standaard rechte of L-opstelling', 'Inbouwapparatuur middenklasse', 'Doorlooptijd 1 week'],
      },
      {
        label: 'Comfort',
        range: '€13.000 — €25.000',
        desc: 'Nieuwe layout met kookeiland, composiet werkblad en betere apparatuur.',
        highlights: ['Kookeiland of bar-opstelling', 'Composiet of dekton werkblad', 'AEG, Siemens of vergelijkbaar'],
        featured: true,
      },
      {
        label: 'Premium',
        range: '€25.000 — €60.000+',
        desc: 'Designkeuken op maat met natuursteen, geïntegreerde apparatuur en doorbraak.',
        highlights: ['Maatwerk fronten en greeploos', 'Natuursteen of dekton', 'Doorbraak met stalen lateien'],
      },
    ],
    included: [
      'Demontage en afvoer van de oude keuken',
      'Aanpassingen leidingwerk water, gas en afvoer',
      'Elektra: nieuwe groepen, perilexaansluiting, kookeiland',
      'Tegelwerk achterwand of spatscherm',
      'Plaatsing van de keuken inclusief afmonteren apparatuur',
      'Aansluiting afzuigkap of recirculatie',
      'Eindreiniging en oplevering',
    ],
    process: STANDARD_PROCESS,
    faqs: [
      {
        q: 'Wat kost een keuken renovatie?',
        a: 'Een keuken plaatsen kost gemiddeld €7.500 tot €25.000 — afhankelijk van afmeting, materiaal en apparatuur. Doorbraken of een kookeiland vergen extra constructief werk en kosten meer.',
      },
      {
        q: 'Hoe lang duurt het plaatsen van een nieuwe keuken?',
        a: 'De montage zelf duurt 3 tot 5 dagen. Met sloop, leidingwerk en tegelwerk komt u op 1 tot 3 weken.',
      },
      {
        q: 'Kan ik mijn eigen keuken laten plaatsen?',
        a: 'Ja. Wij plaatsen keukens van elke leverancier — IKEA, Bruynzeel, Mandemakers, of een lokale keukenmaker. We coördineren de levering en de aansluitingen.',
      },
      {
        q: 'Mag een doorbraak naar de woonkamer?',
        a: 'In de meeste gevallen wel, mits er een constructieberekening wordt gemaakt. Wij verzorgen tekeningen, vergunning en de stalen lateien.',
      },
    ],
    relatedCities: ['amsterdam', 'rotterdam', 'utrecht', 'eindhoven', 'haarlem', 'breda'],
  },
  {
    slug: 'aanbouw-uitbouw',
    name: 'Aanbouw & uitbouw',
    shortName: 'Aanbouw',
    metaTitle: 'Wat kost een aanbouw of uitbouw? — Specialist | Woonklasse',
    metaDescription:
      'Aanbouw of uitbouw vanaf €1.800 per m². Vergunning, fundering, casco en afwerking door één partij. Vaste prijs, eigen vakmensen en architect — heel Nederland.',
    heroEyebrow: 'Dienst · Bijbouwen',
    heroTitle: 'Aanbouw & uitbouw',
    heroTitleAccent: 'specialist',
    intro:
      'Meer leefruimte met een aanbouw of uitbouw — vergunning, fundering, casco en afwerking door één partij.',
    longIntro:
      'Een aanbouw of uitbouw vergroot niet alleen de woonruimte, maar verhoogt ook de waarde van uw woning. Woonklasse begeleidt het hele traject: van het eerste schetsontwerp door onze vaste architect, via de vergunningsaanvraag bij de gemeente, tot de oplevering. Wij maken de fundering, de constructie, het metselwerk, het dakwerk en de afwerking — alles uit één hand met één projectleider.',
    keywords: [
      'aanbouw',
      'uitbouw',
      'wat kost een aanbouw',
      'aanbouw specialist',
      'uitbouw kosten per m2',
      'aanbouw aannemer',
    ],
    image: '/woonklasse/penthouse-amsterdam-3.jpg',
    averagePrice: '€1.800 — €3.500 / m²',
    averageDuration: '8 — 16 weken',
    tiers: [
      {
        label: 'Standaard',
        range: '€1.800 — €2.300 / m²',
        desc: 'Eenvoudige aanbouw met platdak, kunststof kozijnen en standaard afwerking.',
        highlights: ['Platdak met EPDM', 'Kunststof kozijnen', 'Doorlooptijd 8 — 10 weken'],
      },
      {
        label: 'Comfort',
        range: '€2.300 — €2.900 / m²',
        desc: 'Aanbouw met grote schuifpui, hardhouten kozijnen en hoogwaardige isolatie.',
        highlights: ['Grote schuifpui of vouwwand', 'Hardhouten of aluminium kozijnen', 'Lichtkoepel of dakraam'],
        featured: true,
      },
      {
        label: 'Premium',
        range: '€2.900 — €3.500+ / m²',
        desc: 'Architectonische uitbouw met staalconstructie, zinken dak en designdetails.',
        highlights: ['Architectonisch ontwerp', 'Staalconstructie en zinken dak', 'Vloerverwarming en climate control'],
      },
    ],
    included: [
      'Schetsontwerp door onze vaste architect',
      'Constructieberekening en omgevingsvergunning',
      'Sloop bestaande gevel en grondwerk',
      'Fundering, casco en metselwerk',
      'Dakwerk inclusief isolatie en afwerking',
      'Kozijnen, beglazing en installatiewerk',
      'Binnen-afwerking, schilderwerk en stuc',
    ],
    process: [
      { step: '01', title: 'Intake & schetsontwerp', desc: 'We bezoeken uw woning, bespreken wensen en maken een eerste schetsontwerp met indicatiebudget.' },
      { step: '02', title: 'Ontwerp & vergunning', desc: 'Definitief ontwerp, constructieberekening en omgevingsvergunning. Doorlooptijd 8 — 14 weken.' },
      { step: '03', title: 'Bouw', desc: 'Sloop, fundering, casco en afwerking — uitgevoerd door eigen vakmensen volgens vaste planning.' },
      { step: '04', title: 'Oplevering & garantie', desc: 'Sleutelklare oplevering met garantieboek. Tot 10 jaar garantie op constructie.' },
    ],
    faqs: [
      {
        q: 'Wat kost een aanbouw per m²?',
        a: 'Een standaard aanbouw kost €1.800 — €2.300 per m². Met grote schuifpuien en hoogwaardige afwerking €2.300 — €2.900. Architectonisch maatwerk start vanaf €2.900 per m².',
      },
      {
        q: 'Heb ik een vergunning nodig voor een aanbouw?',
        a: 'Tot 4 m diepte aan de achterkant is een aanbouw vaak vergunningsvrij — afhankelijk van de gemeente, het oppervlak en bestemmingsplan. Wij toetsen dat tijdens de intake.',
      },
      {
        q: 'Hoe lang duurt een aanbouw?',
        a: 'Vergunningstraject 8 — 14 weken. De bouw zelf 8 — 12 weken. Totaal dus 4 — 6 maanden vanaf eerste opname tot oplevering.',
      },
      {
        q: 'Kunnen jullie ook de fundering verzorgen?',
        a: 'Ja — strookfundering, palen of een betonvloer. Onze grondwerkers en metselaars werken zelfstandig en in overleg met de constructeur.',
      },
    ],
    relatedCities: ['amsterdam', 'utrecht', 'haarlem', 'den-haag', 'almere', 'apeldoorn'],
  },
  {
    slug: 'onderhoud',
    name: 'Onderhoud',
    shortName: 'Onderhoud',
    metaTitle: 'Woningonderhoud & klusservice — Specialist | Woonklasse',
    metaDescription:
      'Periodiek onderhoud, schade-herstel en preventief werk aan uw woning. Vaste vakmensen, transparante uurtarieven en abonnementen voor VvE en particulier.',
    heroEyebrow: 'Dienst · Onderhoud & service',
    heroTitle: 'Woningonderhoud',
    heroTitleAccent: 'door eigen vakmensen',
    intro:
      'Periodiek onderhoud, schade-herstel en preventief werk — voor particuliere woningen en VvE\'s.',
    longIntro:
      'Met regulier onderhoud voorkomt u dure verrassingen. Woonklasse biedt een onderhoudsservice voor particulieren en VvE\'s in heel Nederland: van het vervangen van een kapotte boiler tot grootschalig schilderwerk en gevelreiniging. Wij werken met transparante uurtarieven of een onderhoudsabonnement waarin u jaarlijks vaste taken laat uitvoeren.',
    keywords: [
      'woningonderhoud',
      'klusservice',
      'onderhoud aannemer',
      'vve onderhoud',
      'preventief onderhoud',
      'schade herstel',
    ],
    image: '/woonklasse/villa-bergen-2.jpg',
    averagePrice: '€65 — €95 / uur',
    averageDuration: 'Direct inplanbaar',
    tiers: [
      {
        label: 'Service-uur',
        range: '€65 — €95 / uur',
        desc: 'Voor losse klussen — een vakman naar keuze, voorrijden in standaard regio gratis.',
        highlights: ['Timmerman, loodgieter of elektricien', 'Inplanbaar binnen 1 — 2 weken', 'Geen voorrijkosten in regio'],
      },
      {
        label: 'Onderhoudsplan',
        range: '€450 — €1.200 / jaar',
        desc: 'Jaarlijks terugkerend onderhoudspakket: schilderwerk, gevels, dak en kit-randen.',
        highlights: ['1 — 2 servicebezoeken per jaar', 'Voorrang bij spoedreparaties', 'Vaste prijs vooraf'],
        featured: true,
      },
      {
        label: 'VvE / projectbasis',
        range: 'Op aanvraag',
        desc: 'MJOP (meerjaren-onderhoudsplan) en uitvoering voor VvE\'s en woningcorporaties.',
        highlights: ['MJOP-advies en planning', 'Eigen projectleider', 'Jaarrapportage en garanties'],
      },
    ],
    included: [
      'Schilderwerk binnen en buiten',
      'Dakreparaties en goten reinigen',
      'Voegwerk, kit-randen en gevelherstel',
      'Lekkages, sanitair en cv-onderhoud',
      'Elektra: storingen en kleine uitbreidingen',
      'Houtrot-herstel en kozijnen schilderen',
      'Spoedreparaties bij stormschade of inbraak',
    ],
    process: [
      { step: '01', title: 'Aanvraag', desc: 'U mailt of belt de klus door. Bij spoed komen we binnen 24 uur langs.' },
      { step: '02', title: 'Inplannen', desc: 'We plannen direct een vakman in. Voor grotere klussen ontvangt u eerst een offerte.' },
      { step: '03', title: 'Uitvoering', desc: 'De klus wordt uitgevoerd door een vaste vakman uit ons team — geen wisselende onderaannemers.' },
      { step: '04', title: 'Factuur & garantie', desc: 'U ontvangt een gespecificeerde factuur met de gewerkte uren en gebruikt materiaal. Garantie volgens BRL.' },
    ],
    faqs: [
      {
        q: 'Wat kost een klusservice per uur?',
        a: 'Onze tarieven liggen tussen €65 en €95 per uur, afhankelijk van het vakgebied. Voor onderhoudsabonnementen of VvE-contracten geldt een lager projecttarief.',
      },
      {
        q: 'Komen jullie ook voor kleine klussen?',
        a: 'Ja — vanaf 1 uur werk. Wij plannen meerdere klussen vaak op één bezoek om voorrijkosten te besparen.',
      },
      {
        q: 'Bieden jullie een onderhoudscontract voor mijn VvE?',
        a: 'Ja. We stellen een MJOP op, voeren periodiek werk uit en rapporteren jaarlijks. Vraag een vrijblijvende intake aan.',
      },
      {
        q: 'Komen jullie ook bij een lekkage of storing?',
        a: 'Voor spoedwerk in onze regio zijn we binnen 24 uur ter plaatse. Klanten met een onderhoudsplan krijgen voorrang.',
      },
    ],
    relatedCities: ['amsterdam', 'almere', 'utrecht', 'haarlem', 'den-haag', 'apeldoorn'],
  },
  {
    slug: 'schilderwerk',
    name: 'Schilderwerk',
    shortName: 'Schilderwerk',
    metaTitle: 'Schilderwerk binnen & buiten — Schilder specialist | Woonklasse',
    metaDescription:
      'Professioneel schilderwerk binnen en buiten. Voorbehandeling, plamuren en twee dekkende lagen — door eigen schilders met VCA-certificering. Vaste prijs vooraf.',
    heroEyebrow: 'Dienst · Binnen- & buitenschilderwerk',
    heroTitle: 'Schilderwerk',
    heroTitleAccent: 'op het hoogste niveau',
    intro:
      'Binnen- en buitenschilderwerk dat jaren mee gaat — voorbehandeling, plamuren en twee lagen op maat.',
    longIntro:
      'Goed schilderwerk begint bij de voorbehandeling. Onze schilders schuren, ontvetten, plamuren en gronden voordat de eerste laag erop gaat. Pas dan zijn twee dekkende lagen verf de garantie voor een resultaat dat zes tot acht jaar mee gaat. Wij werken met topmerken (Sigma, Sikkens, Wijzonol) en kiezen samen met u de juiste afwerking — van zijdeglans tot mat.',
    keywords: [
      'schilderwerk',
      'schilder',
      'buitenschilderwerk',
      'binnenschilderwerk',
      'kozijnen schilderen',
      'schilder specialist',
    ],
    image: '/woonklasse/canal-residence-4.jpg',
    averagePrice: '€38 — €55 / m²',
    averageDuration: '3 — 14 dagen',
    tiers: [
      {
        label: 'Binnenwerk',
        range: '€10 — €18 / m²',
        desc: 'Wand- en plafondafwerking inclusief sausen of latex.',
        highlights: ['Plafonds, wanden en deuren', 'Voorbehandeling inbegrepen', 'Twee dekkende lagen'],
      },
      {
        label: 'Kozijnen & deuren',
        range: '€38 — €55 / m²',
        desc: 'Houten kozijnen, ramen en deuren — buiten of binnen.',
        highlights: ['Schuren, plamuren en gronden', 'Twee lagen hoogwaardige lakverf', 'Houtrot-herstel optioneel'],
        featured: true,
      },
      {
        label: 'Buitenwerk volledig',
        range: 'Op aanvraag',
        desc: 'Volledige buitenkant: kozijnen, gevels, dakranden en boeiboorden.',
        highlights: ['Steigerwerk inbegrepen', 'Houtrot-herstel waar nodig', 'Garantie 6 — 8 jaar'],
      },
    ],
    included: [
      'Inspectie en houtrot-controle vooraf',
      'Schuren, ontvetten en aflakwerk verwijderen',
      'Plamuren en gronden van kale plekken',
      'Twee dekkende lagen kwaliteitslakverf of muurverf',
      'Steigerwerk en hoogwerker bij buitenwerk',
      'Afplakken en afdekken van vloeren en meubels',
      'Eindcontrole en oplevering',
    ],
    process: STANDARD_PROCESS,
    faqs: [
      {
        q: 'Wat kost schilderwerk per m²?',
        a: 'Binnenschilderwerk kost €10 — €18 per m². Buitenschilderwerk inclusief voorbehandeling €38 — €55 per m² kozijn-oppervlak. Vraag een opname aan voor een vaste prijs.',
      },
      {
        q: 'Hoe lang gaat goed buitenschilderwerk mee?',
        a: 'Met goede voorbehandeling en twee lagen 6 tot 8 jaar. Tijdig bijwerken bij randen en kit-naden verlengt dat naar 10 jaar.',
      },
      {
        q: 'Verzorgen jullie ook houtrot-herstel?',
        a: 'Ja. Onze schilders zijn ook timmerman en kunnen kozijnen, raamdorpels en boeiboorden herstellen voordat ze worden geschilderd.',
      },
      {
        q: 'Welke verf gebruiken jullie?',
        a: 'Standaard topmerken Sikkens, Sigma en Wijzonol — keuze afhankelijk van ondergrond en kleurwens. Allemaal milieuvriendelijke watergedragen systemen waar dat kan.',
      },
    ],
    relatedCities: ['amsterdam', 'haarlem', 'utrecht', 'den-haag', 'rotterdam', 'apeldoorn'],
  },
  {
    slug: 'vloeren',
    name: 'Vloeren',
    shortName: 'Vloeren',
    metaTitle: 'Vloeren leggen — Houten, PVC & gietvloer specialist | Woonklasse',
    metaDescription:
      'Houten vloeren, PVC, laminaat, gietvloeren en tegelwerk. Egaliseren, vloerverwarming en plaatsing door eigen vloerleggers. Vaste prijs en lange garantie.',
    heroEyebrow: 'Dienst · Vloeren & afwerking',
    heroTitle: 'Vloeren',
    heroTitleAccent: 'specialist',
    intro:
      'Houten vloeren, PVC, gietvloeren en tegelwerk — leveren én leggen door eigen vloerleggers.',
    longIntro:
      'Een vloer bepaalt de uitstraling én de comfort van een ruimte. Bij Woonklasse leggen we alle typen vloeren: massief eiken, multiplank, PVC click of plaklijm, laminaat, gietvloeren en tegelwerk. We egaliseren de ondervloer, leggen indien gewenst vloerverwarming en plaatsen de plinten en overgangsprofielen — alles in één opdracht.',
    keywords: [
      'vloeren leggen',
      'houten vloer',
      'pvc vloer',
      'gietvloer',
      'vloerverwarming',
      'vloeren specialist',
    ],
    image: '/woonklasse/penthouse-zoetermeer-4.jpg',
    averagePrice: '€55 — €165 / m²',
    averageDuration: '2 — 7 dagen',
    tiers: [
      {
        label: 'Laminaat & PVC',
        range: '€55 — €95 / m²',
        desc: 'Leveren en leggen van laminaat of PVC click op een geëgaliseerde ondervloer.',
        highlights: ['Inclusief ondervloer en plinten', 'Doorlooptijd 1 — 2 dagen', 'Garantie 5 jaar'],
      },
      {
        label: 'Houten vloer',
        range: '€95 — €145 / m²',
        desc: 'Massief eiken of multiplank — geolied of gelakt naar wens.',
        highlights: ['Lijmen op ondervloer', 'Schuren en olien op locatie', 'Vloerverwarming-compatibel'],
        featured: true,
      },
      {
        label: 'Gietvloer & tegelwerk',
        range: '€115 — €165 / m²',
        desc: 'Gietvloer (PU of cementgebonden) of grootformaat keramische tegels.',
        highlights: ['Naadloos resultaat', 'Vloerverwarming-vriendelijk', 'Hoogwaardige duurzame afwerking'],
      },
    ],
    included: [
      'Verwijderen van bestaande vloer en afvoer',
      'Egaliseren tot vlakheidsklasse 4',
      'Optioneel: vloerverwarming infrezen of leggen',
      'Levering en plaatsing van de gekozen vloer',
      'Plinten, overgangsprofielen en kitwerk',
      'Eindreiniging en eerste onderhoudsbeurt',
      'Garantie tot 10 jaar afhankelijk van product',
    ],
    process: STANDARD_PROCESS,
    faqs: [
      {
        q: 'Wat kost een nieuwe vloer leggen per m²?',
        a: 'PVC en laminaat €55 — €95 per m² inclusief ondervloer en plinten. Houten vloeren €95 — €145. Gietvloeren €115 — €165. Inclusief egalisatie.',
      },
      {
        q: 'Kan ik vloerverwarming combineren met een houten vloer?',
        a: 'Ja — multiplank vloeren werken uitstekend met vloerverwarming. Massief eiken kan ook, mits met een max. dikte van 14 mm en stabiele klimaatomstandigheden.',
      },
      {
        q: 'Moet de oude vloer eerst weg?',
        a: 'In bijna alle gevallen wel, vanwege egalisatie. Wij verzorgen sloop, afvoer en het egaliseren — daarna kan de nieuwe vloer er meteen op.',
      },
      {
        q: 'Hoe lang moet ik wachten voordat ik er op kan lopen?',
        a: 'Laminaat en PVC: direct. Houten vloer: 24 uur na lijmen. Gietvloer: 24 — 48 uur na de afwerklaag.',
      },
    ],
    relatedCities: ['amsterdam', 'utrecht', 'rotterdam', 'eindhoven', 'haarlem', 'almere'],
  },
  {
    slug: 'dakwerk',
    name: 'Dakwerk',
    shortName: 'Dakwerk',
    metaTitle: 'Dakwerk, dakkapellen & dakisolatie — Specialist | Woonklasse',
    metaDescription:
      'Dakvernieuwing, dakkapellen, dakisolatie en goten. Eigen dakdekkers met VCA. Vaste prijs vooraf, tot 15 jaar garantie op dakbedekking.',
    heroEyebrow: 'Dienst · Dakdekkerswerk',
    heroTitle: 'Dakwerk',
    heroTitleAccent: 'wind- en waterdicht',
    intro:
      'Dakvernieuwing, dakkapellen, dakisolatie en goten — door eigen dakdekkers met tot 15 jaar garantie.',
    longIntro:
      'Een goed dak is de levensverzekering van uw woning. Woonklasse beschikt over eigen dakdekkers voor pannen-, bitumen-, EPDM- en zinken daken. Wij plaatsen dakkapellen, vernieuwen dakbedekking, isoleren van binnen of van buiten (sarking) en herstellen goten. Bij dakvernieuwing combineren we het werk vaak met dakisolatie of zonnepanelen — een investering die zichzelf terugbetaalt.',
    keywords: [
      'dakwerk',
      'dakdekker',
      'dakkapel plaatsen',
      'dakisolatie',
      'dakbedekking vervangen',
      'goten reinigen',
    ],
    image: '/woonklasse/villa-bergen-3.jpg',
    averagePrice: '€85 — €240 / m²',
    averageDuration: '1 — 4 weken',
    tiers: [
      {
        label: 'Dakreparatie',
        range: '€350 — €1.500',
        desc: 'Lekkages, kapotte pannen of beschadigd zink — opgelost in 1 dag.',
        highlights: ['Spoedreparaties binnen 48 uur', 'Garantie op herstel', 'Foto-rapportage'],
      },
      {
        label: 'Dakvernieuwing',
        range: '€85 — €140 / m²',
        desc: 'Volledige dakbedekking vervangen inclusief isolatie en panlatten.',
        highlights: ['Pannendak of EPDM/bitumen', 'Isolatie Rc 6,0 mogelijk', 'Garantie tot 15 jaar'],
        featured: true,
      },
      {
        label: 'Dakkapel',
        range: '€7.500 — €18.000',
        desc: 'Prefab of op maat gebouwde dakkapel inclusief vergunning.',
        highlights: ['Levering en montage in 1 dag (prefab)', 'Maatwerk vanaf 4 weken', 'Vergunning verzorgd'],
      },
    ],
    included: [
      'Inspectie en advies — kosteloos in onze regio',
      'Sloop oude dakbedekking en afvoer',
      'Vervangen panlatten en tengels waar nodig',
      'Aanbrengen dampremmende folie en isolatie',
      'Plaatsing nieuwe pannen, EPDM of zink',
      'Goot- en zinkwerk inclusief afvoer',
      'Garantie tot 15 jaar op dakbedekking',
    ],
    process: STANDARD_PROCESS,
    faqs: [
      {
        q: 'Wat kost een nieuw dak?',
        a: 'Een pannendak vervangen kost €85 — €140 per m² inclusief isolatie. Een platdak met EPDM €110 — €160 per m². Voor zink loopt het op naar €240 per m².',
      },
      {
        q: 'Wat kost een dakkapel plaatsen?',
        a: 'Een standaard prefab dakkapel kost €7.500 — €11.000 inclusief vergunning. Maatwerk dakkapellen €13.000 — €18.000. Wij verzorgen de gehele aanvraag.',
      },
      {
        q: 'Heb ik een vergunning nodig voor een dakkapel?',
        a: 'Aan de achterkant vaak vergunningsvrij — afhankelijk van afmetingen. Aan de voorkant altijd vergunning. Wij toetsen dat tijdens de opname.',
      },
      {
        q: 'Kunnen jullie ook dakisolatie verzorgen?',
        a: 'Ja. Bij dakvernieuwing isoleren we standaard van buitenaf (sarking) tot Rc 6,0. Voor bestaande daken bieden we ook isolatie van binnenuit aan.',
      },
    ],
    relatedCities: ['amsterdam', 'haarlem', 'almere', 'apeldoorn', 'utrecht', 'arnhem'],
  },
  {
    slug: 'volledige-woningrenovatie',
    name: 'Volledige woningrenovatie',
    shortName: 'Totaalverbouwing',
    metaTitle: 'Volledige woningrenovatie — Aannemer specialist | Woonklasse',
    metaDescription:
      'Complete woningrenovatie van casco tot oplevering. Eén aannemer, vaste prijs, eigen vakmensen. Verbouwen, isoleren en verduurzamen — sleutelklaar opgeleverd.',
    heroEyebrow: 'Dienst · Totaalverbouwing',
    heroTitle: 'Volledige woningrenovatie',
    heroTitleAccent: 'sleutelklaar',
    intro:
      'Casco strippen, opnieuw indelen, isoleren, installeren en afwerken — uw woning compleet vernieuwd.',
    longIntro:
      'Een volledige woningrenovatie is een groot project. U laat uw woning casco strippen, krijgt een nieuwe indeling, vloer- en spouwmuurisolatie, een nieuwe cv-installatie of warmtepomp, en de complete afwerking. Woonklasse is uw enige aannemer in dit traject. Wij zorgen voor architect, constructeur, vergunning en alle bouwteams. U heeft één vast aanspreekpunt en betaalt een vooraf vastgestelde aanneemsom.',
    keywords: [
      'volledige woningrenovatie',
      'totaalverbouwing',
      'aannemer renovatie',
      'casco verbouwen',
      'sleutelklaar verbouwen',
      'huis volledig renoveren',
    ],
    image: '/woonklasse/canal-residence-1.jpg',
    averagePrice: '€800 — €1.800 / m² woonopp.',
    averageDuration: '3 — 6 maanden',
    tiers: [
      {
        label: 'Cosmetisch',
        range: '€450 — €700 / m²',
        desc: 'Indeling behouden — vloer, schilderwerk, badkamer en keuken vervangen.',
        highlights: ['Geen casco-werk', 'Doorlooptijd 6 — 10 weken', 'Vaste prijs vooraf'],
      },
      {
        label: 'Casco vernieuwd',
        range: '€800 — €1.300 / m²',
        desc: 'Strippen tot casco, nieuwe indeling, installaties en afwerking.',
        highlights: ['Nieuwe indeling met doorbraken', 'Cv, elektra en sanitair vernieuwd', 'Isolatie spouw, dak en vloer'],
        featured: true,
      },
      {
        label: 'Premium maatwerk',
        range: '€1.300 — €1.800+ / m²',
        desc: 'Volledig sleutelklaar inclusief aanbouw, hoogwaardige afwerking en domotica.',
        highlights: ['Architect en constructeur in-house', 'Domotica en warmtepomp', 'Premium materialen'],
      },
    ],
    included: [
      'Architect, constructeur en projectleider',
      'Omgevingsvergunning en BENG-toets waar nodig',
      'Sloop tot casco en afvoer puin',
      'Doorbraken met staalconstructie',
      'Volledige installaties: cv, elektra, sanitair, ventilatie',
      'Isolatie van vloer, spouw en dak',
      'Sleutelklare afwerking — schilderwerk, vloeren, keuken, badkamer',
    ],
    process: [
      { step: '01', title: 'Strategiegesprek', desc: 'We bespreken uw wensen, doelen en budget. U ontvangt een eerste indicatie en een advies over de aanpak.' },
      { step: '02', title: 'Ontwerp & vergunning', desc: 'Architect maakt het ontwerp; wij verzorgen de vergunning, constructieberekening en BENG-toets.' },
      { step: '03', title: 'Bouw', desc: 'Sloop, casco-werk, installaties, isolatie en afwerking — uitgevoerd door eigen vakmensen volgens vaste planning.' },
      { step: '04', title: 'Sleuteloplevering', desc: 'Sleutelklare oplevering met garantieboek, BENG-rapportage en alle documentatie.' },
    ],
    faqs: [
      {
        q: 'Wat kost een volledige woningrenovatie?',
        a: 'Cosmetisch verbouwen €450 — €700 per m². Casco vernieuwen €800 — €1.300 per m². Premium sleutelklaar maatwerk €1.300 — €1.800+ per m². Vraag een opname aan voor een vaste aanneemsom.',
      },
      {
        q: 'Hoe lang duurt een totaalverbouwing?',
        a: 'Een gemiddelde casco-renovatie van 120 m² duurt 4 — 5 maanden. Inclusief vergunningstraject zit u op 6 — 8 maanden vanaf de eerste opname.',
      },
      {
        q: 'Kan ik tijdens de verbouwing in de woning blijven?',
        a: 'Bij een totaalverbouwing adviseren we om elders te verblijven. We helpen desgewenst met tijdelijke huisvesting binnen de regio.',
      },
      {
        q: 'Krijg ik subsidie voor verduurzaming bij de renovatie?',
        a: 'Ja — ISDE-subsidie voor warmtepomp en isolatie, en gemeentelijke regelingen variëren. Wij berekenen welke regelingen voor u relevant zijn en helpen met de aanvraag.',
      },
    ],
    relatedCities: ['amsterdam', 'rotterdam', 'utrecht', 'den-haag', 'haarlem', 'eindhoven'],
  },
];

export const WOONKLASSE_SERVICE_SLUGS = WOONKLASSE_SERVICES.map((s) => s.slug);

export function getServiceBySlug(slug: string): WoonklasseService | undefined {
  return WOONKLASSE_SERVICES.find((s) => s.slug === slug);
}

export { ALL_CITIES as ALL_CITY_SLUGS };
