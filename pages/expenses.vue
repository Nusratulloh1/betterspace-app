<template>
  <div class="py-24 text-center">
    <div
      class="bg-black inline-flex flex-col justify-center items-center py-3 px-8 rounded-xl"
    >
      <small class="text-[#909090] text-xl">{{ t("main.saved") }}</small>
      <strong class="!font-semibold text-lg text-white"> $15,000 </strong>
    </div>
    <h6>
      Please note that our calculations are approximate according to average
      check and discount rate of the merchant
    </h6>
    <div class="grid gap-5 mt-12">
      <div
        class="border border-black border-solid rounded-2xl overflow-hidden"
        v-for="i in 6"
        :key="i"
      >
        <div class="px-5 py-3 bg-black flex items-center justify-between">
          <div class="rounded-xl w-10 h-10 bg-white"></div>
          <p class="text-white font-semibold text-xl">$15,000</p>
        </div>
        <div class="px-5 py-4 flex items-center justify-between">
          <p class="font-semibold">Company Name</p>
          <p class="font-semibold">10.10.2010 23:23</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

definePageMeta({
  middleware: "auth",
  layout: "extra",
});
const { t } = useI18n();
</script>
<style lang="scss" scoped>
h6 {
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 29.46px;
  text-align: center;
  margin-top: 20px;
}
</style>