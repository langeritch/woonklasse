// Gedeelde FAQ-data voor de Badkamerstijl-homepage.
// Gebruikt door zowel de homepage (zichtbare accordion) als de FAQPage JSON-LD
// in de layout, zodat de structured data altijd matcht met wat zichtbaar is.

export type Faq = { q: string; a: string };

export const BADKAMERSTIJL_FAQS: Faq[] = [
  {
    q: 'Wat kost een complete badkamer renovatie?',
    a: 'Dat hangt af van de grootte en de afwerking. Een nette renovatie start rond € 5.000, een gemiddelde badkamer op maat ligt tussen € 12.000 en € 22.000 en voor een luxe badkamer met natuursteen en designmerken reken je vanaf € 35.000. Je krijgt vooraf een vaste aanneemsom, dus geen verrassingen achteraf.',
  },
  {
    q: 'Hoe lang duurt het om mijn badkamer te realiseren?',
    a: 'Een gemiddelde badkamer realiseren we in twee tot drie weken op locatie. De voorbereiding, het ontwerp en de materiaalkeuze gaan daaraan vooraf. We plannen alles strak, zodat je niet langer dan nodig zonder badkamer zit.',
  },
  {
    q: 'Werken jullie met een vaste prijs?',
    a: 'Ja. Op basis van een gedetailleerd 3D-ontwerp krijg je een vaste aanneemsom. Daarin zit alles: sloop, leidingwerk, tegels, sanitair, vloerverwarming, ventilatie en alle arbeid. Wat we afspreken, dat betaal je.',
  },
  {
    q: 'Doen jullie alles zelf of werken jullie met onderaannemers?',
    a: 'We werken met onze eigen vakmensen, van tegelzetter tot loodgieter en monteur. Eén aanspreekpunt, één team dat verantwoordelijk is voor het hele resultaat.',
  },
  {
    q: 'Kan ik eerst een ontwerp zien voordat ik beslis?',
    a: 'Zeker. We maken een 3D-ontwerp van jouw badkamer met de gekozen materialen, kleuren en indeling. Zo zie je precies hoe het wordt voordat we ook maar één tegel plaatsen.',
  },
  {
    q: 'Werken jullie door heel Nederland?',
    a: 'Ja, we realiseren luxe badkamers door heel Nederland. Tijdens het adviesgesprek bespreken we jouw locatie en planning.',
  },
];
