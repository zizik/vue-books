import Vue from "vue";
import Router from "vue-router";
import auth from "../firebase/auth/auth";
import Content from "../components/Content";
import Form from "../components/Form";
import Login from "../components/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      props: { isCreating: false },
      beforeEnter(to, from, next) {
        if (!from.name) {
          next({ name: "Books" });
        }
        if (!auth.getUser()) {
          next();
        }
      },
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
      props: { isEditing: false },
    },
    {
      path: "/form/:id",
      name: "EditForm",
      component: Form,
      props: { isEditing: true },
    },
    {
      path: "/signin",
      name: "SignIn",
      component: Login,
      props: { isCreating: true },
    },
  ],
});
