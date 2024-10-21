<template>
  <div>
    <n-config-provider :theme-overrides="themeOverrides">
      <NuxtPage />
    </n-config-provider>

    <ClosingConfirmation />
    <ExpandedViewport />
  </div>
</template>
<script  setup>
import { ClosingConfirmation, ExpandedViewport } from "vue-tg";
import { useTgWebAppStore } from "./store/tgWebApp";
import Loading from "~/components/Loading.vue";
useTgWebAppStore().init();

const themeOverrides = {
  common: {
    primaryColor: "#000000",
  },
};
</script>