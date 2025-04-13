import {
  defineCollection,
  z,
  reference,
  type SchemaContext,
} from "astro:content";

const categoriesCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      slug: z.string(),
    })
  ),
});

const newsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      image: image(),
      imageAlt: z.string(),
      pinned: z.boolean(),
      categories: z.array(reference("categories")).optional(),
    }),
});

export const collections = {
  news: newsCollection,
  categories: categoriesCollection,
};
