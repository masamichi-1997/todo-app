// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'TODO APP',
      htmlAttrs: { lang: 'ja' },
      meta: [{ name: 'description', content: 'TODO APP' }],
      link: [{ rel: 'icon', href: 'public/favicon.ico' }],
    },
  },
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', ],
  css: ['@/assets/css/global.css'],
})
