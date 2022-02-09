<template>
  <div class="home">
    <ul class="card-list">
      <li class="card-list__card">
        <p class="card__card-title">
          タイトル
        </p>
        <div class="card__card-body">
          <p class="card-body__text">
            テキストテキストテキスト
          </p>
          <button class="card-body__link">
            詳しくはこちら
          </button>
        </div>
      </li>
      <li class="card-list__card--bggray">
        <p class="card__card-title--white">
          タイトル
        </p>
        <div class="card__card-body">
          <p class="card-body__text--red">
            テキストテキストテキスト
          </p>
          <button class="card-body__link">
            詳しくはこちら
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  /* computed: {
    count() {
      return this.$store.state.count
    }
  },*/
}
</script>

<style lang="scss">
ul {
  list-style: none;
}

%card {
  border: 1px solid #ccc;
  padding: 16px;
}

.card-list__card {
  @extend %card;
  &--bggray {
    @extend %card;
    background-color: #ccc;
  }
}

.card__card-body {
  padding: 8px;
  & .card-body__text {
    font-size: 18px;
    &--red{
      color: red;
    }
  }
  & .card-body__link {
    border: 1px solid blue;
    border-radius: 12px;
    padding: 8px;
    background-color: blue;
    color: #fff;
  }
}
</style>
