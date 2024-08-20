<!-- Experience Section -->
<template>
  <div class="experience-section" id="experience">
    <h1>Experience</h1>
    <div class="projects-container">
      <div v-for="(project, index) in projects" :key="index" class="project" @click="openProject(project)">
        <img :src="project.image" :alt="project.title">
        <div class="project-title">{{ project.title }}</div>
      </div>
    </div>
    <!-- Modal for project details -->
    <div v-if="selectedProject" class="modal">
      <button @click="closeModal" class="close-button">Close</button>
      <h2>{{ selectedProject.title }}</h2>
      <img :src="selectedProject.image" :alt="selectedProject.title">
      <p>{{ selectedProject.description }}</p>
      <p>Add project details here</p> <!-- Placeholder for project details -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      projects: [
        { title: 'Project 1', image: 'path/to/image1.jpg', description: 'Description here' },
        { title: 'Project 2', image: 'path/to/image2.jpg', description: 'Description here' },
      ],
      selectedProject: null // Tracks the currently selected project
    };
  },
  methods: {
    openProject(project) {
      this.selectedProject = project;
      history.pushState({ project: project.id }, '', '/experience/' + project.id);
    },
    closeModal() {
      this.selectedProject = null;
      history.back();
    }
  },
  mounted() {
    window.addEventListener('popstate', () => {
      if (this.selectedProject) {
        this.closeModal();
      }
    });
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

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.modal button {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 16px;
  color: black;
  text-decoration: underline;
}
</style>
