<template>
  <div class="section section--cta-secondary" v-if="props.data">
    <div class="container">
      <div class="section--cta-secondary__inner">
        <h3
          class="section--cta-secondary__title"
          v-if="getByReferenceName(props.data, 'title') !== null"
        >
          {{ getByReferenceName(props.data, "title") }}
        </h3>
        <div
          class="section--cta-secondary__text"
          v-html="getByReferenceName(props.data, 'text')"
          v-if="getByReferenceName(props.data, 'text') !== null"
        />
        <NuxtLink
          :to="`${getByReferenceName(props.data, 'link')}`"
          class="btn btn--primary"
          v-if="getByReferenceName(props.data, 'link') !== null"
        >
          {{ getByReferenceName(props.data, "link_text") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getByReferenceName } from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});
</script>

<style lang="scss">
.section--cta-secondary {
  display: flex;
  padding: 100px 0;

  @media only screen and (max-width: 865px) {
    padding: 50px 0 40px 0;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 588px;
    margin: 0 auto;
  }

  &__title {
    font-weight: bold;
    font-size: 27px;
    line-height: 35px;
    margin-bottom: 42px;

    @media only screen and (max-width: 865px) {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 30px;
    }
  }

  &__text {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 50px;

    p {
      text-align: center;
    }
  }

  .btn--primary {
    max-width: 320px;

    @media only screen and (max-width: 865px) {
      max-width: 245px;
    }
  }
}
</style>
