<template>
  <Head v-if="props.data">
    <Title>{{ getByReferenceName(props.data, "title") }}</Title>
    <Meta
      name="description"
      :content="`${getByReferenceName(props.data, 'description')}`"
    />
  </Head>
</template>

<script lang="ts" setup>
import { getByReferenceName } from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldState } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldState>,
  },
});
</script>
