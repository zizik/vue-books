<template>
  <form class="form">
      <input class="form__input" type="text" placeholder="Введите название" v-model.trim="name"> 
      <input class="form__input" type="number" placeholder="Глав прочитано" v-model.number="chapters"> 
      <select v-model="priority" class="form__select">
        <option class="form__option" selected disabled hidden value="default">Выберете приоритет</option>
        <option class="form__option" value="1">Высокий</option>
        <option class="form__option" value="2">Средний</option>
        <option class="form__option" value="3">Низкий</option>
      </select>
      <button class="form__submit" @click.prevent="createBook">Создать</button>
  </form>
</template>

<script>
import api from "../api/api";

export default {
  data() {
    return {
      name: "",
      chapters: "",
      priority: "default",
    };
  },
  methods: {
    validateForm() {
      let isValid = false;
      if (this.name && this.chapters > 0 && this.priority !== "default") {
        isValid = true;
      }
      return isValid;
    },
    createBook() {
      if (this.validateForm()) {
        api
          .setData({
            name: this.name,
            readedChapters: this.chapters,
            priority: this.priority,
            allChapters: "0",
          })
          .then(() => {
            this.$router.push("/books");
          });
      }
    },
  },
};
</script>

<style lang="scss">
.form {
  padding: 16px 24px;
  flex-grow: 1;
  @include edging;
  background-color: $light-color;

  &__input,
  &__select {
    padding: 6px 12px;
    margin-bottom: 20px;
  }

  &__input {
    width: 100%;
    box-sizing: border-box;
  }

  &__select {
    outline: 0;
  }

  &__option {
    padding: 6px 12px;
  }

  &__submit {
    display: block;
    padding: 6px 12px;
    border: $border;
    background-color: $accent;
  }
}
</style>
