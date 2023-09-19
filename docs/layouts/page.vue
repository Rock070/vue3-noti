<script setup lang="ts">
//
</script>

<template>
  <div>
    <AppHeader />
    <main
      class="
        px-5 pt-5 pb-16 lg:px-8 lg:pt-5 lg:pb-20
        flex flex-col items-center
      "
    >
      <article>
        <slot />
      </article>
    </main>
    <AppFooter />
  </div>
</template>
