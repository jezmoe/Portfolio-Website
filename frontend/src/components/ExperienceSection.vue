<template>
  <div class="experience-section">
    <h2>Experience</h2>
    <p>Detail your professional experiences here.</p>
    <router-link to="/" class="home-link">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'ExperienceSection'
}
</script>

<style scoped>
.experience-section {
  padding: 50px;
  background-color: #1a1a1a; /* Dark background */
  color: white; /* White text */
}

.home-link {
  color: white;
  text-decoration: underline;
  margin-top: 20px;
}
</style>
