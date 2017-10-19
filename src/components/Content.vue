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
        </tr>
      </thead>
      <tbody>
        <tr class="content__table-row" v-for="book of books" v-bind:key="book.id">
          <td class="content__table-row-cell">{{book.name}}</td>
          <td class="content__table-row-cell">{{book.allChapters}}</td>
          <td class="content__table-row-cell">{{book.readedChapters}}</td>
          <td class="content__table-row-cell">{{book.priority}}</td>
        </tr>
        <!-- <contentItem class="content__table-head-cell" v-for="book of books" v-bind:key="book.id" :book="book"></contentItem> -->
      </tbody>
    </table>
    <button @click="add">Add</button>
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
  methods: {
    add() {
      api.setData({
        name: "Manga2",
        allChapters: "222",
        readedChapters: "11",
        priority: "1",
      });
    },
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
  }

  &__table-head {
    font-weight: 900;
    color: #ffffff;
    background: $accent;
    text-align: left;
  }

  &__table-head-cell {
    padding: 6px 12px;

    &_name {
      width: 300px;
    }
  }

  &__table-row-cell {
    padding: 6px 12px;
    color: $text-color;
  }

  &__table-row {
    background-color: #e9e9e9;
  }
  &__table-row:nth-child(odd) {
    background-color: #f6f6f6;
  }
}
</style>
