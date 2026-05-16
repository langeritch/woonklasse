import type { Metadata } from 'next';
import { getProject, projects } from '@/data/projects';

const SITE_URL = 'https://woonklasse.nl';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Project niet gevonden | Woonklasse' };
  }

  const url = `${SITE_URL}/woonklasse/projecten/${project.slug}`;
  const title = `${project.subtitle} | Woonklasse Projecten`;
  const heroAbsolute = `${SITE_URL}${project.heroImage}`;

  return {
    title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: project.description,
      url,
      type: 'article',
      locale: 'nl_NL',
      siteName: 'Woonklasse',
      images: [{ url: heroAbsolute, width: 2200, height: 1467, alt: project.subtitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
      images: [heroAbsolute],
    },
  };
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return <>{children}</>;

  const url = `${SITE_URL}/woonklasse/projecten/${project.slug}`;

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: project.subtitle,
    description: project.description,
    url,
    image: `${SITE_URL}${project.heroImage}`,
    inLanguage: 'nl-NL',
    creator: { '@id': `${SITE_URL}#localbusiness` },
    isPartOf: { '@id': `${SITE_URL}#website` },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Woonklasse', item: `${SITE_URL}/woonklasse` },
      { '@type': 'ListItem', position: 3, name: 'Projecten', item: `${SITE_URL}/woonklasse/projecten` },
      { '@type': 'ListItem', position: 4, name: project.subtitle, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
