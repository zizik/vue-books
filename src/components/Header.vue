<template>
  <header class="header">
    <div class="container">
      <div class="header__name">
        {{header}}
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      header: "My header",
      string: "sda",
    };
  },
};
</script>

<style lang="scss">
.header {
  background-color: red;
  height: 100px;

  &__name {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
