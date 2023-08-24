import type { InjectionKey } from 'vue'
import type { NotiContext, NotiOptions } from './types'
import { NOTI_POSITION, NOTI_TYPE } from './types'

export const DEFAULT_SETTING: NotiOptions = {
  type: NOTI_TYPE.SUCCESS,
  position: NOTI_POSITION.TOP_RIGHT,
  timeout: 3000,
}

export const INJECT_KEY: InjectionKey<NotiContext> = Symbol('noti')
