<template>
  <div class="section section--product-projects" v-if="props.data">
    <div class="container">
      <h4
        class="section--product-projects__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h4>
      <div
        class="section--product-projects__wrap"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <template
          v-for="item in getRepeaterByReferenceName(props.data, 'list')"
        >
          <div class="section--product-projects__item">
            <img
              :src="`${getByReferenceName(item, 'image')?.url}`"
              :alt="`${getByReferenceName(item, 'image')?.description}`"
              v-if="getByReferenceName(item, 'image') !== null"
              class="section--product-projects__item__image"
            />
            <ul
              class="section--product-projects__item__tags"
              v-if="getRepeaterByReferenceName(item, 'tags')?.length > 0"
            >
              <template
                v-for="tags in getRepeaterByReferenceName(item, 'tags')"
              >
                <li
                  class="section--product-projects__item__tags__tag"
                  v-if="getByReferenceName(tags, 'text') !== null"
                >
                  <span>
                    {{ getByReferenceName(tags, "text") }}
                  </span>
                </li>
              </template>
            </ul>
            <h5
              class="section--product-projects__item__title"
              v-if="getByReferenceName(item, 'title') !== null"
            >
              {{ getByReferenceName(item, "title") }}
            </h5>
            <NuxtLink
              :to="`${getContentReference(item, 'link')}`"
              class="section--product-projects__item__link"
              v-if="getContentReference(item, 'link') !== null"
            >
              View project
            </NuxtLink>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getByReferenceName,
  getRepeaterByReferenceName,
  getContentReference,
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
.section--product-projects {
  display: flex;
  background: $color-white;
  color: $color-black;
  padding: 50px 0;

  @media only screen and (max-width: 865px) {
    padding: 30px 0 0 0;

    & + .section--news-events {
      padding-top: 40px;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.01em;
    line-height: 22px;
    text-transform: uppercase;
    margin-bottom: 30px;

    @media only screen and (max-width: 865px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 10px;
    }
  }

  &__wrap {
    display: flex;

    @media only screen and (max-width: 865px) {
      flex-direction: column;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    color: $color-black;
    max-width: 672px;
    width: 100%;
    margin-right: 30px;

    @media only screen and (max-width: 865px) {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
    }

    &:last-child {
      margin-right: 0;

      @media only screen and (max-width: 865px) {
        margin-bottom: 0;
      }
    }

    &__image {
      max-width: 100%;
      width: 100%;
      height: 350px;
      object-fit: cover;
      margin-bottom: 20px;

      @media only screen and (max-width: 865px) {
        height: 190px;
      }
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin-bottom: 20px;

      @media only screen and (max-width: 865px) {
        margin-bottom: 10px;
      }

      &__tag {
        display: flex;
        align-items: center;
        @include heading-primary;
        text-transform: uppercase;
        color: #01a3ec;
        margin-left: 20px;
        position: relative;

        @media only screen and (max-width: 865px) {
          height: 20px;
        }

        &::after {
          content: "•";
          display: block;
          position: absolute;
          top: 50%;
          left: -12px;
          transform: translateY(-50%);
          @include heading-primary;
          color: #023a52;

          @media only screen and (max-width: 865px) {
            line-height: 20px;
          }
        }

        &:first-child {
          margin-left: 0;

          &::after {
            content: none;
          }
        }
      }
    }

    &__title {
      font-weight: normal;
      font-size: 30px;
      letter-spacing: 0.01em;
      line-height: 35px;
      margin-bottom: 20px;

      @media only screen and (max-width: 865px) {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 10px;
      }
    }

    &__link {
      font-weight: 600;
      text-decoration: underline;
      font-size: 16px;
      letter-spacing: 0.01em;
      line-height: 18px;
      color: $color-black;
      transition: all 0.3s ease;

      &:hover {
        color: #01a3ec;
      }
    }
  }
}
</style>
