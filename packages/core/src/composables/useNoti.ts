import type { UseNotiReturn } from '../types'
import { useNotiContext } from './useNotiContext'

export function useNoti(): UseNotiReturn {
  const context = useNotiContext()

  return {
    notify: context?.notify,
    closeAll: context?.closeAll,
  }
}
