<script setup>
import { useNoti } from '@vue3-noti/core'

const { notify } = useNoti()

function handleNoti() {
  notify()
}
</script>

<template>
  <div>
    <button type="button" class="button" @click="handleNoti">
      Noti
    </button>
  </div>
</template>

<style>
.button {
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
