<template>
  <div class="phone-form">
    <h4 class="title">EXPERIENCE A NEW WAY OF COMPANY BENEFITS</h4>
    <form @submit.prevent="handleSubmit" novalidate class="!mt-24">
      <div class="flex flex-col pb-10">
        <label class="mb-1" for="password">Password</label>
        <Password v-model="form.password" toggleMask :feedback="false" @input="handleInput" @blur="validatePassword">
        </Password>
        <div class="mt-4">
          <p :class="minLengthClass" class="text-sm">Minimum 8 digits</p>
          <p :class="letterNumberClass" class="text-sm">
            Minimum 1 letter and 1 number
          </p>
        </div>
      </div>

      <MainButton class="!mt-20" @click="handleSubmit" color="#000000" text="Sign Up" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Password from "primevue/password";
import { MainButton } from "vue-tg";

// Form state
const form = ref({
  password: "",
});

const errors = ref({
  password: "",
});

const touched = ref(false);
const emit = defineEmits(["next"]);

// Password validation computed properties
const minLengthClass = computed(() => {
  if (!touched.value) return "text-default";
  return form.value.password.length >= 8 ? "text-success" : "text-danger";
});

const letterNumberClass = computed(() => {
  if (!touched.value) return "text-default";
  const hasLetter = /[a-zA-Z]/.test(form.value.password);
  const hasNumber = /[0-9]/.test(form.value.password);
  return hasLetter && hasNumber ? "text-success" : "text-danger";
});

// Trigger validation after typing
const handleInput = () => {
  touched.value = true;
};

// Validation function for form submission
const validatePassword = () => {
  const minLengthValid = form.value.password.length >= 8;
  const letterNumberValid =
    /[a-zA-Z]/.test(form.value.password) && /[0-9]/.test(form.value.password);
  return minLengthValid && letterNumberValid;
};

// Handle form submission
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

.text-danger {
  color: red;
}

.text-success {
  color: rgb(32, 209, 32);
}

.text-default {
  color: #7d7d7d;
}
</style>