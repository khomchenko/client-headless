<template>
  <div class="article__info" v-if="props.category || props.date">
    <p>
      <strong v-if="props.category">{{ props.category }}</strong>
      <strong v-if="props.date">{{ props.date }}</strong>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  category: {
    type: String,
  },
  date: {
    type: String,
  },
});
</script>
