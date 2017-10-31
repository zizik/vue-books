<template>
  <form @submit.prevent="logIn">
    <p v-if="error" v-text="error"></p>
    <input type="text" v-model="email" placeholder="email">
    <input type="password" v-model="password" placeholder="password">
    <button>Залогироваться</button>
  </form>
</template>

<script>
import auth from "../firebase/auth/auth";

export default {
  data() {
    return {
      email: "zizidukabrik@gmail.com",
      password: "123456",
      error: "",
    };
  },
  methods: {
    logIn() {
      auth
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then(() => this.$router.push({ name: "Books" }))
        .catch(({ message }) => {
          this.error = message;
        });
    },
  },
};
</script>

<style>

</style>
