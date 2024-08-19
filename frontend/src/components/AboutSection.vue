<template>
    <div class="about-section" id="about" data-aos="fade-up" data-aos-duration="1000">
      <h2>About Me</h2>
      <p>I am Jan Jefferson Rubido, an IT Specialist with experience providing technical support and assistance across multiple companies, skilled in SQL, O365 administration, project management, and cybersecurity management.</p>
      <p>During my time with companies like Pneumatic and Hydraulic Company and Amazon, I have successfully implemented domain controllers, managed server databases, and contributed to full-stack projects that enhance business operations and security.</p>
      <p>I am currently pursuing a B.S. in Computer Science at the University of Houston, aiming to further enhance my skills in software development and cybersecurity.</p>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'AboutSection'
  }
  </script>
  
  <style scoped>
  .about-section {
    padding: 50px;
    background-color: #1a1a1a; /* Dark gray background */
    color: white; /* White text color */
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
  </style>
  