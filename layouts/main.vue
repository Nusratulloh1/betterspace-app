<template>
  <div class="container !px-5 !pt-7">
    <TheHeader />
    <main class="pb-20">
      <slot />
    </main>
    <TheBottomMenu />
  </div>
</template>
<script lang="ts" setup>
import TheBottomMenu from "./components/TheBottomMenu.vue";
import TheHeader from "./components/TheHeader.vue";
</script>
<style lang="scss" scoped></style>