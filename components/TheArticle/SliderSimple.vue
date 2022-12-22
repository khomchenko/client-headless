<template>
  <swiper class="article__slider" :modules="modules" navigation v-if="data">
    <swiper-slide class="article__slider__slide" v-for="item in data">
      <div class="article__slider__slide__image">
        <img
          :src="`${getByReferenceName(item, 'image').url}`"
          :alt="`${getByReferenceName(item, 'image').description}`"
          v-if="getByReferenceName(item, 'image') !== null"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { getByReferenceName } from "@/helpers/persistenceStorage";

export default defineComponent({
  name: "swiper-example-navigation",
  title: "Navigation",
  props: ["data"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
      getByReferenceName,
    };
  },
});
</script>
