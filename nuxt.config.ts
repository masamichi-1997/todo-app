// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', ],
  css: ['@/assets/css/global.css'],
})
