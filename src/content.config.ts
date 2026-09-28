import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(['Software', 'Games', 'AI & Data']),
      tags: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      date: z.coerce.date(),
      // Lower numbers show first on the home page; omit to leave it off the home page.
      featured: z.number().optional(),
      links: z
        .object({
          github: z.url().optional(),
          demo: z.url().optional(),
          video: z.url().optional(),
        })
        .default({}),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts are visible in `npm run dev` but left out of the published site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
