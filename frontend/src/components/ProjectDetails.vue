<!-- ProjectDetails.vue -->
<template>
  <div class="project-details">
    <h1>{{ project.title }}</h1>
    <img :src="project.image" :alt="project.title">
    <p>{{ project.description }}</p>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.project-details img {
  width: 100%;
  height: auto;
}
</style>
