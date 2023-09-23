---
layout: post
navigation: 
  title: useNoti
  icon: streamline:food-toast-bread-toast-breakfast
---
# useNoti

## Type

```ts
function useNoti(): (options: NotiOptions) => void
export type NotificationType = 'success' | 'warning' | 'error' | 'info'

export type NotiPosition = 'top-left' | 'top-middle' | 'top-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right'
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
}
```

```ts
import type { NotiOptions } from '@vue3-noti/core'
```

## Usage

```ts [vue3-noti.vue]
import { useNoti } from '@vue3-noti/core'

const noti = useNoti()

noti({
  message: 'Hi Noti',
  type: 'success',
  position: 'top-right',
  duration: 3000,
  hoverPause: true,
  closeOnClick: true,
  showProgressBar: true,
})
```

## Options

### message (required)

Text displayed on the notification.

- Type: `string`
- Default: `''`

```ts
const noti = useNoti()

noti({
  message: 'Hi Noti',
})
```

### type (optional)

The type of the notification

- Type: `NotificationType`
- Default: `success`

```ts
type NotificationType = 'success' | 'warning' | 'error' | 'info'
```

```ts
import type { NotificationType } from '@vue3-noti/core'
```

```ts
const noti = useNoti()

noti({
  message: 'Hi Noti',
  type: 'success',
})
```

### position (optional)

The position of the notification

- Type: `NotiPosition`
- Default: `'top-right'`

```ts
type NotiPosition = 'top-left' | 'top-middle' | 'top-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right'
```

```ts
import type { NotiPosition } from '@vue3-noti/core'
```

```ts
const noti = useNoti()

noti({
  message: 'Hi Noti',
  type: 'top-right',
})
```

### duration (optional)

The duration of the notification's display in milliseconds.

- Type: `number`
- Default: `3000`

```ts
const noti = useNoti()

noti({
  message: 'Hi Noti',
  duration: 3000,
})
```

### showProgressBar (optional)

Specify whether to display a progress bar.

- Type: `boolean`
- Default: `true`

```ts
const noti = useNoti()

noti({
  message: 'Hi Noti',
  showProgressBar: true,
})
```

### closeOnClick (optional)

Specify whether to close the notification when clicked.

- Type: `boolean`
- Default: `true`

```ts
const noti = useNoti()

noti({
  message: 'Hi Noti',
  closeOnClick: true,
})
```

### hoverPause (optional)

Specify whether to pause the notification's display on hover.

- Type: `boolean`
- Default: `true`

```ts
const noti = useNoti()

noti({
  message: 'Hi Noti',
  hoverPause: true,
})
```
