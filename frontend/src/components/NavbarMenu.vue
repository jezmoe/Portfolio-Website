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
  justify-content: space-between;
  width: 100%;
  padding: 20px 50px;
  position: fixed;
  top: 0;
  background-color: #121212;
}

router-link {
  color: #FFFFFF;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}
</style>

