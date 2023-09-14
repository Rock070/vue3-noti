<script setup lang="ts">
import { ref } from 'vue'

import { useCounter } from '@vueuse/core'
import useEventBus from '../composables/useEventBus'

import { useNotiContext } from '../composables/useNotiContext'

import type { NotiOptions } from '../types'
import AtomicProgress from './AtomicProgress.vue'

export interface NotiTimer {
  /**
   * Whether the notification timer is active
   */
  isActive: boolean

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

export type NotificationList = Notification[]

const { options: initialOptions } = useNotiContext()
const { inc: countIncrease } = useCounter(1)

const queue = ref<NotificationList>([])

/**
 * Time per frame rendered (in milliseconds)
 */
const MS_PER_FRAME = 1000 / 60

function triggerCountDown(target: Notification) {
  const interval = setInterval(() => {
    if (!target.timer.isActive)
      clearInterval(interval)

    const lastTime = target.timer.endCountDownTimestamp - Date.now()
    if (lastTime > 0) {
      target.timer.lastTime = lastTime
    }
    else {
      target.timer.lastTime = 0
      queue.value = queue.value.filter(item => item.id !== target.id)
      clearInterval(interval)
    }
  }, MS_PER_FRAME)
}

function publishEvent(options: NotiOptions) {
  const item: Notification = {
    ...initialOptions,
    ...options,
    id: countIncrease(),
    timer: {
      isActive: true,
      lastTime: 0,
      endCountDownTimestamp: 0,
    },
  }

  item.timer.lastTime = item.duration!
  item.timer.endCountDownTimestamp = item.duration! + Date.now()

  queue.value.push(item)

  const target = queue.value.find(i => i.id === item.id)

  if (!target)
    return

  triggerCountDown(target)
}

function onMouseEnter(val: Notification) {
  if (!val.hoverPause)
    return
  val.timer.isActive = false
}
function onMouseLeave(val: Notification) {
  if (!val.hoverPause)
    return
  val.timer.isActive = true
  val.timer.endCountDownTimestamp = val.timer.lastTime + Date.now()
  triggerCountDown(val)
}

const bus = useEventBus()
bus.on(publishEvent)
</script>

<template>
  <div class="vue3-noti">
    <div class="vue3-noti__container">
      <div
        v-for="item in queue"
        :key="item.id"
        class="vue3-noti-group"
        @mouseenter="onMouseEnter(item)"
        @mouseleave="onMouseLeave(item)"
      >
        {{ item.message }}
        <AtomicProgress
          v-if="item.showProgressBar"
          :value="item.timer.lastTime"
          :max="item.duration"
        />
      </div>
    </div>
  </div>
</template>

<style>
.vue3-noti .vue3-noti__container {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  z-index: 9999;
}
.vue3-noti .vue3-noti__container .vue3-noti-group {
  position: relative;
  font-size: 32px;
  background-color: chartreuse;
  color: black;
  border-radius: 12px;
  padding: 10px 20px;
  overflow: hidden;
}

.vue3-noti .vue3-noti__progress {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
