import { ref } from 'vue'
import { useCounter } from '@vueuse/core'

import type { App } from 'vue'
import { DEFAULT_SETTING, INJECT_KEY, MS_PER_FRAME, POSITION_LIST } from '../constant'

import type { NotiGroup, NotiOptions, Notification } from '../types'

interface UseCreateNotiOptions {
  app: App
  initialOptions: NotiOptions
}

export function useCreateNoti(options: UseCreateNotiOptions) {
  const { app, initialOptions = DEFAULT_SETTING } = options
  const { inc: countIncrease } = useCounter(1)

  const groupMap = ref<NotiGroup>({
    'top-left': [],
    'top-middle': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-middle': [],
    'bottom-right': [],
  })

  function clearCountDown(timer: NodeJS.Timeout) {
    clearInterval(timer)
  }

  function closeNoti(val: Notification) {
    if (val.timer.intervalId !== undefined)
      clearCountDown(val.timer.intervalId)

    removeNotiFromGroup(val)
  }

  function triggerCountDown(target: Notification) {
    const interval = setInterval(() => {
      const now = new Date()
      const lastTime = target.timer.endCountDownTimestamp - now.getTime()
      if (lastTime > 0) {
        target.timer.lastTime = lastTime
        return
      }

      target.timer.lastTime = 0
      target.onClose?.()
      closeNoti(target)
    }, MS_PER_FRAME)

    target.timer.intervalId = interval
  }

  function makeNoti(options: NotiOptions, id: number): Notification {
    const item: Notification = {
      ...DEFAULT_SETTING,
      ...initialOptions,
      ...options,
      id,
      timer: {
        lastTime: 0,
        intervalId: undefined,
        endCountDownTimestamp: 0,
      },
    }
    const durationNum = Number(item.duration)
    const duration = Number.isNaN(durationNum) ? 0 : durationNum

    item.timer.lastTime = duration
    item.timer.endCountDownTimestamp = duration + Date.now()

    return item
  }

  function findBelongGroup(val: Notification) {
    if (!val.position || !POSITION_LIST.includes(val.position))
      return

    return groupMap.value[val.position]
  }

  function removeNotiFromGroup(val: Notification) {
    const belongGroup = findBelongGroup(val)

    if (!belongGroup)
      return
    const index = belongGroup.findIndex(item => item.id === val.id)

    if (index === -1)
      return

    belongGroup.splice(index, 1)
  }

  function notify(options: NotiOptions) {
    const item = makeNoti(options, countIncrease())

    const belongGroup = findBelongGroup(item)
    if (!belongGroup) {
      console.warn('Noti: Invalid position')
      return
    }

    const length = belongGroup.push(item)
    const target = belongGroup[length - 1]!

    triggerCountDown(target)

    return item
  }

  function closeAll() {
    for (const position of POSITION_LIST) {
      groupMap.value[position].forEach((item) => {
        if (item.timer.intervalId !== undefined)
          clearCountDown(item.timer.intervalId)
      })

      groupMap.value[position].length = 0
    }
  }

  function onMouseEnter(val: Notification) {
    if (!val.hoverPause || val.timer.intervalId === undefined)
      return

    clearCountDown(val.timer.intervalId)
  }
  function onMouseLeave(val: Notification) {
    if (!val.hoverPause)
      return

    val.timer.endCountDownTimestamp = val.timer.lastTime + Date.now()
    triggerCountDown(val)
  }

  function onClick(val: Notification) {
    if (!val.closeOnClick || val.timer.intervalId === undefined)
      return

    clearCountDown(val.timer.intervalId)
    removeNotiFromGroup(val)
  }

  app.provide(INJECT_KEY, {
    groupMap,
    notify,
    closeAll,
    onMouseEnter,
    onMouseLeave,
    onClick,
  })
}
