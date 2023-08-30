import type { App, Plugin } from 'vue'

import { INJECT_KEY } from '../constant'
import useEventBus from '../composables/useEventBus'
import type { NotiOptions } from '../types'

// app: App, options: any
export const NotiPlugin: Plugin = {
  install: (app: App) => {
    const bus = useEventBus()
    const noti = (options: NotiOptions) => bus.emit(options)

    // Plugin code goes here
    app.provide(INJECT_KEY, noti)
  },
}
