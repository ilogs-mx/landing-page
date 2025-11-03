import { defineCollection, z } from "astro:content";

const documentCollections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  documents: documentCollections,
};
