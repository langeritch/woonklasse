export interface ProjectQuote {
  text: string;
  type: 'dark' | 'light';
}

export interface ProjectSection {
  kind: 'full' | 'dual' | 'mosaic-text' | 'text-photo' | 'quote';
  /** Image indices (1-based) used in this section */
  images?: number[];
  /** For mosaic-text / text-photo sections */
  heading?: string;
  body?: string;
  /** For quote sections */
  quote?: ProjectQuote;
  /** Flip layout (text left, images right) */
  flip?: boolean;
}

export interface Project {
  slug: string;
  subtitle: string;
  description: string;
  intro: string;
  details: { label: string; value: string }[];
  heroImage: string;
  /** Total number of images available */
  imageCount: number;
  /** Editorial sections that form the page */
  sections: ProjectSection[];
}

function img(slug: string, n: number): string {
  return `/woonklasse/projecten/${slug}/${n}.jpg`;
}

function imgs(slug: string, ns: number[]): string[] {
  return ns.map((n) => img(slug, n));
}

export const projects: Project[] = [
  {
    slug: 'complete-renovatie',
    subtitle: 'Complete renovatie',
    description: 'Van historisch casco tot modern meesterwerk. Een volledige transformatie met behoud van authentiek karakter.',
    intro: `Dit project betrof een ingrijpende renovatie van een klassiek herenhuis. De oorspronkelijke architectonische details zoals sierlijsten, hoge plafonds en authentieke schoorsteenmantels werden zorgvuldig gerestaureerd en gecombineerd met hedendaags comfort. Elke ruimte werd herontworpen om het maximale uit de historische grandeur te halen, zonder concessies te doen aan modern woongemak.`,
    details: [
      { label: 'Type', value: 'Herenhuis' },
      { label: 'Oppervlakte', value: '280 m²' },
      { label: 'Doorlooptijd', value: '6 maanden' },
      { label: 'Scope', value: 'Casco-renovatie, keuken, installaties' },
    ],
    imageCount: 22,
    heroImage: img('complete-renovatie', 1),
    sections: [
      { kind: 'full', images: [2] },
      {
        kind: 'quote',
        quote: {
          text: 'Een renovatie die het verleden respecteert en de toekomst omarmt. Het beste van twee werelden onder één dak.',
          type: 'dark',
        },
      },
      { kind: 'full', images: [3] },
      { kind: 'dual', images: [4, 5] },
      {
        kind: 'mosaic-text',
        images: [6, 7, 8, 9],
        heading: 'Historisch Vakmanschap',
        body: 'De open keuken werd volledig nieuw ontworpen met RVS werkbladen en een imposante kroonluchter als middelpunt. Alle technische installaties zijn vernieuwd, inclusief vloerverwarming en slimme domotica.\n\nHet resultaat is een woning die het beste van twee werelden verenigt: historische grandeur en modern woongemak.',
      },
      { kind: 'dual', images: [10, 11] },
      { kind: 'full', images: [12] },
      {
        kind: 'text-photo',
        images: [13],
        heading: 'Authentiek Karakter',
        body: 'De oorspronkelijke sierlijsten en schoorsteenmantels werden door ambachtslieden gerestaureerd tot in het kleinste detail. Nieuwe elementen zijn zorgvuldig afgestemd op het historische karakter, waardoor oud en nieuw naadloos samenvloeien.',
        flip: true,
      },
      { kind: 'dual', images: [14, 15] },
      {
        kind: 'quote',
        quote: {
          text: 'Het geheim van een geslaagde renovatie is weten wat je behoudt en wat je transformeert.',
          type: 'light',
        },
      },
      { kind: 'full', images: [16] },
      { kind: 'dual', images: [17, 18] },
      { kind: 'full', images: [19] },
      { kind: 'dual', images: [20, 21] },
      { kind: 'full', images: [22] },
    ],
  },
  {
    slug: 'luxe-afwerking',
    subtitle: 'Luxe afwerking',
    description: 'Panoramisch uitzicht verdient een interieur dat daaraan evenredig is. Strak, warm en tijdloos.',
    intro: `Een penthouse met adembenemend uitzicht vraagt om een interieur dat de aandacht niet afleidt maar juist versterkt. Voor dit project kozen we bewust voor een palette van warme neutralen, natuurlijke materialen en strakke lijnen. Het resultaat is een ruimte die sereen aanvoelt en waarin elk detail bijdraagt aan het totaalplaatje.`,
    details: [
      { label: 'Type', value: 'Penthouse' },
      { label: 'Oppervlakte', value: '220 m²' },
      { label: 'Doorlooptijd', value: '4 maanden' },
      { label: 'Scope', value: 'Interieur, maatwerk, afwerking' },
    ],
    imageCount: 51,
    heroImage: img('luxe-afwerking', 1),
    sections: [
      { kind: 'full', images: [2] },
      {
        kind: 'quote',
        quote: {
          text: 'Luxe is niet wat je toevoegt, maar wat je weglaat. Tot alleen het essentiële overblijft.',
          type: 'dark',
        },
      },
      { kind: 'full', images: [3] },
      { kind: 'dual', images: [4, 5] },
      {
        kind: 'mosaic-text',
        images: [6, 7, 8, 9],
        heading: 'Warme Materialiteit',
        body: 'De woonruimte vloeit naadloos over in de eethoek en open keuken, met vloer-tot-plafond ramen die het panoramische uitzicht als levend kunstwerk inlijsten. Op maat gemaakte kasten bieden royale opbergruimte zonder visuele ruis.\n\nElk materiaal, van het eikenhout tot het natuursteen, is geselecteerd op zowel tactiliteit als visuele warmte.',
      },
      { kind: 'dual', images: [10, 11] },
      { kind: 'full', images: [12] },
      {
        kind: 'text-photo',
        images: [13],
        heading: 'Badkamer als Spa',
        body: 'De badkamer is uitgevoerd in groot formaat natuursteen met zwevend sanitair en inbouwkranen. De vrijstaande badkuip vormt het middelpunt van de ruimte, gepositioneerd voor maximaal uitzicht. Sfeerverlichting en vloerverwarming completeren de spa-ervaring.',
        flip: true,
      },
      { kind: 'dual', images: [14, 15] },
      {
        kind: 'quote',
        quote: {
          text: 'Een interieur moet niet schreeuwen om aandacht. Het moet fluisteren en uitnodigen.',
          type: 'light',
        },
      },
      { kind: 'full', images: [16] },
      { kind: 'dual', images: [17, 18] },
      {
        kind: 'mosaic-text',
        images: [19, 20, 21, 22],
        heading: 'Lichtspel',
        body: 'Het lichtontwerp was cruciaal in dit project. Indirecte verlichting accentueert architectonische lijnen, terwijl dimbare spots de sfeer per moment kunnen aanpassen. Overdag doet het Amsterdamse licht de rest.',
        flip: true,
      },
      { kind: 'dual', images: [23, 24] },
      { kind: 'full', images: [25] },
      { kind: 'dual', images: [26, 27] },
      { kind: 'full', images: [28] },
      { kind: 'dual', images: [29, 30] },
      {
        kind: 'text-photo',
        images: [31],
        heading: 'Maatwerk Tot in Detail',
        body: 'Elke kast, plank en nis is op maat gemaakt. Het meubilair volgt de architectuur van de ruimte, waardoor er een vanzelfsprekende harmonie ontstaat. Functioneel én esthetisch, niets is overbodig.',
      },
      { kind: 'dual', images: [32, 33] },
      { kind: 'full', images: [34] },
      { kind: 'dual', images: [35, 36] },
      { kind: 'full', images: [37] },
      { kind: 'dual', images: [38, 39] },
      { kind: 'full', images: [40] },
      { kind: 'dual', images: [41, 42] },
      { kind: 'full', images: [43] },
      { kind: 'dual', images: [44, 45] },
      { kind: 'full', images: [46] },
      { kind: 'dual', images: [47, 48] },
      { kind: 'full', images: [49] },
      { kind: 'dual', images: [50, 51] },
    ],
  },
  {
    slug: 'totaalverbouwing',
    subtitle: 'Totaalverbouwing',
    description: 'Een ruime villa volledig getransformeerd met oog voor licht, ruimte en duurzaamheid.',
    intro: `Deze vrijstaande villa in het groen was constructief gezond maar interieur-technisch toe aan een complete metamorfose. Onze opdracht: de woning transformeren tot een licht, modern thuis dat past bij de omringende natuur en toekomstbestendig is qua duurzaamheid.`,
    details: [
      { label: 'Type', value: 'Vrijstaande villa' },
      { label: 'Oppervlakte', value: '340 m²' },
      { label: 'Doorlooptijd', value: '8 maanden' },
      { label: 'Scope', value: 'Totaalverbouwing, verduurzaming' },
    ],
    imageCount: 33,
    heroImage: img('totaalverbouwing', 1),
    sections: [
      { kind: 'full', images: [2] },
      {
        kind: 'quote',
        quote: {
          text: 'Een woning die de natuur binnenlaat en tegelijkertijd beschermt. Dat is de kern van duurzaam ontwerp.',
          type: 'dark',
        },
      },
      { kind: 'full', images: [3] },
      { kind: 'dual', images: [4, 5] },
      {
        kind: 'mosaic-text',
        images: [6, 7, 8, 9],
        heading: 'Licht & Ruimte',
        body: 'Dragende muren werden strategisch verwijderd om een open leefruimte te creëren met zichtlijnen naar de tuin. De nieuwe keuken met kookeiland vormt het hart van de woning.\n\nGrotere raampartijen en een herbedacht plattegrond zorgen ervoor dat daglicht diep in elke ruimte doordringt.',
      },
      { kind: 'dual', images: [10, 11] },
      { kind: 'full', images: [12] },
      {
        kind: 'text-photo',
        images: [13],
        heading: 'Master Suite',
        body: 'Alle slaapkamers kregen ensuite badkamers en de zolder werd omgebouwd tot een volwaardige master suite met dakramen die het bos inkaderen. Warmte, textuur en een aards kleurenpalet creëren een rustgevende omgeving.',
        flip: true,
      },
      { kind: 'dual', images: [14, 15] },
      {
        kind: 'quote',
        quote: {
          text: 'Verduurzaming hoeft geen compromis te zijn. Het kan juist de schoonheid van een woning versterken.',
          type: 'light',
        },
      },
      { kind: 'full', images: [16] },
      { kind: 'dual', images: [17, 18] },
      {
        kind: 'text-photo',
        images: [19],
        heading: 'Toekomstbestendig',
        body: 'Duurzame keuzes zoals warmtepomp, driedubbel glas en zonnepanelen maken de woning toekomstbestendig. Deze investeringen verlagen niet alleen de energiekosten, maar verhogen ook het wooncomfort aanzienlijk.',
      },
      { kind: 'dual', images: [20, 21] },
      { kind: 'full', images: [22] },
      { kind: 'dual', images: [23, 24] },
      { kind: 'full', images: [25] },
      { kind: 'dual', images: [26, 27] },
      { kind: 'full', images: [28] },
      { kind: 'dual', images: [29, 30] },
      { kind: 'full', images: [31] },
      { kind: 'dual', images: [32, 33] },
    ],
  },
  {
    slug: 'dubbel-penthouse',
    subtitle: 'Luxe dubbel penthouse',
    description: 'Twee verdiepingen samengevoegd tot één spectaculaire woonervaring met adembenemende afwerking.',
    intro: `Twee afzonderlijke penthouses werden samengevoegd tot één verdieping tellende woonervaring. De uitdaging was om een vloeiende verbinding tussen beide niveaus te creëren die zowel architectonisch als functioneel overtuigt. Een sculptuur om in te wonen.`,
    details: [
      { label: 'Type', value: 'Dubbel penthouse' },
      { label: 'Oppervlakte', value: '310 m²' },
      { label: 'Doorlooptijd', value: '7 maanden' },
      { label: 'Scope', value: 'Samenvoegen, interieur, dakterras' },
    ],
    imageCount: 33,
    heroImage: img('dubbel-penthouse', 1),
    sections: [
      { kind: 'full', images: [2] },
      {
        kind: 'quote',
        quote: {
          text: 'Twee werelden verbonden door één visie. Architectuur die grenzen doet verdwijnen.',
          type: 'dark',
        },
      },
      { kind: 'full', images: [3] },
      { kind: 'dual', images: [4, 5] },
      {
        kind: 'mosaic-text',
        images: [6, 7, 8, 9],
        heading: 'Verticale Verbinding',
        body: 'Een sculptarale open trap in staal en eikenhout vormt nu de ruggengraat van de woning en verbindt de sociale ruimtes beneden met de privévertrekken boven.\n\nDe dubbele hoogte in de woonkamer werd benut voor een indrukwekkende boekenwand die beide verdiepingen visueel verbindt.',
      },
      { kind: 'dual', images: [10, 11] },
      { kind: 'full', images: [12] },
      {
        kind: 'text-photo',
        images: [13],
        heading: 'Buitenleven op Hoogte',
        body: 'Het dakterras biedt een onbetaalbaar uitzicht en is ingericht als volwaardige buitenkamer. Geïntegreerde beplanting, windschermen en buitenverlichting maken het terras het hele jaar door bruikbaar.',
        flip: true,
      },
      { kind: 'dual', images: [14, 15] },
      {
        kind: 'quote',
        quote: {
          text: 'Echte luxe is ruimte. Ruimte om te ademen, te denken en te leven.',
          type: 'light',
        },
      },
      { kind: 'full', images: [16] },
      { kind: 'dual', images: [17, 18] },
      {
        kind: 'text-photo',
        images: [19],
        heading: 'Keuken als Hartslag',
        body: 'De keuken is uitgevoerd met composiet werkbladen en geïntegreerde apparatuur van topklasse. Het kookeiland fungeert als sociale hub waar koken, eten en samenzijn samenkomen.',
      },
      { kind: 'dual', images: [20, 21] },
      { kind: 'full', images: [22] },
      { kind: 'dual', images: [23, 24] },
      { kind: 'full', images: [25] },
      { kind: 'dual', images: [26, 27] },
      { kind: 'full', images: [28] },
      { kind: 'dual', images: [29, 30] },
      { kind: 'full', images: [31] },
      { kind: 'dual', images: [32, 33] },
    ],
  },
  {
    slug: 'drielaagse-transformatie',
    subtitle: 'Drielaagse transformatie',
    description: 'Een indrukwekkend meervoudig appartement omgetoverd tot een architecturaal juweel met oog voor detail.',
    intro: `Dit drielaags appartement in een monumentaal pand bood een unieke kans: drie compacte woonlagen transformeren tot een ruimtelijk en licht geheel. De sleutel lag in het herdenken van de verticale verbinding en het maximaliseren van daglicht.`,
    details: [
      { label: 'Type', value: 'Drielaags appartement' },
      { label: 'Oppervlakte', value: '167 m²' },
      { label: 'Doorlooptijd', value: '5 maanden' },
      { label: 'Scope', value: 'Constructie, interieur, lichtplan' },
    ],
    imageCount: 22,
    heroImage: img('drielaagse-transformatie', 1),
    sections: [
      { kind: 'full', images: [2] },
      {
        kind: 'quote',
        quote: {
          text: 'In een monumentaal pand schuilt het potentieel voor iets buitengewoons. Als je durft te kijken voorbij het bestaande.',
          type: 'dark',
        },
      },
      { kind: 'full', images: [3] },
      { kind: 'dual', images: [4, 5] },
      {
        kind: 'mosaic-text',
        images: [6, 7, 8, 9],
        heading: 'Licht van Boven',
        body: 'Een lichte, zwevende trap in wit staal en glas vervangt de oorspronkelijke dichte trapopgang en brengt daglicht diep in de woning. Op de eerste verdieping creëerden we een open woonkeuken met zitgedeelte.\n\nDe tweede verdieping huisvest twee slaapkamers met ensuite faciliteiten, ontworpen als rustige toevluchtsoorden.',
      },
      { kind: 'dual', images: [10, 11] },
      { kind: 'full', images: [12] },
      {
        kind: 'text-photo',
        images: [13],
        heading: 'Privédomein',
        body: 'De bovenste verdieping werd een privédomein met studeerkamer, master bedroom en een luxe badkamer met vrijstaand bad. Dakramen inkaderen de lucht en brengen een gevoel van openheid in wat ooit de donkerste verdieping was.',
        flip: true,
      },
      { kind: 'dual', images: [14, 15] },
      {
        kind: 'quote',
        quote: {
          text: 'De mooiste transformaties onthullen wat er altijd al was. Verborgen onder lagen van tijd.',
          type: 'light',
        },
      },
      { kind: 'full', images: [16] },
      { kind: 'dual', images: [17, 18] },
      { kind: 'full', images: [19] },
      { kind: 'dual', images: [20, 21] },
      { kind: 'full', images: [22] },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
