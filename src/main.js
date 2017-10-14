// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import * as firebase from "firebase";
import App from "./App";
import router from "./router";

const config = {
  apiKey: "AIzaSyAFwiSAedClmIi5jbkRMf-n765gUz2ye1c",
  authDomain: "v-books-d1b6d.firebaseapp.com",
  databaseURL: "https://v-books-d1b6d.firebaseio.com",
  projectId: "v-books-d1b6d",
  storageBucket: "v-books-d1b6d.appspot.com",
  messagingSenderId: "866011591496",
};
firebase.initializeApp(config);
// const app = firebase.initializeApp({});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
});
