<template>
  <div :class="['popup popup--search', { active: isOpenSearchPopup }]">
    <button class="btn btn--popup-close" @click="setSearchPopup(false)">
      <img src="@/assets/images/close-menu.svg" alt="Close" />
    </button>
    <div class="popup--search__block">
      <input type="text" placeholder="What are you looking for?" />
      <button class="btn btn--popup-search">
        <img src="@/assets/images/search.svg" alt="Search" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";
const commonStore = useCommonStore();

const isOpenSearchPopup = computed(() => commonStore.isOpenSearchPopup);

const setSearchPopup = (value: boolean) => {
  commonStore.setOpeningSearchPopup(value);
};
</script>

<style lang="scss">
.popup--search {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__block {
    display: flex;
    max-width: 794px;
    width: 100%;
    height: 40px;
    margin: 0 auto;
    position: relative;

    @media only screen and (max-width: 860px) {
      padding: 0 20px;
    }

    input {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      height: inherit;
      width: 100%;
      border: none;
      border-bottom: 1px solid #023a52;
      color: $color-black;
      padding-right: 20px;
      outline: none;
      transition: all 0.3s ease;

      &::placeholder {
        color: $color-black;
      }

      &:focus {
        border-bottom: 1px solid #01a3ec;
      }
    }
  }
}
</style>
