import type { InjectionKey } from 'vue'
import type { NotiContext, NotiOptions, NotiPositionTuple } from './types'
import { NOTI_TYPE } from './types'

export const DEFAULT_SETTING: NotiOptions = {
  message: '',
  type: NOTI_TYPE.SUCCESS,
  position: 'top-right',
  duration: 3000,
}

export const INJECT_KEY: InjectionKey<NotiContext> = Symbol('noti')

export const POSITION_LIST: NotiPositionTuple = [
  'top-right',
  'top-left',
  'bottom-right',
  'bottom-left',
  'middle-top',
  'middle-bottom',
]

/**
 * Time per frame rendered (in milliseconds)
 */
export const MS_PER_FRAME = 1000 / 60
