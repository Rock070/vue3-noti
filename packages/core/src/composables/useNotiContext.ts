import { getCurrentInstance, inject, ref } from 'vue'

import { noop } from '@vueuse/core'
import { INJECT_KEY } from '../constant'
import type { NotiContext, NotiGroup, NotiOptions, Notification } from '../types'

// eslint-disable-next-line unused-imports/no-unused-vars
const notiNoop = (val: Notification) => undefined

export function useNotiContext(): NotiContext {
  const context = getCurrentInstance()?.appContext?.app?.runWithContext?.(() => {
    return inject(INJECT_KEY)
  })
  // const context = inject(INJECT_KEY)

  return context ?? {
    groupMap: ref<NotiGroup>({
      'top-left': [],
      'top-middle': [],
      'top-right': [],
      'bottom-left': [],
      'bottom-middle': [],
      'bottom-right': [],
    }),
    // eslint-disable-next-line unused-imports/no-unused-vars
    notify: (options: NotiOptions) => undefined,
    closeAll: noop,
    onMouseEnter: notiNoop,
    onMouseLeave: notiNoop,
    onClick: notiNoop,
  }
}
