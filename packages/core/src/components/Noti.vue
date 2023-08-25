<script setup lang="ts">
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'

import type { NotiOptions } from '../types'

export type NotificationList = (NotiOptions & { id: symbol })[]

export interface NotiProps {
  test: string
}

defineProps<NotiProps>()

const [open] = useToggle(true)

const notificationList = ref<NotificationList>([])
</script>

<template>
  <div v-show="open" class="vue3-noti-group">
    Noti
    <div v-for="noti in notificationList" :key="noti.id" class="vue3-noti-group__item">
      message
    </div>
  </div>
</template>

<style>
.vue3-noti-group {
  position: fixed;
  font-size: 32px;
}

.vue3-noti-group__item {

}
</style>
