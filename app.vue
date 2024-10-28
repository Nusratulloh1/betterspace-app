<template>
  <div class="mx-auto w-full max-w-xl">
    <ScrollPanel style="width: 100%; height: 100vh" :dt="{
      bar: {
        background: 'transparent',
      },
    }">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ScrollPanel>
    <ClosingConfirmation />
    <ExpandedViewport />
  </div>
</template>
<script setup>
import { ClosingConfirmation, ExpandedViewport } from "vue-tg";
import { useTgWebAppStore } from "./store/tgWebApp";
useTgWebAppStore().init();
</script>