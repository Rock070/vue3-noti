import type { NotiContext } from '../types'
import { useNotiContext } from './useNotiContext'

export function useNoti(): Omit<NotiContext, 'initialOptions'> {
  const context = useNotiContext()

  const notify = context.notify
  const closeAll = context.closeAll

  return {
    notify,
    closeAll,
  }
}
