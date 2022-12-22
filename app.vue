<template>
  <div :class="['app']">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";
import { watch } from "vue";
import { parsePath } from "@/helpers/persistenceStorage";
import { contentRefs, contentWalk } from "@/helpers/contentReference";
import { pageContent } from "@/helpers/content";
import useData from "@/helpers/data";
import { Content } from "@/types";

const commonStore = useCommonStore();
const isOpenMobileMenu = computed(() => commonStore.isOpenMobileMenu);
const isOpenSearchPopup = computed(() => commonStore.isOpenSearchPopup);
const isOpenLanguagesPopup = computed(() => commonStore.isOpenLanguagesPopup);
const isOpenSharePopup = computed(() => commonStore.isOpenSharePopup);
const isOpenChangePopup = computed(() => commonStore.isOpenChangePopup);
const isOpenFilterPopup = computed(() => commonStore.isOpenFilterPopup);

watch(
  [
    isOpenMobileMenu,
    isOpenSearchPopup,
    isOpenLanguagesPopup,
    isOpenSharePopup,
    isOpenChangePopup,
    isOpenFilterPopup,
  ],
  (
    [
      valueMobileMenu,
      valueSearchPopup,
      valueLanguagesPopup,
      valueSharePopup,
      valueChangePopup,
      valueFilterPopup,
    ],
    []
  ) => {
    if (
      valueMobileMenu ||
      valueSearchPopup ||
      valueLanguagesPopup ||
      valueSharePopup ||
      valueChangePopup ||
      valueFilterPopup
    ) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
);

const route = useRoute();
const router = useRouter();

const content = useData<Content[]>("content", "content_group.contents");
useData("languages", "languages");

router.afterEach((to, from) => {
  let slugs = parsePath(to.fullPath);

  if (content.value) getCurrentPage(content.value, slugs);
});

onMounted(() => {
  let slugs = parsePath(route.fullPath);

  if (content.value) getCurrentPage(content.value, slugs);
});

function getCurrentPage(content: Content[], slugs: string[]) {
  let currentPage = pageContent(content, slugs);
  let contentReference = contentRefs;

  contentWalk(content, null);

  if (currentPage) {
    useState("contentReference", () => contentReference);
    useState(currentPage.slug, () => currentPage);
  }
}
</script>

<style lang="scss">
@import "~/assets/styles/main.scss";
</style>
