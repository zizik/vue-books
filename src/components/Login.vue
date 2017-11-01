<template>
  <div class="login">
    <form class="login__form" @input="clearFormErrors">
      <h1 class="login__greet" v-text="componentData.greetMsg"></h1>
      <input class="login__input" v-validate="'required|email'" type="text" name="email" v-model="email" placeholder="Введите почту">
      <span class="login__error" v-if="errors.has('email')" v-text="errors.first('email')"></span>
      <input class="login__input" v-validate="'required|min:6'" type="password" name="password" v-model="password" placeholder="Введите пароль">
      <span class="login__error" v-if="errors.has('password')" v-text="errors.first('password')"></span>
      <span class="login__error" v-if="showServerErrors" v-text="showServerErrors"></span>
      <button class="login__submit" @click.prevent="submit" v-text="componentData.submitBtn"></button>
      <p v-if="!isCreating" class="login__message">Нет аккаунта? <router-link class="login__link" :to="{name: 'SignIn'}">Создайте аккаунт</router-link></p>
    </form>
  </div>
</template>

<script>
import auth from "../firebase/auth/auth";

export default {
  props: ["isCreating"],
  data() {
    return {
      email: "",
      password: "",
      serverErrors: [],
    };
  },
  beforeCreate() {
    if (auth.getUser()) {
      this.$router.replace({ name: "Books" });
    }
  },
  watch: {
    $route() {
      this.email = "";
      this.password = "";
      this.clearFormErrors();
    },
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.componentData
            .action({
              email: this.email,
              password: this.password,
            })
            .then(isSucces => {
              if (isSucces) {
                this.$router.replace({ name: "Books" });
              }
            })
            .catch(err => {
              this.serverErrors.push(err.message);
            });
        }
      });
    },
    clearFormErrors() {
      this.$validator.reset();
      this.serverErrors = [];
    },
  },
  computed: {
    componentData() {
      return {
        greetMsg: this.isCreating ? "Создайте аккаунт" : "Войдите, чтобы продолжить",
        submitBtn: this.isCreating ? "Создать аккаунт" : "Войти на сайт",
        action: this.isCreating ? auth.createUser.bind(auth) : auth.signIn.bind(auth),
      };
    },
    showServerErrors() {
      if (this.serverErrors.length) {
        return this.serverErrors[0];
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
.login {
  flex-grow: 1;

  &__greet {
    @include helvetica(24px);
    margin-bottom: 30px;
  }

  &__form {
    background-color: $light-color;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: $box-shadow;
  }

  &__input {
    width: 100%;
    font-size: 14px;
    outline: 0;
    border: $border;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
  }

  &__submit {
    padding: 6px 12px;
    border: $border;
    background: $accent;
    text-transform: uppercase;
    outline: 0;
    width: 100%;
    padding: 15px;
    font-size: 14px;
    cursor: pointer;
  }

  &__error {
    display: inline-block;
    color: red;
    margin-bottom: 20px;
  }

  &__message {
    margin: 15px 0 0;
    font-size: 12px;
  }

  &__link {
    color: $link-color;
    text-decoration: none;
  }
}
</style>
