<template>
  <div class="section section--resources-hero" v-if="props.data">
    <div class="container">
      <div
        class="section--resources-hero__inner"
        v-if="getByReferenceName(props.data, 'title') !== null"
      >
        <h1 class="section--resources-hero__title">
          {{ getByReferenceName(props.data, "title") }}
        </h1>
        <div
          class="section--resources-hero__actions"
          v-if="getByReferenceName(props.data, 'is_filter')"
        >
          <div class="section--resources-hero__actions__input">
            <input type="text" placeholder="Search product code or keyword" />
            <button class="btn" @click="search($event)">
              <img src="@/assets/images/search.svg" alt="Search" />
            </button>
            <button
              class="btn section--resources-hero__actions__input__close"
              @click="search($event)"
            >
              <img src="@/assets/images/circle-close.svg" alt="Close" />
            </button>
          </div>
          <button
            class="btn btn--primary btn--primary-small"
            @click="setFilterPopup(true)"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";
import { getByReferenceName } from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});

const search = (event: Event) => {
  const target = event.target as HTMLElement;
  const item = target.closest(".section--resources-hero");
  if (item) item.classList.toggle("is-search");
};

const commonStore = useCommonStore();

const setFilterPopup = (value: boolean) => {
  commonStore.setOpeningFilterPopup(value);
};
</script>

<style lang="scss">
.section--resources-hero {
  display: flex;
  background: #023a52;
  padding: 180px 0 88px 0;
  transition: all 0.3s ease;

  @media only screen and (max-width: 865px) {
    padding: 90px 0 125px 0;
  }

  &.is-search {
    padding: 30px 0;

    @media only screen and (max-width: 865px) {
      padding: 30px 0 40px 0;
    }

    & + .section--resources {
      padding: 30px 0 50px 0;

      @media only screen and (max-width: 865px) {
        padding: 25px 0;
      }

      .btn--secondary {
        display: none;
      }
    }
    .section--resources-hero {
      &__title {
        display: none;
      }

      &__actions {
        &__input {
          input {
            @media only screen and (max-width: 865px) {
              width: 100%;
            }
          }

          .btn {
            display: none;

            &.section--resources-hero__actions__input__close {
              display: flex;
            }
          }
        }
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: bold;
    font-size: 80px;
    line-height: 95px;
    text-align: center;
    color: #fff;
    margin-bottom: 50px;

    @media only screen and (max-width: 865px) {
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 30px;
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
    width: 100%;

    @media only screen and (max-width: 865px) {
      flex-direction: column;
      align-items: center;

      .btn--primary-small {
        max-width: 187px;
      }
    }

    &__input {
      display: flex;
      align-items: center;
      position: relative;
      margin-right: 30px;

      @media only screen and (max-width: 865px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
      }

      input {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        width: 672px;
        height: 40px;
        border-radius: 20px;
        background: #fff;
        color: #13181f;
        border: none;
        outline: none;
        padding: 0 35px 0 20px;
        transition: all 0.3s ease;

        @media only screen and (max-width: 865px) {
          width: 100%;
        }

        &::placeholder {
          color: #13181f;
        }
      }

      .btn {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);

        &.section--resources-hero__actions__input__close {
          display: none;

          &:hover {
            img {
              filter: brightness(0) saturate(100%) invert(46%) sepia(77%)
                saturate(2641%) hue-rotate(169deg) brightness(99%) contrast(99%);
            }
          }

          img {
            width: 14px;
            height: 14px;
            filter: inherit;
          }
        }

        img {
          width: 14px;
          height: 15px;
          filter: brightness(0) saturate(100%) invert(46%) sepia(77%)
            saturate(2641%) hue-rotate(169deg) brightness(99%) contrast(99%);
        }
      }
    }
  }
}
</style>
