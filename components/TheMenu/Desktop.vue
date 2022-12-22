<template>
  <nav class="header__navigation__item__child-nav">
    <div class="container">
      <ul class="header__navigation__item__child-nav__list" v-if="props.data">
        <li
          class="header__navigation__item__child-nav__list__item"
          v-for="item in props.data"
        >
          <NuxtLink
            :to="'/' + props.parentSlug + '/' + item.slug"
            class="header__navigation__item__child-nav__list__item__link"
          >
            <span>{{ item.title }}</span>
            <img
              src="@/assets/images/angle-right.svg"
              alt="Arrow"
              v-if="item.nested && item.nested.length > 0"
            />
          </NuxtLink>
          <template v-if="item.nested && item.nested.length > 0">
            <TheMenuDesktopChild
              :data="item.nested"
              :parentSlug="props.parentSlug + '/' + item.slug"
            />
          </template>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
  },
  parentSlug: {
    type: String,
    default: "",
  },
});
</script>
