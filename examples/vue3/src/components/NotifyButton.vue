<script setup lang="ts">
import { useNoti } from '@vue3-noti/core'

const { notify } = useNoti()

function sendMessage() {
  notify({
    message: 'Hi Noti',
    type: 'warning',
    position: 'bottom-right',
    duration: 3000,
    hoverPause: true,
    closeOnClick: true,
    showProgressBar: true,
  })
}
</script>

<template>
  <button
    type="button"
    class="notify-button"
    @click="sendMessage"
  >
    Fire Noti
  </button>
</template>

<style>
.notify-button {
  cursor: pointer;
  background-color: #4CAF50;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  font-size: 16px;
}
</style>
