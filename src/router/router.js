import Vue from "vue";
import Router from "vue-router";
import Content from "../components/Content";
import Form from "../components/Form";
import SignIn from "../components/SignIn";
import Home from "../components/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      // redirect: "/books",
    },
    {
      path: "/books",
      name: "Books",
      component: Content,
    },
    {
      path: "/form",
      name: "Form",
      component: Form,
    },
    {
      path: "/form/:id",
      name: "EditForm",
      component: Form,
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn,
    },
  ],
});
