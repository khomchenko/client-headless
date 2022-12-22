<template>
  <div
    :class="[
      'section section--product-hero',
      {
        'section--product-hero-small': getByReferenceName(
          props.data,
          'is_small'
        ),
      },
    ]"
    v-if="props.data"
  >
    <img
      :src="`${getByReferenceName(props.data, 'image')?.url}`"
      :alt="`${getByReferenceName(props.data, 'image')?.description}`"
      v-if="getByReferenceName(props.data, 'image') !== null"
      class="section--product-hero__image"
    />
    <div
      class="section--product-hero__logo"
      v-if="getByReferenceName(props.data, 'logo_name') !== null"
    >
      <img src="@/assets/images/hero-logo.svg" alt="Hero Logo" />
      <p>{{ getByReferenceName(props.data, "logo_name") }}</p>
    </div>
    <h5
      class="section--product-hero__sub-title"
      v-if="getByReferenceName(props.data, 'subtitle') !== null"
    >
      {{ getByReferenceName(props.data, "subtitle") }}
    </h5>
    <div
      :class="[
        'section--product-hero__title',
        {
          'tt-up': getByReferenceName(props.data, 'title_uppercase'),
        },
      ]"
      v-if="getByReferenceName(props.data, 'title') !== null"
      v-html="getByReferenceName(props.data, 'title')"
    />
  </div>
</template>

<script lang="ts" setup>
import { getByReferenceName } from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup, FieldState } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});
</script>

<style lang="scss">
.section--product-hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #7b7c7d;
  color: $color-white;
  height: 600px;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 865px) {
    height: 265px;
  }

  &-small {
    height: 450px;

    @media only screen and (max-width: 865px) {
      height: 265px;
    }
  }

  &__image {
    max-width: 100%;
    width: 100%;
    height: inherit;
    object-fit: cover;
    position: absolute;
    z-index: 1;
  }

  &__logo {
    display: flex;
    align-items: baseline;
    margin: 0 auto 30px auto;
    z-index: 2;

    @media only screen and (max-width: 865px) {
      margin: 0 auto 5px auto;
    }

    img {
      margin-right: 10px;

      @media only screen and (max-width: 865px) {
        height: 24px;
        margin-right: 5px;
      }
    }

    p {
      font-weight: bold;
      font-size: 61px;
      letter-spacing: 0.01em;
      line-height: 71px;
      text-transform: uppercase;

      @media only screen and (max-width: 865px) {
        font-size: 21px;
        line-height: 26px;
      }
    }
  }

  &__sub-title {
    font-weight: 900;
    font-size: 20px;
    letter-spacing: 0.01em;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    z-index: 2;

    @media only screen and (max-width: 865px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 5px;
    }

    & + .section--product-hero__title {
      text-transform: inherit;
      font-weight: bold;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;

    @media only screen and (max-width: 865px) {
      max-width: 100%;
    }

    &.tt-up {
      h1 {
        text-transform: uppercase;
      }
    }

    h1 {
      font-weight: 900;
      font-size: 80px;
      line-height: 94px;
      text-align: center;

      @media only screen and (max-width: 865px) {
        font-size: 30px;
        line-height: 35px;
      }
    }

    strong {
      font-weight: bold;
    }

    .featured-text {
      color: #eeea6a;
    }
  }
}
</style>
