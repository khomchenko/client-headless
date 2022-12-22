<template>
  <div class="section section--news-events" v-if="props.data">
    <div class="container">
      <h4
        class="section--news-events__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h4>
      <div
        class="section--news-events__wrap"
        v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
      >
        <template
          v-for="list in getRepeaterByReferenceName(props.data, 'list')"
        >
          <div class="section--news-events__item">
            <img
              :src="getByReferenceName(list, 'image')?.url"
              :alt="getByReferenceName(list, 'image')?.description"
              class="section--news-events__item__image"
              v-if="getByReferenceName(list, 'image') !== null"
            />
            <p
              class="section--news-events__item__info"
              v-if="
                getByReferenceName(list, 'category') !== null ||
                getByReferenceName(list, 'date') !== null
              "
            >
              <span v-if="getByReferenceName(list, 'category') !== null">
                {{ getByReferenceName(list, "category") }}
              </span>
              <span v-if="getByReferenceName(list, 'date') !== null">
                {{ getByReferenceName(list, "date") }}
              </span>
            </p>
            <NuxtLink
              :to="`${getContentReference(list, 'link')}`"
              class="section--news-events__item__link"
              v-if="getContentReference(list, 'link') !== null"
            >
              {{ getByReferenceName(list, "text") }}
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
.section--news-events {
  display: flex;
  padding: 50px 0 100px 0;
  background: $color-white;

  @media only screen and (max-width: 980px) {
    padding: 0 0 40px 0;

    .btn.btn--secondary {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 560px) {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 225px;
      background: #ffffff;
      z-index: -1;
    }
  }

  &__heading {
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    margin: 62px 0 23px 0;

    @media only screen and (max-width: 640px) {
      font-size: 30px;
      line-height: 35px;
      margin: 60px 0 33px 0;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.01em;
    line-height: 24px;
    margin-bottom: 30px;
    text-transform: uppercase;

    @media only screen and (max-width: 980px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__filter {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;

    @media only screen and (max-width: 980px) {
      margin: 27px 0 20px 0;
    }

    @media only screen and (max-width: 640px) {
      flex-direction: column;
    }

    &__input {
      max-width: 382px;
      width: 100%;
      height: 40px;
      position: relative;

      @media only screen and (max-width: 640px) {
        margin-bottom: 20px;
      }

      input {
        width: inherit;
        height: inherit;
        border-radius: 20px;
        background: $color-white;
        border: 1px solid #d1d5db;
        padding: 0 20px;
        outline: none;
        transition: all 0.3s ease;

        &::placeholder {
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          color: $color-black;
        }

        &:focus {
          border: 1px solid #01a3ec;
        }
      }

      img {
        width: 14px;
        height: 14px;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        filter: brightness(0) saturate(100%) invert(51%) sepia(97%)
          saturate(2743%) hue-rotate(168deg) brightness(97%) contrast(99%);
      }
    }
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  &__item {
    display: flex;
    flex-direction: column;
    max-width: 438px;
    width: 100%;
    margin: 0 30px 50px 0;

    &:last-child {
      margin: 0;
    }

    @media only screen and (min-width: 1420px) {
      &:nth-child(3n) {
        margin-right: 0;
      }
    }

    @media only screen and (max-width: 1420px) {
      max-width: unset;
      width: calc(33.33% - 30px);
    }

    @media only screen and (max-width: 1120px) {
      width: calc(50% - 15px);

      &:nth-child(2n) {
        margin-right: 0;
      }
    }

    @media only screen and (max-width: 980px) {
      max-width: 100%;
      width: 100%;
      margin: 0 0 20px 0;
    }

    &__image {
      max-width: 100%;
      width: 100%;
      height: 228px;
      object-fit: cover;
      margin-bottom: 20px;

      @media only screen and (max-width: 980px) {
        height: 230px;
      }
    }

    &__video {
      max-width: 100%;
      width: 100%;
      height: 228px;
      margin-bottom: 20px;
      position: relative;

      @media only screen and (max-width: 980px) {
        height: 230px;
      }

      img {
        width: inherit;
        height: inherit;
        object-fit: cover;
      }

      .play {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &__info {
      display: flex;
      margin-bottom: 20px;
      @include heading-primary;

      @media only screen and (max-width: 980px) {
        margin-bottom: 10px;
      }

      span {
        text-transform: uppercase;
        margin-right: 20px;
        position: relative;

        &:last-child {
          margin-right: 0;

          &::before {
            content: "|";
            @include heading-primary;
            color: #babec1;
            position: absolute;
            left: -12px;
          }
        }

        &:first-child {
          &::before {
            content: none;
          }
        }
      }
    }

    &__link {
      font-weight: normal;
      font-size: 18px;
      letter-spacing: 0.01em;
      line-height: 24px;
      text-decoration: none;
      color: $color-black;
      transition: all 0.3s ease;

      @media only screen and (max-width: 980px) {
        font-size: 16px;
        line-height: 22px;
      }

      &:hover {
        color: #01a3ec;
      }
    }
  }
}
</style>
