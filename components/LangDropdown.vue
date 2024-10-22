<template>
  <div>
    <div class="dropdown-container z-50">
      <div class="dropdown-trigger" @click="toggleDropdown">
        <img width="33" :src="currentLang.icon" alt="language" class="icon" />
        <svg
          width="9"
          height="4"
          viewBox="0 0 13 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.81165 0.99915C0.860989 0.949756 0.919581 0.910571 0.984073 0.883836C1.04857 0.857102 1.11769 0.843342 1.18751 0.843342C1.25732 0.843342 1.32645 0.857102 1.39095 0.883836C1.45544 0.910571 1.51403 0.949756 1.56337 0.99915L6.50001 5.93645L11.4367 0.99915C11.5363 0.899466 11.6715 0.843463 11.8125 0.843463C11.9535 0.843463 12.0887 0.899466 12.1884 0.99915C12.2881 1.09883 12.3441 1.23403 12.3441 1.37501C12.3441 1.51598 12.2881 1.65118 12.1884 1.75087L6.87587 7.06337C6.82653 7.11276 6.76794 7.15195 6.70345 7.17868C6.63895 7.20542 6.56982 7.21918 6.50001 7.21918C6.4302 7.21918 6.36107 7.20542 6.29657 7.17868C6.23208 7.15195 6.17349 7.11276 6.12415 7.06337L0.81165 1.75087C0.762256 1.70153 0.723071 1.64294 0.696337 1.57845C0.669602 1.51395 0.655842 1.44482 0.655842 1.37501C0.655842 1.30519 0.669602 1.23606 0.696337 1.17157C0.723071 1.10708 0.762256 1.04849 0.81165 0.99915Z"
            fill="black"
          />
        </svg>
      </div>
      <transition name="fade">
        <div v-if="isOpen" class="dropdown-options">
          <div
            v-for="option in options"
            :key="option.key"
            @click="handleSelect(option.key)"
            class="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
          >
            <img :src="option.icon" alt="language" class="icon" />
            <span>{{ option.label }}</span>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="isOpen" @click="isOpen = false" class="fixed top-0 left-0 w-full h-full"></div>
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";
import eng from "~/assets/images/icons/eng.svg";
import rus from "~/assets/images/icons/rus.svg";

// Define the DropdownOption type
type DropdownOption = {
  label: string;
  key: string;
  icon: string; // Use string for image paths
};

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

// Current selected language
const currentLang = ref(options[0]);
const isOpen = ref(false);

// Toggle dropdown visibility
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Handle language selection
const handleSelect = (key: string) => {
  const selectedLang = options.find((option) => option.key === key);
  if (selectedLang) {
    currentLang.value = selectedLang;
    console.log("Language changed to:", selectedLang);
    isOpen.value = false; // Close dropdown after selection
  }
};
</script>
  
  <style scoped>
.dropdown-container {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 6px;
}

.icon {
  width: 20px;
  height: 20px;
}

.dropdown-options {
  position: absolute;
  top: 100%;
  margin-top: 5px;
  left: -30px;
  background-color: white;
  border: 1px solid #e5e7eb; /* Tailwind gray-200 */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
  