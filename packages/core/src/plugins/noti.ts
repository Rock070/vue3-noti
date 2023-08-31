import type { App, Plugin } from 'vue'

import { useNotiProvideArguments } from '../composables/useNotiContext'
import type { NotiOptions } from '../types'

// app: App, options: any
export const NotiPlugin: Plugin = {
  install: (app: App, initialOptions: NotiOptions) => {
    const notiArguments = useNotiProvideArguments(initialOptions)

    app.provide(...notiArguments)
  },
}
