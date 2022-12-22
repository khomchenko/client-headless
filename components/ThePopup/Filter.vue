<template>
  <div :class="['popup popup--filter', { active: isOpenFilterPopup }]">
    <div class="popup--filter__inner">
      <div class="popup--filter__header">
        <button class="btn btn--popup-close" @click="setFilterPopup(false)">
          <img src="@/assets/images/close-menu.svg" alt="Close" />
        </button>
        <button class="btn btn--clear-filter">Clear filters</button>
        <h2 class="popup--filter__header__title">Filter</h2>
      </div>
      <div class="popup--filter__body">
        <ElementsFilterCheckboxes
          :data="{
            title: 'Systems',
            checkboxes: data.systems,
          }"
        />
        <ElementsFilterCheckboxes
          :data="{
            title: 'Resource',
            checkboxes: data.resource,
          }"
        />
      </div>
      <div class="popup--filter__footer">
        <button class="btn btn--primary">Apply</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";

const data = reactive({
  systems: [
    "Vertemax",
    "Universal",
    "Hakitec",
    "Bridge",
    "TechniSpan",
    "Hakistairs",
    "Stairmax",
    "HBS",
    "Base",
  ],
  resource: [
    "User Guide",
    "Brochure",
    "Technical Information",
    "Data Sheet",
    "CAD",
    "Videos",
  ],
});
const commonStore = useCommonStore();

const isOpenFilterPopup = computed(() => commonStore.isOpenFilterPopup);

const setFilterPopup = (value: boolean) => {
  commonStore.setOpeningFilterPopup(value);
};
</script>

<style lang="scss">
.popup--filter {
  display: flex;
  flex-direction: column;
  background: #13181fe8;

  &__inner {
    display: flex;
    flex-direction: column;
    max-width: 482px;
    width: 100%;
    height: 100%;
    background: $color-white;
    position: absolute;
    top: 0;
    right: 0;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 32px 50px 30px 50px;
    border-bottom: 1px solid #b9bed4;

    @media only screen and (max-width: 520px) {
      padding: 20px 20px 30px 36px;
    }

    .btn--popup-close {
      position: absolute;
      top: 32px;
      right: 50px;
      width: 11px;
      height: 18px;

      @media only screen and (max-width: 520px) {
        top: 20px;
        right: 20px;
      }

      img {
        width: inherit;
        height: inherit;
        filter: brightness(0) saturate(100%) invert(10%) sepia(77%)
          saturate(3670%) hue-rotate(228deg) brightness(88%) contrast(95%);
      }
    }

    .btn--clear-filter {
      margin-bottom: 32px;
    }

    &__title {
      font-weight: bold;
      font-size: 27px;
      line-height: 32px;

      @media only screen and (max-width: 520px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 32px 50px;
    margin-right: 50px;

    @media only screen and (max-width: 520px) {
      padding: 32px 20px 32px 36px;
      margin-right: 20px;
    }

    &::-webkit-scrollbar {
      width: 8px;

      &-track {
        background: #ffffff;
      }

      &-thumb {
        border-radius: 4px;
        background: #b9bed4;

        &:hover {
          background: #01a3ec;
        }
      }
    }
  }

  &__footer {
    display: flex;
    border-top: 1px solid #b9bed4;
    padding: 20px 50px;
    margin-top: auto;

    @media only screen and (max-width: 520px) {
      padding: 20px;
    }
  }
}
</style>
