<template>
  <div class="content">
    <div v-if="!hasBooks" class="content__warn">Книг нет</div>
    <div v-else>
      <div class="content__search-wrapper">
        <label>
          Найти книгу
          <input class="content__search" v-model="searchBook" type="text" placeholder="Найти книгу">
        </label>
        <label>
          Приоритет
          <select v-model="priorityFilter">
            <option value="all">Все</option>
            <option value="hight">Высокий</option>
            <option value="medium">Средний</option>
            <option value="low">Низкий</option>
          </select>
        </label>
      </div>
      <table class="content__table">
        <thead class="content__table-head">
          <tr>
            <th class="content__table-head-cell content__table-head-cell_name">Manga Name</th>
            <th class="content__table-head-cell">Readed</th>
            <th class="content__table-head-cell">Priority</th>
            <th class="content__table-head-cell">Actions</th>
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
</template>

<script>
import api from "../api/api";

export default {
  data() {
    return {
      books: [],
      searchBook: "",
      priorityFilter: "all",
    };
  },
  created() {
    api.booksRef.on("child_added", (data) => {
      this.books.push({ id: data.key, ...data.val() });
    });
    api.booksRef.on("child_removed", (data) => {
      this.books = this.books.filter(book => book.id !== data.key);
    });
  },
  computed: {
    hasBooks() {
      return this.books.length > 0;
    },
    filteredBooks() {
      if (!this.searchBook && this.priorityFilter === "all") {
        return this.books;
      }
      return this.books.filter(
        book =>
          book.name.toLowerCase().includes(this.searchBook.toLowerCase()) &&
          (this.priorityFilter === "all" || this.priorityFilter === book.priority),
      );
    },
  },
  methods: {
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
        hight: "Высокий",
        medium: "Средний",
        low: "Низкий",
      };
      return priorityValues[enPriority];
    },
  },
};
</script>

<style lang="scss">
.content {
  flex-grow: 1;

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

  &__search {
    padding: 6px 12px;
    border-radius: 3px;
    border: $border;
    box-shadow: $box-shadow;
    outline: none;
  }

  &__table {
    width: 100%;
    box-shadow: $box-shadow;
  }

  &__table-head-cell,
  &__table-row-cell {
    border: $border;
    padding: 6px 12px;
    width: 50px;
  }

  &__table-head {
    @include helvetica;
    color: $text-color;
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
