<template>
  <div>
    <div class="dropdown-container z-50">
      <div class="dropdown-trigger" @click="toggleDropdown">
        <img width="33" :src="currentLang.icon" alt="language" class="icon" />
        <SvgoIconArrow class="!w-2 !h-1.5 !m-0" color="#000000" />
      </div>
      <transition name="fade">
        <div v-if="isOpen" class="dropdown-options">
          <div
            v-for="option in options"
            :key="option.key"
            @click="handleSelect(option.key)"
            class="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 text-black"
          >
            <img :src="option.icon" alt="language" class="icon" />
            <span>{{ option.label }}</span>
          </div>
        </div>
      </transition>
    </div>
    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed top-0 left-0 w-full h-full"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import eng from "~/assets/images/lang/eng.png";
import rus from "~/assets/images/lang/rus.png";

type DropdownOption = {
  label: string;
  key: string;
  icon: string;
};
const { locale } = useI18n();
const options: DropdownOption[] = [
  {
    label: "Русский",
    key: "ru",
    icon: rus,
  },
  {
    label: "English",
    key: "en",
    icon: eng,
  },
];

const currentLang = ref(options[0]);
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleSelect = (key: string) => {
  const selectedLang: DropdownOption | undefined = options.find(
    (option) => option.key === key
  );
  if (selectedLang) {
    currentLang.value = selectedLang;
    localStorage.setItem("lang", selectedLang.key);
    isOpen.value = false;
    window.location.reload();
  }
};
onMounted(() => {
  const index = options.findIndex((x: DropdownOption) => x.key == locale.value);
  currentLang.value = options[index];
});
</script>

<style lang="scss" scoped>
.dropdown-container {
  position: relative;

  .dropdown-trigger {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 6px;
  }

  .dropdown-options {
    position: absolute;
    top: 100%;
    margin-top: 5px;
    left: -30px;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .icon {
    width: 20px;
    height: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>