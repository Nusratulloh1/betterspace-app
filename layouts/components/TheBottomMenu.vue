<template>
  <div class="bottomMenu">
    <div class="menus">
      <NuxtLink to="/">
        <SvgoIconHome class="w-7 h-7" />
        {{ t("main.home") }}
      </NuxtLink>
      <a href="#" class="relative" @click="showQr">
        <div
          class="bg-[#272727] !w-11 !h-11 absolute top-[-15px] rounded-full flex items-center justify-center pt-2 !text-white"
        >
          <SvgoIconBenefit class="!fill-white !w-5 !h-5"></SvgoIconBenefit>
        </div>
        <span class="mt-8"> {{ t("main.take_benefit") }} </span>
      </a>
      <NuxtLink to="/expenses">
        <SvgoIconExpense class="w-7 h-7" />
        {{ t("main.expenses") }}
      </NuxtLink>
    </div>
  </div>
  <ScanQr v-if="showScan" @result="handleScanResult" />
  <Dialog
    v-model:visible="visibleModal"
    header=" "
    modal
    :style="{ width: '21rem' }"
  >
    <successStartForm @submit="submitForm" />
  </Dialog>
</template>
<script lang="ts" setup>
import { ScanQr, useWebAppQrScanner } from "vue-tg";
import { computed, ref } from "vue";
import { useTgWebAppStore } from "~/store/tgWebApp";
import successStartForm from "~/components/forms/qrSuccessForm.vue";
import { useI18n } from "vue-i18n";
const tgStore = useTgWebAppStore();
const WebAppQrScanner = useWebAppQrScanner();
const qrResult = computed(() => tgStore.qrResult);
const visibleModal = ref(false);
const showScan = ref(false);
const showQr = () => {
  showScan.value = true;
};
const { t, locale } = useI18n();
WebAppQrScanner.onScanQrPopupClosed((val: any) => {
  showScan.value = false;
  // visibleModal.value = true
});
const handleScanResult = async (res: any) => {
  tgStore.qrResult = res;
  showScan.value = false;
  setTimeout(() => {
    visibleModal.value = true;
  }, 1000);
};
const submitForm = (data: any) => {
  console.log(data);
};
</script>
<style lang="scss" scoped>
.bottomMenu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(22.5572509765625px);
  background: #ffffff;
  padding: 18px 22px 12px;

  .menus {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Poppins;
      font-size: 14.05px;
      font-weight: 500;
      line-height: 17.07px;
      color: #8c8c8c;
      text-decoration: none;

      svg {
        width: 20px;
        height: 20px;
        fill: #525252;
        margin-bottom: 6px;
      }

      &.router-link-active {
        font-weight: 600;
        color: #272727 !important;

        svg {
          fill: #272727;
        }
      }
    }
  }
}
</style>