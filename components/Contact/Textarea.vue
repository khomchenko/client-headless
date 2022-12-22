<template>
  <div class="block w-100" v-if="props.label !== null">
    <label
      :for="`${props.label?.toLowerCase().replace(/ /g, '_')}`"
      v-if="props.label !== null"
    >
      {{ props.label }}
    </label>
    <p class="info" v-if="props.info !== null">
      {{ props.info }}
    </p>
    <textarea
      :name="`${props.label?.toLowerCase().replace(/ /g, '_')}`"
      :maxlength="`${props.maxLength ? props.maxLength : 500}`"
      v-if="props.maxLength !== null"
    ></textarea>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
  },
  info: {
    type: String,
  },
  maxLength: {
    type: String,
  },
});
</script>
