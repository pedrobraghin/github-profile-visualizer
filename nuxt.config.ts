// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    [
      '@nuxtjs/recaptcha',
      {
        hideBadge: false,
        siteKey: '6LfTVC8rAAAAAISI8s59lF0JcXMq_XfgsHsepO5U',
        version: 3,
        mode: String,
        size: 'normal',
        language: String,
      },
    ],
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  ssr: false,
});
