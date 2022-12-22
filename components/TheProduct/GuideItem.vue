<template>
  <div class="section--product-guide__item__popup__block" v-if="props.item">
    <button
      class="btn section--product-guide__item__popup__close"
      @click="closePopup($event, false, 0)"
    >
      <img src="@/assets/images/close-menu.svg" alt="Close" />
    </button>
    <video
      loop
      controls
      class="section--product-guide__item__popup__media"
      v-if="getByReferenceName(props.item, 'video_link') !== null"
    >
      <source
        :src="`${getByReferenceName(props.item, 'video_link')}`"
        type="video/mp4"
      />
    </video>
    <img
      :src="`${getByReferenceName(props.item, 'image').url}`"
      :alt="`${getByReferenceName(props.item, 'image').description}`"
      class="section--product-guide__item__popup__media"
      v-if="getByReferenceName(props.item, 'image') !== null"
    />
    <div
      class="section--product-guide__item__popup__text"
      v-html="getByReferenceName(props.item, 'text')"
      v-if="getByReferenceName(props.item, 'text') !== null"
    />
  </div>
</template>

<script lang="ts" setup>
import { getByReferenceName } from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldState } from "@/types";

const props = defineProps({
  item: {
    type: Object as PropType<FieldState>,
  },
});

const emit = defineEmits(["closePopup"]);

const closePopup = (event: Event, state: Boolean, index: number) => {
  emit("closePopup", event, state, index);
};
</script>
