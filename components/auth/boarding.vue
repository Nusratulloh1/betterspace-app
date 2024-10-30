<template>
  <div>
    <h4 class="title">
      {{ t(`auth.last_step`) }} <br />
      {{ t(`auth.tell_us_your_interests`) }}
    </h4>
    <div class="grid gap-8 mt-10 pb-10">
      <div
        class="card transition-all"
        :class="{ selected: item.selected }"
        v-for="item in items"
        :key="item.val"
        @click="item.selected = !item.selected"
      >
        <h5>{{ t(`auth.nutrition`) }}</h5>
        <p>{{ t(`auth.eating_healthy`) }}</p>
      </div>
    </div>
    <MainButton @click="handleSubmit" color="#000000" :text="t(`auth.finish`)" />
  </div>
</template>
<script lang="ts" setup>
import { MainButton } from "vue-tg";
import { ref } from "vue";
import { useUserStore } from "~/store/user";
import { useI18n } from "vue-i18n";
const userStore = useUserStore();
const { t } = useI18n();
const items = ref([
  {
    val: 1,
    selected: false,
  },
  {
    val: 1,
    selected: false,
  },
  {
    val: 1,
    selected: false,
  },
  {
    val: 1,
    selected: false,
  },
  {
    val: 1,
    selected: false,
  },
  {
    val: 1,
    selected: false,
  },
  {
    val: 1,
    selected: false,
  },
]);
const handleSubmit = () => {
  userStore.login();
  navigateTo("/");
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  border-radius: 20.75px;
  background: #ffffff;
  box-shadow: 0px 0px 31.08px 0px #0000000a;
  padding: 20px;

  &.selected {
    border: 2px solid #0a0f16;
  }

  h5 {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 600;
    line-height: 32.59px;
    color: #0a0f16;
  }

  p {
    margin-top: 14px;
    font-family: Roboto;
    font-size: 14.42px;
    font-weight: 400;
    line-height: 18.72px;
    color: #a7a7a7;
  }
}
</style>