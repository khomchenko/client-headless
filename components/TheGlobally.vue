<template>
  <div class="section section--globally" v-if="props.data">
    <div class="container">
      <div class="section--globally__inner">
        <div
          class="section--globally__globus"
          v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
        >
          <div class="section--globally__globus__map">
            <template
              v-for="item in getRepeaterByReferenceName(props.data, 'list')"
            >
              <div
                class="section--globally__globus__map__mark"
                v-if="getByReferenceName(item, 'text') !== null"
              >
                <span>
                  {{ getByReferenceName(item, "text") }}
                </span>
              </div>
            </template>
            <img
              src="@/assets/images/map-globus.svg"
              alt="Map"
              class="section--globally__globus__map__image"
            />
          </div>
          <img
            src="@/assets/images/globally.svg"
            alt="Globally"
            class="section--globally__globus__image"
          />
        </div>
        <div class="section--globally__info">
          <div
            class="section--globally__info__text"
            v-html="getByReferenceName(props.data, 'text')"
            v-if="getByReferenceName(props.data, 'text') !== null"
          />
          <div
            class="section--globally__info__block"
            v-if="getRepeaterByReferenceName(props.data, 'links')?.length > 0"
          >
            <template
              v-for="link in getRepeaterByReferenceName(props.data, 'links')"
            >
              <NuxtLink
                :to="`${getByReferenceName(link, 'link')}`"
                class="section--globally__info__link"
                v-if="getByReferenceName(link, 'link') !== null"
              >
                <span v-if="getByReferenceName(link, 'text') !== null">
                  {{ getByReferenceName(link, "text") }}
                </span>
                <img src="@/assets/images/arrow-right.svg" alt="Arrow" />
              </NuxtLink>
            </template>
          </div>
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
.section--globally {
  display: flex;
  padding: 642px 0 200px 0;

  @media only screen and (max-width: 865px) {
    padding: 162px 0 50px 0;
  }

  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__globus {
    display: flex;
    position: relative;

    &__map {
      display: flex;
      position: absolute;
      left: 50%;
      bottom: 200px;
      transform: translateX(-50%);

      @media only screen and (max-width: 865px) {
        bottom: 44px;
      }

      &__mark {
        display: flex;
        position: absolute;

        @media only screen and (max-width: 865px) {
          display: none;
        }

        &::after {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 13px 7.5px 0 7.5px;
          border-color: #01a3ec transparent transparent transparent;
        }

        &:hover {
          &::after {
            border-width: 0 40px 40px 0 !important;
            border-color: transparent #ffffff transparent transparent;
          }

          &:first-child {
            top: 58px;
            left: 24px;
          }

          &:nth-child(2) {
            top: 94px;
            left: 4px;
          }

          &:nth-child(3) {
            top: 98px;
            right: 94px;
          }

          &:nth-child(4) {
            top: 58px;
          }

          &:nth-child(5) {
            top: 78px;
            right: 56px;
          }

          &:nth-child(6) {
            top: 132px;
          }

          &:nth-child(7) {
            top: 244px;
          }

          &:nth-child(8) {
            top: 254px;
            right: 10px;
          }

          span {
            display: flex;
            justify-content: center;
            min-width: 142px;
            padding: 10px;
            text-align: center;
            position: absolute;
            top: -12px;
            right: 0;
            background: $color-white;
            z-index: 5;
          }
        }

        span {
          display: none;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          color: #01a3ec;
        }

        &:first-child {
          top: 84px;
          left: 54px;
        }

        &:nth-child(2) {
          top: 124px;
          left: 30px;
        }

        &:nth-child(3) {
          top: 124px;
          right: 90px;

          &::after {
            border-width: 8px 5px 0 5px;
          }
        }

        &:nth-child(4) {
          top: 84px;
          right: 52px;

          &::after {
            border-width: 8px 5px 0 5px;
          }
        }

        &:nth-child(5) {
          top: 102px;
          right: 60px;

          &::after {
            border-width: 8px 5px 0 5px;
          }
        }

        &:nth-child(6) {
          top: 158px;
          right: 33px;

          &::after {
            border-width: 8px 5px 0 5px;
          }
        }

        &:nth-child(7) {
          top: 274px;
          right: 5px;

          &::after {
            border-width: 8px 5px 0 5px;
          }
        }

        &:nth-child(8) {
          top: 287px;
          right: 9px;

          &::after {
            border-width: 8px 5px 0 5px;
          }
        }
      }

      &__image {
        width: 442px;
        height: 442px;

        @media only screen and (max-width: 865px) {
          width: 108px;
          height: 108px;
        }
      }
    }

    &__image {
      width: 100%;
      height: 330px;

      @media only screen and (max-width: 865px) {
        height: 80px;
      }
    }
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    max-width: 906px;
    width: 100%;
    margin: 50px auto 0 auto;

    @media only screen and (max-width: 865px) {
      flex-direction: column;
      margin: 80px auto 0 auto;
    }

    &__text {
      display: flex;
      flex-direction: column;

      h3 {
        font-weight: bold;
        font-size: 27px;
        line-height: 30px;
        width: 100%;
        margin-bottom: 50px;

        @media only screen and (max-width: 865px) {
          font-size: 24px;
          margin-bottom: 20px;
        }
      }

      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        max-width: 438px;
        width: 100%;
      }
    }

    &__block {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 146px;

      @media only screen and (max-width: 865px) {
        margin-top: 30px;
        margin-left: 0;
      }
    }

    &__link {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #023a52;
      text-decoration: none;
      margin-bottom: 15px;

      &:hover {
        img {
          transform: rotate(0);
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      img {
        width: 12px;
        height: 14px;
        transform: rotate(-45deg);
        filter: brightness(0) saturate(100%) invert(16%) sepia(86%)
          saturate(934%) hue-rotate(165deg) brightness(90%) contrast(98%);
        margin-left: 5px;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
