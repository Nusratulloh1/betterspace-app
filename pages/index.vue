<template>
  <div class="main">
    <h5 class="title !text-center !text-3xl !mt-16">
      {{ t("main.focus_on") }}
    </h5>
    <InputGroup class="mt-6 !rounded-2xl">
      <InputText
        size="large"
        class="!bg-[#FFFFFF] !border-none"
        :placeholder="t(`main.search_for_nutrition`)"
        v-model="value1"
        @keyup.enter="submitSearch"
      />
      <Button
        @click="submitSearch"
        class="!bg-[#FFFFFF] text-[#B2B5B8] !border-none"
        icon="pi pi-search"
      />
    </InputGroup>
    <div class="flex">
      <Button
        @click="feedbackModal = true"
        class="!bg-[#FFFFFF] !shadow-sm !mx-auto mt-6 !text-[#6D6D6D] !rounded-[12px]"
        text
        :label="t(`main.not_find_anything`)"
      >
        <template #icon>
          <SvgoIconHeart class="!w-5 !h-5" />
        </template>
      </Button>
    </div>
    <div class="grid grid-cols-1 gap-10 mt-12 pb-10">
      <div class="merchantCard" v-for="i in 6" :key="i">
        <div class="picture"></div>
        <div class="content">
          <h6>{{ t(`main.everything`) }}</h6>
          <p>{{ t(`main.target_every_aspect`) }}</p>
          <div class="boxes">
            <div class="box" v-for="i in 6" :key="i"></div>
          </div>
        </div>
      </div>
    </div>
    <Dialog
      v-model:visible="feedbackModal"
      header=" "
      modal
      :style="{ width: '25rem' }"
    >
      <feedbackForm />
    </Dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import feedbackForm from "~/components/forms/feedbackForm.vue";
definePageMeta({
  middleware: "auth",
  layout: "main",
});

const feedbackModal = ref(false);

const submitSearch = () => {
  navigateTo(`/merchants?merchant=${value1.value}`);
};

const value1 = ref("");
</script>
<style lang="scss">
.main {
  .p-inputtext {
    color: black;
    font-size: 14px;

    &::placeholder {
      color: #b2b5b8 !important;
      font-size: 14px;
    }
  }

  .p-button-icon {
    color: #b2b5b8 !important;
  }
}

.merchantCard {
  box-shadow: 0px 0px 32.78px 0px #0000000a;
  background: #ffffff;
  border-radius: 22px;
  width: 100%;
  overflow: hidden;

  .picture {
    background: #bbbec2;
    width: 100%;
    height: 130px;
  }

  .content {
    padding: 22px 16px;

    h6 {
      font-family: "Roboto";
      font-size: 18px;
      font-weight: 500;
      line-height: 16px;
      color: #0a0f16;
    }

    p {
      font-family: Roboto;
      font-size: 12px;
      font-weight: 400;
      line-height: 17px;
      color: #a7a7a7;
      margin-top: 6px;
    }

    .boxes {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 24px;

      .box {
        border: 1.46px solid #e4e4e4;
        width: 35.85px;
        height: 35.85px;
        border-radius: 12px;
      }
    }
  }
}
</style>