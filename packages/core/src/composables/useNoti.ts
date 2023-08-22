import { inject } from 'vue'

import { INJECT_KEY } from '../constant'

export function useNoti() {
  const noti = inject(INJECT_KEY)
  return noti
}
