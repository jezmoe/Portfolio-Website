<!-- NavbarSection.vue -->
<template>
  <nav>
    <a @click.prevent="scrollToSection('home')" class="link">Home</a>
    <a @click.prevent="scrollToSection('about')" class="link">About</a>
    <a @click.prevent="scrollToSection('experience')" class="link">Experience</a>
    <a @click.prevent="scrollToSection('contact')" class="link">Contact</a>
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
  justify-content: space-around; /* This ensures equal spacing */
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #1a1a1a;
  z-index: 1000;
  padding: 10px 0;
}

.link {
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 20px; /* Adds more clickable area */
}
</style>
