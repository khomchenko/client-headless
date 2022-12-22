<template>
  <div class="header" v-if="props.data && props.site?.nested.length! > 0">
    <div class="container">
      <div class="header__inner">
        <NuxtLink
          to="/"
          class="header__logo"
          v-if="getByReferenceName(props.data, 'logo') !== null"
        >
          <img
            :src="`${getByReferenceName(props.data, 'logo')?.url}`"
            alt="Logo"
          />
        </NuxtLink>
        <ul class="header__navigation" v-if="props.site?.nested.length! > 0">
          <li
            class="header__navigation__item"
            v-for="item in props.site?.nested"
          >
            <NuxtLink :to="item.slug" class="header__navigation__item__link">
              <span>{{ item.title }}</span>
              <img
                src="@/assets/images/angle-down.svg"
                alt="Arrow"
                class="header__navigation__item__icon"
                v-if="item.nested && item.nested.length > 0"
              />
            </NuxtLink>
            <template v-if="item.nested && item.nested.length > 0">
              <TheMenuDesktop :data="item.nested" :parentSlug="item.slug" />
            </template>
          </li>
        </ul>
        <NuxtLink
          to="#"
          class="btn btn--profile"
          @click="setChangePopup(true)"
          v-if="Boolean(getByReferenceName(props.data, 'is_profile'))"
        >
          <img src="@/assets/images/profile.svg" alt="Profile" />
        </NuxtLink>
        <button
          class="btn btn--search"
          @click="setSearchPopup(true)"
          v-if="Boolean(getByReferenceName(props.data, 'is_search'))"
        >
          <img src="@/assets/images/search.svg" alt="Search" />
        </button>
        <button
          :class="['btn btn--hamburger', { active: !isOpenMobileMenu }]"
          @click="setMobileMenu(true)"
          v-if="props.site?.nested.length! > 0"
        >
          <img src="@/assets/images/hamburger.svg" alt="Hamburger" />
        </button>
        <button
          :class="['btn btn--close-menu', { active: isOpenMobileMenu }]"
          @click="setMobileMenu(false)"
          v-if="props.site?.nested.length! > 0"
        >
          <img src="@/assets/images/close-menu.svg" alt="Close" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";
import { getByReferenceName } from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
  site: {
    type: Object,
  },
});

const commonStore = useCommonStore();

const isOpenMobileMenu = computed(() => commonStore.isOpenMobileMenu);

const setSearchPopup = (value: boolean) => {
  commonStore.setOpeningSearchPopup(value);
};

const setMobileMenu = (value: boolean) => {
  commonStore.setOpeningMobileMenu(value);
};

const setChangePopup = (value: boolean) => {
  commonStore.setOpeningChangePopup(value);
};
</script>
