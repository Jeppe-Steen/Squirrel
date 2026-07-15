// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@jrs/core',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'],
  googleFonts: {
    families: {
      Roboto: true, // Basic usage
      Inter: [400, 700], // Specific weights
      'Josefin+Sans': true,
      Lato: [100, 300],
    },
    // Optionally, you can add options for each font
    // Raleway: { wght: [100, 400], ital: [100] }
  },
  site: { 
    url: 'https://klinikegernboakupunktur.dk', 
    name: 'Klinik Egernbo Akupunktur',
    defaultLocale: "da"
  },
  css: [
    '~/assets/scss/theme.css'
  ]
})
