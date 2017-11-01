// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "./App";
import router from "./router/router";
import store from "./store/store";
import auth from "./firebase/auth/auth";
import api from "./firebase/api/api";

Vue.config.productionTip = false;
Vue.use(VeeValidate, { events: "" });
let app;

auth.auth.onAuthStateChanged(user => {
  if (user) {
    api.setRef(user.uid);
  }
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: "#app",
      router,
      store,
      template: "<App/>",
      components: { App },
    });
  }
});
