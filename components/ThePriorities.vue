<template>
  <div class="section section--priorities" v-if="props.data">
    <div class="container">
      <h4
        class="section--priorities__title"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        {{ getByReferenceName(props.data, "title") }}
      </h4>
      <div class="section--priorities__tabs">
        <div class="section--priorities__tabs__list">
          <template
            v-for="item in getRepeaterByReferenceName(props.data, 'list')"
          >
            <h3
              :class="[
                'section--priorities__tabs__list__title',
                {
                  active: setActiveTab(item),
                },
              ]"
              @click="setTab(item)"
              v-if="getByReferenceName(item, 'title') !== null"
            >
              {{ getByReferenceName(item, "title") }}
            </h3>
          </template>
          <template
            v-for="item in getRepeaterByReferenceName(props.data, 'list')"
          >
            <template v-if="getByReferenceName(item, 'image') !== null">
              <img
                :src="`${getByReferenceName(item, 'image').url}`"
                :alt="`${getByReferenceName(item, 'image').description}`"
                class="section--priorities__tabs__list__image"
                v-if="
                  setActiveTab(item) &&
                  getByReferenceName(item, 'image') !== null
                "
              />
            </template>
          </template>
        </div>
        <div class="section--priorities__tabs__wrap">
          <template
            v-for="item in getRepeaterByReferenceName(props.data, 'list')"
          >
            <template v-if="getByReferenceName(item, 'title') !== null">
              <div
                :class="[
                  'section--priorities__tabs__tab',
                  { active: setActiveTab(item) },
                ]"
              >
                <div
                  class="section--priorities__tabs__tab__text"
                  v-html="getByReferenceName(item, 'text')"
                  v-if="getByReferenceName(item, 'text') !== null"
                />
                <template v-if="getRepeaterByReferenceName(item, 'links')">
                  <template
                    v-for="link in getRepeaterByReferenceName(item, 'links')"
                  >
                    <NuxtLink
                      :to="`${getByReferenceName(link, 'url')}`"
                      class="section--priorities__tabs__tab__link"
                      v-if="getByReferenceName(link, 'url') !== null"
                    >
                      <span v-if="getByReferenceName(link, 'text') !== null">{{
                        getByReferenceName(link, "text")
                      }}</span>
                      <img src="@/assets/images/arrow-right.svg" alt="Arrow" />
                    </NuxtLink>
                  </template>
                </template>
                <img
                  :src="`${getByReferenceName(item, 'image').url}`"
                  :alt="`${getByReferenceName(item, 'image').description}`"
                  class="section--priorities__tabs__tab__image"
                  v-if="getByReferenceName(item, 'image') !== null"
                />
              </div>
            </template>
          </template>
        </div>
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
import { FieldGroup, FieldState } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});

const tab: { name: string } = reactive({ name: "" });

const setTab = (field: FieldState) => {
  let title: string;
  title = getByReferenceName(field, "title");

  if (title) tab.name = title;
};

const setActiveTab = (field: FieldState) => {
  let title: string;
  title = getByReferenceName(field, "title");

  return tab.name === title;
};

onMounted(() => {
  if (props.data) {
    let list = getRepeaterByReferenceName(toRaw(props.data), "list");

    let title: string;

    if (list) {
      title = getByReferenceName(list[0], "title");

      if (title) tab.name = title;
    }
  }
});
</script>

<style lang="scss">
.section--priorities {
  display: flex;
  padding: 30px 0 150px 0;

  @media only screen and (max-width: 1060px) {
    padding: 40px 0 60px 0;
  }

  @media only screen and (max-width: 865px) {
    padding: 40px 0 20px 0;
  }

  &__title {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.01em;
    line-height: 24px;
    text-transform: uppercase;
    color: #01a3ec;
    margin-bottom: 56px;
    cursor: pointer;

    @media only screen and (max-width: 1060px) {
      margin-bottom: 30px;
    }
  }

  &__tabs {
    display: flex;

    &__list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 760px;
      width: 100%;
      margin-right: 60px;

      @media only screen and (max-width: 1220px) {
        max-width: 50%;
        margin-right: 30px;
      }

      @media only screen and (max-width: 865px) {
        display: none;
      }

      &__title {
        font-weight: 900;
        font-size: 80px;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        line-height: 94px;
        color: #babec1;
        opacity: 0.3;
        margin-bottom: 10px;
        cursor: pointer;

        @media only screen and (max-width: 1220px) {
          font-size: 60px;
          line-height: 70px;
        }

        @media only screen and (max-width: 1060px) {
          font-size: 40px;
          line-height: 47px;
        }

        &:last-child {
          margin-bottom: 0;
        }

        &.active {
          color: #023a52;
          opacity: 1;
        }
      }

      &__image {
        max-width: 556px;
        width: 100%;
        height: 382px;
        object-fit: cover;
        margin-top: 50px;
        margin-left: 116px;

        @media only screen and (max-width: 1220px) {
          margin-left: 0;
        }
      }
    }

    &__wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 438px;
      width: 100%;

      @media only screen and (max-width: 1220px) {
        max-width: 50%;
      }

      @media only screen and (max-width: 865px) {
        max-width: 100%;
      }
    }

    &__tab {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #023a52;

      @media only screen and (max-width: 865px) {
        margin-bottom: 40px;
      }

      &:not(.active) {
        display: none;

        @media only screen and (max-width: 865px) {
          display: flex;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      &__text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3 {
          display: none;

          @media only screen and (max-width: 865px) {
            display: flex;
            font-weight: 900;
            font-size: 30px;
            letter-spacing: 0.01em;
            line-height: 35px;
            text-transform: uppercase;
            margin-bottom: 30px;
          }
        }

        h4 {
          font-weight: bold;
          font-size: 36px;
          line-height: 42px;
          margin-bottom: 30px;

          @media only screen and (max-width: 865px) {
            font-size: 24px;
            line-height: 30px;
            margin-bottom: 20px;
          }
        }

        p {
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 30px;

          @media only screen and (max-width: 865px) {
            margin-bottom: 20px;
          }

          strong {
            font-weight: bold;
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 30px;

            @media only screen and (max-width: 865px) {
              margin-bottom: 20px;
            }
          }
        }
      }

      &__image {
        display: none;

        @media only screen and (max-width: 865px) {
          display: flex;
          max-width: 100%;
          width: 100%;
          height: 230px;
          object-fit: cover;
          margin-top: 20px;
        }
      }

      &__link {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #023a52;
        text-decoration: none;
        margin-bottom: 10px;

        &:hover {
          img {
            transform: rotate(45deg);
          }
        }

        &:last-child {
          margin-bottom: 0;
        }

        img {
          width: 12px;
          height: 14px;
          filter: brightness(0) saturate(100%) invert(16%) sepia(86%)
            saturate(934%) hue-rotate(165deg) brightness(90%) contrast(98%);
          margin-left: 5px;
          transition: all 0.3s ease;
        }
      }
    }
  }
}
</style>
