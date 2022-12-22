<template>
  <nav :class="['menu-mobile', { active: isOpenMobileMenu }]">
    <ul class="menu-mobile__list" v-if="props.site">
      <li class="menu-mobile__list__item" v-for="item in props.site.nested">
        <NuxtLink :to="item.slug" class="menu-mobile__list__item__link">{{
          item.title
        }}</NuxtLink>
        <template v-if="item.nested && item.nested.length > 0">
          <img
            src="@/assets/images/angle-right.svg"
            alt="Arrow"
            @click="nextMenu($event)"
          />
          <TheMenuMobileChild
            :data="item.nested"
            :parentSlug="item.slug"
            :parentName="item.title"
          />
        </template>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";

const props = defineProps({
  site: {
    type: Object,
  },
});

const commonStore = useCommonStore();
const isOpenMobileMenu = computed(() => commonStore.isOpenMobileMenu);

const nextMenu = (event: Event) => {
  const target = event.target as HTMLElement;
  const item = target.nextSibling as HTMLInputElement;
  if (item) item.classList.add("active");
};
</script>

<style lang="scss">
.menu-mobile {
  display: flex;
  flex-direction: column;
  background: $color-white;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% - 160px);
  z-index: 101;
  transform: translateX(-300%);
  transition: all 0.3s ease;

  @media only screen and (max-width: 640px) {
    height: calc(100% - 120px);
  }

  &.active {
    transform: translateX(0);
  }

  &__list {
    display: flex;
    flex-direction: column;
    padding: 30px 20px;

    &__item {
      display: flex;
      justify-content: space-between;
      @include heading-primary;
      padding: 12px 0;

      img {
        width: 9px;
        height: 14px;
        cursor: pointer;
      }

      &__link {
        text-decoration: none;
        color: inherit;
      }
    }
  }
  &__child {
    display: none;
    background: $color-white;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    &.active {
      display: flex;
      flex-direction: column;
    }

    &__btn-back {
      display: flex;
      align-items: center;
      font-family: Raleway;
      @include heading-primary;
      height: 36px;
      border: none;
      padding: 0 20px;
      background: #f2f5f7;

      img {
        margin-right: 5px;
      }
    }

    &__name {
      @include heading-primary;
      padding: 10px 20px;
      background: #f2f5f7;
    }

    &__list {
      display: flex;
      flex-direction: column;
      padding: 14px 0;

      &__item {
        display: flex;
        justify-content: space-between;
        padding: 12px 20px;

        &__link {
          @include heading-primary;
          text-decoration: none;
          color: $color-black;
        }
      }
    }
  }
}
</style>
