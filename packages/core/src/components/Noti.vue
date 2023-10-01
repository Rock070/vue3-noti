<script setup lang="ts">
import { useNotiContext } from '../composables/useNotiContext'
import type { Notification } from '../types'
import AtomicProgress from './AtomicProgress.vue'

export type NotificationList = Notification[]

const {
  groupMap,
  onMouseEnter,
  onMouseLeave,
  onClick,
} = useNotiContext()
</script>

<template>
  <div class="vue3-noti">
    <template
      v-for="(group, position) in groupMap"
      :key="position"
    >
      <Transition
        enter-active-class="transition-custom"
        leave-active-class="leave-active"
        enter-from-class="transition-fade"
        leave-to-class="transition-fade"
      >
        <div
          v-if="group.length > 0"
          class="vue3-noti-group"
          data-test-id="vue3-noti-group"
          :class="[`vue3-noti-group--${position}`]"
        >
          <TransitionGroup
            enter-active-class="transition-custom"
            leave-active-class="leave-active"
            enter-from-class="transition-fade"
            leave-to-class="transition-fade"
            move-class="transition-custom"
          >
            <template
              v-for="item in group"
              :key="item.id"
            >
              <div
                data-test-id="vue3-noti-group__item"
                class="vue3-noti-group__item"
                :class="[`vue3-noti-group__item--${item.type}`]"
                @mouseenter="onMouseEnter(item)"
                @mouseleave="onMouseLeave(item)"
                @click="onClick(item)"
              >
                <span>
                  {{ item.message }}
                </span>
                <Transition name="default">
                  <AtomicProgress
                    v-if="item.showProgressBar"
                    :value="item.timer.lastTime"
                    :max="item.duration"
                  />
                </Transition>
              </div>
            </template>
          </TransitionGroup>
        </div>
      </Transition>
    </template>
  </div>
</template>

<style>
@import url(../assets/index.css);

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
  padding: var(--vue3-noti-group__item-padding-y) var(--vue3-noti-group__item-padding-x);
  overflow: hidden;
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group__item--success {
  background-color: var(--vue3-noti-success-color);
  color: var(--vue3-noti-success-text-color);

  --vue3-noti-progress-color: var(--vue3-noti-success-color);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group__item--info {
  background-color: var(--vue3-noti-info-color);
  color: var(--vue3-noti-info-text-color);

  --vue3-noti-progress-color: var(--vue3-noti-info-color);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group__item--warning {
  background-color: var(--vue3-noti-warning-color);
  color: var(--vue3-noti-warning-text-color);

  --vue3-noti-progress-color: var(--vue3-noti-warning-color);
}

.vue3-noti .vue3-noti-group .vue3-noti-group__item.vue3-noti-group__item--error {
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
