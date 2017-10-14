<template>
  <header class="header">
    <div class="container">
      {{header}}
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
  background-color: red
}
</style>
