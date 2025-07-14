import React from "react";

export interface PostMeta {
  title: string;
  date: string;
  tags?: string[];
  description?: string;
}

export interface PostEntry {
  slug: string;
  meta: PostMeta;
  Component: React.ComponentType;
}

// Glob‐import all MDX posts
const postModules = import.meta.glob<{
  default: React.ComponentType;
  frontmatter: PostMeta;
}>("../posts/*.{md,mdx}", { eager: true });

export const posts: Record<string, PostEntry> = Object.entries(postModules).reduce(
  (acc, [path, mod]) => {
    const match = path.match(/\/posts\/(.*)\.mdx?$/);
    if (match && mod.frontmatter) {
      const slug = match[1];
      acc[slug] = {
        slug,
        Component: mod.default,
        meta: mod.frontmatter,
      };
    }
    return acc;
  },
  {} as Record<string, PostEntry>
);

export const getPostBySlug = (slug: string): PostEntry | undefined => {
  return posts[slug];
};

export const getAllPosts = (): PostEntry[] => {
  try {
    return Object.values(posts).sort(
      (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return [];
  }
};