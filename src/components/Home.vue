<template>
  <div class="home">
    <div class="container">
      <h1 class="home__greet">Добро пожаловать</h1>
      <form @submit.prevent="logIn">
        <input type="text" v-model="email" placeholder="Введите почту">
        <input type="password" v-model="password" placeholder="Введите пароль">
        <button>Зайти на сайт</button>
      </form>
    </div>
  </div>
</template>

<script>
import auth from "../firebase/auth/auth";

export default {
  data() {
    return {
      email: "fff@gmail.com",
      password: "123456",
    };
  },
  methods: {
    logIn() {
      auth.signIn({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style>

</style>
