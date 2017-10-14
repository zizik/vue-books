<template>
  <div class="content">
    <div class="content__item">book 1</div>
    <div class="content__item">book 2</div>
    <div class="content__item">book 3</div>
    <div class="content__item">book 4</div>
    <button @click="add">Add</button>
  </div>
</template>

<script>
import api from "../api/api";

export default {
  methods: {
    add() {
      api.setData();
    },
  },
  created() {
    api.getData().then(snapshot => console.log(snapshot.val()));
  },
};
</script>

<style lang="scss">
.content {
  flex-grow: 1;
}

.content__item:nth-child(odd) {
  background-color: #00ff66;
}

.content__item:nth-child(even) {
  background-color: #0066ff;
}
</style>
