<template>
  <div class="phone-form">
    <h4 class="title">EXPERIENCE A NEW WAY OF COMPANY BENEFITS</h4>
    <form @submit.prevent="handleSubmit" novalidate class="!mt-24">
      <div class="flex flex-col pb-10">
        <label class="mb-1" for="password">Password</label>
        <Password v-model="form.password" toggleMask @blur="validatePassword">
          <!-- <template #header>
            <div class="font-semibold text-xm mb-4">Pick a password</div>
          </template> -->
          <!-- <template #footer>
            <Divider />
            <ul class="pl-2 ml-2 my-0 leading-normal">
              <li>At least one lowercase letter</li>
              <li>At least one uppercase letter</li>
              <li>At least one number</li>
              <li>Minimum 8 characters</li>
            </ul>
          </template> -->
        </Password>
        <small v-if="errors.password" class="p-error">{{
          errors.password
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
import Password from "primevue/password";
import Divider from "primevue/divider";
import { MainButton } from "vue-tg";

// Form state
const form = ref({
  password: "",
});

const errors = ref({
  password: "",
});

const emit = defineEmits(["next"]);

// Validation rules for password
const validatePassword = () => {
  const password = form.value.password;
  let isValid = true;
  errors.value.password = "";

  // Check for lowercase, uppercase, numeric characters, and length
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isAtLeast8Chars = password.length >= 8;

  if (!isAtLeast8Chars) {
    errors.value.password = "Password must be at least 8 characters long";
    isValid = false;
  } else if (!hasLowercase) {
    errors.value.password =
      "Password must contain at least one lowercase letter";
    isValid = false;
  } else if (!hasUppercase) {
    errors.value.password =
      "Password must contain at least one uppercase letter";
    isValid = false;
  } else if (!hasNumber) {
    errors.value.password = "Password must contain at least one number";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (validatePassword()) {
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
  