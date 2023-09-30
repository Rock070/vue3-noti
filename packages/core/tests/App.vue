<script setup lang="ts">
import Noti from '../src/components/Noti.vue'
import { useNoti } from '../src'

const { notify } = useNoti()

function onClick() {
  notify({
    message: 'Hello Noti Test',
  })
}
</script>

<template>
  <div>
    <Noti />
    <button type="button" @click="onClick">
      Click
    </button>
  </div>
</template>
