<template>
  <div class="section section--product-category" v-if="props.data">
    <div class="container">
      <h5
        class="section--product-category__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h5>
      <ul
        class="section--product-category__list"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <template
          v-for="item in getRepeaterByReferenceName(props.data, 'list')"
        >
          <li
            class="section--product-category__list__item"
            v-html="getByReferenceName(item, 'text')"
            v-if="getByReferenceName(item, 'text') !== null"
          ></li>
        </template>
      </ul>
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
.section--product-category {
  display: flex;
  padding: 50px 0;

  @media only screen and (max-width: 865px) {
    padding: 30px 0 0 0;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.01em;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 50px;

    @media only screen and (max-width: 865px) {
      margin-bottom: 26px;
    }
  }

  &__list {
    display: flex;

    @media only screen and (max-width: 865px) {
      flex-direction: column;
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 438px;
      width: 100%;
      margin-right: 30px;

      @media only screen and (max-width: 865px) {
        max-width: 100%;
        margin-right: 0;
        margin-bottom: 40px;
      }

      &:last-child {
        margin-right: 0;

        @media only screen and (max-width: 865px) {
          margin-bottom: 0;
        }
      }

      h3 {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.01em;
        line-height: 24px;
        text-transform: uppercase;
        margin-bottom: 20px;
      }

      p {
        font-weight: normal;
        font-size: 18px;
        letter-spacing: 0.01em;
        line-height: 27px;
      }
    }
  }
}
</style>
