<template>
  <div class="section section--product-components" v-if="props.data">
    <div class="container">
      <h4
        class="section--product-components__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h4>
      <ul
        class="section--product-components__list"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <template
          v-for="item in getRepeaterByReferenceName(props.data, 'list')"
        >
          <li
            class="section--product-components__list__item"
            v-if="getByReferenceName(item, 'link') !== null"
          >
            <NuxtLink
              :to="`${getByReferenceName(item, 'link')}`"
              class="section--product-components__list__item__link"
            >
              <img
                :src="`${getByReferenceName(item, 'image')?.url}`"
                :alt="`${getByReferenceName(item, 'image')?.description}`"
                v-if="getByReferenceName(item, 'image') !== null"
                class="section--product-components__list__item__image"
              />
              <span
                class="section--product-components__list__item__name"
                v-if="getByReferenceName(item, 'name') !== null"
              >
                {{ getByReferenceName(item, "name") }}
              </span>
            </NuxtLink>
          </li>
        </template>
      </ul>
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
.section--product-components {
  display: flex;
  padding: 50px 0 15px 0;

  @media only screen and (max-width: 640px) {
    padding: 30px 0 10px 0;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.01em;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 15px;

    @media only screen and (max-width: 865px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 10px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;

    &__item {
      display: flex;
      flex-direction: column;
      max-width: 320px;
      width: 100%;
      margin: 15px 30px 0 0;

      @media only screen and (min-width: 1420px) {
        &:nth-child(4n) {
          margin-right: 0;
        }
      }

      @media only screen and (max-width: 1420px) {
        max-width: calc(33.33% - 10px);
        margin-right: 15px;

        &:nth-child(3n) {
          margin-right: 0;
        }
      }

      @media only screen and (max-width: 865px) {
        max-width: calc(50% - 10px);

        &:nth-child(2n) {
          margin-right: 0;
        }

        &:nth-child(odd) {
          margin-right: 20px;
        }
      }

      @media only screen and (max-width: 640px) {
        max-width: 100%;
        margin: 0 0 20px 0;

        &:nth-child(odd) {
          margin-right: 0;
        }
      }

      &__link {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: #13181f;
        transition: all 0.3s ease;

        &:hover {
          color: #01a3ec;
        }
      }

      &__image {
        width: 100%;
        height: 210px;
        object-fit: cover;

        @media only screen and (max-width: 640px) {
          height: 190px;
        }
      }

      &__name {
        font-weight: normal;
        font-size: 18px;
        letter-spacing: 0.01em;
        line-height: 20px;
        margin-top: 20px;
      }
    }
  }
}
</style>
