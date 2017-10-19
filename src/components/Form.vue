<template>
  <form class="form">
      <input class="form__input" type="text" placeholder="Введите название"> 
      <input class="form__input" type="number" placeholder="Колличество глав"> 
      <input class="form__input" type="number" placeholder="Глав прочитано"> 
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
.form {
  padding: 16px 24px;
  flex-grow: 1;
  @include edging;
  background-color: $light-color;

  &__input {
    width: 100%;
    margin-bottom: 20px;
    padding: 6px 12px;
    box-sizing: border-box;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
