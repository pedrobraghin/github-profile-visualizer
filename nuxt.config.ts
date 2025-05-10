// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'vue-recaptcha/nuxt'
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  ssr: false,
  runtimeConfig: {
    public: {
      recaptcha: {
        v3SiteKey: process.env.RECAPTCHA_SITE_KEY // for example
      },
      apiUrl: process.env.API_URL
    }
  },
  app: {
    head: {
      script: [
        {
          src: `https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`,
          async: true,
          defer: true,
        },
      ],
    },
  }
});
