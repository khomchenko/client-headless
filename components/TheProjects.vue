<template>
  <div class="section section--projects" v-if="props.data">
    <div class="container">
      <h4
        class="section--product-projects__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h4>
      <div
        class="section--projects__wrap"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <template
          v-for="list in getRepeaterByReferenceName(props.data, 'list')"
        >
          <div class="section--projects__item">
            <img
              :src="getByReferenceName(list, 'image')?.url"
              :alt="getByReferenceName(list, 'image')?.description"
              class="section--projects__item__image"
              v-if="getByReferenceName(list, 'image') !== null"
            />
            <ul
              class="section--projects__item__tags"
              v-if="getRepeaterByReferenceName(list, 'tags')?.length > 0"
            >
              <template
                v-for="tags in getRepeaterByReferenceName(list, 'tags')"
              >
                <li
                  class="section--projects__item__tags__tag"
                  v-if="getByReferenceName(tags, 'tag_name') !== null"
                >
                  {{ getByReferenceName(tags, "tag_name") }}
                </li>
              </template>
            </ul>
            <h5
              class="section--projects__item__title"
              v-if="getByReferenceName(list, 'title') !== null"
            >
              {{ getByReferenceName(list, "title") }}
            </h5>
            <NuxtLink
              :to="`${getContentReference(list, 'link')}`"
              class="section--projects__item__link"
              v-if="getContentReference(list, 'link') !== null"
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
.section--projects {
  display: flex;
  color: $color-black;
  padding: 50px 0;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 540px;
    background: #f2f5f7;
    z-index: -1;
  }

  &::after {
    top: unset;
    bottom: 0;
    height: 355px;
  }

  @media only screen and (max-width: 560px) {
    padding: 0 0 30px 0;

    &::after {
      display: none;
    }
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    flex-direction: column;
    color: $color-black;
    max-width: 672px;
    width: 100%;
    margin-right: 30px;

    @media only screen and (max-width: 1420px) {
      width: calc(50% - 15px);
    }

    @media only screen and (max-width: 880px) {
      max-width: unset;
      width: 100%;
      margin: 0 0 20px 0;
    }

    &:first-child {
      flex-wrap: wrap;
      flex-direction: initial;
      max-width: 100%;
      margin: 0 0 30px 0;

      @media only screen and (max-width: 1420px) {
        width: 100%;
      }

      @media only screen and (max-width: 880px) {
        width: 100%;
        flex-wrap: nowrap;
        flex-direction: column;
        margin: 0 0 20px 0;
      }

      .section--projects__item {
        &__tags {
          order: 1;
          width: 100%;
        }
        &__title {
          order: 2;
          margin-bottom: 30px;

          @media only screen and (max-width: 880px) {
            margin-bottom: 8px;
          }
        }
        &__link {
          display: flex;
          align-items: center;
          order: 3;
          margin: 0 0 30px auto;

          @media only screen and (max-width: 880px) {
            margin: 0 0 20px 0;
          }
        }
        &__image {
          height: 630px;
          order: 4;
          margin-bottom: 0;

          @media only screen and (max-width: 880px) {
            height: 230px;
          }
        }
      }
    }

    &:last-child {
      margin-right: 0;
    }

    &__image {
      max-width: 100%;
      width: 100%;
      height: 350px;
      object-fit: cover;
      margin-bottom: 20px;

      @media only screen and (max-width: 880px) {
        height: 230px;
      }
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin-bottom: 20px;

      @media only screen and (max-width: 880px) {
        margin-bottom: 8px;
      }

      &__tag {
        display: flex;
        align-content: center;
        @include heading-primary;
        text-transform: uppercase;
        color: #01a3ec;
        margin-right: 20px;
        position: relative;

        @media only screen and (max-width: 560px) {
          font-size: 12px;
          line-height: 14px;
        }

        &::after {
          content: "•";
          display: block;
          position: absolute;
          top: 0;
          right: -12px;
          @include heading-primary;
          color: #023a52;
        }

        &:last-child {
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

      @media only screen and (max-width: 880px) {
        margin-bottom: 8px;
      }

      @media only screen and (max-width: 560px) {
        font-size: 20px;
        line-height: 24px;
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

      @media only screen and (max-width: 560px) {
        font-size: 14px;
        line-height: 16px;
      }

      &:hover {
        color: #01a3ec;
      }
    }
  }
}
</style>
