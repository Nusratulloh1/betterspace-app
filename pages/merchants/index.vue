<template>
  <div class="merchant">
    <h3 class="title !text-xl !mt-5">
      {{ currentMerchant }}
    </h3>
    <div class="flex items-center gap-3 mt-6">
      <Select v-model="selected1" :options="values1" optionLabel="name" rounded size="large" placeholder="Filters"
        class="w-full md:w-56 !bg-[#0000000D] !border-none !text-[#191a1c] !rounded-full">
        <template #dropdownicon>
          <svg width="14" height="8" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.45099 15.4411H14.3529V12.9902H9.45099V15.4411ZM0.872559 0.73526V3.18624H22.9314V0.73526H0.872559ZM4.54903 9.31369H19.2549V6.86271H4.54903V9.31369Z"
              fill="black" />
          </svg>
        </template>
      </Select>
      <Select v-model="selected2" :options="values2" optionLabel="name" rounded size="large"
        placeholder="Sort By: Newest First"
        class="w-full md:w-56 !bg-[#0000000D] !border-none !text-[#191a1c] !rounded-full">
        <template #dropdownicon>
          <svg width="12" height="6" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.63981 0.909088L8.26481 6.52183L13.8898 0.909088L15.6177 2.63703L8.26481 9.98997L0.911865 2.63703L2.63981 0.909088Z"
              fill="black" />
          </svg>
        </template>
      </Select>
    </div>
    <div class="grid grid-cols-1 gap-10 mt-8 pb-10">
      <div class="merchantCard" v-for="i in 6" :key="i" @click="navigateTo(`/merchants/${i}`)">
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