<template>
  <swiper
    class="top-swiper"
    :modules="modules"
    :space-between="10"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :loop="false"
    :thumbs="{ swiper: thumbsSwiper }"
  >
    <swiper-slide
      class="slide"
      v-for="item in data"
      :key="JSON.stringify(item)"
    >
      <img
        :src="`${getByReferenceName(item, 'image').url}`"
        :alt="`${getByReferenceName(item, 'image').description}`"
        v-if="getByReferenceName(item, 'image') !== null"
      />
    </swiper-slide>
  </swiper>
  <swiper
    class="thumbs-swiper"
    :breakpoints="swiperOptions.breakpoints"
    :modules="modules"
    :space-between="10"
    :slides-per-view="5"
    :watch-slides-progress="true"
    :loop="false"
    @swiper="setThumbsSwiper"
  >
    <swiper-slide
      class="slide"
      v-for="item in data"
      :key="JSON.stringify(item)"
    >
      <img
        :src="`${getByReferenceName(item, 'image').url}`"
        :alt="`${getByReferenceName(item, 'image').description}`"
        v-if="getByReferenceName(item, 'image') !== null"
      />
    </swiper-slide>
  </swiper>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</template>

<script lang="ts">
import { getByReferenceName } from "@/helpers/persistenceStorage";
import { defineComponent, ref } from "vue";
import SwiperClass, { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default defineComponent({
  name: "swiper-example-thumbs-gallery",
  title: "Thumbs gallery with Two-way control",
  url: import.meta.url,
  props: ["data"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup($prop) {
    const thumbsSwiper = ref<SwiperClass>();
    const setThumbsSwiper = (swiper: SwiperClass) => {
      thumbsSwiper.value = swiper;
    };

    const swiperOptions = reactive({
      breakpoints: {
        0: {
          slidesPerView: $prop.data.length < 5 ? $prop.data.length : 4,
          spaceBetween: 12,
        },
        1220: {
          slidesPerView: $prop.data.length < 6 ? $prop.data.length : 5,
          spaceBetween: 10,
        },
      },
    });

    return {
      modules: [Navigation, Thumbs],
      getByReferenceName,
      setThumbsSwiper,
      thumbsSwiper,
      swiperOptions,
    };
  },
});
</script>
