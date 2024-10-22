<template>
  <div class="mx-auto w-full max-w-xl bg-white">
    <!-- {{ useTgWebAppStore().userData }}
    {{ useTgWebAppStore().initDataUnsafe }} -->
    <n-config-provider :theme-overrides="themeOverrides">
      <n-scrollbar style="max-height: 100vh">
        <NuxtPage />
      </n-scrollbar>
    </n-config-provider>
    <ClosingConfirmation />
    <!-- <ExpandedViewport /> -->
  </div>
</template>
<script  setup>
import { ClosingConfirmation } from "vue-tg";
import { useTgWebAppStore } from "./store/tgWebApp";
import Loading from "~/components/Loading.vue";
useTgWebAppStore().init();

const themeOverrides = {
  common: {
    primaryColor: "#000000",
    errorColor: "#F44336",
    successColor: "#19c665",
  },
  Input: {},
  Scrollbar: {
    width: "0px",
    railInsetHorizontal: "4px 4px 4px auto",
    borderRadius: 0,
  },
};
</script>