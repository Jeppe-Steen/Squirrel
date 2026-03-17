// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
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
  runtimeConfig: {
    public: {
      supabaseUrl: "https://jubotmfetssmyrqgvstl.supabase.co",
      supabasePublishableKey: "sb_publishable_SSMguEfCHmT0in20XuWNfQ_bts9oYOV",
    }
  }
})
