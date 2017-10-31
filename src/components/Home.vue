<template>
  <div class="home">
    <div class="container">
      <form class="home__form" @submit.prevent="logIn">
        <h1 class="home__greet">Добро пожаловать</h1>
        <input class="home__input" type="text" v-model="email" placeholder="Введите почту">
        <input class="home__input" type="password" v-model="password" placeholder="Введите пароль">
        <button class="home__submit">Зайти на сайт</button>
        <p class="home__message">Нет аккаунта? <a class="home__link" href="#">Create an account</a></p>
      </form>
    </div>
  </div>
</template>

<script>
import auth from "../firebase/auth/auth";

export default {
  data() {
    return {
      email: "fff@gmail.com",
      password: "123456",
    };
  },
  methods: {
    logIn() {
      auth
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then(user => {
          if (user) {
            this.$router.replace({ name: "Books" });
          }
        })
        .catch(err => {
          // TODO: Использовать валидацию что бы вставить ошибки в шаблон
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.home {
  &__greet {
    @include helvetica(24px);
    margin-bottom: 30px;
  }

  &__form {
    background: #ffffff;
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
    color: $text-color;
    font-size: 14px;
    cursor: pointer;
  }

  &__message {
    margin: 15px 0 0;
    color: $text-color;
    font-size: 12px;
  }

  &__link {
    color: $link-color;
    text-decoration: none;
  }
}
</style>
