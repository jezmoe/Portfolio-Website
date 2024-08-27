<!-- LMS.vue -->
<template>
    <div class="lms-page" v-if="!loading">
      <button @click="goBack" class="go-back">Go Back</button>
      <h1>Library Management System</h1>
      <div class="image-container">
          <img :src="require('@/assets/LMS1.png')" alt="Library Management System">
        <p>Detailed description here...</p>
      </div>
      <div class="image-container">
        <img :src="require('@/assets/LMS_DB.png')" alt="Database Overview">
        <p>Database architecture for managing library data.</p>
      </div>
      <div class="image-container">
        <img :src="require('@/assets/ERD2.png')" alt="ERD Model">
        <p>Enhanced entity-relationship diagram for system design.</p>
      </div>
      <div class="image-container">
        <img :src="require('@/assets/ERD.png')" alt="ERD Simplified">
        <p>Simplified ERD focusing on core entities.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LMS',
    data() {
      return {
        loading: false,
      };
    },
    methods: {
      goBack() {
        this.loading = true;
        this.$router.back();
      }
    }
  }
  </script>
  
  <style scoped>
  .lms-page {
    color: white;
    padding: 20px;
    text-align: center;
    background-color: #1a1a1a;
  }
  
  .image-container img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }
  
  .image-container p {
    margin-top: 10px;
  }
  
  .go-back {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #333;
    border: none;
    color: white;
  }
  </style>
  