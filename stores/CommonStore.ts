import { defineStore } from "pinia";
import { CommonStore } from "@/types";

export const useCommonStore = defineStore("common", {
  state: (): CommonStore => ({
    isOpenSearchPopup: false,
    isOpenLanguagesPopup: false,
    isOpenMobileMenu: false,
    isOpenSharePopup: false,
    isOpenChangePopup: false,
    isOpenFilterPopup: false,
  }),
  actions: {
    setOpeningSearchPopup(payload: boolean) {
      this.isOpenSearchPopup = payload;
    },
    setOpeningLanguagesPopup(payload: boolean) {
      this.isOpenLanguagesPopup = payload;
    },
    setOpeningMobileMenu(payload: boolean) {
      this.isOpenMobileMenu = payload;
    },
    setOpeningSharePopup(payload: boolean) {
      this.isOpenSharePopup = payload;
    },
    setOpeningChangePopup(payload: boolean) {
      this.isOpenChangePopup = payload;
    },
    setOpeningFilterPopup(payload: boolean) {
      this.isOpenFilterPopup = payload;
    },
  },
  getters: {
    activeSearchPopup(state) {
      return state.isOpenSearchPopup;
    },
    activeLanguagesPopup(state) {
      return state.isOpenLanguagesPopup;
    },
    activeMobileMenu(state) {
      return state.isOpenMobileMenu;
    },
    activeSharePopup(state) {
      return state.isOpenSharePopup;
    },
    activeChangePopup(state) {
      return state.isOpenChangePopup;
    },
    activeFilterPopup(state) {
      return state.isOpenSharePopup;
    },
  },
});
