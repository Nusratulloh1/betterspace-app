<!-- components/Loading.vue -->
<template>
  <div class="loading-overlay" v-if="isLoading">
    <div class="loading-spinner">Loading...</div>
  </div>
</template>
  
  <script lang="ts" setup>
import { ref, defineProps } from "vue";

// Define props to control loading state from the parent component
const props = defineProps<{
  isLoading: boolean;
}>();
</script>
  
  <style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it overlays above other content */
}

.loading-spinner {
  font-size: 24px;
}
</style>
  