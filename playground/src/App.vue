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
          message: '1s',
        })"
      >
        notify 1 second
      </button>
      <button
        type="button"
        @click="noti({
          message: '3s',
          duration: 3e3,
        })"
      >
        notify 3 second
      </button>
      <button
        type="button"
        @click="noti({
          message: '5s',
          duration: 5e3,
        })"
      >
        notify 5 second
      </button>
      <button
        type="button"
        @click="noti({
          message: '7s',
          duration: 7e3,
        })"
      >
        notify 7 second
      </button>
      <button
        type="button"
        @click="noti({
          message: '10s',
          duration: 10e3,
        })"
      >
        notify 10 second
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  margin-top: 1em;
}
</style>
