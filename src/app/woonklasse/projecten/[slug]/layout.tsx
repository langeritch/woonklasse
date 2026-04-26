import type { Metadata } from 'next';
import { getProject } from '@/data/projects';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Project niet gevonden | Woonklasse' };
  }

  return {
    title: `${project.subtitle} | Woonklasse Projecten`,
    description: project.description,
    openGraph: {
      title: `${project.subtitle} | Woonklasse Projecten`,
      description: project.description,
      images: [{ url: project.heroImage }],
    },
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
