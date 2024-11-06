<template>
  <div class="container !px-9 !pt-6 auth">
    <header>
      <nav class="flex items-center justify-between">
        <LogoIcon class="w-full max-w-[156px]" />
        <LangDropdown v-if="currentStep !== 3" />
      </nav>
      <h4
        class="font-semibold text-lg mt-4 text-black"
        v-if="tgStore.webAppData.initDataUnsafe"
      >
        {{ t("auth.welcome") }}
        {{ tgStore.webAppData.initDataUnsafe.user?.first_name }}
        {{ tgStore.webAppData.initDataUnsafe.user?.last_name }}
      </h4>
    </header>
    <div v-if="currentStep == 1">
      <PhoneForm @next="currentStep = 2" @share="phoneShare" />
    </div>
    <div v-else-if="currentStep == 2">
      <PasswordForm @next="submitForm" />
    </div>
    <boarding v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import LogoIcon from "~/components/LogoIcon.vue";
import LangDropdown from "~/components/auth/LangDropdown.vue";
import PhoneForm from "~/components/forms/phoneForm.vue";
import PasswordForm from "~/components/forms/passwordForm.vue";
import boarding from "~/components/auth/boarding.vue";
import { useTgWebAppStore } from "~/store/tgWebApp";
import { useUserStore } from "~/store/user";
import { useI18n } from "vue-i18n";

const tgStore = useTgWebAppStore();
const userStore = useUserStore();
const { t } = useI18n();
const currentStep = ref(2);
onMounted(() => {
  if (userStore.isLoggedIn) {
    navigateTo("/");
  }
});
const phoneShare = () => {
  tgStore
    .setUserData()
    .then((res) => (currentStep.value = res === false ? 1 : 2));
};
const submitForm = async () => {
  // await userStore.login();
  currentStep.value = 3;
};
</script>

<style lang="scss">
.auth {
  label {
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    // line-height: 19.84px;
    color: #7d7d7d;
  }

  input {
    background: #00000008;
    width: 100%;
    height: 48px;
    border-radius: 21.26px;
    line-height: 48px;
    color: #212529;
    border: none;
  }
}
</style>
