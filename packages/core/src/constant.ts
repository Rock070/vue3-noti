import type { InjectionKey } from 'vue'
import { NOTI_POSITION, NOTI_TYPE } from './types'
import type { NotiContext } from './types'

export const DEFAULT_SETTING = {
  type: NOTI_TYPE.SUCCESS,
  position: NOTI_POSITION.TOP_RIGHT,
  timeout: 3000,
}

export const INJECT_KEY: InjectionKey<NotiContext> = Symbol('noti')
