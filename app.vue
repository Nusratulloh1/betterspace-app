<template>
  <div class="mx-auto w-full max-w-xl">
    <ScrollPanel
      style="width: 100%; height: 100vh"
      :dt="{
        bar: {
          background: 'transparent',
        },
      }"
    >
      <!-- <h4 class="text-black">
        {{ useTgWebAppStore().webAppData?.version }}
      </h4> -->
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ScrollPanel>
    <ClosingConfirmation />
    <!-- <ExpandedViewport /> -->
  </div>
</template>
<script  setup>
import { ClosingConfirmation } from "vue-tg";
import { useTgWebAppStore } from "./store/tgWebApp";
import Loading from "~/components/Loading.vue";
useTgWebAppStore().init();
</script>