<template>
  <div id="app">
    <main-header></main-header>
    <div class="container">
      <main-navigation></main-navigation>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default {
  name: "app",
  components: {
    mainHeader: Header,
    mainNavigation: Navigation,
  },
};
</script>

<style src="./common/main.css"></style>
