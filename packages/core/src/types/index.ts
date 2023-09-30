import type { Fn } from '@vueuse/core'
import type { Ref } from 'vue'

export type NotificationType = 'success' | 'warning' | 'error' | 'info'

export const enum NotificationEnum {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}
export type NotiPositionTuple = ['top-left', 'top-middle', 'top-right', 'bottom-left', 'bottom-middle', 'bottom-right']
export type NotiPositionType = NotiPositionTuple[number]

export const enum NotiPositionEnum {
  'TOP_LEFT' = 'top-left',
  'TOP_MIDDLE' = 'top-middle',
  'TOP_RIGHT' = 'top-right',
  'BOTTOM_LEFT' = 'bottom-left',
  'BOTTOM_MIDDLE' = 'bottom-middle',
  'BOTTOM_RIGHT' = 'bottom-right',
}

export interface NotiOptions {
  /**
   * Text display on the notification.
   */
  message: string

  /**
   * The type of the notification.
   */
  type?: NotificationType

  /**
   * The position of the notification.
   */
  position?: NotiPositionType

  /**
   * The duration of the notification.
   */
  duration?: number

  /**
   * Whether to show the progress bar.
   */
  showProgressBar?: boolean

  /**
   * Whether to close when clicking on the notification.
   */
  closeOnClick?: boolean

  /**
   * Whether to pause on hover.
   */
  hoverPause?: boolean

  /**
   * Callback when notification is closed.
   */
  onClose?: () => void
}

export interface NotiTimer {

  /**
   * interval Id
   */
  intervalId: NodeJS.Timeout | undefined

  /**
   * Time left (in milliseconds)
   */
  lastTime: number

  /**
   * end count down timestamp
   */
  endCountDownTimestamp: number
}

export interface Notification extends NotiOptions {
  id: number | string | symbol
  timer: NotiTimer
}

export type NotiGroup = Record<NotiPositionType, Notification[]>

export interface NotiContext {
  /**
   * Notification group map.
   */
  groupMap: Ref<NotiGroup>

  /**
   * Trigger a notification show.
   */
  notify: (options: NotiOptions) => Notification | undefined

  /**
   * Close all notifications.
   */
  closeAll: Fn

  /**
   * Callback when mouse enter.
   */
  onMouseEnter: (val: Notification) => void

  /**
   * Callback when mouse leave.
   */
  onMouseLeave: (val: Notification) => void

  /**
   * Callback when click.
   */
  onClick: (val: Notification) => void
}

export type UseNotiReturn = Pick<NotiContext, 'notify' | 'closeAll'>
