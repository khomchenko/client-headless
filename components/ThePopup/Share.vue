<template>
  <div :class="['popup popup--share', { active: isOpenSharePopup }]">
    <button class="btn btn--popup-close" @click="setSharePopup(false)">
      <img src="@/assets/images/close-menu.svg" alt="Close" />
    </button>
    <div class="popup--share__block">
      <h2 class="popup--share__title">Share this page</h2>
      <ul class="popup--share__list">
        <li class="popup--share__list__item">
          <a href="#" class="popup--share__list__item__link">
            <img src="@/assets/images/social/linkedin.svg" alt="linkedin" />
          </a>
        </li>
        <li class="popup--share__list__item">
          <a href="#" class="popup--share__list__item__link">
            <img src="@/assets/images/social/twitter.svg" alt="twitter" />
          </a>
        </li>
        <li class="popup--share__list__item">
          <a href="#" class="popup--share__list__item__link">
            <img src="@/assets/images/social/facebook.svg" alt="facebook" />
          </a>
        </li>
        <li class="popup--share__list__item">
          <a href="#" class="popup--share__list__item__link">
            <img src="@/assets/images/social/envelope.svg" alt="envelope" />
          </a>
        </li>
      </ul>
      <div class="popup--share__clipboard">
        <input
          type="text"
          class="popup--share__clipboard__input"
          placeholder="http://url.com"
        />
        <button class="btn popup--share__clipboard__btn">Copy</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/CommonStore";
const commonStore = useCommonStore();

const isOpenSharePopup = computed(() => commonStore.isOpenSharePopup);

const setSharePopup = (value: boolean) => {
  commonStore.setOpeningSharePopup(value);
};
</script>

<style lang="scss">
.popup--share {
  display: flex;
  flex-direction: column;
  background: #000000de;

  .btn--popup-close {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7496%)
      hue-rotate(343deg) brightness(100%) contrast(101%);

    @media only screen and (max-width: 720px) {
      top: 20px;
      filter: brightness(0) saturate(100%);
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 672px;
    width: 100%;
    padding: 55px 20px 60px 20px;
    background: $color-white;
    color: #13181f;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    position: relative;

    @media only screen and (max-width: 720px) {
      justify-content: center;
      height: 100%;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 34px;

    @media only screen and (max-width: 560px) {
      font-size: 24px;
      line-height: 30px;
      text-align: center;
    }
  }

  &__list {
    display: flex;
    list-style: none;
    margin-bottom: 50px;

    &__item {
      display: flex;
      margin-right: 50px;

      &:last-child {
        margin-right: 0;
      }

      &__link {
        display: flex;
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
        }

        img {
          height: 25px;
        }
      }
    }
  }

  &__clipboard {
    display: flex;

    &__input {
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      width: 346px;
      height: 40px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      background: #fff;
      border: 1px solid #d1d5db;
      border-right: none;
      padding: 0 15px;
      outline: none;
      transition: all 0.3s ease;

      @media only screen and (max-width: 560px) {
        width: calc(100% - 40px);
      }

      &::placeholder {
        color: #939393;
      }

      &:focus {
        border-color: #0079c1;
      }
    }

    &__btn {
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 40px;
      border-radius: 0px 3px 3px 0px;
      background: #0079c1;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 0.05em;
      line-height: 16px;
      text-transform: uppercase;
      color: $color-white;

      &:hover {
        background: #01a3ec;
      }
    }
  }
}
</style>
