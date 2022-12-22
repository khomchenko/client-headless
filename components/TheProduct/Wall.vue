<template>
  <div class="section section--product-wall" v-if="props.data">
    <div class="container">
      <h4
        class="section--product-wall__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h4>
      <div
        :class="[
          'section--product-wall__wrap',
          {
            'section--product-wall__wrap--small': getByReferenceName(
              props.data,
              'is_small'
            ),
          },
          {
            'section--product-wall__wrap--wallpaper': getByReferenceName(
              props.data,
              'is_wallpaper'
            ),
          },
        ]"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <template
          v-for="item in getRepeaterByReferenceName(props.data, 'list')"
        >
          <NuxtLink
            :to="`${getByReferenceName(item, 'link')}`"
            class="section--product-wall__item"
            v-if="getByReferenceName(item, 'link') !== null"
          >
            <img
              :src="`${getByReferenceName(item, 'image')?.url}`"
              :alt="`${getByReferenceName(item, 'image')?.description}`"
              v-if="getByReferenceName(item, 'image') !== null"
              class="section--product-wall__item__image"
            />
            <h5
              class="section--product-wall__item__text"
              v-if="getByReferenceName(item, 'title') !== null"
            >
              {{ getByReferenceName(item, "title") }}
            </h5>
          </NuxtLink>
        </template>
      </div>
      <div
        class="section--product-wall__text"
        v-html="getByReferenceName(props.data, 'text')"
        v-if="getByReferenceName(props.data, 'text') !== null"
      />
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
.section--product-wall {
  display: flex;
  padding: 50px 0;
  background: $color-white;

  @media only screen and (max-width: 865px) {
    padding: 30px 0 0 0;
  }

  & + .section--news-events {
    @media only screen and (max-width: 865px) {
      padding: 20px 0 40px 0;
    }
  }

  & + .section--contact {
    padding-top: 50px;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.01em;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 30px;
    color: $color-black;

    @media only screen and (max-width: 865px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 10px;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    max-width: 906px;
    width: 100%;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: $color-black;
    padding-top: 100px;
    margin: 0 auto;

    @media only screen and (max-width: 865px) {
      padding-top: 30px;
    }
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;

    &--small {
      .section--product-wall__item {
        max-width: 672px;
        width: 100%;
        height: 350px;
        margin-bottom: 0;

        @media only screen and (max-width: 1420px) {
          max-width: calc(50% - 15px);
        }

        @media only screen and (max-width: 865px) {
          height: 190px;
        }

        @media only screen and (max-width: 560px) {
          max-width: 100%;
          margin-bottom: 20px;
        }

        &:nth-child(odd) {
          margin-right: 30px;

          @media only screen and (max-width: 560px) {
            margin-right: 0;
          }
        }

        &:nth-child(even) {
          margin-right: 0;
        }
      }
    }

    &--wallpaper {
      .section--product-wall__item {
        max-width: 672px;
        width: 100%;
        height: 350px;

        @media only screen and (max-width: 1420px) {
          max-width: calc(50% - 15px);
        }

        @media only screen and (max-width: 560px) {
          max-width: 100%;
          height: 190px;
        }

        &:first-child {
          max-width: 100%;
          width: 100%;
          height: 630px;

          @media only screen and (max-width: 1420px) {
            height: 350px;
          }

          @media only screen and (max-width: 560px) {
            max-width: 100%;
            height: 190px;
          }
        }

        &:nth-child(3n + 2) {
          margin-right: 0;
        }

        &:nth-child(even) {
          margin-right: 30px;

          @media only screen and (max-width: 1420px) {
            height: 350px;
          }

          @media only screen and (max-width: 560px) {
            height: 190px;
            margin-right: 0;
          }
        }

        &:nth-child(odd) {
          @media only screen and (max-width: 1420px) {
            height: 350px;
          }

          @media only screen and (max-width: 560px) {
            height: 190px;
          }
        }
      }
    }
  }

  &__item {
    display: flex;
    align-items: flex-end;
    max-width: 100%;
    width: 100%;
    height: 630px;
    color: $color-white;
    background: #7b7c7d;
    text-decoration: none;
    padding: 50px;
    margin-bottom: 30px;
    position: relative;

    @media only screen and (max-width: 865px) {
      height: 190px;
      padding: 12px 16px;
    }

    @media only screen and (max-width: 560px) {
      max-width: 100%;
      margin-bottom: 20px;
    }

    &:nth-child(3n + 2),
    &:nth-child(3n + 3) {
      max-width: 672px;
      width: 100%;
      height: 350px;

      @media only screen and (max-width: 1420px) {
        max-width: calc(50% - 15px);
      }

      @media only screen and (max-width: 865px) {
        height: 190px;
      }

      @media only screen and (max-width: 560px) {
        max-width: 100%;
      }
    }

    &:nth-child(3n + 2) {
      margin-right: 30px;

      @media only screen and (max-width: 560px) {
        margin-right: 0;
      }
    }

    &:nth-last-child(1),
    &:nth-last-child(2) {
      margin-bottom: 0;
    }

    &:nth-last-child(2) {
      @media only screen and (max-width: 560px) {
        margin-bottom: 20px;
      }
    }

    &__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    &__text {
      font-weight: normal;
      font-size: 36px;
      letter-spacing: 0.01em;
      line-height: 40px;
      z-index: 2;

      @media only screen and (max-width: 1120px) {
        font-size: 24px;
        line-height: 28px;
      }

      @media only screen and (max-width: 865px) {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
}
</style>
