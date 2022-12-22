<template>
  <div class="section section--product-info" v-if="props.data">
    <div class="container">
      <div
        :class="[
          'section--product-info__inner',
          {
            'section--product-info__inner--block':
              getRepeaterByReferenceName(props.data, 'list')?.length > 0,
          },
        ]"
      >
        <div
          class="section--product-info__text"
          v-html="getByReferenceName(props.data, 'text')"
          v-if="getByReferenceName(props.data, 'text') !== null"
        />
        <ul
          class="section--product-info__list"
          v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
        >
          <template
            v-for="item in getRepeaterByReferenceName(props.data, 'list')"
          >
            <li
              class="section--product-info__list__item"
              v-if="getByReferenceName(item, 'link') !== null"
            >
              <NuxtLink
                :to="`${getByReferenceName(item, 'link')}`"
                class="section--product-info__list__item__link"
                v-if="getByReferenceName(item, 'link_name') !== null"
              >
                {{ getByReferenceName(item, "link_name") }}
              </NuxtLink>
            </li>
          </template>
        </ul>
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
.section--product-info {
  display: flex;
  padding: 22px 0 50px 0;
  color: $color-black;
  background: $color-white;

  @media only screen and (max-width: 865px) {
    padding: 0 0 10px 0;
  }

  &__inner {
    display: flex;

    @media only screen and (max-width: 865px) {
      flex-direction: column;
    }

    &--block {
      align-items: flex-start;

      .section--product-info {
        &__text {
          margin: 0;
        }

        &__list {
          display: flex;
          flex-direction: column;
          padding: 30px;
          max-width: 320px;
          width: 100%;
          background: #f2f5f7;
          margin-left: auto;

          @media only screen and (max-width: 865px) {
            margin-left: 0;
          }

          &__item {
            display: flex;
            margin-bottom: 16px;

            &:last-child {
              margin-bottom: 0;
            }

            &__link {
              font-weight: 600;
              text-decoration: underline;
              font-size: 16px;
              line-height: 24px;
              color: $color-black;
              transition: all 0.3s ease;

              &:hover {
                color: #01a3ec;
              }
            }
          }
        }
      }
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    max-width: 906px;
    width: 100%;
    margin: 0 auto;

    h3 {
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 30px;

      @media only screen and (max-width: 865px) {
        font-size: 24px;
        line-height: 34px;
      }
    }

    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      @media only screen and (max-width: 865px) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
