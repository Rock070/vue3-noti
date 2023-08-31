<script setup lang="ts">
import { ref } from 'vue'

import { useCounter } from '@vueuse/core'
import { useNoti } from '../composables/useNoti'
import useEventBus from '../composables/useEventBus'

import { useNotiContext } from '../composables/useNotiContext'

import type { NotiOptions } from '../types'

export type NotificationList = (NotiOptions & { id: number | string | symbol })[]

export interface NotiProps {
  test: string
}

defineProps<NotiProps>()

const { options: initialOptions } = useNotiContext()
const { inc: countIncrease } = useCounter(1)

const noti = useNoti()

if (!noti)
  console.warn('[@vue3-noti/core warning] useNoti is undefined')

const queue = ref<NotificationList>([])

function publishEvent(options: NotiOptions) {
  const item = { ...initialOptions, ...options, id: countIncrease() }
  queue.value.push(item)

  const { id, duration } = item
  setTimeout(() => {
    queue.value = queue.value.filter(item => item.id !== id)
  }, duration)
}

const bus = useEventBus()
bus.on(publishEvent)
</script>

<template>
  <div class="vue3-noti">
    <div class="vue3-noti__container">
      <div v-for="item in queue" :key="item.id" class="vue3-noti-group">
        {{ item.message }} {{ item.id }}
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
  font-size: 32px;
  background-color: chartreuse;
  color: black;
  border-radius: 12px;
  padding: 10px 20px
}
</style>
