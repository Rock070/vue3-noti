import { NotiPlugin } from '@vue3-noti/core'
import type { NotiOptions } from '@vue3-noti/core'
import { configOptions } from '#build/vue3-noti-nuxt-config-options'
import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin({
  name: '@vue3-noti',
  async setup(nuxtApp) {
    const notiOptions: NotiOptions = configOptions

    nuxtApp.vueApp.use(NotiPlugin, notiOptions)
  },
})
