<template>
  <div class="container !px-5 !pt-7">
    <header>
      <nav class="flex items-center justify-between">
        <button
          class="bg-white pt-2 pb-1 px-3 rounded-2xl shadow-sm border-none"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_31_2770)">
              <path
                d="M13.7966 16.3057C9.31444 16.3057 5.6665 12.6578 5.6665 8.17561C5.6665 3.69347 9.31444 0.0455322 13.7966 0.0455322C18.2787 0.0455322 21.9267 3.69347 21.9267 8.17561C21.9267 12.6578 18.2787 16.3057 13.7966 16.3057ZM13.7966 2.16642C10.488 2.16642 7.78739 4.86703 7.78739 8.17561C7.78739 11.4842 10.488 14.1848 13.7966 14.1848C17.1052 14.1848 19.8058 11.4842 19.8058 8.17561C19.8058 4.86703 17.1052 2.16642 13.7966 2.16642Z"
                fill="#292D32"
              />
              <path
                d="M25.9426 30.4449C25.3627 30.4449 24.8821 29.9643 24.8821 29.3844C24.8821 24.5064 19.905 20.5474 13.7969 20.5474C7.68873 20.5474 2.71171 24.5064 2.71171 29.3844C2.71171 29.9643 2.23098 30.4449 1.65127 30.4449C1.07156 30.4449 0.59082 29.9643 0.59082 29.3844C0.59082 23.3471 6.51517 18.4265 13.7969 18.4265C21.0786 18.4265 27.003 23.3471 27.003 29.3844C27.003 29.9643 26.5223 30.4449 25.9426 30.4449Z"
                fill="#292D32"
              />
            </g>
            <defs>
              <clipPath id="clip0_31_2770">
                <rect
                  width="26.5909"
                  height="31.9091"
                  fill="white"
                  transform="translate(0.59082 0.0454407)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div
          class="bg-black flex flex-col justify-center items-center gap-0.5 py-1.5 px-4 rounded-xl"
        >
          <small class="text-[#909090]">Saved</small>
          <strong class="!font-semibold text-sm"> $15,000 </strong>
        </div>
      </nav>
      <button
        v-if="currentRoute !== 'index'"
        @click="$router.go(-1)"
        class="mt-6 bg-[#0000000D] border-none rounded-xl pt-3 pb-2 px-3"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6111 7.92382H4.51149L10.5285 1.90681L9.00003 0.389099L0.388916 9.00021L9.00003 17.6113L10.5177 16.0936L4.51149 10.0766H17.6111V7.92382Z"
            fill="black"
          />
        </svg>
      </button>
    </header>
    <main class="pb-20">
      <slot />
    </main>
    <bottom-menu></bottom-menu>
  </div>
</template>
<script lang="ts" setup>
import bottomMenu from "./components/bottom-menu.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const currentRoute = computed(() => route.name);
</script>
  <style lang="scss" scoped>
</style>