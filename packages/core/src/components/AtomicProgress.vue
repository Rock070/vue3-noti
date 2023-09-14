<script setup lang="ts">
interface AtomicProgressProps {
  /**
   * 進度值
   */
  value?: number

  /**
   * 上限值
   */
  max?: number
}

withDefaults(defineProps<AtomicProgressProps>(), {
  value: 0,
  max: 100,
})
</script>

<template>
  <progress
    :value="value"
    :max="max"
    class="vue3-noti__progress"
  >
    {{ Math.floor(value / max) }}%
  </progress>
</template>

<style>
.vue3-noti__progress {
  width: 100%;
  border-radius: 10px;
  height: 4px;
  overflow: hidden;

}

.vue3-noti__progress::-webkit-progress-value {
  background-color: #0235E6
}

.vue3-noti__progress::-webkit-progress-bar {
  background: gray;
}
</style>
