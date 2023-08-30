import { inject } from 'vue'

import { INJECT_KEY } from '../constant'
import type { NotiEvent } from '../types'

export function useNoti() {
  const noti = inject(INJECT_KEY) as NotiEvent
  return noti
}
