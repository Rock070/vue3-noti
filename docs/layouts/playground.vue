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

const { notify, closeAll } = useNoti()
</script>

<template>
  <div>
    <AppHeader />
    <main class="playground">
      <h1 class="sr-only">
        Vue3-Noti
      </h1>
      <h2>
        Clickable Button
      </h2>
      <div class="sticky top-20 z-10 grid grid-cols-2 gap-x-3">
        <button
          type="button"
          class="noti-button"
          @click="notify(options)"
        >
          Fire Notify
        </button>
        <button
          type="button"
          class="noti-button"
          @click="closeAll"
        >
          Clear All
        </button>
      </div>
      <h2>
        Live Code
      </h2>
      <div class="w-full">
        <ProsePre language="js" filename="vue3-noti.vue">
          import { useNoti } from '@vue3-noti/core';
          <br>
          const noti = useNoti();
          <br>
          noti({{ options }})
        </ProsePre>
      </div>

      <h2>
        Options
      </h2>
      <div class="playground__container">
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
        </div>

        <div class="radio-group">
          <!-- position -->
          <div class="field-group">
            <label for="position-top-left">top-left: </label>
            <input id="position-top-left" v-model="options.position" value="top-left" name="position" type="radio">
          </div>
          <div class="field-group">
            <label for="position-top-middle">top-middle: </label>
            <input id="position-top-middle" v-model="options.position" value="top-middle" name="position" type="radio">
          </div>
          <div class="field-group">
            <label for="position-top-right">top-right: </label>
            <input id="position-top-right" v-model="options.position" value="top-right" name="position" type="radio">
          </div>

          <div class="field-group">
            <label for="position-bottom-left">bottom-left: </label>
            <input id="position-bottom-left" v-model="options.position" value="bottom-left" name="position" type="radio">
          </div>
          <div class="field-group">
            <label for="position-bottom-middle">bottom-middle: </label>
            <input id="position-bottom-middle" v-model="options.position" value="bottom-middle" name="position" type="radio">
          </div>
          <div class="field-group">
            <label for="position-bottom-right">bottom-right: </label>
            <input id="position-bottom-right" v-model="options.position" value="bottom-right" name="position" type="radio">
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
  @apply relative;
  @apply py-10;
  @apply px-4;
  @apply flex flex-col;
  @apply items-center;
  @apply leading-6;
  @apply min-h-screen;

  @apply md:px-10;
}

.playground h1 {
  @apply text-3xl;
  @apply font-bold;
  @apply mt-4;
  @apply mb-10;
}
.playground h2 {
  @apply text-left;
  @apply w-full;
  @apply text-xl;
  @apply font-bold
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
  @apply touch-manipulation;
  @apply py-2 px-4;
  @apply text-base font-medium;
  @apply transition duration-150 ease-in-out;
  @apply hover:scale-105;
  @apply bg-[--docus-body-backgroundColor]
}

.playground .playground__container {
  @apply w-full;
  @apply space-y-4;
}

.playground .control-panel {
  @apply w-full;
  @apply flex flex-col;
  @apply gap-1;
  @apply px-4;

  @apply md:grid;
  @apply md:grid-cols-2;

  @apply lg:gap-4;
  @apply lg:grid-cols-3;
}

.playground .field-group {
  @apply flex;
  @apply justify-start;
  @apply items-center;
  @apply gap-x-2;
  @apply my-2;

  @apply md:my-4;
  @apply md:gap-x-4;
}

.playground .radio-group {
  @apply border border-gray-300;
  @apply w-full;
  @apply px-4;
  @apply col-span-2;
  @apply grid;
  @apply gap-1;

  @apply grid-cols-2;

  @apply md:gap-4;
  @apply md:grid-cols-3;

}

.playground label {
  @apply cursor-pointer
}
</style>
