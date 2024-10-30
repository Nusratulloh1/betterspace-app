<template>
  <div class="phone-form">
    <h4 class="title">{{ t("auth.experience_new_way_of_benefits") }}</h4>
    <form @submit.prevent="handleSubmit" novalidate class="!mt-28">
      <div class="flex flex-col">
        <label class="mb-1" for="phone">{{ t(`auth.phone_number`) }}</label>
        <div class="flex">
          <InputGroup class="!rounded-lg flex !items-center">
            <small class="text-black text-base h-6 mr-2"> +998 </small>
            <InputMask
              id="phone"
              v-model="form.phone"
              mask="(99) 999-9999"
              @blur="validateForm"
              :placeholder="t(`auth.enter_your_phone_number`)"
              class="!rounded-l-2xl"
              :class="{ 'p-invalid': errors.phone }"
            />
            <Button
              @click="emit('share')"
              class="!rounded-2xl z-[9999] !ml-[-20px] !h-14"
              rounded
            >
              {{ t("auth.share") }}
            </Button>
          </InputGroup>
        </div>
        <small v-show="errors.phone !== ''" class="p-error">{{
          errors.phone
        }}</small>
      </div>

      <MainButton
        class="!mt-20"
        @click="handleSubmit"
        color="#000000"
        :text="t(`auth.sign_in`)"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import InputMask from "primevue/inputmask";
import { MainButton } from "vue-tg";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const form = ref({
  phone: "",
});
const emit = defineEmits(["next", "share"]);
const errors = ref({
  phone: "",
});

const validateForm = () => {
  let isValid = true;

  // Clear previous errors
  errors.value.phone = "";
  if (form.value.phone.length !== 13) {
    errors.value.phone = t('errors.phoneNumberError');
    isValid = false;
  } else {
    errors.value.phone = "";
    isValid = true;
  }

  return isValid;
};

const handleSubmit = () => {
  if (validateForm()) {
    emit("next");
  }
};
</script>

<style lang="scss">
.phone-form {
  max-width: 400px;
  margin: 0 auto;
}

.p-field {
  margin-bottom: 1rem;
}

.p-invalid {
  border: 1px solid red !important;
}

.p-error {
  color: red;
  margin-top: 4px;
}
</style>