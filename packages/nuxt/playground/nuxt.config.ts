import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['../src/module'],
  noti: {
    message: 'Nuxt Module Demo',
    type: 'warning',
  },
})
