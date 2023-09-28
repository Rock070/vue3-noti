import type { NotiOptions } from '../types'
import { useNotiCallBus, useNotiCloseAllBus } from './useEventBus'

export function useNoti() {
  const notiCallBus = useNotiCallBus()
  const notiCloseAllBus = useNotiCloseAllBus()
  const notify = (options: NotiOptions) => notiCallBus.emit(options)

  const closeAll = () => notiCloseAllBus.emit()

  return {
    notify,
    closeAll,
  }
}
