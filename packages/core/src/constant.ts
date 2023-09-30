import type { InjectionKey } from 'vue'

import type { NotiContext, NotiOptions, NotiPositionTuple } from './types'

export const INJECT_KEY: InjectionKey<NotiContext> = Symbol('noti')

export const DEFAULT_SETTING: NotiOptions = {
  message: '',
  type: 'success',
  position: 'top-right',
  duration: 3000,
  hoverPause: true,
  closeOnClick: true,
  showProgressBar: true,
}

export const POSITION_LIST: NotiPositionTuple = [
  'top-left',
  'top-middle',
  'top-right',
  'bottom-left',
  'bottom-middle',
  'bottom-right',
]

/**
 * Time per frame rendered (in milliseconds)
 */
export const MS_PER_FRAME = 1000 / 60
