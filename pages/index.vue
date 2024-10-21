<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <div>
    <h1>Protected Page</h1>
    <!-- Your page content here -->
  </div>
</template>