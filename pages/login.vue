<template>
  <div class="container !px-9 !pt-6 auth">
    <boarding v-if="currentStep == 3" />
    <template v-else>
      <header>
        <nav class="flex items-center justify-between">
          <LogoIcon class="w-full max-w-[156px]" />
          <LangDropdown />
        </nav>
        <h4
          class="font-semibold text-lg mt-4 text-black"
          v-if="tgStore.webAppData.initDataUnsafe"
        >
          Welcome {{ tgStore.webAppData.initDataUnsafe.user?.first_name }}
          {{ tgStore.webAppData.initDataUnsafe.user?.last_name }}
        </h4>
      </header>
      <div v-if="currentStep === 1">
        <PhoneForm @next="currentStep = 2" @share="phoneShare" />
      </div>
      <div v-else-if="currentStep == 2">
        <PasswordForm @next="submitForm" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import LogoIcon from "~/components/LogoIcon.vue";
import eng from "~/assets/images/icons/eng.svg";
import rus from "~/assets/images/icons/rus.svg";
import LangDropdown from "~/components/LangDropdown.vue";
import PhoneForm from "~/components/auth/PhoneForm.vue";
import PasswordForm from "~/components/auth/PasswordForm.vue";
import boarding from "~/components/auth/boarding.vue";
import { useTgWebAppStore } from "~/store/tgWebApp";
import { useUserStore } from "~/store/user";
// Define the DropdownOption type
type DropdownOption = {
  label: string;
  key: string;
  icon: any;
};
const tgStore = useTgWebAppStore();
const userStore = useUserStore();
// Define available language options with labels and icons
const options: DropdownOption[] = [
  {
    label: "English",
    key: "eng",
    icon: eng,
  },
  {
    label: "Русский",
    key: "rus",
    icon: rus,
  },
];
const currentStep = ref(1);
// Current selected language
const currentLang = ref(options[0]);
onMounted(() => {
  if (userStore.isLoggedIn) {
    navigateTo("/");
  }
});
// Handle language selection
const handleSelect = (key: string) => {
  const selectedLang = options.find((option) => option.key === key);
  if (selectedLang) {
    currentLang.value = selectedLang;
    console.log("Language changed to:", selectedLang);
  }
};
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

<style lang="scss" >
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
