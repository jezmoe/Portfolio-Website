<template>
  <nav>
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/about" class="link about-link">About</router-link>
    <router-link to="/experience" class="link">Experience</router-link>
    <router-link to="/contact" class="link">Contact</router-link>
  </nav>
  <p class="note">Note: This website is still a work in progress.</p>
</template>

<script>
export default {
  name: 'NavbarMenu'
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.link {
  color: white; /* White text for visibility on the black background */
  text-decoration: none;
  margin: 0 20px;
}

.about-link {
  position: fixed;
  right: 50px;
  top: 10px;
}

.note {
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: white;
  font-size: small;
}
</style>
