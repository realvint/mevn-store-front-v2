<template>
  <header class="header">
    <div class="header_left">logo хер</div>
    <div class="header_right">
      <ul class="nav">
        <li
            class="nav_link"
            v-for="({id, title}, key) in categories"
            :key = "key"
        >
          <router-link :to="`category/${id}`">{{title}}</router-link>

        </li>

      </ul>

    </div>
  </header>
</template>

<script>
  export default {
    name: 'MevnHeader',
    props: {
      categories: {
        type: Array,
        default: () => [],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  .nav {
    display: flex;
    list-style-type: none ;
    justify-content: space-between;
    width: 100%;
    padding-inline-start: 0;

    &_link {
      margin-right: 10px;
      a {
        text-decoration: none;
        text-underline: none;
        color: black;
        cursor: pointer;
        &:hover {
          color: #42b983;
        }
      }
    }
  }

  }
</style>