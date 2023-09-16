<script setup lang="ts">
import { ref } from 'vue'

import { useCounter } from '@vueuse/core'

import useEventBus from '../composables/useEventBus'

import { useNotiContext } from '../composables/useNotiContext'

import type { NotiOptions, Notification } from '../types'
import AtomicProgress from './AtomicProgress.vue'

export type NotificationList = Notification[]

const { options: initialOptions } = useNotiContext()
const { inc: countIncrease } = useCounter(1)

const queue = ref<NotificationList>([])

/**
 * Time per frame rendered (in milliseconds)
 */
const MS_PER_FRAME = 1000 / 60

function clearCountDown(timer: NodeJS.Timeout) {
  clearInterval(timer)
}

function closeNoti(val: Notification) {
  if (val.timer.intervalID !== undefined)
    clearCountDown(val.timer.intervalID)

  queue.value = queue.value.filter(item => item.id !== val.id)
}

function triggerCountDown(target: Notification) {
  const interval = setInterval(() => {
    const lastTime = target.timer.endCountDownTimestamp - Date.now()
    if (lastTime > 0) {
      target.timer.lastTime = lastTime
      return
    }

    target.timer.lastTime = 0
    closeNoti(target)
  }, MS_PER_FRAME)

  target.timer.intervalID = interval
}

function makeNoti(options: NotiOptions): Notification {
  const item: Notification = {
    ...initialOptions,
    ...options,
    id: countIncrease(),
    timer: {
      lastTime: 0,
      intervalID: undefined,
      endCountDownTimestamp: 0,
    },
  }

  item.timer.lastTime = item.duration!
  item.timer.endCountDownTimestamp = item.duration! + Date.now()

  return item
}

function publishEvent(options: NotiOptions) {
  const item = makeNoti(options)
  queue.value.push(item)

  const target = queue.value.find(i => i.id === item.id)

  if (!target)
    return

  triggerCountDown(target)
}

function onMouseEnter(val: Notification) {
  if (!val.hoverPause || val.timer.intervalID === undefined)
    return

  clearCountDown(val.timer.intervalID)
}
function onMouseLeave(val: Notification) {
  if (!val.hoverPause)
    return

  val.timer.endCountDownTimestamp = val.timer.lastTime + Date.now()
  triggerCountDown(val)
}

function onClick(val: Notification) {
  if (!val.closeOnClick || val.timer.intervalID === undefined)
    return

  clearCountDown(val.timer.intervalID)
  queue.value = queue.value.filter(item => item.id !== val.id)
}

const bus = useEventBus()
bus.on(publishEvent)
</script>

<template>
  <div class="vue3-noti">
    <div class="vue3-noti__group">
      <div
        v-for="item in queue"
        :key="item.id"
        class="vue3-noti-group"
        @mouseenter="onMouseEnter(item)"
        @mouseleave="onMouseLeave(item)"
        @click="onClick(item)"
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
.vue3-noti .vue3-noti__group {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  z-index: 9999;
}
.vue3-noti .vue3-noti__group .vue3-noti-group {
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
