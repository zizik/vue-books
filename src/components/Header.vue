<template>
  <header class="header">
    <div class="container">
      <div class="header__name">
        <router-link class="header__link" :to="{name: 'Books'}" href="/books">{{header}}</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      header: "My header",
    };
  },
};
</script>

<style lang="scss">
.header {
  background-color: $accent;
  height: 100px;
  border-bottom: $border;
  box-shadow: $box-shadow;

  &__name {
    @include helvetica;
    height: 100%;
    display: flex;
    align-items: center;
    color: $text-color;
  }

  &__link {
    text-decoration: none;
    color: $text-color;
  }
}
</style>
