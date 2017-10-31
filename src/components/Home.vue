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
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    logIn() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style>

</style>
