<script setup lang="ts">
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'

import type { NotiOptions } from '../types'

export type NotificationList = (NotiOptions & { id: symbol })[]

export interface NotiProps {
  test: string
}

defineProps<NotiProps>()

const [open] = useToggle(false)

const notificationList = ref<NotificationList>([])
</script>

<template>
  <div v-show="open" class="vue3-noti-group">
    <div v-for="noti in notificationList" :key="noti.id" class="vue3-noti-group__item">
      message
    </div>
  </div>
</template>

<!-- <style lang="css">
.vue3-noti-group {
  //
}
.vue3-noti-group__item {
  //
}
</style> -->
