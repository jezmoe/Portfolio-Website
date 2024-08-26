<!-- Experience Section -->
<template>
  <div class="experience-section" id="experience">
    <h1>Experience</h1>
    <div class="projects-container">
      <div class="project" @click="openLMS">
        <img :src="project.image" alt="Library Management System">
        <div class="project-title">{{ project.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      project: {
        id: '1',
        title: 'Library Management System',
        image: require('@/assets/LMS1.png'),
        description: 'ILS'
      }
    };
  },
  methods: {
    openLMS() {
      this.$router.push({ name: 'LMS' });
    }
  }
}
</script>


<style scoped>
.experience-section {
  padding: 50px;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
}

.projects-container {
  display: flex;
  overflow-x: auto;
  gap: 20px;
}

.project {
  flex: 0 0 auto;
  width: 300px;
  cursor: pointer;
}

.project img {
  width: 100%;
  transition: transform 0.5s ease;
}

.project:hover img {
  transform: scale(1.05);
}

.project-title {
  margin-top: 10px;
}
</style>
