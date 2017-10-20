<template>
  <form class="form">
      <input class="form__input" type="text" placeholder="Введите название" v-model="name"> 
      <input class="form__input" type="number" placeholder="Глав прочитано" v-model="chapters"> 
      <select v-model="priority">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click.prevent="createBook">Создать</button>
  </form>
</template>

<script>
import api from "../api/api";

export default {
  data() {
    return {
      name: "",
      chapters: "",
      priority: "",
    };
  },
  methods: {
    createBook() {
      api.setData({
        name: this.name,
        readedChapters: this.chapters,
        priority: this.priority,
        allChapters: "0",
      });
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

  &__input {
    width: 100%;
    margin-bottom: 20px;
    padding: 6px 12px;
    box-sizing: border-box;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
