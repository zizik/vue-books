import Vue from "vue";
import Router from "vue-router";
import Content from "../components/Content";
import Form from "../components/Form";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "App",
      component: Content,
      redirect: "/books",
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
      children: [{ path: "/:id", component: Form }],
    },
  ],
});
