<template>
  <form class="form" @input="$validator.reset">
      <input class="form__input" autofocus v-validate="'required'" type="text" name="name" placeholder="Введите название" v-model.trim="bookData.name"> 
      <span class="form__error" v-if="errors.has('name')" v-text="errors.first('name')"></span>
      <input class="form__input" v-validate="'required'" type="number" name="chapters" placeholder="Глав прочитано" v-model.number="bookData.chapters"> 
      <span class="form__error" v-if="errors.has('chapters')" v-text="errors.first('chapters')"></span>
      <input class="form__input" v-validate="'required'" type="text" name="link" placeholder="Ссылка" v-model.trim="bookData.link"> 
      <span class="form__error" v-if="errors.has('link')" v-text="errors.first('link')"></span>
      <select v-model="bookData.priority" v-validate="'required|in:1,2,3'" name="priority" class="form__select">
        <option class="form__option" selected disabled hidden value="">Выберете приоритет</option>
        <option class="form__option" value="1">Высокий</option>
        <option class="form__option" value="2">Средний</option>
        <option class="form__option" value="3">Низкий</option>
      </select>
      <span class="form__error" v-if="errors.has('priority')" v-text="errors.first('priority')"></span>
      <button class="form__submit" @click.prevent="submit" v-text="submitText"></button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import api from "../firebase/api/api";

export default {
  props: ["isEditing"],
  data() {
    return {
      bookData: {
        name: "",
        link: "",
        chapters: "",
        priority: "",
      },
    };
  },
  watch: {
    $route() {
      this.setFormStatus();
    },
  },
  created() {
    this.setFormStatus();
  },
  methods: {
    ...mapGetters(["getUser"]),
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.submitAction().then(() => this.$router.push("/books"));
        }
      });
    },
    submitAction() {
      if (this.isEditing) {
        return api.updateData(this.$route.params.id, this.bookData);
      }
      return api.setData(this.bookData);
    },
    setFormStatus() {
      if (this.isEditing) {
        api.getData(this.$route.params.id).once("value", snapshot => {
          this.bookData = snapshot.val();
        });
      } else {
        Object.keys(this.bookData).forEach(key => {
          this.bookData[key] = "";
        });
        this.$validator.reset();
      }
    },
  },
  computed: {
    submitText() {
      return this.isEditing ? "Редактировать" : "Создать";
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

  &__error {
    display: block;
    font-size: 14px;
    color: red;
    margin-bottom: 10px;
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
