<template>
  <div id="app">
    <main-header></main-header>
    <div class="container">
      <div class="app__content">
        <router-view/>
        <main-navigation></main-navigation>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import auth from "./firebase/auth/auth";

export default {
  name: "app",
  components: {
    mainHeader: Header,
    mainNavigation: Navigation,
  },
  created() {
    if (auth.getUser()) {
      this.setUser(auth.getUser().uid);
    } else {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    ...mapActions(["setUser"]),
  },
};
</script>

<style lang="scss" src="../node_modules/reset-css/_reset.scss"></style>
<style lang="scss" src="./styles/common.scss"></style>
<style lang="scss">
.app__content {
  display: flex;
  padding-top: $gutter;
}
</style>


