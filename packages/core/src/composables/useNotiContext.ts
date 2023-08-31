import { inject } from 'vue'
import { DEFAULT_SETTING, INJECT_KEY } from '../constant'
import type { NotiContext, NotiOptions } from '../types'

export function useNotiProvideArguments(initialOptions: NotiOptions) {
  const provideArguments = [INJECT_KEY, {
    options: {
      ...DEFAULT_SETTING,
      ...initialOptions,
    },
  }] as const

  return provideArguments
}

export function useNotiContext(): NotiContext {
  return inject(INJECT_KEY) || { options: DEFAULT_SETTING }
}
