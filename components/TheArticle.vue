<template>
  <section
    :class="[
      'article',
      {
        small: Boolean(getByReferenceName(props.data, 'is_small')),
      },
    ]"
    v-if="props.data"
  >
    <div class="article__inner">
      <template v-for="item in getRepeaterByReferenceName(props.data, 'list')">
        <TheArticleRichText
          :data="getByReferenceName(item, 'rich_text')"
          v-if="isAvailableGroup(item, 'text')"
        />
        <TheArticleInfo
          :category="getByReferenceName(item, 'category')"
          :date="getByReferenceName(item, 'date')"
          v-else-if="isAvailableGroup(item, 'info')"
        />
        <TheArticleImage
          :data="getByReferenceName(item, 'photo')"
          v-else-if="isAvailableGroup(item, 'image')"
        />
        <TheArticleVideo
          :image="getByReferenceName(item, 'image')"
          :link="getByReferenceName(item, 'link')"
          v-else-if="isAvailableGroup(item, 'video')"
        />
        <TheArticleSliderSimple
          :data="getRepeaterByReferenceName(item, 'list')"
          v-else-if="isAvailableGroup(item, 'slider')"
        />
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  getByReferenceName,
  getRepeaterByReferenceName,
  isAvailableGroup,
} from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
  width: {
    type: String,
  },
});
</script>

<style lang="scss">
.article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 0;

  @media only screen and (max-width: 1420px) {
    padding: 40px 20px;
  }

  &.small {
    .article__inner {
      max-width: 794px;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    max-width: 906px;
    width: 100%;
    margin: 0 auto;

    &:has(.article__info) {
      .article__text {
        margin-bottom: 30px;

        @media only screen and (max-width: 865px) {
          margin-bottom: 20px;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }

    h1 {
      font-weight: bold;
      font-size: 60px;
      line-height: 70px;
      text-align: center;
      margin-bottom: 80px;

      @media only screen and (max-width: 865px) {
        font-size: 30px;
        line-height: 35px;
        text-align: left;
        margin-bottom: 30px;
      }
    }

    h2 {
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 50px;

      @media only screen and (max-width: 865px) {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 20px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    h3 {
      font-weight: bold;
      font-size: 27px;
      line-height: 30px;
      margin-bottom: 50px;

      @media only screen and (max-width: 865px) {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 40px;
      }
    }

    h4 {
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 30px;

      @media only screen and (max-width: 865px) {
        margin-bottom: 20px;
      }
    }

    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
    }

    ul {
      list-style: square inside;

      li {
        line-height: 20px;
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    blockquote {
      padding-left: 33px;
      border-left: 5px solid #01a3ec;

      * {
        margin-bottom: 24px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      h3 {
        font-weight: bold;
        font-style: italic;
        font-size: 27px;
        line-height: 34px;
      }

      p {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  &__image {
    display: flex;
    background: #7b7c7d;
    margin-bottom: 50px;

    @media only screen and (max-width: 865px) {
      margin-bottom: 30px;
    }

    img {
      max-width: 906px;
      width: 100%;
      height: 472px;
      object-fit: cover;

      @media only screen and (max-width: 865px) {
        height: 190px;
      }
    }
  }

  &__info {
    display: flex;
    margin-bottom: 50px;

    @media only screen and (max-width: 865px) {
      margin-bottom: 30px;
    }

    p {
      @include heading-primary;
      text-transform: uppercase;

      strong {
        position: relative;
        margin-right: 20px;

        &::after {
          content: "|";
          color: #babec1;
          position: absolute;
          top: 0;
          right: -12px;
        }

        &:last-child {
          margin-right: 0;

          &::after {
            content: none;
          }
        }
      }
    }
  }

  &__video {
    display: flex;
    width: 100%;
    height: 472px;
    position: relative;
    margin-bottom: 30px;

    @media only screen and (max-width: 865px) {
      margin-top: 10px;
    }

    @media only screen and (max-width: 560px) {
      height: 190px;
    }

    &:hover {
      .article__video__image {
        opacity: 0.8;
      }
    }

    &__image {
      width: inherit;
      height: inherit;
      object-fit: cover;
      transition: all 0.3s ease;
    }

    &__icon {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @media only screen and (max-width: 560px) {
        width: 50px;
        height: 50px;
      }
    }
  }

  &__slider {
    width: 100%;
    height: 595px;
    margin-bottom: 50px;

    @media only screen and (max-width: 560px) {
      height: 190px;
      margin-bottom: 30px;
    }

    &__slide {
      &__image {
        width: 100%;
        height: 100%;
        background: #7b7c7d;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .swiper-button-prev {
      left: 30px;
      color: $color-white;
    }
    .swiper-button-next {
      right: 30px;
      color: $color-white;
    }
  }
}
</style>
