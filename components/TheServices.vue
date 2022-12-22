<template>
  <div class="section section--services" v-if="props.data">
    <div class="container">
      <div
        class="section--services__list"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <template
          v-for="item in getRepeaterByReferenceName(props.data, 'list')"
        >
          <NuxtLink
            :to="`${getByReferenceName(item, 'link')}`"
            class="section--services__list__item"
            v-if="getByReferenceName(item, 'link') !== null"
          >
            <div
              class="section--services__list__item__icon"
              v-if="getByReferenceName(item, 'icon') !== null"
            >
              <img
                :src="getByReferenceName(item, 'icon')?.url"
                :alt="getByReferenceName(item, 'icon')?.description"
                v-if="getByReferenceName(item, 'icon') !== null"
              />
            </div>
            <h4
              class="section--services__list__item__title"
              v-if="getByReferenceName(item, 'title') !== null"
            >
              {{ getByReferenceName(item, "title") }}
            </h4>
          </NuxtLink>
        </template>
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
.section--services {
  display: flex;
  padding: 30px 0 50px 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 225px;
    background: #f2f5f7;
    z-index: -1;
  }

  @media only screen and (max-width: 580px) {
    padding: 30px 0;

    &::after {
      height: 525px;
    }
  }

  &__list {
    display: flex;

    @media only screen and (max-width: 1120px) {
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      max-width: 328px;
      width: 100%;
      height: 350px;
      color: $color-white;
      padding: 20px 20px 30px 30px;
      text-decoration: none;
      position: relative;
      margin-right: 20px;
      transition: all 0.3s ease;

      @media only screen and (max-width: 1120px) {
        max-width: calc(50% - 10px);
        height: 190px;
        margin-right: 0;
        margin-bottom: 20px;

        &:nth-last-child(2),
        &:last-child {
          margin-bottom: 0;
        }
      }

      @media only screen and (max-width: 580px) {
        max-width: 100%;

        &:nth-last-child(2) {
          margin-bottom: 20px;
        }
      }

      &:first-child {
        background: #023a52;
      }

      &:nth-child(2) {
        background: #275f74;
      }

      &:nth-child(3) {
        background: #437d93;
      }

      &:last-child {
        background: #babec1;
        color: $color-black;
        margin-right: 0;
      }

      &:hover {
        background: #01a3ec;
        color: $color-white;
      }

      &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        background: $color-white;
        position: absolute;
        top: 20px;
        right: 20px;
        border-radius: 100px;

        @media only screen and (max-width: 580px) {
          width: 60px;
          height: 60px;
        }

        img {
          height: 30px;
        }
      }

      &__title {
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 0.01em;
        line-height: 24px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
