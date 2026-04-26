export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: { ordered?: boolean; items: string[] };
  callout?: { title?: string; body: string };
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  updatedDate?: string;
  category: string;
  readingTime: number;
  heroImage: string;
  author: { name: string; role: string };
  intro: string[];
  sections: BlogSection[];
  conclusion: string[];
  related: string[];
  keywords: string[];
};
