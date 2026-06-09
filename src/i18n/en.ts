// Nederlands -> Engels woordenboek. Sleutel = de exacte Nederlandse bronstring.
// Ontbreekt een sleutel, dan valt t() terug op het Nederlands (geen kapotte UI).

export const EN: Record<string, string> = {
  // ── Navigatie / menu / chrome ──
  'Home': 'Home',
  'Stijlen': 'Styles',
  'Saninet 3D': 'Saninet 3D',
  'Portfolio': 'Portfolio',
  'Diensten': 'Services',
  'Prijzen': 'Pricing',
  'Kosten': 'Costs',
  'Blog': 'Blog',
  'Contact': 'Contact',
  'Menu': 'Menu',
  'Sluiten': 'Close',
  'Taal': 'Language',
  'Adviesgesprek plannen': 'Book a consultation',
  'Adviesgesprek aanvragen': 'Request a consultation',
  'Bel ons direct': 'Call us directly',
  'Krijg persoonlijk advies': 'Get personal advice',

  // ── Footer ──
  'Luxe badkamers op maat, van ontwerp in 3D tot oplevering door eigen vakmensen.':
    'Bespoke luxury bathrooms, from 3D design to completion by our own craftsmen.',
  'Navigatie': 'Navigation',
  'Zusterbedrijf: Woonklasse': 'Sister company: Woonklasse',
  'Alle rechten voorbehouden.': 'All rights reserved.',
  'Privacybeleid': 'Privacy policy',
  'Algemene Voorwaarden': 'Terms & Conditions',

  // ── Hero ──
  'Luxe badkamers op maat': 'Bespoke luxury bathrooms',
  'Jouw droombadkamer,': 'Your dream bathroom,',
  'vakkundig gerealiseerd': 'expertly realised',
  'Van persoonlijk 3D-ontwerp tot oplevering door eigen vakmensen. Eén team, vaste prijs, door heel Nederland.':
    'From a personal 3D design to completion by our own craftsmen. One team, one fixed price, throughout the Netherlands.',
  'Bekijk portfolio': 'View portfolio',

  // ── Advies-blok ──
  'Persoonlijk advies': 'Personal advice',
  'Vertel ons over jouw': 'Tell us about your',
  'droombadkamer': 'dream bathroom',
  "In 3 stappen krijg je persoonlijk advies van ons team. Upload eventueel foto's van je huidige situatie, dan denken wij gericht met je mee.":
    'Get personal advice from our team in 3 steps. Optionally upload photos of your current situation so we can give you focused advice.',

  // ── Excellence ──
  'Vakmanschap in elke badkamer': 'Craftsmanship in every bathroom',
  'Wij maken badkamers die je': 'We create bathrooms you want to',
  'elke dag': 'use every',
  'wilt gebruiken': 'day',
  'Jouw partner in jouw badkamer': 'Your partner in your bathroom',
  'Badkamerstijl ontwerpt en realiseert luxe badkamers op maat. We luisteren naar je wensen, vertalen die naar een doordacht totaalconcept en voeren het uit met oog voor elk detail.':
    'Badkamerstijl designs and builds bespoke luxury bathrooms. We listen to your wishes, translate them into a considered overall concept and execute it with an eye for every detail.',
  'Over onze aanpak': 'About our approach',
  'Persoonlijk ontwerp': 'Personal design',
  'Een 3D-ontwerp op maat, zodat je precies ziet wat je krijgt.':
    'A bespoke 3D design, so you see exactly what you get.',
  'Brede materiaalkeuze': 'Wide choice of materials',
  'Van designsanitair tot natuursteen, afgestemd op jouw stijl en budget.':
    'From designer sanitary ware to natural stone, matched to your style and budget.',
  'Reviews': 'Reviews',
  'Klanten waarderen ons werk met een gemiddelde van 4,9 sterren.':
    'Customers rate our work an average of 4.9 stars.',

  // ── Trust-pijlers ──
  'Waarom Badkamerstijl': 'Why Badkamerstijl',
  'Eén team dat je': 'One team that makes your',
  'waarmaakt': 'a reality',
  'Eigen vakmensen': 'Our own craftsmen',
  'Geen onderaannemers. Onze eigen tegelzetters, loodgieters en monteurs realiseren jouw badkamer van begin tot eind.':
    'No subcontractors. Our own tilers, plumbers and fitters build your bathroom from start to finish.',
  'Vaste aanneemsom': 'Fixed contract price',
  'Vooraf een heldere prijs op basis van een gedetailleerd ontwerp. Wat we afspreken, dat betaal je.':
    'A clear price upfront based on a detailed design. What we agree is what you pay.',
  'Uitgebreide garantie': 'Extensive warranty',
  'Installatiegarantie op al het werk dat we leveren, plus de fabrieksgaranties van topmerken.':
    'Installation warranty on all the work we deliver, plus the manufacturer warranties of top brands.',

  // ── Saninet-sectie (homepage) ──
  'Saninet op locatie': 'Saninet on location',
  'We ontwerpen je badkamer': 'We design your bathroom',
  'waar jij wilt': 'wherever you want',
  'Onze specialist komt naar de locatie van jouw keuze, meet de ruimte exact op en bouwt samen met jou je nieuwe badkamer op in Saninet 3D. Van de eerste plattegrond tot een realistisch beeld: je ziet vooraf precies wat je krijgt, helemaal naar wens.':
    'Our specialist comes to the location of your choice, measures the space exactly and builds your new bathroom together with you in Saninet 3D. From the first floor plan to a realistic render: you see exactly what you get in advance, entirely to your wishes.',
  'Exacte plattegrond': 'Exact floor plan',
  'Jouw badkamer in 3D': 'Your bathroom in 3D',
  'Het eindresultaat': 'The end result',
  'Geen gokwerk en geen verrassingen. Je weet vooraf hoe je badkamer eruitziet, wat erin komt en wat het kost. Pas als het ontwerp helemaal naar wens is, gaan we aan de slag.':
    'No guesswork and no surprises. You know in advance what your bathroom will look like, what goes in it and what it costs. Only once the design is exactly right do we get to work.',
  'Plan je ontwerpsessie': 'Book your design session',
  'Ontdek Saninet 3D': 'Discover Saninet 3D',

  // ── Stijlen-carousel ──
  'Vind jouw stijl': 'Find your style',
  'Ontdek wat bij': 'Discover what suits',
  'jou': 'you',
  'past': '',
  'Van strak en modern tot klassiek en warm. Laat je inspireren door de stijlen die wij realiseren.':
    'From sleek and modern to classic and warm. Get inspired by the styles we create.',
  'Modern Minimalistisch': 'Modern Minimalist',
  'Strak, rust, grootformaat tegels': 'Sleek, calm, large-format tiles',
  'Klassiek Luxe': 'Classic Luxury',
  'Marmer, messing en tijdloze elegantie': 'Marble, brass and timeless elegance',
  'Industrieel Chic': 'Industrial Chic',
  'Beton, staal en warme accenten': 'Concrete, steel and warm accents',
  'Warm Natuurlijk': 'Warm Natural',
  'Hout, natuursteen en zacht licht': 'Wood, natural stone and soft light',
  'Scandinavisch': 'Scandinavian',
  'Licht, helder en functioneel': 'Light, bright and functional',

  // ── Pakketten ──
  'Onze pakketten': 'Our packages',
  'Een badkamer voor': 'A bathroom for',
  'elk budget': 'every budget',
  'Heldere pakketten met een vaste aanneemsom. Alles inbegrepen, van sloop tot de laatste tegel.':
    'Clear packages with a fixed contract price. Everything included, from demolition to the last tile.',
  'Basis': 'Basic',
  'Nette renovatie met betrouwbaar middensegment sanitair.':
    'A neat renovation with reliable mid-range sanitary ware.',
  'Compleet': 'Complete',
  'Incl. montage': 'Incl. installation',
  'Vaste prijs': 'Fixed price',
  'Standaard': 'Standard',
  'Premium': 'Premium',
  'Designsanitair, grootformaat tegels, vrijstaand bad en maatwerk meubels. Een badkamer met hotel-allure.':
    'Designer sanitary ware, large-format tiles, a freestanding bath and bespoke furniture. A bathroom with hotel allure.',
  'Designsanitair': 'Designer sanitary ware',
  'Grootformaat tegels': 'Large-format tiles',
  '3D-ontwerp': '3D design',
  'Topmerken': 'Top brands',
  'Vrijstaand bad': 'Freestanding bath',
  'Maatwerk': 'Bespoke',
  'Luxe': 'Luxury',
  'Volledig op maat met natuursteen en exclusieve designmerken.':
    'Fully bespoke with natural stone and exclusive design brands.',
  'Natuursteen': 'Natural stone',
  'Volledig op maat': 'Fully bespoke',
  'Designmerken': 'Design brands',
  'Bekijk': 'View',
  'Bekijk alle prijzen': 'View all pricing',

  // ── Inspiratie / review ──
  'Inspiratie, ervaringen en': 'Inspiration, experiences and',
  'vakkennis': 'expertise',
  'Lees onze blog': 'Read our blog',
  'Inspiratie': 'Inspiration',
  'Lichtontwerp als fundament van badkamerbeleving':
    'Lighting design as the foundation of the bathroom experience',
  '“Van het eerste ontwerp tot de oplevering klopte alles. Eén team, heldere prijs en een badkamer die nog mooier werd dan op de tekening.”':
    '“From the first design to completion, everything was right. One team, a clear price and a bathroom that turned out even more beautiful than on the drawing.”',
  'Familie de Vries': 'The De Vries family',
  'Complete badkamer renovatie, Utrecht': 'Complete bathroom renovation, Utrecht',

  // ── FAQ ──
  'Veelgestelde vragen': 'Frequently asked questions',
  'Goed om te': 'Good to',
  'weten': 'know',
  'Staat jouw vraag er niet bij? Plan een vrijblijvend adviesgesprek, dan beantwoorden we alles persoonlijk.':
    "Can't find your question? Book a no-obligation consultation and we'll answer everything personally.",
  'Stel je vraag': 'Ask your question',
  'Wat kost een complete badkamer renovatie?': 'What does a complete bathroom renovation cost?',
  'Dat hangt af van de grootte en de afwerking. Een nette renovatie start rond € 5.000, een gemiddelde badkamer op maat ligt tussen € 12.000 en € 22.000 en voor een luxe badkamer met natuursteen en designmerken reken je vanaf € 35.000. Je krijgt vooraf een vaste aanneemsom, dus geen verrassingen achteraf.':
    'That depends on the size and the finish. A neat renovation starts around €5,000, an average bespoke bathroom is between €12,000 and €22,000, and for a luxury bathroom with natural stone and design brands you should budget from €35,000. You get a fixed contract price upfront, so no surprises afterwards.',
  'Hoe lang duurt het om mijn badkamer te realiseren?': 'How long does it take to build my bathroom?',
  'Een gemiddelde badkamer realiseren we in twee tot drie weken op locatie. De voorbereiding, het ontwerp en de materiaalkeuze gaan daaraan vooraf. We plannen alles strak, zodat je niet langer dan nodig zonder badkamer zit.':
    'We build an average bathroom in two to three weeks on site. The preparation, design and material selection come beforehand. We plan everything tightly, so you are without a bathroom no longer than necessary.',
  'Werken jullie met een vaste prijs?': 'Do you work with a fixed price?',
  'Ja. Op basis van een gedetailleerd 3D-ontwerp krijg je een vaste aanneemsom. Daarin zit alles: sloop, leidingwerk, tegels, sanitair, vloerverwarming, ventilatie en alle arbeid. Wat we afspreken, dat betaal je.':
    'Yes. Based on a detailed 3D design you get a fixed contract price. It includes everything: demolition, pipework, tiles, sanitary ware, underfloor heating, ventilation and all labour. What we agree is what you pay.',
  'Doen jullie alles zelf of werken jullie met onderaannemers?': 'Do you do everything yourselves or work with subcontractors?',
  'We werken met onze eigen vakmensen, van tegelzetter tot loodgieter en monteur. Eén aanspreekpunt, één team dat verantwoordelijk is voor het hele resultaat.':
    'We work with our own craftsmen, from tiler to plumber and fitter. One point of contact, one team responsible for the entire result.',
  'Kan ik eerst een ontwerp zien voordat ik beslis?': 'Can I see a design before I decide?',
  'Zeker. We maken een 3D-ontwerp van jouw badkamer met de gekozen materialen, kleuren en indeling. Zo zie je precies hoe het wordt voordat we ook maar één tegel plaatsen.':
    'Absolutely. We create a 3D design of your bathroom with the chosen materials, colours and layout. So you see exactly how it will look before we lay a single tile.',
  'Werken jullie door heel Nederland?': 'Do you work throughout the Netherlands?',
  'Ja, we realiseren luxe badkamers door heel Nederland. Tijdens het adviesgesprek bespreken we jouw locatie en planning.':
    'Yes, we build luxury bathrooms throughout the Netherlands. During the consultation we discuss your location and planning.',

  // ── Slot-CTA ──
  'Laten we jouw': "Let's build your",
  'realiseren': '',
};
