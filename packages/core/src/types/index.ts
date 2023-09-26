export type NotificationType = 'success' | 'warning' | 'error' | 'info'

export type NotiPositionTuple = ['top-left', 'top-middle', 'top-right', 'bottom-left', 'bottom-middle', 'bottom-right']
export type NotiPosition = NotiPositionTuple[number]

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
  position?: NotiPosition

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

export interface NotiContext {
  options: NotiOptions
}

export interface NotiTimer {

  /**
   * interval ID
   */
  intervalID: NodeJS.Timeout | undefined

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

export type NotiGroup = Record<NotiPosition, Notification[]>
