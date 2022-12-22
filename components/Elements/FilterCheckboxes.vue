<template>
  <nav class="checkboxes" v-if="props.data">
    <h4 class="checkboxes__title">{{ props.data.title }}</h4>
    <ul class="checkboxes__list">
      <label
        class="checkboxes__list__item"
        v-for="item in props.data.checkboxes"
      >
        <input type="checkbox" />
        <span class="checkboxes__list__item__name">{{ item }}</span>
      </label>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<style lang="scss">
.checkboxes {
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 30px;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 26px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__item {
      display: flex;
      align-items: center;
      min-height: 20px;
      margin-bottom: 10px;
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
      }

      input[type="checkbox"] {
        display: none;

        &:checked {
          & + .checkboxes__list__item__name {
            &::after {
              background: #01a3ec;
              border-color: #01a3ec;
            }
          }
        }
      }

      &__name {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        margin-left: 30px;
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 3px;
          background: $color-white;
          border: 1px solid #d1d5db;
          position: absolute;
          top: 50%;
          left: -30px;
          transform: translateY(-50%);
          transition: all 0.3s ease;
        }
      }
    }
  }
}
</style>
