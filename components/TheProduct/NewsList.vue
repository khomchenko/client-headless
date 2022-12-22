<template>
  <div class="section section--news-events" v-if="props.data">
    <div class="container">
      <div class="section--news-events__inner">
        <h3
          class="section--news-events__heading"
          v-if="getByReferenceName(props.data, 'title') !== null"
        >
          {{ getByReferenceName(props.data, "title") }}
        </h3>
        <div
          class="section--news-events__filter"
          v-if="getByReferenceName(props.data, 'is_filter')"
        >
          <div class="section--news-events__filter__input">
            <input type="text" placeholder="Search product code or keyword" />
            <img src="@/assets/images/search.svg" alt="Search" />
          </div>
          <button
            class="btn btn--primary btn--primary-small"
            @click="setFilterPopup(true)"
          >
            Filter
          </button>
        </div>
        <div
          class="section--news-events__wrap"
          v-if="getRepeaterByReferenceName(props.data, 'list')?.length > 0"
        >
          <template
            v-for="item in getRepeaterByReferenceName(props.data, 'list')"
          >
            <div
              class="section--news-events__item"
              v-if="
                getByReferenceName(item, 'video_link') !== null ||
                getByReferenceName(item, 'image') !== null
              "
            >
              <NuxtLink
                :to="`${getByReferenceName(item, 'video_link')}`"
                class="section--news-events__item__video"
                v-if="getByReferenceName(item, 'is_link')"
              >
                <img
                  :src="`${getByReferenceName(item, 'image')?.url}`"
                  :alt="`${getByReferenceName(item, 'image')?.description}`"
                  v-if="getByReferenceName(item, 'image') !== null"
                />
                <img
                  src="@/assets/images/video-play.svg"
                  alt="Play"
                  class="play"
                />
              </NuxtLink>
              <img
                :src="`${getByReferenceName(item, 'image')?.url}`"
                :alt="`${getByReferenceName(item, 'image')?.description}`"
                class="section--news-events__item__image"
                v-else
              />
              <p
                class="section--news-events__item__info"
                v-if="
                  getByReferenceName(item, 'category') !== null ||
                  getByReferenceName(item, 'date') !== null
                "
              >
                <span v-if="getByReferenceName(item, 'category') !== null">
                  {{ getByReferenceName(item, "category") }}
                </span>
                <span v-if="getByReferenceName(item, 'date') !== null">{{
                  getByReferenceName(item, "date")
                }}</span>
              </p>
              <NuxtLink
                :to="`${getByReferenceName(item, 'link')}`"
                class="section--news-events__item__link"
                v-if="getByReferenceName(item, 'link') !== null"
              >
                {{ getByReferenceName(item, "link_text") }}
              </NuxtLink>
            </div>
          </template>
        </div>
        <button class="btn btn--secondary">View more</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";
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

const commonStore = useCommonStore();

const setFilterPopup = (value: boolean) => {
  commonStore.setOpeningFilterPopup(value);
};
</script>
