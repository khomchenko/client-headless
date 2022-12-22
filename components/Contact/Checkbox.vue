<template>
  <label class="checkbox" v-if="props.text !== null">
    <input type="checkbox" />
    <span class="checkbox__mark">
      <img src="@/assets/images/check.svg" alt="Check" />
    </span>
    <p class="checkbox__text">{{ props.text }}</p>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
  },
});
</script>
