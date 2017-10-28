<template>
  <form>
    <input type="text" v-model="email" placeholder="email">
    <input type="text" v-model="password" placeholder="password">
    <button @click.prevent="logIn">Залогироваться</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "zizidukabrik@gmail.com",
      password: "123456",
    };
  },
  methods: {
    logIn() {
      console.log("logIn");
    },
  },
};
</script>

<style>

</style>
