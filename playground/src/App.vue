<script setup lang="ts">
import { ref } from 'vue'
import { Noti, useNoti } from '@vue3-noti/core'
import type { NotiOptions } from '@vue3-noti/core'
import '@vue3-noti/core/style.css'

const noti = useNoti()

const options = ref<NotiOptions>({
  message: 'Hello Noti',
  duration: 3e3,
  hoverPause: true,
  showProgressBar: true,

  closeOnClick: true,
  position: 'top-right',
  type: 'info',
})
</script>

<template>
  <div class="playground">
    <h1> Vue3-Noti </h1>
    <Noti />
    <br>
    <button
      type="button"
      class="noti-button"
      @click="noti(options)"
    >
      notify
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
        <input id="duration" v-model="options.duration" type="number" min="0">
      </div>

      <div class="field-group">
        <!-- showProgressBar -->
        <label for="showProgressBar">showProgressBar </label>
        <input id="showProgressBar" v-model="options.showProgressBar" type="checkbox">
      </div>

      <div class="field-group">
        <!-- hoverPause -->
        <label for="hoverPause">hoverPause </label>
        <input id="hoverPause" v-model="options.hoverPause" type="checkbox">
      </div>
    </div>
  </div>
</template>

<style scoped>
.playground {
  height: 100vh;
}

.noti-button {
  margin-bottom: 2em;
}

.control-panel {
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, 1fr);
}

.field-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 1em;
  margin: 1em 0;
}

label {
  cursor: pointer;
}
</style>
