<template>
  <div class="section section--history" v-if="props.data">
    <div
      class="section--history__inner"
      v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
    >
      <template v-for="item in getRepeaterByReferenceName(props.data, 'list')">
        <div
          class="section--history__text"
          v-html="getByReferenceName(item, 'text')"
          v-if="
            isAvailableGroup(item, 'item') &&
            getByReferenceName(item, 'text') !== null
          "
        />
        <div
          class="section--history__info"
          v-else-if="isAvailableGroup(item, 'info')"
        >
          <p
            class="section--history__info__text"
            v-if="getByReferenceName(item, 'text') !== null"
          >
            {{ getByReferenceName(item, "text") }}
          </p>
          <img
            src="@/assets/images/history-line.svg"
            alt="Line"
            class="section--history__info__image"
          />
          <p
            class="section--history__info__date"
            v-if="getByReferenceName(item, 'date') !== null"
          >
            {{ getByReferenceName(item, "date") }}
          </p>
        </div>
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
</script>

<style lang="scss">
.section--history {
  display: flex;
  padding-top: 200px;
  color: $color-white;
  background: #023a52;

  @media only screen and (max-width: 1060px) {
    padding: 200px 20px 0 20px;
  }

  @media only screen and (max-width: 865px) {
    padding: 50px 20px 0 20px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 200px;

    @media only screen and (max-width: 865px) {
      margin-bottom: 34px;
    }

    h3 {
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      max-width: 906px;
      width: 100%;
      margin: 0 auto 50px auto;

      @media only screen and (max-width: 865px) {
        font-size: 24px;
        line-height: 30px;
        margin: 0 auto 20px auto;
      }
    }

    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      max-width: 906px;
      width: 100%;
      margin: 0 auto;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 60px;

    @media only screen and (max-width: 865px) {
      margin-top: 176px;
    }

    &__text {
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      max-width: 588px;
      width: 100%;
      margin: 0 auto;
    }

    &__image {
      width: 100%;
      height: 100px;
      margin-top: 30px;

      @media only screen and (max-width: 865px) {
        height: 80px;
        object-fit: cover;
        margin-top: 140px;
        width: calc(100% - 50px);
      }
    }

    &__date {
      font-family: Arial;
      font-weight: normal;
      font-size: 200px;
      line-height: 138px;
      text-align: center;
      margin: 80px auto 0 auto;

      @media only screen and (max-width: 865px) {
        font-size: 80px;
        line-height: 54px;
      }
    }
  }
}
</style>
