import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const it = defineCollection({
    loader: glob ({pattern: "**/*{md,mdx}", base: "./src/content/it/news/"}),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        date: z.coerce.date(),
        imgae: z.string(),
        pinned: z.boolean(),
    }),
});

const en = defineCollection({
    loader: glob ({pattern: "**/*{md,mdx}", base: "./src/content/en/news/"}),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        date: z.coerce.date(),
        pinned: z.boolean(),
    }),
});

export const collections = {it, en}