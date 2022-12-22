<template>
  <div class="section section--search-result">
    <div class="container">
      <div class="section--search-result__inner">
        <div class="section--search-result__item">
          <a href="#" class="section--search-result__item__title">
            Search <strong>word</strong> to go here
          </a>
          <p class="section--search-result__item__text">
            Lorem ipsum <strong>word</strong> dolor sit amet, consectetur
            adipiscing elit. Duis tempor augue nec lectus cursus scelerisque.
            Fusce pellentesque risus nisi, et pretium justo finibus ut.
          </p>
        </div>
        <div class="section--search-result__item">
          <a href="#" class="section--search-result__item__title">
            Search <strong>word</strong> to go here
          </a>
          <p class="section--search-result__item__text">
            Lorem ipsum <strong>word</strong> dolor sit amet, consectetur
            adipiscing elit. Duis tempor augue nec lectus cursus scelerisque.
            Fusce pellentesque risus nisi, et pretium justo finibus ut.
          </p>
        </div>
        <div class="section--search-result__item">
          <a href="#" class="section--search-result__item__title">
            Search <strong>word</strong> to go here
          </a>
          <p class="section--search-result__item__text">
            Lorem ipsum <strong>word</strong> dolor sit amet, consectetur
            adipiscing elit. Duis tempor augue nec lectus cursus scelerisque.
            Fusce pellentesque risus nisi, et pretium justo finibus ut.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section--search-result {
  display: flex;
  padding: 18px 0 100px 0;

  &__inner {
    display: flex;
    flex-direction: column;
    max-width: 906px;
    width: 100%;
    margin: 0 auto;
  }

  &__item {
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    border-top: 1px solid #efeef3;
    border-bottom: 1px solid #efeef3;

    &:first-child {
      border-top: none;
      padding-top: 50px;
    }

    &__title {
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-decoration: none;
      color: $color-black;
      margin-bottom: 30px;

      strong {
        font-weight: bold;
        color: #01a3ec;
      }
    }

    &__text {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      strong {
        font-weight: normal;
        color: #01a3ec;
      }
    }
  }
}
</style>
