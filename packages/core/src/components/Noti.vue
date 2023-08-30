<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useToggle, watchImmediate } from '@vueuse/core'
import { useNoti } from '../composables/useNoti'
import useEventBus from '../composables/useEventBus'
import type { NotiOptions } from '../types'

export type NotificationList = (NotiOptions & { id: symbol })[]

export interface NotiProps {
  test: string
}

defineProps<NotiProps>()

const noti = useNoti()

if (!noti)
  console.warn('useNoti is not provided')

const [open, toggleOpen] = useToggle(false)

const options = reactive({
  message: '',
  duration: 1000,
})
const message = ref('')
const duration = ref(1000)

function publishEvent(options: NotiOptions) {
  message.value = options.message
  duration.value = options.duration
  toggleOpen(true)
}

const bus = useEventBus()
bus.on(publishEvent)

function resetOptions() {
  options.message = ''
  options.duration = 1000
}

watchImmediate(
  open,
  (val) => {
    if (!val)
      return

    setTimeout(() => {
      toggleOpen(false)
      resetOptions()
    }, duration.value)
  })
</script>

<template>
  <div class="vue3-noti">
    <div v-if="open" class="vue3-noti-group">
      {{ message }}
      <!-- <div v-for="no in notificationList" :key="no.id" class="vue3-noti-group__item">
        message
      </div> -->
    </div>
  </div>
</template>

<style>
.vue3-noti .vue3-noti-group {
  position: fixed;
  bottom: 16px;
  right: 16px;
  font-size: 32px;
  background-color: chartreuse;
  color: black;
  border-radius: 12px;
  padding: 10px 20px
}

.vue3-noti-group__item {

}
</style>
