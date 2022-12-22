<template>
  <div
    :class="[
      'section section--product-news-article-back',
      {
        'section--product-news-article-back--title': getByReferenceName(
          props.data,
          'title'
        ),
      },
      {
        'section--product-news-article-back--extensions': getByReferenceName(
          props.data,
          'is_resources'
        ),
      },
    ]"
    v-if="props.data"
  >
    <div class="container">
      <div class="section--product-news-article-back__inner">
        <h2
          class="section--product-news-article-back__title"
          v-if="getByReferenceName(props.data, 'title') !== null"
        >
          {{ getByReferenceName(props.data, "title") }}
        </h2>
        <NuxtLink
          :to="`${getByReferenceName(props.data, 'link')}`"
          class="btn btn--back"
          v-if="getByReferenceName(props.data, 'link') !== null"
        >
          <img src="@/assets/images/arrow-left.svg" alt="Left Arrow" />
          <span>Back</span>
          <span v-if="getByReferenceName(props.data, 'is_resources')">
            {{ getByReferenceName(props.data, "resource_name") }}
          </span>
        </NuxtLink>
        <button class="btn btn--secondary" @click="setSharePopup(true)">
          Share
        </button>
        <template v-if="getByReferenceName(props.data, 'is_resources')">
          <NuxtLink
            :to="`${getByReferenceName(props.data, 'link_file')}`"
            class="btn btn--primary btn--primary-small"
            download
            v-if="getByReferenceName(props.data, 'link_file') !== null"
          >
            Download
          </NuxtLink>
          <img
            :src="`${getByReferenceName(props.data, 'resource_image')?.url}`"
            :alt="`${
              getByReferenceName(props.data, 'resource_image')?.description
            }`"
            v-if="getByReferenceName(props.data, 'resource_image') !== null"
            class="section--product-news-article-back__img-extension"
          />
        </template>
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

const commonStore = useCommonStore();

const setSharePopup = (value: boolean) => {
  commonStore.setOpeningSharePopup(value);
};
</script>

<style lang="scss">
.section--product-news-article-back {
  display: flex;
  background: #f2f5f7;
  padding: 50px 0 100px 0;

  @media only screen and (max-width: 1220px) {
    padding: 30px 0;
  }

  &--title {
    padding: 100px 0 50px 0;

    @media only screen and (max-width: 1220px) {
      padding: 30px 0;
    }

    .section--product-news-article-back__inner {
      flex-wrap: wrap;

      @media only screen and (max-width: 865px) {
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: flex-start;
        position: relative;

        .section--product-news-article-back__title {
          margin-bottom: 20px;
        }

        .btn--back {
          margin-bottom: 30px;
        }

        .btn--secondary {
          margin-left: 0;
          margin-bottom: 10px;
        }

        .btn--primary {
          margin: 0;
        }

        .section--product-news-article-back__img-extension {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  }

  &--extensions {
    @media only screen and (max-width: 865px) {
      .section--product-news-article-back__inner {
        flex-direction: column;
        align-items: flex-start;
        position: relative;

        .btn--back {
          margin-bottom: 30px;
        }

        .btn--secondary {
          margin-left: 0;
          margin-bottom: 10px;
        }

        .btn--primary {
          margin: 0;
        }

        .section--product-news-article-back__img-extension {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    max-width: 906px;
    width: 100%;
    margin: 0 auto;

    @media only screen and (max-width: 420px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .btn--back {
      @media only screen and (max-width: 420px) {
        margin-bottom: 40px;
      }
      span {
        &:nth-child(3) {
          margin-left: 20px;
          position: relative;

          &::after {
            content: "|";
            font-weight: 600;
            font-size: 16px;
            line-height: 18px;
            position: absolute;
            top: 50%;
            left: -12px;
            transform: translateY(-50%);
            color: #babec1;
          }
        }
      }
    }

    .btn--secondary {
      margin-left: auto;

      @media only screen and (max-width: 420px) {
        margin: 0 auto;
      }
    }

    .btn--primary {
      margin-left: 10px;
      margin-right: 30px;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    width: 100%;
    margin-bottom: 50px;
  }

  &__img-extension {
    width: 30px;
    height: 40px;
    object-fit: contain;
  }
}
</style>
