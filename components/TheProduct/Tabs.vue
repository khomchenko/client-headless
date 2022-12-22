<template>
  <div
    class="section section--product-tabs"
    v-if="
      props.data && getRepeaterByReferenceName(props.data, 'tabs')?.length > 0
    "
  >
    <div class="container">
      <div class="section--product-tabs__inner">
        <div class="section--product-tabs__list">
          <div
            class="section--product-tabs__list__head"
            v-if="getRepeaterByReferenceName(props.data, 'tabs')?.length > 0"
          >
            <template
              v-for="item in getRepeaterByReferenceName(props.data, 'tabs')"
            >
              <h5
                :class="[
                  'section--product-tabs__list__head__title',
                  { active: setActiveTab(item) },
                ]"
                @click="setTab(item)"
                v-if="getByReferenceName(item, 'title') !== null"
              >
                {{ getByReferenceName(item, "title") }}
              </h5>
            </template>
          </div>
          <template
            v-for="item in getRepeaterByReferenceName(props.data, 'tabs')"
          >
            <div
              class="section--product-tabs__list__body"
              v-if="setActiveTab(item)"
            >
              <div
                class="section--product-tabs__list__description"
                v-html="getByReferenceName(item, 'text')"
                v-if="getByReferenceName(item, 'text') !== null"
              />
              <template
                v-if="getRepeaterByReferenceName(item, 'list')?.length > 0"
              >
                <div
                  class="section--product-tabs__point"
                  v-for="point in getRepeaterByReferenceName(item, 'list')"
                >
                  <p
                    class="section--product-tabs__point__text"
                    v-if="
                      getByReferenceName(point, 'name') !== null ||
                      getByReferenceName(point, 'description') !== null
                    "
                  >
                    <span v-if="getByReferenceName(point, 'name') !== null">
                      {{ getByReferenceName(point, "name") }}
                    </span>
                    <span
                      v-if="getByReferenceName(point, 'description') !== null"
                    >
                      {{ getByReferenceName(point, "description") }}
                    </span>
                  </p>
                </div>
              </template>
            </div>
          </template>
        </div>
        <div class="section--product-tabs__info">
          <h5
            class="section--product-tabs__info__title"
            v-if="getByReferenceName(props.data, 'title') !== null"
          >
            {{ getByReferenceName(props.data, "title") }}
          </h5>
          <ul
            class="section--product-tabs__info__list"
            v-if="getRepeaterByReferenceName(props.data, 'list')"
          >
            <li
              class="section--product-tabs__info__list__item"
              v-for="item in getRepeaterByReferenceName(props.data, 'list')"
            >
              <NuxtLink
                :to="`${resolveListLink(item)}`"
                class="section--product-tabs__info__list__item__link"
                target="_blank"
              >
                <img
                  :src="`${getByReferenceName(item, 'image')?.url}`"
                  :alt="`${getByReferenceName(item, 'image')?.description}`"
                  v-if="getByReferenceName(item, 'image') !== null"
                  class="section--product-tabs__info__list__item__icon"
                />
                <div
                  class="section--product-tabs__info__list__item__block"
                  v-if="
                    getByReferenceName(item, 'title') !== null ||
                    getByReferenceName(item, 'text') !== null
                  "
                >
                  <p
                    class="section--product-tabs__info__list__item__text"
                    v-if="getByReferenceName(item, 'title') !== null"
                  >
                    {{ getByReferenceName(item, "title") }}
                  </p>
                  <p
                    class="section--product-tabs__info__list__item__sub-text"
                    v-if="getByReferenceName(item, 'text') !== null"
                  >
                    {{ getByReferenceName(item, "text") }}
                  </p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getMediaField,
  getStringField,
  getByReferenceName,
  getRepeaterByReferenceName,
} from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup, FieldState } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});

const tab: { name: string } = reactive({ name: "" });

const setTab = (field: FieldState) => {
  const title = getStringField(field, "title");

  if (title) tab.name = title;
};

const setActiveTab = (field: FieldState) => {
  const title = getStringField(field, "title");

  return tab.name === title;
};

const resolveListLink = (item: FieldState) => {
  return getMediaField(item, "file")?.url ?? getStringField(item, "link");
};

onMounted(() => {
  if (props.data) {
    let list = getRepeaterByReferenceName(toRaw(props.data), "tabs");

    let title: string;

    if (list) {
      title = getByReferenceName(list[0], "title");

      if (title) tab.name = title;
    }
  }
});
</script>

<style lang="scss">
.section--product-tabs {
  display: flex;
  padding: 30px 0;

  & + .section {
    padding-top: 0;
  }

  @media only screen and (max-width: 865px) {
    .container {
      padding: 0;
    }
  }

  &__inner {
    display: flex;

    @media only screen and (max-width: 865px) {
      flex-direction: column;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    max-width: 672px;
    width: 100%;
    background: #f2f5f7;
    padding: 50px;
    margin-right: 30px;

    @media only screen and (max-width: 865px) {
      max-width: 100%;
      padding: 32px 20px 20px 20px;
      margin-right: 0;
      margin-bottom: 30px;
    }

    &__head {
      display: flex;

      &__title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 0.01em;
        line-height: 24px;
        text-transform: uppercase;
        max-width: 286px;
        width: 100%;
        padding-bottom: 31px;
        border-bottom: 3px solid #babec1;
        cursor: pointer;

        @media only screen and (max-width: 865px) {
          max-width: 100%;
          padding-bottom: 20px;
        }

        &.active {
          border-bottom: 3px solid #01a3ec;
        }
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      padding-top: 26px;
      color: $color-black;

      @media only screen and (max-width: 865px) {
        padding-top: 10px;
      }
    }

    &__description {
      p {
        margin: 20px 0;
      }

      ul {
        list-style: none;
        padding: 20px 0 10px 20px;

        li {
          line-height: 20px;
          margin-bottom: 20px;
          position: relative;

          &::before {
            content: "▪";
            position: absolute;
            top: 0;
            left: -20px;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding: 50px;
    max-width: 672px;
    width: 100%;
    background: #437d93;
    color: $color-white;

    @media only screen and (max-width: 865px) {
      max-width: 100%;
      padding: 30px;
    }

    &__title {
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 0.01em;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 50px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      list-style: none;

      &__item {
        display: flex;
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 0;
        }

        &__link {
          display: flex;
          color: inherit;
        }

        &__icon {
          width: 30px;
          height: 40px;
          object-fit: cover;
          margin-right: 20px;
        }

        &__block {
          display: flex;
          flex-direction: column;
        }

        &__text {
          font-weight: bold;
          text-decoration: underline;
          font-size: 16px;
          line-height: 24px;
        }

        &__sub-text {
          font-weight: normal;
          text-decoration: underline;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }

  &__point {
    display: flex;
    padding: 10px 15px;

    &:first-child {
      margin-top: 4px;
    }

    &:nth-child(odd) {
      background: $color-white;
    }

    &:nth-child(even) {
      background: #f2f5f7;
    }

    &__text {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      width: 100%;
      margin: 0;
    }
  }
}
</style>
