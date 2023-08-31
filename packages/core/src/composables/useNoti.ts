import type { NotiOptions } from '../types'
import useEventBus from './useEventBus'

export function useNoti() {
  const bus = useEventBus()
  const noti = (options: NotiOptions) => bus.emit(options)
  return noti
}
