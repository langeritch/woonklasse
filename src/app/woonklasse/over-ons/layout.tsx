import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons | Woonklasse',
  description: 'Leer ons team kennen. Woonklasse staat voor vakmanschap, betrouwbaarheid en passie voor verbouwen.',
  openGraph: {
    title: 'Over Ons | Woonklasse',
    description: 'Vakmanschap, betrouwbaarheid en passie. Ontmoet het team achter Woonklasse.',
  },
};

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
