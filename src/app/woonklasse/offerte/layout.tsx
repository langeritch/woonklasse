import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offerte Aanvragen',
  description: 'Vraag vrijblijvend een offerte aan voor uw verbouwing, aanbouw, veranda of dakkapel bij Woonklasse.',
  openGraph: {
    title: 'Offerte Aanvragen | Woonklasse',
    description: 'Vraag vrijblijvend een offerte aan voor uw bouw- of verbouwproject.',
  },
};

export default function OfferteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
