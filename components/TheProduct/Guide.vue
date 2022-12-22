<template>
  <div
    :class="['section section--product-guide', { fullscreen: data.fullscreen }]"
    v-if="props.data"
  >
    <div class="container">
      <h3
        class="section--product-guide__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h3>
      <p
        class="section--product-guide__subtitle"
        v-if="getByReferenceName(props.data, 'subtitle') !== null"
      >
        {{ getByReferenceName(props.data, "subtitle") }}
      </p>
      <div
        class="section--product-guide__wrap"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <template
          v-for="(item, index) in getRepeaterByReferenceName(
            props.data,
            'list'
          )"
        >
          <div
            :class="[
              'section--product-guide__item',
              { active: data.active && index === data.index },
            ]"
            @mouseover="showPopup($event, true, index)"
            @mouseleave="showPopup($event, false, 0)"
          >
            <div
              :class="[
                'section--product-guide__item__popup',
                { rtl: index === data.index && data.rtl },
                {
                  slider: isAvailableGroup(item, 'several_items'),
                },
              ]"
            >
              <TheProductGuideItem
                :item="item"
                @closePopup="showPopup"
                v-if="isAvailableGroup(item, 'item')"
              />

              <template v-if="isAvailableGroup(item, 'several_items')">
                <div class="navigation">
                  <div class="navigation__slide-btn navigation__slide-prev">
                    <img src="@/assets/images/angle-left.svg" alt="Left" />
                    <span>Previous</span>
                  </div>
                  <div class="navigation__slide-btn navigation__slide-next">
                    <span>Next</span>
                    <img src="@/assets/images/angle-right.svg" alt="Right" />
                  </div>
                </div>
                <swiper
                  :modules="[Navigation]"
                  :navigation="{
                    nextEl: '.navigation__slide-next',
                    prevEl: '.navigation__slide-prev',
                  }"
                  class="section--product-guide__item__popup__slider"
                >
                  <swiper-slide
                    v-for="group in getRepeaterByReferenceName(item, 'list')"
                  >
                    <TheProductGuideItem
                      :item="group"
                      @closePopup="showPopup"
                    />
                  </swiper-slide>
                </swiper>
              </template>
            </div>
          </div>
        </template>
        <img
          src="@/assets/images/guide.png"
          alt="Guide"
          class="section--product-guide__image"
        />
        <button class="btn section--product-guide__btn" @click="fullscreen()">
          <img
            src="@/assets/images/arrow-zoom.svg"
            alt="Zoom"
            v-if="!data.fullscreen"
          />
          <span>
            {{ !data.fullscreen ? "Full Screen" : "Close Full Screen" }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getByReferenceName,
  getRepeaterByReferenceName,
  isAvailableGroup,
} from "@/helpers/persistenceStorage";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});

const data: {
  active: Boolean;
  index: number;
  rtl: Boolean;
  fullscreen: Boolean;
} = reactive({
  active: false,
  index: 0,
  rtl: false,
  fullscreen: false,
});

const fullscreen = () => {
  data.fullscreen = !data.fullscreen;

  data.fullscreen
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");
};

const showPopup = (event: any, state: Boolean, index: number) => {
  data.active = state;
  data.index = index;
  let target = event.target;

  if (
    typeof target.firstChild === "object" &&
    target.firstChild !== null &&
    "getBoundingClientRect" in target.firstChild
  ) {
    target.firstChild.getBoundingClientRect().x < 0
      ? (data.rtl = true)
      : (data.rtl = false);
  }
};
</script>

