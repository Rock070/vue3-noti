<script setup lang="ts">
//
</script>

<template>
  <AppHeader />

  <DocsPageLayout>
    <div class="inline-block mb-6 lg:mb-10">
      <div class="post">
        <slot />
      </div>
    </div>
  </DocsPageLayout>
  <AppFooter />
</template>
