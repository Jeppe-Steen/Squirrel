import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    viden: defineCollection({
      type: 'page',
      source: 'viden/**/*.md',
      schema: z.object({
        publishedAt: z.string(),
        image: z.string(),
        category: z.enum([
          'Hovedpine',
          'Smerter',
          'Stress',
          'Søvn',
          'Graviditet',
          'Allergi',
          'Spørgsmål',
          'Forskning'
        ]),
        tags: z.array(z.string()),
      }),
    }),
  },
})