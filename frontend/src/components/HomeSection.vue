<template>
  <div class="home-section" id="home">
    <div class="name">
      <h1>Jan Jefferson</h1>
      <h1>Rubido</h1>
    </div>
    <p class="subtitle">I'm a creative developer, passionate about crafting inspiring digital experiences.</p>
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
</style>
