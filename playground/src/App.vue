<script setup lang="ts">
import { ref } from 'vue'
import { Noti, useNoti } from '@vue3-noti/core'
import '@vue3-noti/core/style.css'

const string = ref('')

const noti = useNoti()

function callNoti() {
  noti({
    message: 'Hello World',
    type: 'success',
  })
}

function callNoti2() {
  noti({
    duration: 5000,
    message: 'Hello World Longer',
    type: 'success',
  })
}
</script>

<template>
  <div class="playground">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <h1> Vue3-Noti </h1>
    <br>

    <br>
    <Noti v-model:test="string" />
    <div class="button-group">
      <button type="button" @click="callNoti">
        call default notify last 1 second
      </button>
      <button type="button" @click="callNoti2">
        call custom notify last 5 second
      </button>
    </div>
  </div>
</template>

<style scoped>
.playground {
  height: 100vh;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.button-group {
  display: flex;
  gap: 1em;
  margin-top: 1em;
}
</style>
