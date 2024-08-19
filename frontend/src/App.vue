<template>
  <div id="app">
    <NavbarMenu/>
    <router-view/>
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'

export default {
  name: 'App',
  components: {
    NavbarMenu
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #FFFFFF;
  background-color: #121212;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>

