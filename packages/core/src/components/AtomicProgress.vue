<script setup lang="ts">
interface AtomicProgressProps {
  /**
   * progress value
   */
  value?: number

  /**
   * max value
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

.vue3-noti__progress::-webkit-progress-bar {
  background-color: var(--vue3-noti-progress-color);
}

.vue3-noti__progress::-webkit-progress-value {
  background-color: var(--vue3-noti-progress-color);
  filter: contrast(105%) brightness(150%);
}
</style>
