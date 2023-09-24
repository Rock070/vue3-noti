import type { App, Plugin } from 'vue'

import { useNotiProvideArguments } from '../composables/useNotiContext'
import type { NotiOptions } from '../types'

export const NotiPlugin: Plugin = {
  install: (app: App, initialOptions: NotiOptions) => {
    const notiArguments = useNotiProvideArguments(initialOptions)

    app.provide(...notiArguments)
  },
}

// TODO: add global $noti type
// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     /**
//      * Vue Final Modal global state for the modal components and also provides
//      * functions that can be used to control the modal components. {@link Vfm}
//      */
//     $noti: ReturnType<typeof useNotiProvideArguments>
//   }
// }

// export { }
