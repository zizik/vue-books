<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list-item">
        <router-link class="navigation__link" :to="{name: 'Books'}" href="/books">Books</router-link>
      </li>
      <li class="navigation__list-item">
        <router-link class="navigation__link" :to="{name: 'Form'}" href="/form">Add New Book</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navigation {
  width: 200px;
  height: 100%;
  background-color: $light-color;
  margin-left: $gutter;
  box-shadow: $box-shadow;
  border: $border;

  &__link {
    display: block;
    box-sizing: border-box;
    padding: 6px 12px;
    border-bottom: $border;
    text-decoration: none;
    color: #739931;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
