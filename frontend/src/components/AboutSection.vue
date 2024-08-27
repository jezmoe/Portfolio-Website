<!-- AboutSection.vue -->
<template>
    <div class="about-section" id="about" key="about-section">
      <h2>About Me</h2>
      <p>I am Jan Jefferson Rubido, an IT Specialist with experience providing technical support and assistance across multiple companies, skilled in SQL, O365 administration, project management, and cybersecurity management.</p>
      <p>During my time with companies like Pneumatic and Hydraulic Company and Amazon, I have successfully implemented domain controllers, managed server databases, and contributed to full-stack projects that enhance business operations and security.</p>
      <p>I am currently pursuing a B.S. in Computer Science at the University of Houston, aiming to further enhance my skills in software development and cybersecurity.</p>
    </div>
</template>

<script>
import AOS from 'aos';

export default {
  name: 'AboutSection',
  mounted() {
    AOS.init({
      once: false,
      mirror: true,
      delay: 150,
      duration: 1000
    });
  },
  beforeRouteUpdate (to, from, next) {
    AOS.refresh();
    next();
  }
}
</script>


<style scoped>
.about-section {
  padding: 50px;
  background-color: #1a1a1a;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h2 {
  font-size: 28px;
  font-weight: bold;
}
p {
  font-size: 18px;
  margin-top: 15px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
