<template>
  <div class="inner">
    <template v-if="data.currentPage">
      <template v-for="field in layout()">
        <TheNotification
          :data="field"
          v-if="isAvailableGroup(field, 'notification')"
        />
        <TheMenuNavBar
          :data="field"
          :language="languages[0]"
          v-else-if="isAvailableGroup(field, 'navbar')"
        />
        <template v-else-if="isAvailableGroup(field, 'header')">
          <BaseHeader :data="field" :site="content[0]" />
          <TheMenuMobile :data="data.currentPage" :site="content[0]" />
        </template>
      </template>
      <slot />
      <template v-for="field in layout()">
        <BaseFooter :data="field" v-if="isAvailableGroup(field, 'footer')" />
        <ThePopupLanguages
          v-else-if="isAvailableGroup(field, 'popup_languages')"
        />
        <ThePopupSearch v-else-if="isAvailableGroup(field, 'popup_search')" />
      </template>

      <template v-for="field in data.currentPage.field_groups">
        <BaseSEO :data="field" v-if="isAvailableGroup(field, 'seo')" />
        <ThePopupChange
          :data="field"
          v-else-if="isAvailableGroup(field, 'popup_change')"
        />
        <ThePopupShare v-else-if="isAvailableGroup(field, 'popup_share')" />
        <ThePopupFilter v-else-if="isAvailableGroup(field, 'popup_filter')" />
      </template>
    </template>

    <template v-if="data.currentPage === undefined">
      <BaseError />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { isAvailableGroup, parsePath } from "@/helpers/persistenceStorage";
import { Content, Language } from "@/types";

const route = useRoute();
const router = useRouter();

let content = useState<Content[]>("content");
let languages = useState<Language[]>("languages");
let data: any = reactive({
  currentPage: null,
});

const layout = () => {
  return content.value.find((item) => item.slug === "/")?.field_groups;
};

router.afterEach((to, from) => {
  data.currentPage = useState<Content>(
    parsePath(to.fullPath).length !== 0
      ? parsePath(to.fullPath).pop()
      : to.fullPath
  );
});

onMounted(() => {
  data.currentPage = useState<Content>(
    parsePath(route.fullPath).length !== 0
      ? parsePath(route.fullPath).pop()
      : route.fullPath
  );
});
</script>
