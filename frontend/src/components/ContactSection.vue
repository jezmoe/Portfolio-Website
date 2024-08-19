<template>
    <div class="contact-section">
      <h1>Questions? Let’s have a chat.</h1>
      <form @submit.prevent="sendEmail">
        <input type="text" v-model="firstName" placeholder="First Name" required>
        <input type="text" v-model="lastName" placeholder="Last Name" required>
        <input type="email" v-model="email" placeholder="Email Address" required>
        <textarea v-model="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      };
    },
    methods: {
      sendEmail() {
        // Implementation for email sending (pseudo-code)
        console.log(`Sending email from ${this.email}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-section {
    padding: 20px;
    background-color: #1a1a1a; /* Dark background */
    color: white; /* White text */
  }
  </style>
  