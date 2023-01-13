<template>
  <router-view></router-view> 

  
  <router-link to="Activate">Activate HERE</router-link>

</template>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>

<script setup>
  import Activate from './views/Activate.vue'
</script>
