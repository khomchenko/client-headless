<template>
  <div class="section section--breadcrumbs" v-if="props.data">
    <div class="container">
      <ul
        class="section--breadcrumbs__list"
        v-if="
          getRepeaterByReferenceName(props.data, 'list')?.length! > 0
        "
      >
        <template
          v-for="list in getRepeaterByReferenceName(props.data, 'list')"
        >
          <li
            class="section--breadcrumbs__list__item"
            v-if="getContentReference(list, 'link') !== null"
          >
            <NuxtLink
              :to="`${getContentReference(list, 'link')}`"
              class="section--breadcrumbs__list__item__link"
            >
              {{ getByReferenceName(list, "link")?.title }}
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
.section--breadcrumbs {
  display: flex;
  color: $color-black;
  background: $color-white;
  padding: 32px 0;

  @media only screen and (max-width: 1420px) {
    & + .article {
      padding: 0 20px;
    }
  }

  @media only screen and (max-width: 865px) {
    padding: 20px 0;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;

    &__item {
      display: flex;
      align-items: center;
      margin-left: 20px;
      position: relative;

      @media only screen and (max-width: 865px) {
        height: 20px;
      }

      &::after {
        content: "/";
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #7b7c7d;
        position: absolute;
        top: 0;
        left: -14px;

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

      &:last-child {
        .section--breadcrumbs__list__item__link {
          color: $color-black;

          &:hover {
            color: #01a3ec;
          }
        }
      }

      &__link {
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-decoration: none;
        color: #01a3ec;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
