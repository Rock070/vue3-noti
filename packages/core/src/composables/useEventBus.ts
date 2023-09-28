import { useEventBus as _useEventBus } from '@vueuse/core'

import type { EventBusKey } from '@vueuse/core'
import type { NotiOptions } from '../types'

export const NOTI_BUS_KEY: EventBusKey<NotiOptions> = Symbol('noti:call')
export const NOTI_CLOSE_ALL_BUS_KEY: EventBusKey<never> = Symbol('noti:closeAll')

export function useNotiCallBus() {
  return _useEventBus(NOTI_BUS_KEY)
}

export function useNotiCloseAllBus() {
  return _useEventBus(NOTI_CLOSE_ALL_BUS_KEY)
}
