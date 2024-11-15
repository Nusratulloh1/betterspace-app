<template>
  <header>
    <nav class="flex items-center justify-between">
      <button class="bg-white py-1.5 px-4 rounded-xl  shadow-sm border-none h-12">
        <SvgoIconProfil class="!w-[24px] !h-[24px] !fill-black !stroke-black" color="black" />
      </button>
      <div
        class="bg-black flex flex-col justify-center items-center gap-0.5 py-1.5 px-4 rounded-xl h-12"
      >
        <small class="text-[#909090]">{{ t("main.saved") }}</small>
        <strong class="!font-semibold text-sm text-white"> $15,000 </strong>
      </div>
    </nav>
    <button
      v-if="currentRoute !== 'index'"
      @click="$router.go(-1)"
      class="mt-6 bg-[#0000000D] border-none rounded-xl pt-3 pb-2 px-3"
    >
      <SvgoIconBack class="!w-5 !h-5" />
    </button>
  </header>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
const route = useRoute();
const { t } = useI18n();

const currentRoute = computed(() => route.name);
</script>