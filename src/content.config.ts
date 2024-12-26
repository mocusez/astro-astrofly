import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const BlogPostSchema = z.object({
  title: z.string(),
  sticky: z.number().default(0),
  cover: z.string().optional(),
  categories: z.string(),
  abbrlink: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updated: z.coerce.date(),
});

const cn_blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog/zh-CN" }),
  schema: BlogPostSchema,
});

const en_blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog/en" }),
  schema: BlogPostSchema,
});

export const collections = { cn_blog, en_blog };
