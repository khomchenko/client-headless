<template>
  <div class="section section--contact" v-if="props.data">
    <div class="container">
      <div class="section--contact__inner">
        <div
          class="section--contact__info"
          v-if="getByReferenceName(props.data, 'side_text') !== null"
        >
          <div
            class="section--contact__info__text"
            v-html="getByReferenceName(props.data, 'side_text')"
          />
          <button class="btn btn--primary section--contact__info__btn">
            Get in touch
          </button>
        </div>
        <div class="section--contact__info">
          <div
            class="section--contact__info__text"
            v-html="getByReferenceName(props.data, 'main_text')"
            v-if="getByReferenceName(props.data, 'main_text') !== null"
          />
          <ul
            class="accordion__list"
            v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
          >
            <template
              v-for="item in getRepeaterByReferenceName(props.data, 'list')"
            >
              <li
                class="accordion__list__item"
                v-if="getByReferenceName(item, 'title') !== null"
              >
                <button
                  class="btn accordion__list__item__btn"
                  @click="openAccordionItem($event)"
                >
                  <span>{{ getByReferenceName(item, "title") }}</span>
                  <img src="@/assets/images/angle-down.svg" alt="Angle" />
                </button>
                <div
                  class="accordion__list__item__text"
                  v-html="getByReferenceName(item, 'text')"
                  v-if="getByReferenceName(item, 'text') !== null"
                />
              </li>
            </template>
          </ul>
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
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});

const openAccordionItem = (event: Event) => {
  const target = event.target as HTMLElement;
  const item = target.closest(".accordion__list__item");
  if (item) item.classList.toggle("active");
};
</script>

<style lang="scss">
.section--contact {
  display: flex;
  padding: 112px 0 100px 0;

  @media only screen and (max-width: 1260px) {
    padding: 30px 0;
  }

  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media only screen and (max-width: 1260px) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    color: #13181f;
    text-align: center;
    width: 100%;
    margin-bottom: 80px;

    @media only screen and (max-width: 1260px) {
      margin-bottom: 50px;
    }

    @media only screen and (max-width: 865px) {
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 30px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;

    &:nth-last-child(2) {
      max-width: 382px;
      margin-right: 30px;

      @media only screen and (max-width: 1260px) {
        max-width: 100%;
        margin-right: 0;
        margin-bottom: 30px;
      }
    }

    &:last-child {
      max-width: 794px;

      @media only screen and (max-width: 1260px) {
        max-width: 100%;
      }
    }

    h4 {
      font-weight: bold;
      font-size: 27px;
      line-height: 35px;
      margin-bottom: 40px;

      @media only screen and (max-width: 865px) {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 20px;
      }
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #13181f;

      strong {
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
      }
    }

    a {
      color: #01a3ec;
      text-decoration: underline;
    }

    &__btn {
      max-width: 204px !important;
      margin-top: 30px;
    }
  }
}

.accordion {
  &__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 50px;

    &__item {
      display: flex;
      flex-direction: column;
      height: 82px;
      border-top: 1px solid #d1d5db;
      transition: all 0.3s ease;
      overflow: hidden;

      &:last-child {
        border-bottom: 1px solid #d1d5db;
      }

      &.active {
        height: inherit;

        .accordion__list__item__btn {
          img {
            transform: rotate(-180deg);
          }
        }
      }

      &__btn {
        align-items: center;
        max-width: unset;
        justify-content: space-between;
        width: 100%;
        min-height: 80px;
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;

        img {
          width: 13px;
          height: 15px;
          transition: all 0.3s ease;
        }
      }

      &__text {
        display: flex;
        flex-direction: column;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin-top: 20px;
        margin-bottom: 50px;

        a {
          color: #01a3ec;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
