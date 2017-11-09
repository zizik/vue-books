<template>
  <div class="content">
    <div v-if="isLoading" class="content__img-wrapper">
      <img src="../assets/loader.gif" alt="loader">
    </div>
    <div v-else>
      <div v-if="!hasBooks" class="content__warn">Книг нет</div>
      <div v-else>
        <div class="content__search-wrapper">
          <label class="content__label">
            Найти книгу:
            <input class="content__search" v-model="searchBook" type="text" placeholder="Найти книгу">
          </label>
          <label class="content__label">
            Приоритет:
            <select class="content__priority" v-model="priorityFilter">
              <option value="all">Все</option>
              <option value="1">Высокий</option>
              <option value="2">Средний</option>
              <option value="3">Низкий</option>
            </select>
          </label>
        </div>
        <table class="content__table">
          <thead class="content__table-head">
            <tr>
              <th class="content__table-head-cell content__table-head-cell_name">Название</th>
              <th class="content__table-head-cell">Прочитано</th>
              <th class="content__table-head-cell">Приоритет</th>
              <th class="content__table-head-cell">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr class="content__table-row" v-for="book of filteredBooks" v-bind:key="book.id">
              <td class="content__table-row-cell">
                <a class="content__table-link" :href="book.link">
                  {{book.name}}
                </a>
              </td>
              <td class="content__table-row-cell">{{book.chapters}}</td>
              <td class="content__table-row-cell">{{book.priority | translatePriority}}</td>
              <td class="content__table-row-cell">
                <button class="content__btn content__btn_delete" @click="deleteBook(book.id)"></button>
                <button class="content__btn content__btn_edit" @click="editBook(book.id)"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import api from "../firebase/api/api";

export default {
  data() {
    return {
      books: [],
      searchBook: "",
      priorityFilter: "all",
    };
  },
  created() {
    this.setLoading(true);
    api.booksRef.once("value", data => {
      if (!data.val()) {
        this.setLoading(false);
      }
    });
    api.booksRef.on("child_added", data => {
      this.books.push({ id: data.key, ...data.val() });
      this.setLoading(false);
    });
    api.booksRef.on("child_removed", data => {
      this.books = this.books.filter(book => book.id !== data.key);
    });
  },
  beforeDestroy() {
    api.booksRef.off();
  },
  computed: {
    isLoading() {
      return this.getLoading();
    },
    hasBooks() {
      return this.books.length > 0;
    },
    filteredBooks() {
      const sortedBooks = [...this.books].sort(
        (a, b) => (a.name > b.name || a.priority > b.priority ? 1 : -1),
      );
      if (!this.searchBook && this.priorityFilter === "all") {
        return sortedBooks;
      }
      return sortedBooks.filter(
        book =>
          book.name.toLowerCase().includes(this.searchBook.toLowerCase()) &&
          (this.priorityFilter === "all" || this.priorityFilter === book.priority),
      );
    },
  },
  methods: {
    ...mapGetters(["getLoading", "getUser"]),
    ...mapActions(["setLoading"]),
    deleteBook(id) {
      api.removeData(id);
    },
    editBook(id) {
      this.$router.push({ name: "EditForm", params: { id } });
    },
  },
  filters: {
    translatePriority(enPriority) {
      const priorityValues = {
        1: "Высокий",
        2: "Средний",
        3: "Низкий",
      };
      return priorityValues[enPriority];
    },
  },
};
</script>

<style lang="scss">
.content {
  flex-grow: 1;

  &__img-wrapper {
    text-align: center;
  }

  &__warn {
    font-size: 40px;
    text-align: center;
  }

  &__search-wrapper {
    background-color: $accent;
    @include edging();
    padding: 6px 12px;
    text-align: center;
    margin-bottom: 10px;
  }

  &__label {
    @include helvetica;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  &__search,
  &__priority {
    margin-left: 6px;
    padding: 6px 12px;
    border-radius: 3px;
    border: $border;
    box-shadow: $box-shadow;
    outline: none;
  }

  &__table {
    margin-bottom: 25px;
    width: 100%;
    box-shadow: $box-shadow;
  }

  &__table-head-cell,
  &__table-row-cell {
    border: $border;
    padding: 6px 12px;
    width: 50px;
    vertical-align: middle;
  }

  &__table-head {
    @include helvetica;
    background: $accent;
    text-align: left;
  }

  &__table-head-cell {
    &_name {
      min-width: 300px;
    }
  }

  &__table-row {
    background-color: #e9e9e9;
  }
  &__table-row:nth-child(odd) {
    background-color: #f6f6f6;
  }

  &__table-link {
    color: $text-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__btn {
    width: 24px;
    height: 24px;
    padding: 0;
    border: $border;
    display: inline-block;
    cursor: pointer;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 14px;

    &_delete {
      background-image: url("../assets/delete.svg");
    }

    &_edit {
      background-image: url("../assets/edit.svg");
    }
  }
}
</style>
