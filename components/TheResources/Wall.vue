<template>
  <div class="section section--resources" v-if="props.data">
    <div class="container">
      <div class="section--resources__inner">
        <ul
          class="section--resources__list"
          v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
        >
          <template
            v-for="item in getRepeaterByReferenceName(props.data, 'list')"
          >
            <li
              class="section--resources__list__item"
              v-if="getByReferenceName(item, 'link') !== null"
            >
              <NuxtLink
                :to="`${getByReferenceName(item, 'link')}`"
                class="section--resources__list__item__link"
              >
                <h3
                  class="section--resources__list__item__title"
                  v-if="getByReferenceName(item, 'title') !== null"
                >
                  {{ getByReferenceName(item, "title") }}
                </h3>
                <p
                  class="section--resources__list__item__text"
                  v-if="getByReferenceName(item, 'text') !== null"
                >
                  {{ getByReferenceName(item, "text") }}
                </p>
                <img
                  :src="`${getByReferenceName(item, 'image')?.url}`"
                  :alt="`${getByReferenceName(item, 'image')?.description}`"
                  v-if="getByReferenceName(item, 'image') !== null"
                  class="section--resources__list__item__icon"
                />
              </NuxtLink>
            </li>
          </template>
        </ul>
        <button class="btn btn--secondary">View more</button>
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
.section--resources {
  display: flex;
  padding: 50px 0;

  @media only screen and (max-width: 865px) {
    padding: 25px 0;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 20px;
    width: 100%;

    &__item {
      display: flex;
      flex-wrap: wrap;
      max-width: 320px;
      width: 100%;
      height: 250px;
      margin-bottom: 30px;
      margin-right: 30px;

      @media only screen and (min-width: 1440px) {
        &:nth-child(4n) {
          margin-right: 0;
        }
      }

      @media only screen and (min-width: 960px) and (max-width: 1440px) {
        max-width: calc(33.33% - 20px);

        &:nth-child(3n) {
          margin-right: 0;
        }
      }

      @media only screen and (max-width: 960px) {
        max-width: calc(50% - 15px);

        &:nth-child(2n) {
          margin-right: 0;
        }
      }

      @media only screen and (max-width: 560px) {
        max-width: 100%;
        height: 125px;
        margin-right: 0;
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &__link {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        padding: 30px;
        text-decoration: none;
        background: #f2f5f7;
        color: #13181f;
        transition: all 0.3s ease;

        &:hover {
          color: $color-white;
          background: #01a3ec;
        }
      }

      &__title {
        font-weight: bold;
        font-size: 18px;
        line-height: 20px;
        width: 100%;
      }

      &__text {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        margin-top: auto;
        margin-right: 10px;
        width: calc(100% - 50px);
      }

      &__icon {
        width: 40px;
        height: 40px;
        object-fit: contain;
        margin-top: auto;
      }
    }
  }
}
</style>
