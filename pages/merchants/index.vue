<template>
  <div class="merchant">
    <h3 class="title !text-xl !mt-5">
      {{ currentMerchant }}
    </h3>
    <div class="flex items-center gap-3 mt-6">
      <Select
        v-model="selected1"
        :options="values1"
        optionLabel="name"
        rounded
        size="large"
        placeholder="Filters"
        class="w-full md:w-56 !bg-[#0000000D] !border-none !text-[#191a1c] !rounded-full"
      >
        <template #dropdownicon>
          <SvgoIconFilter class="!w-3 !h-2.5" color="#191a1c" />
        </template>
      </Select>
      <Select
        v-model="selected2"
        :options="values2"
        optionLabel="name"
        rounded
        size="large"
        placeholder="Sort By: Newest First"
        class="w-full md:w-56 !bg-[#0000000D] !border-none !text-[#191a1c] !rounded-full"
      >
        <template #dropdownicon>
          <SvgoIconArrow class="!w-3 !h-2.5" color="#191a1c" />
        </template>
      </Select>
    </div>
    <div class="grid grid-cols-1 gap-10 mt-8 pb-10">
      <div
        class="merchantCard"
        v-for="i in 6"
        :key="i"
        @click="navigateTo(`/merchants/${i}`)"
      >
        <div class="picture relative">
          <div class="discount absolute top-4 right-4">20%</div>
        </div>
        <div class="content">
          <h6>A sea change in supplements</h6>
          <div class="boxes gap-3 !mt-4">
            <div class="box"></div>
            <p>Company name</p>
          </div>
          <p>
            Made from ethically extracted algae oil, NothingFishy supplements
            offer...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import Select from "primevue/select";
import { useTgWebAppStore } from "~/store/tgWebApp";
definePageMeta({
  middleware: "auth",
  layout: "main",
});
const tgStore = useTgWebAppStore();
const selected1 = ref();
const selected2 = ref();
const values2 = ref([
  { name: "Closest to Office location", code: "NY" },
  { name: "Closest to my current location", code: "RM" },
  { name: "Best offer", code: "LDN" },
  { name: "Most popular", code: "IST" },
  { name: "Newest First", code: "PRS" },
]);
const values1 = ref([
  { name: "Rated 4+", code: "NY" },
  { name: "Price High", code: "RM" },
  { name: "Price Low", code: "LDN" },
  { name: "In 2 km", code: "IST" },
]);
const route = useRoute();

const currentMerchant = computed(() => route.query.merchant);

onMounted(() => {
  tgStore.setGeo();
});
</script>
<style lang="scss">
.merchant {
  .p-select-label {
    color: #191a1c !important;
    font-size: 12px !important;
  }

  .p-select-overlay {
    background: #0000000d !important;
  }
}
</style>