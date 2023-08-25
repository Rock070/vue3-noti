import { useEventBus as _useEventBus } from '@vueuse/core'

import type { EventBusKey } from '@vueuse/core'
import type { NotiOptions } from '../types'

export const BUS_KEY: EventBusKey<NotiOptions> = Symbol('busKey')

export default function useEventBus() {
  return _useEventBus(BUS_KEY)
}
