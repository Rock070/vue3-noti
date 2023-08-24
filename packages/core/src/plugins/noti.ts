import type { App, Plugin } from 'vue'
import { ref } from 'vue'

import { useToggle } from '@vueuse/core'
import { DEFAULT_SETTING, INJECT_KEY } from '../constant'

// app: App, options: any
export const NotiPlugin: Plugin = {
  install: (app: App) => {
    const notifications = ref('')
    const option = ref(DEFAULT_SETTING)
    const [isShow, toggleShow] = useToggle(false)

    // Plugin code goes here
    app.provide(INJECT_KEY, {
      option,
      isShow,
      toggleShow,
      notifications,
    })
  },
}
