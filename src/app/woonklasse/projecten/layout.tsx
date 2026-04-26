import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projecten | Woonklasse',
  description: 'Bekijk ons portfolio van gerealiseerde verbouwingen, renovaties en veranda\'s. Inspiratie voor jouw project.',
  openGraph: {
    title: 'Projecten | Woonklasse',
    description: 'Portfolio van gerealiseerde verbouwingen, renovaties en veranda\'s.',
  },
};

export default function ProjectenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
