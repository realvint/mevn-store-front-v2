<template>
  <div id="app">
    <MevnHeader :categories="categories" />
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    MevnHeader: () => import('@/components/layouts/Header'),
  },
  data: () => ({
    categories:[
        {title: 'чехлы', id: 1},
        {title: 'стёкла', id: 2},
        {title: 'ремонт', id: 3},
        {title: 'зарядки', id: 4},
        {title: 'контакты', id: 5},
    ]
  })
}

</script>

<style lang="scss">

body,
html {
  padding: 0;
  margin: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
