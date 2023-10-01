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
  />
</template>

<style>
.vue3-noti__progress {
  position: absolute;

  width: 100%;
  height: 4px;

  border-radius: 10px;

  inset-block-end: 0;
  inset-inline-start: -1px;
  overflow: hidden;
}

.vue3-noti__progress::-webkit-progress-bar {
  background-color: var(--vue3-noti-progress-color);
}

.vue3-noti__progress::-webkit-progress-value {
  background-color: hsla(0,0%,100%,.7);
}
</style>
