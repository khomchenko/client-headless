<template>
  <div class="section section--product-videos" v-if="props.data">
    <div class="container">
      <h3
        class="section--product-videos__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h3>
      <div
        class="section--product-videos__inner"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <div
          class="section--product-videos__item"
          v-for="item in getRepeaterByReferenceName(props.data, 'list')"
        >
          <NuxtLink
            :to="`${getByReferenceName(item, 'link')}`"
            class="section--product-videos__item__video"
            v-if="getByReferenceName(item, 'link') !== null"
          >
            <img
              :src="`${getByReferenceName(item, 'image')?.url}`"
              :alt="`${getByReferenceName(item, 'image')?.description}`"
              v-if="getByReferenceName(item, 'image') !== null"
            />
          </NuxtLink>
          <h5
            class="section--product-videos__item__title"
            v-if="getByReferenceName(item, 'title') !== null"
          >
            {{ getByReferenceName(item, "title") }}
          </h5>
        </div>
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
.section--product-videos {
  display: flex;
  padding: 50px 0;

  @media only screen and (max-width: 865px) {
    padding-bottom: 10px;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.01em;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 30px;

    @media only screen and (max-width: 865px) {
      margin-bottom: 10px;
    }
  }

  &__inner {
    display: flex;

    @media only screen and (max-width: 865px) {
      flex-wrap: wrap;
    }
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
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:last-child {
      margin-right: 0;
    }

    &__video {
      display: flex;
      background: #7b7c7d;
      width: 100%;
      height: 228px;
      position: relative;
      margin-bottom: 10px;
      cursor: pointer;

      &::after {
        content: url(/assets/images/play.svg);
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__title {
      font-weight: normal;
      font-size: 18px;
      letter-spacing: 0.01em;
      line-height: 24px;

      @media only screen and (max-width: 865px) {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
}
</style>
