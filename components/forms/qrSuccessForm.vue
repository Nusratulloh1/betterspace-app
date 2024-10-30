<template>
  <div class="text-center">
    <img
      class="w-1/2 !mx-auto"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Akfa-group-logo.svg/512px-Akfa-group-logo.svg.png?20240219062927"
      alt=""
    />
    <h4>
      {{ t("main.benefit_successfully_used") }}
    </h4>
    <div class="flex justify-center my-5">
      <Rating class="large mx-auto" v-model="form.rate" />
    </div>
    <p>{{ t("main.help_coworkers_find") }}</p>
    <Button
      :label="t(`main.submit`)"
      size="large"
      class="!w-full !mt-6"
      type="submit"
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const form = reactive({
  rate: 1,
});
</script>
<style lang="scss" scoped>
h4 {
  font-family: Roboto;
  color: #0a0f16;
  font-size: 16.69px;
  font-weight: 500;
  line-height: 20.92px;
}

p {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 12.46px;
  color: #a7a7a7;
}
</style>