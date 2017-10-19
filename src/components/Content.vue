<template>
  <div class="content">
    <div v-if="!hasBooks" class="content__warn">Книг нет</div>
    <table v-else class="content__table">
      <thead>
        <tr>
          <th>Manga Name</th>
          <th>Readed Chapters</th>
          <th>All Chapters</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <contentItem v-for="book of books" v-bind:key="book.id" :book="book"></contentItem>
      </tbody>
    </table>
    <button @click="add">Add</button>
  </div>
</template>

<script>
import api from "../api/api";
import ContentItem from "./ContentItem";

export default {
  components: {
    contentItem: ContentItem,
  },
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
}

.content__item:nth-child(odd) {
  background-color: #00ff66;
}

.content__item:nth-child(even) {
  background-color: #0066ff;
}
</style>
