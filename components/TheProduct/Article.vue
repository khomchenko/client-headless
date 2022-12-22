<template>
  <div class="section section--product-article" v-if="props.data">
    <div class="container">
      <div class="section--product-article__inner">
        <img
          :src="`${getByReferenceName(props.data, 'image')?.url}`"
          :alt="`${getByReferenceName(props.data, 'image')?.description}`"
          class="section--product-article__image"
          v-if="getByReferenceName(props.data, 'image') !== null"
        />
        <div class="section--product-article__info">
          <img
            :src="`${getByReferenceName(props.data, 'info_image')?.url}`"
            :alt="`${
              getByReferenceName(props.data, 'info_image')?.description
            }`"
            class="section--product-article__info__image"
            v-if="getByReferenceName(props.data, 'info_image') !== null"
          />
          <div
            class="section--product-article__info__text"
            v-html="getByReferenceName(props.data, 'info_text')"
            v-if="getByReferenceName(props.data, 'info_text')"
          />
          <div
            class="section--product-article__info__text"
            v-else>
              <h2 v-text="getByReferenceName(props.data, 'title')"></h2>
              <br />
              <p v-text="getByReferenceName(props.data, 'text')"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.section--product-article {
  display: flex;
  padding: 50px 0;

  @media only screen and (max-width: 865px) {
    padding: 30px 0 0 0;
  }

  &__inner {
    display: flex;
    align-items: flex-start;
    height: 760px;

    @media only screen and (max-width: 1420px) {
      align-items: unset;
      height: inherit;
    }

    @media only screen and (max-width: 865px) {
      flex-direction: column;
    }
  }

  &__image {
    max-width: 702px;
    width: 100%;
    height: inherit;
    object-fit: cover;

    @media only screen and (max-width: 1420px) {
      max-width: 50%;
    }

    @media only screen and (max-width: 865px) {
      max-width: 100%;
      height: 380px;
      margin-bottom: 30px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 672px;
    width: 100%;
    height: inherit;
    background: #f2f5f7;
    color: $color-black;
    padding: 100px 117px;

    @media only screen and (max-width: 1420px) {
      max-width: 50%;
      padding: 50px;
    }

    @media only screen and (max-width: 865px) {
      background: transparent;
      max-width: 100%;
      padding: 0;
    }

    &__image {
      height: 42px;
      object-fit: cover;
      margin-bottom: 30px;
    }

    &__text {
      h3 {
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
      }

      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
      }

      a {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-decoration: underline;
        color: $color-black;
        transition: all 0.3s ease;

        &:hover {
          color: #01a3ec;
        }
      }
    }
  }
}
</style>