<style lang="scss">
.section--product-guide {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 0;
  position: relative;

  &.fullscreen {
    background: $color-white;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;

    &::after {
      content: none;
    }
  }

  &::after {
    content: "";
    display: block;
    bottom: 0;
    width: 100%;
    height: 748px;
    background: #f2f5f7;
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;

    @media only screen and (max-width: 1420px) {
      height: 80%;
    }

    @media only screen and (max-width: 1120px) {
      height: 70%;
    }

    @media only screen and (max-width: 760px) {
      height: 60%;
    }

    @media only screen and (max-width: 480px) {
      height: 50%;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.01em;
    line-height: 22px;
    text-transform: uppercase;
  }

  &__subtitle {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-top: 30px;
    max-width: 438px;
    width: 100%;

    @media only screen and (max-width: 760px) {
      margin-top: 20px;
    }
  }

  &__wrap {
    display: flex;
    position: relative;
    margin-top: -40px;

    @media only screen and (max-width: 760px) {
      margin-top: 0;
    }
  }

  .btn.section--product-guide__btn {
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    height: 50px;
    border-radius: 25px;
    background: rgba($color: #000000, $alpha: 0.3);
    color: $color-white;
    position: absolute;
    right: 7%;
    bottom: 24%;
    padding: 0 26px;
    transition: all 0.3s ease;

    @media only screen and (max-width: 1120px) {
      right: 2%;
    }

    @media only screen and (max-width: 865px) {
      right: 2%;
      bottom: 8%;
      font-size: 9px;
      line-height: 10px;
      height: 20px;
      padding: 0 8px;
    }

    @media only screen and (max-width: 560px) {
      right: 0;
      bottom: 2%;
    }

    &:hover {
      background: #01a3ec;
    }

    img {
      height: 20px;
      width: 20px;
      margin-right: 10px;
      filter: brightness(0) saturate(100%) invert(100%) sepia(3%)
        saturate(7417%) hue-rotate(259deg) brightness(104%) contrast(122%);

      @media only screen and (max-width: 865px) {
        width: 10px;
        height: 10px;
        margin-right: 5px;
      }
    }
  }

  &__item {
    display: flex;
    width: 30px;
    height: 30px;
    border-width: 10px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 1);
    border-radius: 50% 50%;
    background: rgba(1, 83, 163, 1);
    z-index: 1;
    position: absolute;
    opacity: 0.5;
    transition: all 0.3s ease;

    @media only screen and (max-width: 865px) {
      width: 8px;
      height: 8px;
      border-width: 3px;
      opacity: 0.7;
    }

    &.active {
      opacity: 1;
      z-index: 10;

      .section--product-guide__item__popup {
        opacity: 1;
        visibility: visible;
      }
    }

    &__popup {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: $color-white;
      color: $color-black;
      width: 480px;
      position: absolute;
      top: 50%;
      left: calc(100% - 500px);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-50%);
      box-shadow: 0 0 30px rgb(1 73 153 / 20%);
      border-radius: 5px;
      overflow: hidden;

      &.rtl {
        left: unset;
        right: calc(100% - 500px);
      }

      @media only screen and (max-width: 865px) {
        position: fixed;
        top: 0;
        left: 0;
        transform: unset;
        width: 100%;
        height: 100%;
        padding: 60px 30px 30px 30px;
        transition: none;
        overflow-y: scroll;

        &.slider {
          padding: 0 30px 30px 30px;
        }
      }

      &__slider {
        width: 480px;

        @media only screen and (max-width: 865px) {
          width: 100%;
        }
      }

      &__block {
        display: flex;
        flex-direction: column;
        width: 480px;
        @media only screen and (max-width: 865px) {
          width: 100%;
        }
      }

      .navigation {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        padding: 0 20px;

        img {
          width: 20px;
          height: 30px;
          filter: brightness(0) saturate(100%);
        }

        &__slide-btn {
          display: flex;
          align-items: center;
          cursor: pointer;

          &.swiper-button-disabled {
            opacity: 0.5;
          }
        }
      }

      .btn.section--product-guide__item__popup__close {
        display: none;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1;

        @media only screen and (max-width: 865px) {
          display: flex;
        }

        img {
          width: inherit;
          height: inherit;
          filter: brightness(0) saturate(100%) invert(0%) sepia(85%)
            saturate(7475%) hue-rotate(317deg) brightness(112%) contrast(101%);
        }
      }

      &__media {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      &__text {
        display: flex;
        flex-wrap: wrap;
        padding: 30px;

        @media only screen and (max-width: 865px) {
          padding: 30px 0;
        }

        h4 {
          font-size: 12px;
          font-weight: normal;
          font-style: normal;
          line-height: 16px;
          text-transform: uppercase;
          width: 100%;
        }

        h3 {
          font-size: 20px;
          font-weight: normal;
          font-style: normal;
          line-height: 28px;
          color: #01a3ec;
          width: 100%;
        }

        p {
          display: flex;
          padding: 30px 0;
          width: 100%;

          &:last-child {
            padding-bottom: 0;
          }
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          font-family: "Raleway", sans-serif;
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          text-transform: uppercase;
          color: $color-black;
          border-radius: 20px;
          background: transparent;
          border: 1px solid #101318;
          padding: 0 20px;
          transition: all 0.3s ease;
          text-decoration: none;
          width: calc(50% - 16px);
          margin-right: 32px;

          @media only screen and (max-width: 865px) {
            font-size: 12px;
          }

          &:hover {
            color: $color-white;
            background: #01a3ec;
            border: 1px solid #01a3ec;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    &:nth-child(1) {
      left: 60.668%;
      top: 20.324%;
    }
    &:nth-child(2) {
      left: 47.481%;
      top: 21.585%;
    }

    &:nth-child(3) {
      left: 53.077%;
      top: 23.701%;
    }
    &:nth-child(4) {
      left: 39.314%;
      top: 29.487%;
    }
    &:nth-child(5) {
      left: 55.993%;
      top: 31.908%;
    }
    &:nth-child(6) {
      left: 34.676%;
      top: 36.038%;
    }
    &:nth-child(7) {
      left: 62.089%;
      top: 38.922%;
    }
    &:nth-child(8) {
      left: 44.406%;
      top: 43.376%;
    }
    &:nth-child(9) {
      left: 42.03%;
      top: 57.252%;
    }
    &:nth-child(10) {
      left: 48.638%;
      top: 57.638%;
    }
    &:nth-child(11) {
      left: 60.627%;
      top: 59.629%;
    }
    &:nth-child(12) {
      left: 68.216%;
      top: 65.786%;
    }
    &:nth-child(13) {
      left: 48.331%;
      top: 70.937%;
    }
    &:nth-child(14) {
      left: 36.853%;
      top: 72.513%;
    }
  }

  &__image {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
}
</style>
