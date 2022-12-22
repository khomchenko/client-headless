<template>
  <div class="page">
    <template v-for="field in currentPage?.field_groups">
      <TheHero :data="field" v-if="isAvailableGroup(field, 'hero')" />
      <TheServices
        :data="field"
        v-else-if="isAvailableGroup(field, 'services')"
      />
      <TheSystems
        :data="field"
        v-else-if="isAvailableGroup(field, 'systems')"
      />
      <TheProjects
        :data="field"
        v-else-if="isAvailableGroup(field, 'projects')"
      />
      <TheNewsEventsSection
        :data="field"
        v-else-if="isAvailableGroup(field, 'news_events')"
      />
      <TheCTA :data="field" v-else-if="isAvailableGroup(field, 'cta')" />
      <TheCTASecondary
        :data="field"
        v-else-if="isAvailableGroup(field, 'cta_secondary')"
      />
      <TheBreadcrumbs
        :data="field"
        v-else-if="isAvailableGroup(field, 'breadcrumbs')"
      />
      <TheArticle
        :data="field"
        v-else-if="isAvailableGroup(field, 'article')"
      />
      <TheHistory
        :data="field"
        v-else-if="isAvailableGroup(field, 'history')"
      />
      <TheGlobally
        :data="field"
        v-else-if="isAvailableGroup(field, 'globally')"
      />
      <TheContactFormSection
        :data="field"
        v-else-if="isAvailableGroup(field, 'contact_form')"
      />
      <TheContactSection
        :data="field"
        v-else-if="isAvailableGroup(field, 'contact')"
      />
      <TheCopyClipboard
        :data="field"
        v-else-if="isAvailableGroup(field, 'copy_clipboard')"
      />
      <ThePriorities
        :data="field"
        v-else-if="isAvailableGroup(field, 'priorities')"
      />
      <TheResourcesHero
        :data="field"
        v-else-if="isAvailableGroup(field, 'resources_hero')"
      />
      <TheResourcesWall
        :data="field"
        v-else-if="isAvailableGroup(field, 'resources_wall')"
      />
      <TheProductArticle
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_article')"
      />
      <TheProductBrands
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_brands')"
      />
      <TheProductCategory
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_category')"
      />
      <TheProductComponents
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_components')"
      />
      <TheProductGallery
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_gallery')"
      />
      <TheProductHero
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_hero')"
      />
      <TheProductInfo
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_info')"
      />
      <TheProductNewsArticleBack
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_news_back')"
      />
      <TheProductNewsList
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_news_list')"
      />
      <TheProductProjects
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_projects')"
      />
      <TheProductSystems
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_systems')"
      />
      <TheProductTabs
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_tabs')"
      />
      <TheProductVideos
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_videos')"
      />
      <TheProductWall
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_wall')"
      />
      <TheProductGuide
        :data="field"
        v-else-if="isAvailableGroup(field, 'product_guide')"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { isAvailableGroup, parsePath } from "@/helpers/persistenceStorage";
import { Content } from "@/types";

const route = useRoute();

let currentPage = useState<Content>(
  parsePath(route.fullPath).length !== 0
    ? parsePath(route.fullPath).pop()
    : route.fullPath
);
</script>
