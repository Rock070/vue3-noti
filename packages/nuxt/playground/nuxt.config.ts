import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  'modules': ['../src/module'],
  'vue3-noti': {
    message: 'Nuxt Module Demo',
    type: 'warning',
  },
})
