<template>
  <div
    :class="[
      'section section--cta',
      {
        'section--cta-main': Boolean(getByReferenceName(props.data, 'is_main')),
      },
    ]"
    :style="`background-image: url(${
      getByReferenceName(props.data, 'image').url
    });`"
    v-if="props.data && getByReferenceName(props.data, 'image') !== null"
  >
    <div class="container">
      <div class="section--cta__inner">
        <h4
          class="section--cta__sub-title"
          v-if="getByReferenceName(props.data, 'sub_title') !== null"
        >
          {{ getByReferenceName(props.data, "sub_title") }}
        </h4>
        <h3
          class="section--cta__title"
          v-if="getByReferenceName(props.data, 'title') !== null"
        >
          {{ getByReferenceName(props.data, "title") }}
        </h3>
        <NuxtLink
          :to="`${getByReferenceName(props.data, 'link')}`"
          class="section--cta__link"
          v-if="getByReferenceName(props.data, 'link') !== null"
        >
          <span v-if="getByReferenceName(props.data, 'link_text') !== null">
            {{ getByReferenceName(props.data, "link_text") }}
          </span>
          <img src="@/assets/images/arrow-right.svg" alt="Arrow" />
        </NuxtLink>
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
.section--cta {
  display: flex;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  color: $color-white;
  height: 690px;
  margin: 30px;
  background-color: #7b7c7d;
  position: relative;

  @media (min-width: 1421px) {
    .container {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media only screen and (max-width: 865px) {
    height: 630px;
    margin: 30px 20px;
  }

  &::after {
    content: url(/assets/images/symbol-white.svg);
    position: absolute;
    top: 50%;
    right: 0;
    height: 400px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &:not(.section--cta-main) {
    @media only screen and (max-width: 1440px) {
      &::after {
        content: url(/assets/images/symbol-white-small.svg);
        height: 310px;
        top: unset;
        bottom: 32px;
        transform: unset;
      }
    }
  }

  &.section--cta-main {
    @media only screen and (max-width: 1440px) {
      &::after {
        content: none;
      }
    }

    @media only screen and (max-width: 740px) {
      height: inherit;
      background-position: center;
      margin: 0;
      margin-bottom: 30px;

      .section--cta {
        &__inner {
          max-width: unset;
          padding: 35px 15px;
        }

        &__title {
          font-size: 30px;
          letter-spacing: 0.01em;
          line-height: 34px;
          margin-bottom: 12px;
        }

        &__link {
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 602px;
    width: 100%;
    padding-top: 166px;

    @media only screen and (max-width: 865px) {
      padding-top: 130px;
    }
  }

  &__sub-title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.01em;
    line-height: 22px;
    text-transform: uppercase;
    margin-bottom: 20px;

    @media only screen and (max-width: 740px) {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  &__title {
    font-weight: normal;
    font-size: 60px;
    letter-spacing: 0.01em;
    line-height: 70px;
    margin-bottom: 30px;

    @media only screen and (max-width: 865px) {
      font-size: 26px;
      line-height: 30px;
      margin-bottom: 16px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    width: fit-content;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: $color-white;
    text-decoration: none;

    &:hover {
      img {
        transform: translateX(4px);
      }
    }

    img {
      width: 12px;
      height: 14px;
      margin-left: 5px;
      transition: all 0.3s ease;
    }
  }
}
</style>
