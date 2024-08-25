// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Twitter/X transparent avatar upload tool',
        meta: [
            { charset: 'utf-8' },
            { key: 'description', name: 'description', content: 'Upload a profile image to Twitter that has a transparent background.' },
        ],
    },
  },
  compatibilityDate: '2024-04-03',
  css: ['~/main.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [],
})
