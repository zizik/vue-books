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
  background-color: $accent;
  height: 100px;

  &__name {
    @include helvetica;
    height: 100%;
    display: flex;
    align-items: center;
    color: $text-color;
  }
}
</style>
