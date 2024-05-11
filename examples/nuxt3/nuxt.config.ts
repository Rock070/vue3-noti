// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vue3-noti/nuxt'],
  noti: {
    message: 'Nuxt Module Demo',
    type: 'warning',
    position: 'bottom-right',
    // ...Other vue3-noti options
  },
})
