<!-- HomeSection.vue -->
<template>
  <div class="home-section" id="home">
    <div class="name">
      <h1>Jan Jefferson</h1>
      <h1>Rubido</h1>
    </div>
    <p class="subtitle">I'm an aspiring Software Engineer, who is passionate about crafting digital breakthroughs.</p>
    <a href="https://github.com/jezmoe/Portfolio-Website/tree/main" target="_blank" class="source-code-link">Source Code</a>
  </div>
</template>

<script>
export default {
  name: 'HomeSection'
}
</script>

<style scoped>
.home-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: left;
  padding-left: 55px;
  background-color: #1a1a1a;
}

.name h1 {
  font-size: 72px;
  font-weight: bold;
  margin: 0;
  line-height: 1;
}

.subtitle {
  font-size: 24px;
  margin-top: 20px; /* Space between name and subtitle */
  text-align: justify; /* Justifies the text for better paragraph-like formatting */
  max-width: 600px; /* Restricts the width of the subtitle for better readability */
}

.source-code-link {
  color: white;
  text-decoration: underline;
  margin-top: 20px;
  display: inline-block;
}

/* Media query for smaller devices */
@media (max-width: 768px) {
  .home-section {
    align-items: center; /* Center the items on smaller screens */
    padding-left: 20px; /* Reduce padding for smaller screens */
    padding-right: 20px; /* Add right padding for symmetry */
  }

  .name h1 {
    font-size: 48px; /* Smaller font size for names on mobile */
  }

  .subtitle {
    font-size: 18px; /* Smaller font size for subtitles on mobile */
    text-align: center; /* Center align the subtitle */
    max-width: 100%; /* Use full width for the subtitle */
  }
}
</style>

