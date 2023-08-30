import type { InjectionKey } from 'vue'
import type { NotiEvent, NotiOptions } from './types'
import { NOTI_POSITION, NOTI_TYPE } from './types'

export const DEFAULT_SETTING: NotiOptions = {
  message: '',
  type: NOTI_TYPE.SUCCESS,
  position: NOTI_POSITION.TOP_RIGHT,
  duration: 3000,
}

export const INJECT_KEY: InjectionKey<NotiEvent> = Symbol('noti')
