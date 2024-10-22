<template>
  <div>
    <header>
      <nav class="flex items-center justify-between">
        <LogoIcon class="w-full max-w-[156px]" />
      </nav>
    </header>
    <section>
      <h4 class="title">Last step! Tell us what you’re interested in</h4>
      <div class="grid gap-8 mt-10 pb-10">
        <div
          class="card transition-all"
          :class="{ selected: item.selected }"
          v-for="item in items"
          :key="item.val"
          @click="item.selected = !item.selected"
        >
          <h5>Nutrition</h5>
          <p>Eating a healthy, balanced diet gives you more energy</p>
        </div>
      </div>
    </section>
    <MainButton @click="handleSubmit" color="#000000" text="Finish" />
  </div>
</template>
  <script lang="ts" setup>
import { MainButton } from "vue-tg";
import { ref } from "vue";
import { useUserStore } from "~/store/user";
import LogoIcon from "~/components/LogoIcon.vue";
const userStore = useUserStore();
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
  <style lang="scss">
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