<template>
  <div :class="['popup popup--languages', { active: isOpenLanguagesPopup }]">
    <button class="btn btn--popup-close" @click="setLanguagesPopup(false)">
      <img src="@/assets/images/close-menu.svg" alt="Close" />
    </button>
    <div class="popup__inner">
      <div class="popup--languages__block">
        <h3 class="popup--languages__title">
          <img src="@/assets/images/languages-icon.svg" alt="Languages" />
          <span>Change language</span>
        </h3>
        <ul class="popup--languages__list">
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">English</a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link"></a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">Slovakian</a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">Swedish</a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link"></a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">Danish</a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">Norwegian</a>
          </li>
        </ul>
      </div>
      <div class="popup--languages__block">
        <h3 class="popup--languages__title">
          <img src="@/assets/images/territory-icon.svg" alt="Territory" />
          <span>Change territory</span>
        </h3>
        <ul class="popup--languages__list">
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">Sweden</a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">Norway</a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">Denmark</a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">
              United Kingdon
            </a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">
              Central Europe
            </a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link">Canada</a>
          </li>
          <li class="popup--languages__list__item">
            <a href="#" class="popup--languages__list__item__link"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";
const commonStore = useCommonStore();

const isOpenLanguagesPopup = computed(() => commonStore.isOpenLanguagesPopup);

const setLanguagesPopup = (value: boolean) => {
  commonStore.setOpeningLanguagesPopup(value);
};
</script>

<style lang="scss">
.popup--languages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 860px) {
    .popup__inner {
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
      padding-top: 100px;
      margin-bottom: 20px;
      overflow-y: auto;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    max-width: 382px;
    width: 100%;
    margin-right: 30px;

    @media only screen and (max-width: 860px) {
      margin-right: 0;
      margin-bottom: 45px;
    }

    &:last-child {
      margin: 0;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 52px;

    img {
      width: 22px;
      height: 18px;
      margin-right: 6px;
    }
  }

  &__list {
    list-style: none;

    &__item {
      display: flex;
      min-height: 40px;

      &:nth-child(odd) {
        background: #f2f5f7;
      }

      &__link {
        display: flex;
        @include heading-primary;
        width: 100%;
        color: $color-black;
        padding: 12px 15px;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
          background: #01a3ec;
          color: $color-white;
        }
      }
    }
  }
}
</style>
