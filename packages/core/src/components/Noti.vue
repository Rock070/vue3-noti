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
        <template
          v-for="item in group"
          :key="item.id"
        >
          <div
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
        </template>
      </div>
    </template>
  </div>
</template>

<style>
:root {
  --vue3-noti-success-color: #4caf50;
  --vue3-noti-success-text-color: white;

  --vue3-noti-info-color: #3585F2;
  --vue3-noti-info-text-color: white;

  --vue3-noti-warning-color: #E8D943;
  --vue3-noti-warning-text-color: white;

  --vue3-noti-error-color: #ED4D4C;
  --vue3-noti-error-text-color: white;

  --vue3-noti-group-gap: 16px;

  --vue3-noti-group-item-padding-x: 20px;
  --vue3-noti-group-item-padding-y: 14px;

  --vue3-noti-offset: 0px;
  --vue3-noti-border-radius: 0px;
  --vue3-noti-width: 100vw;

  @media screen and (width >= 640px) {
    --vue3-noti-offset: 16px;
    --vue3-noti-border-radius: 6px;
    --vue3-noti-width: 45vw;
  }

  @media screen and (width >= 768px) {
    --vue3-noti-width: 31vw;
  }
}

.vue3-noti .vue3-noti-group {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--vue3-noti-group-gap);
  z-index: 9999;
}

.vue3-noti .vue3-noti-group--top-right {
  inset-block-start: var(--vue3-noti-offset);
  inset-inline-end: var(--vue3-noti-offset);
}

.vue3-noti .vue3-noti-group--top-left {
  inset-block-start: var(--vue3-noti-offset);
  inset-inline-start: var(--vue3-noti-offset);
}

.vue3-noti .vue3-noti-group--bottom-right {
  inset-block-end: var(--vue3-noti-offset);
  inset-inline-end: var(--vue3-noti-offset);
}

.vue3-noti .vue3-noti-group--bottom-left {
  inset-block-end: var(--vue3-noti-offset);
  inset-inline-start: var(--vue3-noti-offset);
}

.vue3-noti .vue3-noti-group--top-middle {
  inset-block-start: 0;
  inset-inline-start: 0;

  @media screen and (width >= 640px) {
    inset-inline-start: 50%;
    transform: translateX(-50%);

    inset-block-start: var(--vue3-noti-offset);
  }
}

.vue3-noti .vue3-noti-group--bottom-middle {
  inset-block-end: 0;
  inset-inline-start: 0;

  @media screen and (width >= 640px) {
    inset-inline-start: 50%;
    transform: translateX(-50%);

    inset-block-end: var(--vue3-noti-offset);
  }
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item {
  position: relative;
  width: var(--vue3-noti-width);
  box-sizing: border-box;
  border-radius: var(--vue3-noti-border-radius);
  padding: var(--vue3-noti-group-item-padding-y) var(--vue3-noti-group-item-padding-x);
  overflow: hidden;
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group-item--success {
  background-color: var(--vue3-noti-success-color);
  color: var(--vue3-noti-success-text-color);

  --vue3-noti-progress-color: var(--vue3-noti-success-color);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group-item--info {
  background-color: var(--vue3-noti-info-color);
  color: var(--vue3-noti-info-text-color);

  --vue3-noti-progress-color: var(--vue3-noti-info-color);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group-item--warning {
  background-color: var(--vue3-noti-warning-color);
  color: var(--vue3-noti-warning-text-color);

  --vue3-noti-progress-color: var(--vue3-noti-warning-color);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group-item--error {
  background-color: var(--vue3-noti-error-color);
  color: var(--vue3-noti-error-text-color);

  --vue3-noti-progress-color: var(--vue3-noti-error-color);
}

.vue3-noti .vue3-noti__progress {
  position: absolute;
  inset-block-end: 0;
  inset-inline-start: -1px;
}
</style>
