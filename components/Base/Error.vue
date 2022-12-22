<template>
  <div class="error">
    <h1>Page Not Found</h1>
    <p>Ah, the dreaded 404. Let's find a better place for you to go.</p>
    <button class="btn btn--primary" @click="handleError">HAKI Home</button>
  </div>
</template>

<script lang="ts" setup>
const handleError = () => clearError({ redirect: "/" });
</script>
