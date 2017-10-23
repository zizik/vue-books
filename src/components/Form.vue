<template>
  <form class="form">
      <input class="form__input" type="text" placeholder="Введите название" v-model.trim="bookData.name"> 
      <input class="form__input" type="number" placeholder="Глав прочитано" v-model.number="bookData.readedChapters"> 
      <select v-model="bookData.priority" class="form__select">
        <option class="form__option" selected disabled hidden value="default">Выберете приоритет</option>
        <option class="form__option" value="1">Высокий</option>
        <option class="form__option" value="2">Средний</option>
        <option class="form__option" value="3">Низкий</option>
      </select>
      <button v-if="!editing" class="form__submit" @click.prevent="createBook">Создать</button>
      <button v-if="editing" class="form__submit" @click.prevent="editBook">Редактировать</button>
  </form>
</template>

<script>
import api from "../api/api";

export default {
  data() {
    return {
      bookData: {
        name: "",
        readedChapters: "",
        priority: "default",
        allChapters: "0",
      },
      editing: false,
    };
  },
  created() {
    if (this.$route.params.id) {
      this.editing = true;
      api.getData(this.$route.params.id).on("value", (snapshot) => {
        const value = snapshot.val();
        this.bookData = value;
      });
    }
  },
  methods: {
    validateForm() {
      let isValid = false;
      if (
        this.bookData.name &&
        this.bookData.readedChapters > 0 &&
        this.bookData.priority !== "default"
      ) {
        isValid = true;
      }
      return isValid;
    },
    createBook() {
      if (this.validateForm()) {
        api.setData(this.bookData).then(this.changeRoute);
      }
    },
    editBook() {
      api.updateData(this.$route.params.id, this.bookData).then(this.changeRoute);
    },
    changeRoute() {
      this.$router.push("/books");
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
