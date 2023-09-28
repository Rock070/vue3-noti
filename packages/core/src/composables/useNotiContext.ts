import { inject } from 'vue'
import type { InjectionKey } from 'vue'

import { noop } from '@vueuse/core'
import { DEFAULT_SETTING } from '../constant'
import type { NotiContext } from '../types'

export const INJECT_KEY: InjectionKey<NotiContext> = Symbol('noti')

export function useNotiContext(): NotiContext {
  return inject(INJECT_KEY) || {
    initialOptions: DEFAULT_SETTING,
    closeAll: noop,
    notify: noop,
  }
}
