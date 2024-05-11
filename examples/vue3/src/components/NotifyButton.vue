<script setup lang="ts">
import { useNoti } from '@vue3-noti/core'

const { notify } = useNoti()

function sendMessage() {
  notify({
    message: 'Hi Noti',
    type: 'success',
    position: 'top-right',
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
  padding: 20px 40px;
  border-radius: 8px;
  background-color: hsla(160, 100%, 37%, 1);;
}
</style>
