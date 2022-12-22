<template>
  <div class="article__image" v-if="props.data">
    <img
      :src="`${props.data.url}`"
      :alt="`${props.data.description}`"
      v-if="props.data !== null"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>
