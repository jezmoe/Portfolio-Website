<template>
  <nav>
    <router-link to="/#home" class="link">Home</router-link>
    <router-link to="/#about" class="link about-link">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMenu'
}
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  top: 0;
  padding: 20px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
}

.link {
  text-decoration: none;
  color: #ccc; /* Greyish white color */
  margin: 0 20px;
}

.about-link {
  position: absolute;
  right: 20px; /* Ensure adequate spacing */
  top: 20px; /* Avoid cutting off */
}
</style>
