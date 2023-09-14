<script setup lang="ts">
import { ref } from 'vue'

import { useCounter } from '@vueuse/core'
import useEventBus from '../composables/useEventBus'

import { useNotiContext } from '../composables/useNotiContext'

import type { NotiOptions } from '../types'
import AtomicProgress from './AtomicProgress.vue'

export interface Notification extends NotiOptions {
  id: number | string | symbol

  /**
   * Time left (in milliseconds)
   */
  lastTime: number

  /**
   * end count down timestamp
   */
  endCountDownTimestamp: number
}

export type NotificationList = Notification[]

const { options: initialOptions } = useNotiContext()
const { inc: countIncrease } = useCounter(1)

const queue = ref<NotificationList>([])

/**
 * Time per frame rendered (in milliseconds)
 */
const MS_PER_FRAME = 1000 / 60

function publishEvent(options: NotiOptions) {
  const item: Notification = {
    ...initialOptions,
    ...options,
    lastTime: 0,
    endCountDownTimestamp: 0,
    id: countIncrease(),
  }

  item.lastTime = item.duration!
  item.endCountDownTimestamp = item.duration! + Date.now()

  queue.value.push(item)

  const target = queue.value.find(i => i.id === item.id)

  if (!target)
    return

  const { id, endCountDownTimestamp } = item

  const interval = setInterval(() => {
    const lastTime = endCountDownTimestamp - Date.now()
    if (lastTime > 0) {
      target.lastTime = lastTime
    }
    else {
      target.lastTime = 0
      queue.value = queue.value.filter(item => item.id !== id)
      clearInterval(interval)
    }
  }, MS_PER_FRAME)
}

const bus = useEventBus()
bus.on(publishEvent)
</script>

<template>
  <div class="vue3-noti">
    <div class="vue3-noti__container">
      <div v-for="item in queue" :key="item.id" class="vue3-noti-group">
        {{ item.message }}
        <!-- id: {{ item.id }} -->
        last: {{ item.lastTime }}
        <AtomicProgress :value="item.lastTime" :max="item.duration" />
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
