<script setup lang="ts">
import { Noti, useNoti } from '@vue3-noti/core'
import '@vue3-noti/core/style.css'

const noti = useNoti()
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
    <Noti />
    <div class="button-group">
      <button
        type="button"
        @click="noti({
          message: 'Last For 1 Second',
        })"
      >
        call default notify last 1 second
      </button>
      <button
        type="button"
        @click="noti({
          message: 'Last For 3 Second',
          duration: 3e3,
        })"
      >
        call custom notify last 3 second
      </button>
      <button
        type="button"
        @click="noti({
          message: 'Last For 5 Second',
          duration: 5e3,
        })"
      >
        call custom notify last 5 second
      </button>
      <button
        type="button"
        @click="noti({
          message: 'Last For 7 Second',
          duration: 7e3,
        })"
      >
        call custom notify last 7 second
      </button>
      <button
        type="button"
        @click="noti({
          message: 'Last For 10 Second',
          duration: 10e3,
        })"
      >
        call custom notify last 10 second
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  margin-top: 1em;
}
</style>
