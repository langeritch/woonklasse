import type { BlogPost } from './types';
import { post as post1 } from './post-1-verbouwing-kosten';
import { post as post2 } from './post-2-keuken-renovatie';
import { post as post3 } from './post-3-energiezuinig-verbouwen';

export type { BlogPost, BlogSection } from './types';

export const WOONKLASSE_POSTS: BlogPost[] = [
  post1, post2, post3,
].sort((a, b) => b.date.localeCompare(a.date));

const bySlug = new Map(WOONKLASSE_POSTS.map((p) => [p.slug, p]));

export function getWoonklassePostBySlug(slug: string): BlogPost | undefined {
  return bySlug.get(slug);
}

export function getRelatedWoonklassePosts(post: BlogPost, count = 3): BlogPost[] {
  const explicit = (post.related ?? [])
    .map((slug) => bySlug.get(slug))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug);
  if (explicit.length >= count) return explicit.slice(0, count);

  const sameCategory = WOONKLASSE_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category && !explicit.includes(p),
  );
  const fallback = WOONKLASSE_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category && !explicit.includes(p),
  );
  return [...explicit, ...sameCategory, ...fallback].slice(0, count);
}

export const WOONKLASSE_CATEGORIES: string[] = Array.from(
  new Set(WOONKLASSE_POSTS.map((p) => p.category)),
);
