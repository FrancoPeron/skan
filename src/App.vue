<template>
  <div id="app" class="bg-g1">
    <div class="container flex-row-wrap p-12 mb-16 shadow">
      
      <router-link class="btn1" to="/">Style</router-link>
      <router-link class="btn1" to="/componentes">Componentes</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .header {
        height: 62px;
    }

    #app a {
        font-weight: bold;
        color: black;
    }

    #app a.router-link-exact-active {
        color: var(--cBrand1);
    }


</style>
