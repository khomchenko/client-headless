<template>
  <div class="text" v-html="props.text" v-if="props.text !== null" />
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
  },
});
</script>
