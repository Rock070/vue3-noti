<script setup lang="ts">
import { computed, ref } from 'vue'

import { useNoti } from '@vue3-noti/core'

import type { NotiOptions } from '@vue3-noti/core'

const options = ref<NotiOptions>({
  message: 'I\'m a Noti',
  duration: 5e3,
  hoverPause: true,
  showProgressBar: true,

  closeOnClick: true,
  position: 'bottom-right',
  type: 'success',
})

const durationSecond = computed(() => {
  if (options.value.duration === undefined)
    return 0

  return options.value.duration / 1000
})

const noti = useNoti()
</script>

<template>
  <div>
    <AppHeader />
    <main class="playground">
      <h1> Vue3-Noti </h1>
      <button
        type="button"
        class="noti-button"
        @click="noti(options)"
      >
        Fire Notify!
      </button>
      <div class="control-panel">
        <!-- message -->
        <div class="field-group">
          <label for="message">message: </label>
          <input id="message" v-model="options.message" type="text">
        </div>

        <div class="field-group">
          <!-- duration -->
          <label for="duration">duration(ms): </label>
          <input id="duration" v-model="options.duration" type="range" min="1000" max="20000" step="100">
          {{ durationSecond }} s
        </div>

        <div class="field-group">
          <!-- showProgressBar -->
          <label for="showProgressBar">showProgressBar: </label>
          <input id="showProgressBar" v-model="options.showProgressBar" type="checkbox">
        </div>

        <div class="field-group">
          <!-- hoverPause -->
          <label for="hoverPause">hoverPause: </label>
          <input id="hoverPause" v-model="options.hoverPause" type="checkbox">
        </div>

        <div class="field-group">
          <!-- closeOnClick -->
          <label for="closeOnClick">closeOnClick: </label>
          <input id="closeOnClick" v-model="options.closeOnClick" type="checkbox">
        </div>
        <div />
        <div class="radio-group">
          <!-- position -->
          <div class="field-group">
            <label for="position-top-right">top-right: </label>
            <input id="position-top-right" v-model="options.position" value="top-right" name="position" type="radio">
          </div>
          <div class="field-group">
            <label for="position-top-left">top-left: </label>
            <input id="position-top-left" v-model="options.position" value="top-left" name="position" type="radio">
          </div>
          <div class="field-group">
            <label for="position-bottom-right">bottom-right: </label>
            <input id="position-bottom-right" v-model="options.position" value="bottom-right" name="position" type="radio">
          </div>
          <div class="field-group">
            <label for="position-bottom-left">bottom-left: </label>
            <input id="position-bottom-left" v-model="options.position" value="bottom-left" name="position" type="radio">
          </div>
          <div class="field-group">
            <label for="position-middle-top">middle-top: </label>
            <input id="position-middle-top" v-model="options.position" value="middle-top" name="position" type="radio">
          </div>
          <div class="field-group">
            <label for="position-middle-bottom">middle-bottom: </label>
            <input id="position-middle-bottom" v-model="options.position" value="middle-bottom" name="position" type="radio">
          </div>
        </div>

        <div class="radio-group">
          <!-- type -->
          <div class="field-group">
            <label for="type-success">success: </label>
            <input id="type-success" v-model="options.type" value="success" name="type" type="radio">
          </div>
          <div class="field-group">
            <label for="type-info">info: </label>
            <input id="type-info" v-model="options.type" value="info" name="type" type="radio">
          </div>
          <div class="field-group">
            <label for="type-warning">warning: </label>
            <input id="type-warning" v-model="options.type" value="warning" name="type" type="radio">
          </div>
          <div class="field-group">
            <label for="type-error">error: </label>
            <input id="type-error" v-model="options.type" value="error" name="type" type="radio">
          </div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style>
.playground {
  @apply flex flex-col;
  @apply items-center;
  @apply leading-6;

  @apply h-screen;
}

.playground h1 {
  @apply text-3xl;
  @apply font-bold;
  @apply mt-4;
  @apply mb-10;
}

.playground input {
  @apply border;
  @apply border-gray-300;
  @apply rounded-md;
  @apply px-1;
  @apply py-[1px];
}

.playground .noti-button {
  @apply rounded-md;
  @apply border;
  @apply border-gray-300;
  @apply py-2 px-4;
  @apply text-base font-medium;
  @apply transition duration-150 ease-in-out;
  @apply hover:scale-105;
  @apply mb-2;
}

.playground .control-panel {
  @apply grid;
  @apply gap-4;
  @apply grid-cols-2;
}

.playground .field-group {
  @apply flex;
  @apply justify-start;
  @apply items-center;
  @apply gap-x-4;
  @apply my-4;
}

.playground .radio-group {
  @apply border border-gray-300;
  @apply px-4;
  @apply col-span-2;
  @apply grid;
  @apply gap-4;
  @apply grid-cols-3;

}

.playground label {
  @apply cursor-pointer
}
</style>
