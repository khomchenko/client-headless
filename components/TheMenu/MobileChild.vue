<template>
  <nav class="menu-mobile__child" v-if="props.data">
    <button class="menu-mobile__child__btn-back" @click="goBack($event)">
      <img src="@/assets/images/angle-left.svg" alt="Arrow" />
      <span>Back</span>
    </button>
    <p class="menu-mobile__child__name">{{ props.parentName }}</p>
    <ul class="menu-mobile__child__list">
      <li class="menu-mobile__child__list__item" v-for="item in props.data">
        <NuxtLink
          :to="'/' + props.parentSlug + '/' + item.slug"
          class="menu-mobile__child__list__item__link"
        >
          {{ item.title }}
        </NuxtLink>
        <template v-if="item.nested && item.nested.length > 0">
          <img
            src="@/assets/images/angle-right.svg"
            alt="Arrow"
            @click="nextMenu($event)"
          />
          <TheMenuMobileChild
            :data="item.nested"
            :parentSlug="props.parentSlug + '/' + item.slug"
            :parentName="item.title"
          />
        </template>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
  },
  parentName: {
    type: String,
  },
  parentSlug: {
    type: String,
  },
});

const nextMenu = (event: Event) => {
  const target = event.target as HTMLElement;
  const item = target.nextSibling as HTMLInputElement;
  if (item) item.classList.add("active");
};

const goBack = (event: Event) => {
  const target = event.target as HTMLElement;
  const item = target.closest(".menu-mobile__child");
  if (item) item.classList.remove("active");
};
</script>
