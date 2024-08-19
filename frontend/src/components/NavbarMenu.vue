<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <!-- Add other links as needed -->
  </nav>
</template>

<script>
export default {
  name: 'NavbarMenu'
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f5f5f5;
}
router-link {
  text-decoration: none;
  color: #333;
}
</style>
