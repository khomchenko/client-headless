<template>
  <div class="footer" v-if="props.data">
    <div class="container">
      <div
        class="footer__inner"
        v-if="
          getRepeaterByReferenceName(props.data, 'list')
            ?.length! > 0
        "
      >
        <template
          v-for="list in getRepeaterByReferenceName(props.data, 'list')"
        >
          <div class="footer__block" v-if="isAvailableGroup(list, 'block')">
            <div
              class="footer__block__text"
              v-html="getByReferenceName(list, 'text')"
              v-if="getByReferenceName(list, 'text')"
            />
            <ul v-if="getRepeaterByReferenceName(list, 'list')?.length! > 0">
              <li v-for="menu in getRepeaterByReferenceName(list, 'list')">
                <template v-if="getContentReference(menu, 'link') !== null">
                  <NuxtLink :to="`${getContentReference(menu, 'link')}`">
                    {{ getByReferenceName(menu, "link").title }}
                  </NuxtLink>
                </template>
              </li>
            </ul>
            <div
              class="footer__block__social"
              v-if="
                getRepeaterByReferenceName(list, 'social')
                  ?.length! > 0
              "
            >
              <template
                v-for="social in getRepeaterByReferenceName(list, 'social')"
              >
                <NuxtLink
                  :to="`${getByReferenceName(social, 'link')}`"
                  class="footer__block__social__link"
                  v-if="getByReferenceName(social, 'link')"
                >
                  <img
                    :src="getByReferenceName(social, 'image').url"
                    :alt="getByReferenceName(social, 'image').description"
                    v-if="getByReferenceName(social, 'image') !== null"
                  />
                </NuxtLink>
              </template>
            </div>
          </div>
          <div
            class="footer__navbar"
            v-else-if="isAvailableGroup(list, 'navbar')"
          >
            <img
              :src="getByReferenceName(list, 'logo').url"
              :alt="getByReferenceName(list, 'logo').description"
              class="footer__navbar__logo"
              v-if="getByReferenceName(list, 'logo') !== null"
            />
            <p
              class="footer__navbar__copyright"
              v-if="getByReferenceName(list, 'copyright')"
            >
              {{ getByReferenceName(list, "copyright") }}
            </p>
            <ul
              class="footer__navbar__list"
              v-if="
                getRepeaterByReferenceName(list, 'list')
                  ?.length! > 0
              "
            >
              <template
                v-for="menu in getRepeaterByReferenceName(list, 'list')"
              >
                <template v-if="getContentReference(menu, 'link') !== null">
                  <li class="footer__navbar__list__item">
                    <NuxtLink
                      :to="`${getContentReference(menu, 'link')}`"
                      class="footer__navbar__list__item__link"
                    >
                      {{ getByReferenceName(menu, "link").title }}
                    </NuxtLink>
                  </li>
                </template>
              </template>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getByReferenceName,
  getRepeaterByReferenceName,
  getContentReference,
  isAvailableGroup,
} from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});
</script>
