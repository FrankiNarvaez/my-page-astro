import { defineCollection, z } from "astro:content";

export const collections = {
  cv: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
    }),
  }),
};
