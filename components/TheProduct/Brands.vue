<template>
  <div class="section section--product-brands" v-if="props.data">
    <div
      class="container"
      v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
    >
      <div class="section--product-brands__inner">
        <template
          v-for="item in getRepeaterByReferenceName(props.data, 'list')"
        >
          <img
            :src="`${getByReferenceName(item, 'image')?.url}`"
            :alt="`${getByReferenceName(item, 'image')?.description}`"
            class="section--product-brands__image"
            v-if="getByReferenceName(item, 'image') !== null"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getByReferenceName,
  getRepeaterByReferenceName,
} from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});
</script>

<style lang="scss">
.section--product-brands {
  display: flex;
  padding: 50px 0;

  @media only screen and (max-width: 865px) {
    padding: 12px 0;
  }

  &__inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 560px) {
      justify-content: space-between;
    }
  }

  &__image {
    display: flex;
    max-width: 186px;
    width: 100%;
    height: 68px;
    object-fit: contain;
    margin: 0 20px;

    @media only screen and (max-width: 1420px) {
      margin: 12px 20px;
    }

    @media only screen and (max-width: 560px) {
      max-width: 50%;
      margin: 0;
      margin-bottom: 24px;
    }

    &:first-child {
      margin-bottom: 80px;

      @media only screen and (max-width: 1420px) {
        margin-bottom: 12px;
      }

      @media only screen and (max-width: 560px) {
        margin: 0;
        margin-bottom: 24px;
      }
    }

    &:nth-last-child(1),
    &:nth-last-child(2) {
      @media only screen and (max-width: 560px) {
        margin: 0;
      }
    }
  }
}
</style>
