import { NotiPlugin } from '@vue3-noti/core'
import type { NotiOptions } from '@vue3-noti/core'
import '@vue3-noti/core/style.css'

export default defineNuxtPlugin({
  name: '@vue3-noti',
  async setup(nuxtApp) {
    const notiOptions: NotiOptions = {
      message: 'Hello',
      type: 'success',
      duration: 1000,
      position: 'top-right',
      hoverPause: true,
      showProgressBar: true,
    }

    nuxtApp.vueApp.use(NotiPlugin, notiOptions)
  },
})
