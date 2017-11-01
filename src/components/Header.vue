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
import { mapActions } from "vuex";
import auth from "../firebase/auth/auth";

export default {
  methods: {
    ...mapActions(["setUser"]),
    signOut() {
      auth
        .signOut()
        .then(() => this.setUser(""))
        .catch(err => console.log(err));
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
  }

  &__link {
    text-decoration: none;
  }

  &__signout {
    padding: 6px 12px;
    background-color: $light-color;
    @include edging;
  }
}
</style>
