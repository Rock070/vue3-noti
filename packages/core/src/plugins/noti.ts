import type { App, Plugin } from 'vue'
import { DEFAULT_SETTING } from '../constant'
import { useCreateNoti } from '../composables/useCreateNoti'

export const NotiPlugin: Plugin = {
  install: (app: App, initialOptions = DEFAULT_SETTING) => {
    useCreateNoti({ app, initialOptions })
  },
}
