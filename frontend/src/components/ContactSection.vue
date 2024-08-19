<template>
  <div class="contact-section" id="contact" data-aos="fade-down" data-aos-duration="1000">
    <h1>Questions?</h1>
    <p>Would you like to discuss a new project? Explore the idea of collaborating? Let’s connect.</p>
    <a href="mailto:janrubido@gmail.com" class="email-link">janrubido@gmail.com</a>
  </div>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
.contact-section {
  padding: 50px;
  background-color: #1a1a1a; /* Dark background */
  color: white; /* White text */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 24px;
  max-width: 600px; /* Restricts the width for better readability */
}

.email-link {
  font-size: 24px;
  color: white;
  text-decoration: underline;
  margin-top: 20px;
}
</style>
