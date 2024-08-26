<!-- ProjectDetails.vue -->
<template>
  <div class="project-details">
    <h1>{{ project?.title }}</h1>
    <img :src="project?.image" :alt="project?.title">
    <p>{{ project?.description }}</p>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  props: {
    projectId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      project: null
    };
  },
  created() {
    console.log("Project ID received:", this.projectId);
    this.fetchProjectDetails();
  },
  methods: {
    fetchProjectDetails() {
      const projects = [
        { id: '1', title: 'Library Management System', image: require('@/assets/LMS1.png'), description: 'Detailed description here...' },
      ];
      this.project = projects.find(p => p.id === this.projectId);
      console.log("Project found:", this.project);
    },
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

