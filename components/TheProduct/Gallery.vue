<template>
  <div class="section section--product-gallery" v-if="props.data">
    <div class="container">
      <div class="section--product-gallery__inner">
        <div
          class="section--product-gallery__slider"
          v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
        >
          <TheProductThumbsSlider
            :data="getRepeaterByReferenceName(props.data, 'list')"
          />
        </div>
        <div class="section--product-gallery__info">
          <div
            class="section--product-gallery__info__text"
            v-html="getByReferenceName(props.data, 'text')"
            v-if="getByReferenceName(props.data, 'text') !== null"
          ></div>
          <NuxtLink
            :to="`${getByReferenceName(props.data, 'link')}`"
            class="btn btn--primary mt-30"
            v-if="getByReferenceName(props.data, 'link') !== null"
          >
            {{ getByReferenceName(props.data, "link_text") }}
          </NuxtLink>
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
.section--product-gallery {
  display: flex;
  padding-top: 18px;

  @media only screen and (max-width: 865px) {
    padding-top: 0;

    .swiper-button-prev {
      display: none;
    }
  }

  &__inner {
    display: flex;

    @media only screen and (max-width: 865px) {
      flex-direction: column;
    }
  }

  &__slider {
    display: flex;
    flex-direction: column;
    max-width: 672px;
    width: 100%;
    height: fit-content;
    margin-right: 30px;
    position: relative;

    @media only screen and (max-width: 1220px) {
      max-width: 55%;
      padding: 0;
    }

    @media only screen and (max-width: 865px) {
      max-width: 100%;
      margin-bottom: 36px;
    }

    .top-swiper {
      width: 100%;
      height: 440px;

      @media only screen and (max-width: 865px) {
        height: 190px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .thumbs-swiper {
      width: 100%;
      height: 68px;
      padding: 0 0 0 50px;
      margin-top: 10px;

      @media only screen and (max-width: 865px) {
        height: 75px;
        padding: 0 4px 0 0;
      }

      .slide {
        opacity: 1;

        &:not(.swiper-slide-thumb-active) {
          opacity: 0.4;
        }

        width: 104px !important;

        @media only screen and (max-width: 1220px) {
          width: 84px !important;
        }
      }

      img {
        width: 104px;
        height: inherit;
        object-fit: cover;

        @media only screen and (max-width: 1220px) {
          width: 84px;
        }

        @media only screen and (max-width: 865px) {
          min-width: 75px;
          width: 100%;
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 68px;
      border-radius: 3px;
      background: $color-black;
      top: unset;
      bottom: 0;
      left: 0;
      transition: all 0.3s ease;
      pointer-events: all;

      @media only screen and (max-width: 865px) {
        height: 75px;
      }

      &::after {
        font-weight: normal;
        font-size: 14px;
        line-height: 27px;
        color: $color-white;
        transition: all 0.3s ease;
      }

      &.swiper-button-disabled {
        background: #f2f5f7;
        opacity: 1;

        &::after {
          color: #023a52;
        }
      }
    }

    .swiper-button-next {
      right: 0;
      left: unset;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    max-width: 672px;
    width: 100%;
    padding: 0 50px;
    color: $color-black;

    @media only screen and (max-width: 1220px) {
      max-width: 45%;
      padding: 0;
    }

    @media only screen and (max-width: 865px) {
      max-width: 100%;

      .btn {
        max-width: 100%;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;

      h2 {
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        margin-bottom: 30px;

        @media only screen and (max-width: 865px) {
          font-size: 24px;
          line-height: 30px;
          margin-bottom: 20px;
        }
      }

      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 32px;

        @media only screen and (max-width: 865px) {
          margin-bottom: 20px;
        }
      }

      a {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: $color-black;
        margin-bottom: 32px;
        transition: all 0.3s ease;

        @media only screen and (max-width: 865px) {
          font-weight: normal;
          margin-bottom: -10px;
        }

        &:hover {
          color: #01a3ec;
        }
      }
    }
  }
}
</style>
