<template>
  <div class="section section--clipboard-copy" v-if="props.data">
    <div class="section--clipboard-copy__inner">
      <template v-for="item in getRepeaterByReferenceName(props.data, 'list')">
        <NuxtLink
          :to="`${getByReferenceName(item, 'first_link')}`"
          class="btn btn--primary"
          v-if="
            isAvailableGroup(item, 'links') &&
            Boolean(getByReferenceName(item, 'first_link'))
          "
        >
          <img src="@/assets/images/arrow-up-right.svg" alt="Arrow" />
          <span>{{ getByReferenceName(item, "first_link_text") }}</span>
        </NuxtLink>
        <p
          class="section--clipboard-copy__text"
          v-if="
            isAvailableGroup(item, 'info') &&
            Boolean(getByReferenceName(item, 'first_text'))
          "
        >
          {{ getByReferenceName(item, "first_text") }}
        </p>
        <div
          class="section--clipboard-copy__block"
          v-if="
            isAvailableGroup(item, 'code') &&
            Boolean(getByReferenceName(item, 'code_text'))
          "
        >
          <input
            type="text"
            class="section--clipboard-copy__block__input"
            readonly
            :value="`${getByReferenceName(item, 'code_text')}`"
          />
          <button
            class="section--clipboard-copy__block__btn"
            @click="copy($event)"
          >
            Copy
          </button>
        </div>
        <p
          class="section--clipboard-copy__text"
          v-if="
            isAvailableGroup(item, 'info') &&
            Boolean(getByReferenceName(item, 'second_text'))
          "
        >
          {{ getByReferenceName(item, "second_text") }}
        </p>
        <NuxtLink
          :to="`${getByReferenceName(item, 'second_link')}`"
          class="btn btn--secondary"
          v-if="
            isAvailableGroup(item, 'links') &&
            Boolean(getByReferenceName(item, 'second_link'))
          "
        >
          <img src="@/assets/images/arrow-up-right.svg" alt="Arrow" />
          <span v-if="getByReferenceName(item, 'second_link_text')">
            {{ getByReferenceName(item, "second_link_text") }}
          </span>
        </NuxtLink>
        <NuxtLink
          :to="`${getByReferenceName(item, 'third_link')}`"
          class="btn btn--secondary"
          v-if="
            isAvailableGroup(item, 'links') &&
            Boolean(getByReferenceName(item, 'third_link'))
          "
        >
          <img src="@/assets/images/arrow-up-right.svg" alt="Arrow" />
          <span v-if="getByReferenceName(item, 'third_link_text')">
            {{ getByReferenceName(item, "third_link_text") }}
          </span>
        </NuxtLink>
      </template>
    </div>
  </div>
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
});

const copy = (event: Event) => {
  const target = event.target as HTMLElement;
  const input = target.previousSibling as HTMLInputElement;

  if (input) {
    input.select();
    navigator.clipboard.writeText(input.value);
  }
};
</script>

<style lang="scss">
.section--clipboard-copy {
  display: flex;
  padding-bottom: 80px;

  @media only screen and (max-width: 865px) {
    padding-bottom: 30px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 794px;
    width: 100%;
    margin: 0 auto;

    @media only screen and (max-width: 865px) {
      padding: 0 20px;
    }
  }

  &__text {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
  }

  &__block {
    display: flex;
    align-items: center;
    max-width: 372px;
    width: 100%;
    height: 60px;
    border-radius: 3px;
    background: #f2f5f7;
    border: 1px solid #d1d5db;
    margin-bottom: 30px;

    &__input {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0.1em;
      line-height: 20px;
      text-transform: uppercase;
      border: none;
      outline: none;
      background: transparent;
      padding-left: 112px;

      @media only screen and (max-width: 470px) {
        width: 100%;
        padding: 0 16px;
      }
    }

    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 80px;
      width: 100%;
      height: 30px;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      text-transform: uppercase;
      border-radius: 3px;
      border: 1px solid transparent;
      background: #01a3ec;
      outline: none;
      margin: 0 15px 0 auto;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        color: #01a3ec;
        background: transparent;
        border: 1px solid #01a3ec;
      }
    }
  }

  .btn--primary {
    max-width: 278px;
    margin-bottom: 50px;

    @media only screen and (max-width: 865px) {
      margin-bottom: 30px;
    }

    &:hover {
      img {
        filter: brightness(0) saturate(100%) invert(45%) sepia(95%)
          saturate(1998%) hue-rotate(168deg) brightness(98%) contrast(99%);
      }
    }

    img {
      width: 12px;
      height: 14px;
      margin-right: 12px;
    }
  }

  .btn--secondary {
    border: 1px solid #d1d5db;
    max-width: 100%;
    margin-bottom: 10px;

    @media only screen and (max-width: 865px) {
      font-size: 12px;
      line-height: 14px;
    }

    &:hover {
      img {
        filter: brightness(0) saturate(100%) invert(100%) sepia(93%)
          saturate(27%) hue-rotate(29deg) brightness(106%) contrast(108%);
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    img {
      width: 12px;
      height: 14px;
      margin-right: 12px;
      filter: brightness(0) saturate(100%) invert(7%) sepia(15%) saturate(1179%)
        hue-rotate(175deg) brightness(96%) contrast(94%);
    }
  }
}
</style>
