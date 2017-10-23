<template>
  <div class="content">
    <div v-if="!hasBooks" class="content__warn">Книг нет</div>
    <table v-else class="content__table">
      <thead class="content__table-head">
        <tr>
          <th class="content__table-head-cell content__table-head-cell_name">Manga Name</th>
          <th class="content__table-head-cell">Readed</th>
          <th class="content__table-head-cell">All</th>
          <th class="content__table-head-cell">Priority</th>
          <th class="content__table-head-cell">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="content__table-row" v-for="book of books" v-bind:key="book.id">
          <td class="content__table-row-cell">{{book.name}}</td>
          <td class="content__table-row-cell">{{book.allChapters}}</td>
          <td class="content__table-row-cell">{{book.readedChapters}}</td>
          <td class="content__table-row-cell">{{book.priority}}</td>
          <td class="content__table-row-cell">
            <button class="content__delete-btn" @click="deleteBook(book.id)"></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "../api/api";

export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    api.booksRef.on("child_added", (data) => {
      this.books.push({ id: data.key, ...data.val() });
    });
  },
  computed: {
    hasBooks() {
      return this.books.length > 0;
    },
  },
  methods: {
    deleteBook(id) {
      api.removeData(id);
      // console.log(id);
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

  &__table {
    width: 100%;
    padding: 6px 12px;
    box-shadow: $box-shadow;
  }

  &__table-head-cell,
  &__table-row-cell {
    border: $border;
    padding: 0.5em 1em;
  }

  &__table-head {
    @include helvetica;
    color: $text-color;
    background: $accent;
    text-align: left;
  }

  &__table-head-cell {
    &_name {
      width: 300px;
    }
  }

  &__table-row {
    background-color: #e9e9e9;
  }
  &__table-row:nth-child(odd) {
    background-color: #f6f6f6;
  }

  &__delete-btn {
    width: 24px;
    height: 24px;
    padding: 0;
    background: url("../assets/delete.svg") no-repeat center center;
    background-size: 14px;
    display: inline-block;
    cursor: pointer;
    border: $border;
  }
}
</style>
