<script setup>
const { notify } = useNoti()

function handleNoti() {
  notify()
}
</script>

<template>
  <div>
    <button
      type="button"
      class="notify-button"
      @click="handleNoti"
    >
      Fire Noti
    </button>
  </div>
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
