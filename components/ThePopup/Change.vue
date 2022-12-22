<template>
  <div
    :class="['popup popup--change', { active: isOpenChangePopup }]"
    v-if="props.data"
  >
    <div class="popup--change__block">
      <div
        class="popup--change__block__image"
        v-if="getByReferenceName(props.data, 'image') !== null"
      >
        <img
          :src="`${getByReferenceName(props.data, 'image')?.url}`"
          :alt="`${getByReferenceName(props.data, 'image')?.description}`"
          v-if="getByReferenceName(props.data, 'image') !== null"
        />
      </div>
      <div class="popup--change__block__info">
        <button class="btn btn--popup-close" @click="setChangePopup(false)">
          <img src="@/assets/images/close-menu.svg" alt="Close" />
        </button>
        <h2
          class="popup--change__block__info__title"
          v-if="getByReferenceName(props.data, 'title') !== null"
        >
          {{ getByReferenceName(props.data, "title") }}
        </h2>
        <h3
          class="popup--change__block__info__sub-title"
          v-if="getByReferenceName(props.data, 'sub_title') !== null"
        >
          {{ getByReferenceName(props.data, "sub_title") }}
        </h3>
        <div
          class="popup--change__block__info__text"
          v-html="getByReferenceName(props.data, 'text')"
          v-if="getByReferenceName(props.data, 'text') !== null"
        />
        <button
          class="btn btn--primary"
          @click="setChangePopup(false)"
          v-if="getByReferenceName(props.data, 'button_text') !== null"
        >
          {{ getByReferenceName(props.data, "button_text") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";
import { getByReferenceName } from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldState } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldState>,
  },
});

const commonStore = useCommonStore();

const isOpenChangePopup = computed(() => commonStore.isOpenChangePopup);

const setChangePopup = (value: boolean) => {
  commonStore.setOpeningChangePopup(value);
};

onMounted(() => {
  setTimeout(() => {
    setChangePopup(true);
  }, 3000);
});
</script>

<style lang="scss">
.popup--change {
  display: flex;
  flex-direction: column;
  background: #13181fe8;

  &__block {
    display: flex;
    align-items: center;
    max-width: 1374px;
    width: 100%;
    background: $color-white;
    color: #13181f;
    margin: 0 auto;
    position: relative;

    @media only screen and (max-width: 1420px) {
      width: calc(100% - 40px);
    }

    @media only screen and (max-width: 760px) {
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: #f2f5f7;
    }

    .btn--popup-close {
      @media only screen and (max-width: 1420px) {
        top: 20px;
        right: 20px;
      }

      @media only screen and (max-width: 760px) {
        img {
          width: 15px;
          height: 24px;
          filter: none;
        }
      }
    }

    &__image {
      display: flex;
      max-width: 702px;
      width: 100%;
      height: 100%;
      background: $color-white;

      @media only screen and (max-width: 1420px) {
        max-width: 40%;
      }

      @media only screen and (max-width: 760px) {
        max-width: 100%;
        height: 310px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: calc(100% - 702px);
      width: 100%;
      height: 100%;
      background: #f2f5f7;
      padding: 100px 117px;

      @media only screen and (max-width: 1420px) {
        max-width: 60%;
        padding: 50px;
      }

      @media only screen and (max-width: 760px) {
        max-width: 100%;
        height: calc(100% - 310px);
        padding: 42px 20px 30px 20px;
      }

      &__title {
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        margin-bottom: 30px;

        @media only screen and (max-width: 760px) {
          font-size: 24px;
          line-height: 30px;
        }
      }

      &__sub-title {
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 30px;

        @media only screen and (max-width: 760px) {
          margin-bottom: 26px;
        }
      }

      &__text {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
      }

      .btn--primary {
        margin-top: auto;

        @media only screen and (max-width: 760px) {
          max-width: 245px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
