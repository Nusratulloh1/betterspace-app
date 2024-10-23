<template>
  <div class="phone-form">
    <h4 class="title">EXPERIENCE A NEW WAY OF COMPANY BENEFITS</h4>
    <form @submit.prevent="handleSubmit" novalidate class="!mt-28">
      <div class="flex flex-col">
        <label class="mb-1" for="phone">Phone Number</label>
        <InputMask
          id="phone"
          v-model="form.phone"
          mask="(99) 999-9999"
          @blur="validateForm"
          placeholder="Enter your phone: (99) 999-9999"
          :class="{ 'p-invalid': errors.phone }"
        />
        <small v-show="errors.phone !== ''" class="p-error">{{
          errors.phone
        }}</small>
      </div>

      <MainButton
        class="!mt-20"
        @click="handleSubmit"
        color="#000000"
        text="Sign Up"
      />
    </form>
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import InputMask from "primevue/inputmask";
import { MainButton } from "vue-tg";

const form = ref({
  phone: "",
});
const emit = defineEmits(["next"]);
const errors = ref({
  phone: "",
});

const validateForm = () => {
  let isValid = true;

  // Clear previous errors
  errors.value.phone = "";
  if (form.value.phone.length !== 13) {
    errors.value.phone = "Phone number must be 12 digits long";
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
  