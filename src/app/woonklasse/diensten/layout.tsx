import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diensten | Woonklasse',
  description: 'Ontdek onze diensten: complete verbouwingen, aanbouwen, veranda\'s, dakkapellen en meer. Woonklasse levert vakmanschap op maat.',
  openGraph: {
    title: 'Diensten | Woonklasse',
    description: 'Complete verbouwingen, aanbouwen, veranda\'s en dakkapellen met vakmanschap op maat.',
  },
};

export default function DienstenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
