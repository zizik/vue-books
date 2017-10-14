<template>
  <div class="content">
    <div class="content__item">book 1</div>
    <div class="content__item">book 2</div>
    <div class="content__item">book 3</div>
    <div class="content__item">book 4</div>
  </div>
</template>

<script>
export default {

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
