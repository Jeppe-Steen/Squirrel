import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    viden: defineCollection({
      type: 'page',
      source: 'viden/**/*.md',
    }),
  },
})