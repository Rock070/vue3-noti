import { shallowReactive } from 'vue'
import type { App, Plugin } from 'vue'

import { noop } from '@vueuse/core'
import { DEFAULT_SETTING } from '../constant'
import { INJECT_KEY } from '../composables/useNotiContext'
import type { NotiContext, NotiOptions } from '../types'

// app: App, options: any
export const NotiPlugin: Plugin = {

  install: (app: App, initialOptions: NotiOptions) => {
    const context = shallowReactive<NotiContext>({
      initialOptions: {
        ...DEFAULT_SETTING,
        ...initialOptions,
      },
      closeAll: noop,
      notify: noop,
    })

    app.provide(INJECT_KEY, context)
  },

}
