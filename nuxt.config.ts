// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Twitter/X transparent avatar upload tool',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {charset: 'utf-8'},
                {name: 'og:title', content: 'Twitter/X transparent avatar upload tool'},
                {name: 'og:site_name', content: 'Twitter/X transparent avatar upload tool'},
                {name: 'og:description', content: 'Upload a profile image to Twitter that has a transparent background.'},
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:title', content: 'Twitter/X transparent avatar upload tool'},
                {name: 'twitter:creator', content: '@9_bishi'},
                {name: 'twitter:description', content: 'Upload a profile image to Twitter that has a transparent background.'},
                {name: 'description', content: 'Upload a profile image to Twitter that has a transparent background.'},
            ],
        },
    },
    compatibilityDate: '2024-04-03',
    css: ['~/main.css'],
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    gtag: {
        id: 'G-PTV191T31V'
    },
    modules: ['nuxt-gtag'],
})
