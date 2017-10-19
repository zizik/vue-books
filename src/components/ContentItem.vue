<template>
  <tr>
    <td>{{book.name}}</td>
    <td>{{book.allChapters}}</td>
    <td>{{book.readedChapters}}</td>
    <td>{{book.priority}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this.book);
  },
};
</script>

<style>

</style>
