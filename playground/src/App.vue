<script setup lang="ts">
import { ref } from 'vue'
import { Noti, useNoti } from '@vue3-noti/core'
import '@vue3-noti/core/style.css'

const string = ref('')

useNoti()
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
    <Noti v-model:test="string" />
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
</style>
