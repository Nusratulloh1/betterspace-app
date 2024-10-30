<template>
  <h4>
    {{ t("main.tell_us_features") }}
  </h4>
  <form @submit.prevent="handleSubmit" novalidate>
    <Textarea class="!w-full" v-model="form.message" rows="5" cols="30" />
    <Button class="!w-full !mt-5" size="large" type="submit" :label="t(`main.submit`)" />
  </form>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const form = reactive({
  message: "",
});

const handleSubmit = () => {};
</script>
<style lang="scss" scoped>
h4 {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 20.46px;
  text-align: center;
  margin-bottom: 20px;
  color: #000000;
}
</style>