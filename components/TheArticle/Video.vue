<template>
  <NuxtLink
    :to="`${props.link}`"
    class="article__video"
    v-if="props.link && props.image"
  >
    <img
      :src="`${props.image.url}`"
      :alt="`${props.image.description}`"
      class="article__video__image"
      v-if="props.image !== null"
    />
    <img
      src="@/assets/images/video-play.svg"
      alt="Play"
      class="article__video__icon"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  link: {
    type: String,
  },
  image: {
    type: Object,
  },
});
</script>
