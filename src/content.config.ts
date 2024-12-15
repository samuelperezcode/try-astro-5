import { glob } from 'astro/loaders';
import {defineCollection, z} from 'astro:content';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		readTime: z.number(),
    heroImage: z.string(),
		buy: z.object({
			spain: z.string(),
			usa: z.string(),
		}),
	}),
});

export const collections = {blog};