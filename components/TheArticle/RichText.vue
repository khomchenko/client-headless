<template>
  <div class="article__text" v-html="props.data" v-if="props.data" />
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: String,
  },
});
</script>
