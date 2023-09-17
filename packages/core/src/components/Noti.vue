<script setup lang="ts">
import { ref } from 'vue'

import { useCounter } from '@vueuse/core'

import useEventBus from '../composables/useEventBus'

import { useNotiContext } from '../composables/useNotiContext'

import type { NotiGroup, NotiOptions, Notification } from '../types'
import { MS_PER_FRAME, POSITION_LIST } from '../constant'
import AtomicProgress from './AtomicProgress.vue'

export type NotificationList = Notification[]

const { options: initialOptions } = useNotiContext()
const { inc: countIncrease } = useCounter(1)

const groupMap = ref<NotiGroup>({
  'top-right': [],
  'top-left': [],
  'bottom-right': [],
  'bottom-left': [],
  'middle-top': [],
  'middle-bottom': [],
})

function clearCountDown(timer: NodeJS.Timeout) {
  clearInterval(timer)
}

function closeNoti(val: Notification) {
  if (val.timer.intervalID !== undefined)
    clearCountDown(val.timer.intervalID)

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

function publishEvent(options: NotiOptions) {
  const item = makeNoti(options)

  const belongGroup = findBelongGroup(item)
  if (!belongGroup) {
    console.warn('Noti: Invalid position')
    return
  }

  belongGroup.push(item)

  const target = belongGroup.find(i => i.id === item.id)

  if (!target)
    return

  triggerCountDown(target)
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
  removeNotiFromGroup(val)
}

const bus = useEventBus()
bus.on(publishEvent)
</script>

<template>
  <div class="vue3-noti">
    <template
      v-for="(group, position) in groupMap"
      :key="position"
    >
      <div
        v-if="group.length > 0"
        class="vue3-noti-group"
        :class="[`vue3-noti-group--${position}`]"
      >
        <div
          v-for="item in group"
          :key="item.id"
          class="vue3-noti-group__item"
          :class="[`vue3-noti-group-item--${item.type}`]"
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
    </template>
  </div>
</template>

<style>
:root {
  --padding: 16px;

  --success-color: #74F246;
  --success-text-color: black;

  --info-color: #3585F2;
  --info-text-color: white;

  --warning-color: #E8D943;
  --warning-text-color: white;

  --error-color: #ED4D4C;
  --error-text-color: white;

  --progress-bg-color: black;
  --progress-value-color: #fdd;
}

.vue3-noti .vue3-noti-group {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--padding);
  z-index: 9999;
}

.vue3-noti .vue3-noti-group--top-right {
  top: var(--padding);
  right: var(--padding);
}

.vue3-noti .vue3-noti-group--top-left {
  top: var(--padding);
  left: var(--padding);
}

.vue3-noti .vue3-noti-group--bottom-right {
  bottom: var(--padding);
  right: var(--padding);
}

.vue3-noti .vue3-noti-group--bottom-left {
  bottom: var(--padding);
  left: var(--padding);
}

.vue3-noti .vue3-noti-group--middle-top {
  left: 50%;
  transform: translateX(-50%);
  top: var(--padding);
}

.vue3-noti .vue3-noti-group--middle-bottom {
  left: 50%;
  transform: translateX(-50%);
  bottom: var(--padding);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item {
  position: relative;
  font-size: 32px;
  background-color: chartreuse;
  border-radius: 12px;
  padding: 10px 20px;
  overflow: hidden;
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group-item--success {
  background-color: var(--success-color);
  color: var(--success-text-color);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group-item--info {
  background-color: var(--info-color);
  color: var(--info-text-color);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group-item--warning {
  background-color: var(--warning-color);
  color: var(--warning-text-color);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group-item--error {
  background-color: var(--error-color);
  color: var(--error-text-color);
}

.vue3-noti .vue3-noti__progress {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
