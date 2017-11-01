<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link class="header__link" :to="{name: 'Login'}">На главную</router-link>
        <button class="header__signout" @click="signOut">Выйти с аккаунта</button>
      </div>
    </div>
  </header>
</template>

<script>
import auth from "../firebase/auth/auth";

export default {
  methods: {
    signOut() {
      auth.signOut();
    },
  },
};
</script>

<style lang="scss">
.header {
  background-color: $accent;
  height: 100px;
  border-bottom: $border;
  box-shadow: $box-shadow;

  &__wrap {
    @include helvetica;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $text-color;
  }

  &__link {
    text-decoration: none;
    color: $text-color;
  }

  &__signout {
    padding: 6px 12px;
    background-color: $light-color;
    @include edging;
  }
}
</style>
