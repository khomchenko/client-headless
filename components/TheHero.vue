<template>
  <div
    class="section section--hero"
    v-if="
      props.data !== undefined &&
      getRepeaterByReferenceName(props.data, 'list')?.length > 0
    "
  >
    <swiper
      :pagination="{ clickable: true }"
      :modules="[Pagination, Autoplay]"
      :autoplay="autoplayOptions"
      class="section--hero__slider"
    >
      <template v-for="item in getRepeaterByReferenceName(props.data, 'list')">
        <swiper-slide>
          <div
            class="section--hero__slider__slide"
            :style="`background-image: url(${
              getByReferenceName(item, 'background_image').url
            })`"
            v-if="getByReferenceName(item, 'background_image') !== null"
          >
            <div class="container">
              <div
                class="section--hero__slider__slide__title"
                v-html="getByReferenceName(item, 'title')"
                v-if="getByReferenceName(item, 'title') !== null"
              />
              <NuxtLink
                :to="`${getByReferenceName(item, 'link')}`"
                class="section--hero__slider__slide__link"
                v-if="getByReferenceName(item, 'link') !== null"
              >
                <span v-if="getByReferenceName(item, 'link_text') !== null">
                  {{ getByReferenceName(item, "link_text") }}
                </span>
                <img src="@/assets/images/arrow-right.svg" alt="Arrow" />
              </NuxtLink>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import {
  getRepeaterByReferenceName,
  getByReferenceName,
} from "@/helpers/persistenceStorage";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import { AutoplayOptions } from 'swiper/types';
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});

const autoplayOptions: AutoplayOptions = {
  delay: 4000,
  pauseOnMouseEnter: false,
  disableOnInteraction: false,
  stopOnLastSlide: false
};
</script>

<style lang="scss">
.section--hero {
  display: flex;
  position: relative;

  &::after {
    content: url(/assets/images/symbol.svg);
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 310px;
    height: 539px;
    pointer-events: none;

    @media only screen and (max-width: 1140px) {
      content: url(/assets/images/symbol-small.svg);
      bottom: 45px;
      height: 235px;
    }
  }

  &__slider {
    display: flex;
    flex-direction: column;
    position: relative;

    &__slide {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 630px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      margin: 30px 30px 85px 35px;

      @media only screen and (max-width: 1140px) {
        justify-content: flex-start;
        height: 468px;
        margin: 20px 20px 78px 20px;

        .container {
          width: calc(100% - 40px);
        }
      }

      &__title {
        font-weight: 900;
        font-size: 60px;
        letter-spacing: 0.01em;
        line-height: 60px;
        text-transform: uppercase;
        max-width: 784px;
        width: 100%;
        color: $color-white;
        margin: 0 0 20px 234px;

        @media only screen and (max-width: 1560px) {
          margin: 0 0 20px 335px;
        }

        @media only screen and (max-width: 1140px) {
          font-size: 30px;
          letter-spacing: 0.01em;
          line-height: 30px;
          margin: 78px 0 12px 0;
        }

        h1,
        h3 {
          font-weight: 900;
        }

        .featured-text {
          color: #eeea6a;
        }
      }

      &__link {
        display: flex;
        align-items: center;
        width: fit-content;
        text-decoration: none;
        color: $color-white;
        margin: 0 0 85px 234px;
        @include heading-primary;

        @media only screen and (max-width: 1560px) {
          margin: 0 0 85px 335px;
        }

        @media only screen and (max-width: 1140px) {
          margin: 0 0 15px 0;
        }

        &:hover {
          img {
            transform: translateX(5px);
          }
        }

        span {
          margin-right: 5px;
        }

        img {
          width: 12px;
          height: 14px;
          transition: all 0.3s ease;
        }
      }
    }

    .swiper-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      position: absolute;
      left: 50%;
      bottom: 30px;
      transform: translateX(-50%);
      z-index: 10;

      @media only screen and (max-width: 1140px) {
        bottom: 0;
      }

      &-bullet {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10px;
        height: 10px;
        background: #023a52;
        border: 2px solid transparent;
        border-radius: 100%;
        margin-right: 20px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }

        &-active {
          width: 30px;
          height: 30px;
          background: transparent;
          border: 2px solid #0299e9;
          margin-right: 10px;
          margin-left: -10px;
          position: relative;

          &::after {
            content: "";
            display: flex;
            width: 10px;
            height: 10px;
            background: #023a52;
            border-radius: 100%;
          }
        }
      }
    }
  }
}
</style>
