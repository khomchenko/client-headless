<template>
  <div class="navbar" v-if="props.data">
    <div class="container">
      <div class="navbar__inner">
        <button class="btn btn--language" @click="setLanguagesPopup(true)">
          <img src="@/assets/images/globus.svg" alt="Language" class="icon" />
          <span class="name">{{ props.language?.code }}</span>
        </button>
        <ul class="navbar__list" v-if="isAvailableGroup(props.data, 'navbar')">
          <template
            v-for="item in getRepeaterByReferenceName(props.data, 'list')"
          >
            <li class="navbar__list__item">
              <NuxtLink
                :to="`${getContentReference(item, 'link')}`"
                class="navbar__list__item__link"
                v-if="getByReferenceName(item, 'link') !== null"
              >
                {{ getByReferenceName(item, "link").title }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";
import {
  getByReferenceName,
  getContentReference,
  getRepeaterByReferenceName,
  isAvailableGroup,
} from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
  language: {
    type: Object,
  },
});

const commonStore = useCommonStore();

const setLanguagesPopup = (value: boolean) => {
  commonStore.setOpeningLanguagesPopup(value);
};
</script>
