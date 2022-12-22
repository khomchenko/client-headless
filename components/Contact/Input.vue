<template>
  <div class="block" v-if="props.label !== null || props.type !== null">
    <label :for="`${props.label?.toLowerCase().replace(/ /g, '_')}`">
      {{ props.label }}
    </label>
    <input
      :type="`${props.type}`"
      :id="`${props.label?.toLowerCase().replace(/ /g, '_')}`"
      v-if="props.type !== null"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
  },
  type: {
    type: String,
  },
});
</script>
