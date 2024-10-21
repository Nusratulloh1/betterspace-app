<template>
  <div class="container !px-11 !pt-6">
    <header>
      <nav class="flex items-center justify-between">
        <LogoIcon class="w-full max-w-[166px]" />
        <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <n-button type="primary">Eng</n-button>
        </n-dropdown>
      </nav>
    </header>
    <h4 class="title">EXPERIENCE A NEW WAY OF COMPANY BENEFITS</h4>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/store/user";
import { MainButton } from "vue-tg";
import LogoIcon from "~/components/LogoIcon.vue";
const userStore = useUserStore();

const handleLogin = () => {
  // Perform login logic here, e.g., API call to validate credentials
  userStore.login();
  navigateTo("/"); // Redirect to a protected route after login
};

const options: any = [
  {
    label: "Eng",
    key: "atlantis nahamas, nassau",
  },
  {
    label: "Rus",
    key: "the beverly hills hotel, los angeles",
  },
];
const handleSelect = (key: string | number) => {
  // message.info(String(key));
};
</script>

<style lang="scss" scoped>
.title {
  font-family: Onest;
  font-size: 24px;
  font-weight: 800;
  line-height: 29px;
  text-align: left;
  color: #212529;
  margin-top: 24px;
}
</style>
