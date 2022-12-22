<template>
  <div class="section section--systems" v-if="props.data">
    <h4
      class="section--systems__title"
      ref="container"
      v-if="getByReferenceName(props.data, 'title') !== null"
    >
      {{ getByReferenceName(props.data, "title") }}
    </h4>
    <div
      class="section--systems__list"
      :style="[
        { 'padding-left': container?.offsetLeft + 'px' },
        { 'padding-right': container?.offsetLeft + 'px' },
      ]"
      v-if="
        container !== null && getRepeaterByReferenceName(props.data, 'list')
      "
    >
      <template v-for="list in getRepeaterByReferenceName(props.data, 'list')">
        <div class="section--systems__list__item">
          <img
            :src="getByReferenceName(list, 'image').url"
            :alt="getByReferenceName(list, 'image').description"
            class="section--systems__list__item__image"
            v-if="getByReferenceName(list, 'image') !== null"
          />
          <h5
            class="section--systems__list__item__title"
            v-if="getByReferenceName(list, 'title') !== null"
          >
            {{ getByReferenceName(list, "title") }}
          </h5>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
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

const container = ref<HTMLDivElement | null>(null);
</script>

<style lang="scss">
.section--systems {
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  overflow: hidden;
  background: #f2f5f7;

  @media only screen and (max-width: 580px) {
    padding: 0 0 30px 0;
  }

  &__title {
    @include container-width;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.01em;
    line-height: 24px;
    text-transform: uppercase;
    margin: 0 auto 30px auto;

    @media only screen and (max-width: 1420px) {
      padding: 0 20px;
    }

    @media only screen and (max-width: 580px) {
      font-size: 18px;
      line-height: 20px;
      margin: 0 auto 10px auto;
    }
  }

  &__list {
    display: flex;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 2px;
    }

    &::-webkit-scrollbar-track {
      background: #efeef3;
      border-radius: 0;
    }

    &::-webkit-scrollbar-thumb {
      background: #01a3ec;
      border-radius: 0;
    }

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 320px;
      height: 204px;
      margin-right: 30px;

      @media only screen and (max-width: 580px) {
        min-width: 160px;
        height: 100px;
        margin-right: 12px;
      }

      &:last-child {
        margin-right: 0;
      }

      &__title {
        font-weight: normal;
        font-size: 14px;
        letter-spacing: 0.01em;
        line-height: 16px;
      }

      &__image {
        width: 100%;
        height: 42px;
        object-fit: contain;
        margin-bottom: 10px;

        @media only screen and (max-width: 580px) {
          height: 22px;
        }
      }
    }
  }
}
</style>
