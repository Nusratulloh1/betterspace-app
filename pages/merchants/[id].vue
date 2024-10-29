<template>
  <div>
    <h3 class="title !text-xl !mt-5">A sea change in supplements</h3>
    <button
      class="flex items-center bg-transparent gap-2 py-2 px-4 mt-7 border border-solid border-[#00000014] rounded-xl"
    >
      <Rating v-model="value" />
      <span class="text-xs text-[#5C6165] mt-0.5"> Rated by: 25 users </span>
    </button>
    <div class="flex items-center mt-4 gap-3">
      <button
        class="flex items-center bg-transparent gap-2 py-2 px-4 border border-solid border-[#00000014] rounded-xl text-[#5C6165]"
      >
        <SvgoIconUsers class="!w-5 !h-5" />
        <span class="text-sm"> Used by: 250 users </span>
      </button>
      <button
        class="flex items-center bg-transparent gap-2 py-2 px-4 border border-solid border-[#00000014] rounded-xl"
      >
        <span class="text-sm text-[#5C6165] mt-0.5"> $$$$ </span>
      </button>
    </div>
    <div class="merchantCard !bg-transparent !shadow-none mt-8 !rounded-2xl">
      <div class="picture relative">
        <div class="discount absolute top-4 right-4">20%</div>
      </div>
      <div class="content !px-0">
        <div class="boxes flex-wrap justify-between !mt-0">
          <div class="flex items-center gap-3">
            <div class="box"></div>
            <h4 class="!text-[#5C6165] !font-normal text-xl">WalkingPad UK</h4>
          </div>
          <div class="flex items-center gap-5">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <SvgoIconInstagram />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <SvgoIconGlobe />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <SvgoIconMark />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <SvgoIconCall />
            </a>
          </div>
        </div>
        <p class="!mt-5 !text-[#5C6165]">
          With light sports and light life as the brand concept, WalkingPad
          provides a convenient solution for the fitness program at the time of
          fragmentation. We're willing to help office workers improve and
          maintain their health through light exercise with beautifully
          engineered minimalist designed product.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const value = ref(0);
definePageMeta({
  middleware: "auth",
  layout: "main",
});
</script>
<style lang="scss" scoped>
a {
  color: #5c6165;
  svg {
    width: 18px;
    height: 18px;
  }
  &:hover {
    color: black;
  }
}
</style>