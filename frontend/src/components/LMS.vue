
<!-- LMS.vue -->
<template>
  <div class="lms-page">
    <h1>Library Management System</h1>
    <img src="@/assets/LMS1.png" alt="Library Management System">
    <p>Detailed description here...</p>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  name: 'LMS',
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.lms-page {
  padding: 20px;
  text-align: center;
}

.lms-page img {
  width: 100%;
  max-width: 600px; /* Adjust based on your layout needs */
  height: auto;
}

button {
  margin-top: 20px;
}
</style>
