<template>
  <NuxtLink
    :to="`${getByReferenceName(props.data, 'link')}`"
    class="notification"
    v-if="props.data && getByReferenceName(props.data, 'link')"
  >
    <p
      class="notification__title"
      v-if="getByReferenceName(props.data, 'text')"
    >
      {{ getByReferenceName(props.data, "text") }}
    </p>
    <img
      src="@/assets/images/arrow-right.svg"
      alt="Arrow"
      class="notification__icon"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
import { getByReferenceName } from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});
</script>

<style lang="scss">
.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #01a3ec;
  color: $color-white;
  padding: 4px 0;

  &:hover {
    .notification__icon {
      transform: translateX(8px);
    }
  }

  &__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
  }

  &__icon {
    width: 12px;
    height: 14px;
    margin-left: 10px;
    transition: all 0.3s ease;
  }
}
</style>
