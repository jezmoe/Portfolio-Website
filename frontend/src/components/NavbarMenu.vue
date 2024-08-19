<template>
  <nav>
    <router-link to="/" class="link">Home</router-link>
    <a @click.prevent="scrollToSection('about')" class="link">About</a>
    <router-link to="/experience" class="link">Experience</router-link>
    <router-link to="/contact" class="link">Contact</router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: transparent;
  padding: 10px 0;
}

.link, a {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}
</style>
