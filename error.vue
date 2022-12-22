<template>
  <div
    :class="[
      'app',
      {
        'no-scroll':
          isOpenMobileMenu || isOpenSearchPopup || isOpenLanguagesPopup,
      },
    ]"
  >
    <NuxtLayout>
      <BaseError />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";

const commonStore = useCommonStore();
const isOpenMobileMenu = computed(() => commonStore.isOpenMobileMenu);
const isOpenSearchPopup = computed(() => commonStore.isOpenSearchPopup);
const isOpenLanguagesPopup = computed(() => commonStore.isOpenLanguagesPopup);
</script>
