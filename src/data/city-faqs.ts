import type { WoonklasseCity } from '@/data/woonklasse-cities';

// Server-safe FAQ builder, shared by the city template (client component)
// and the route files that emit FAQPage JSON-LD. Keep both in sync by
// generating from one source.
export function buildCityFaqs(city: WoonklasseCity) {
  return [
    {
      q: `Wat kost een verbouwing in ${city.name}?`,
      a: `Een gerichte renovatie in ${city.name} start rond €8.000. Een complete verbouwing met aanbouw en nieuwe installaties ligt meestal tussen €60.000 en €150.000. U krijgt altijd een vaste prijs voordat het werk begint.`,
    },
    {
      q: `Hoe lang duurt een verbouwing in ${city.name}?`,
      a: `Een gerichte verbouwing zoals een keuken of badkamer duurt 2 tot 4 weken. Een complete woningverbouwing met aanbouw of dakopbouw zit doorgaans op 3 tot 6 maanden. Tijdens de opname maken we een realistische planning op maat.`,
    },
    {
      q: `Werken jullie in heel ${city.name}?`,
      a: `Ja, wij werken in heel ${city.name}, inclusief ${city.areas.slice(0, 4).join(', ')} en de omliggende plaatsen. Ons team rijdt vanuit Amsterdam-Duivendrecht zonder reiskosten in rekening te brengen.`,
    },
    {
      q: `Verzorgen jullie ook de vergunning in ${city.name}?`,
      a: `Voor projecten met een omgevingsvergunning werken wij met een vaste architect en constructeur. Wij verzorgen de tekeningen, het indienen bij de gemeente ${city.name} en de communicatie tot aan de verlening.`,
    },
    {
      q: 'Krijg ik een vaste prijs of werken jullie op nacalculatie?',
      a: 'Standaard werken wij met een vaste aanneemsom. Na opname en ontwerp ontvangt u een complete offerte. Wijzigingen tijdens het project stemmen we vooraf schriftelijk af, zo zijn er geen verrassingen achteraf.',
    },
  ];
}
