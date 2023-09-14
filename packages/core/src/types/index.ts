export enum NOTI_TYPE {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export type NotificationType = 'success' | 'warning' | 'error' | 'info'

/**
 * An object containing constants for the position of notifications.
 */
export enum NOTI_POSITION {
  /**
   * Notifications appear at the top right of the screen and slide in from the right.
   */
  TOP_RIGHT = 'top-right',

  /**
   * Notifications appear at the top left of the screen and slide in from the left.
   */
  TOP_LEFT = 'top-left',

  /**
   * Notifications appear at the bottom right of the screen and slide in from the right.
   */
  BOTTOM_RIGHT = 'bottom-right',

  /**
   * Notifications appear at the bottom left of the screen and slide in from the left.
   */
  BOTTOM_LEFT = 'bottom-left',

  /**
   * Notifications appear at the middle top of the screen and slide in from the top.
   */
  MIDDLE_TOP = 'middle-top',

  /**
   * Notifications appear at the middle left of the screen and slide in from the left.
   */
  MIDDLE_LEFT = 'middle-left',

  /**
   * Notifications appear at the middle right of the screen and slide in from the right.
   */
  MIDDLE_RIGHT = 'middle-right',
}

export type NotiPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'middle-top' | 'middle-left' | 'middle-right'

export interface NotiOptions {
  /**
   * The title of the notification.
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
   * Whether to close when clicking on the notification.
   */
  closeOnClick?: boolean

  /**
   * Whether to pause on hover.
   */
  hoverPause?: boolean
}

export interface NotiContext {
  options: NotiOptions
}
