import { defineCollection, z } from "astro:content"

const braceletCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
})

export const collections = {
  bracelets: braceletCollection,
}
