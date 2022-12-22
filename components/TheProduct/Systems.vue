<template>
  <div class="section section--product-systems" v-if="props.data">
    <div class="container">
      <h5
        class="section--product-systems__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h5>
      <div
        class="section--product-systems__wrap"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <template
          v-for="item in getRepeaterByReferenceName(props.data, 'list')"
        >
          <NuxtLink
            :to="`${getByReferenceName(item, 'link')}`"
            class="section--product-systems__item"
            v-if="getByReferenceName(item, 'link') !== null"
          >
            <img
              :src="`${getByReferenceName(item, 'image')?.url}`"
              :alt="`${getByReferenceName(item, 'image')?.description}`"
              v-if="getByReferenceName(item, 'image') !== null"
              class="section--product-systems__item__image"
            />
            <h5
              class="section--product-systems__item__title"
              v-if="getByReferenceName(item, 'title') !== null"
            >
              {{ getByReferenceName(item, "title") }}
            </h5>
          </NuxtLink>
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
.section--product-systems {
  display: flex;
  padding: 50px 0 100px 0;

  @media only screen and (max-width: 865px) {
    padding: 30px 0 20px 0;
  }

  &__title {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.01em;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 30px;

    @media only screen and (max-width: 865px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
    }
  }

  &__wrap {
    display: grid;
    grid-template-columns: repeat(4, 320px);
    grid-template-rows: repeat(3, 204px);
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    @media only screen and (max-width: 1420px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 1120px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 865px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 100px);
      grid-column-gap: 12px;
      grid-row-gap: 16px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background: transparent;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #01a3ec;

      .section--product-systems__item__title {
        color: $color-white;
      }
    }

    &__image {
      width: 100%;
      max-height: 42px;
      object-fit: contain;

      @media only screen and (max-width: 865px) {
        height: 20px;
      }
    }

    &__title {
      font-weight: normal;
      font-size: 14px;
      letter-spacing: 0.01em;
      line-height: 16px;
      color: $color-black;
      text-align: center;
      margin-top: 10px;
      transition: all 0.3s ease;

      @media only screen and (max-width: 520px) {
        display: none;
      }
    }
  }
}
</style>
