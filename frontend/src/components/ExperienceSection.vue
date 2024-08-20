<template>
  <div class="experience-section" id="experience">
    <h1>Experience</h1>
    <div class="projects-container">
      <div v-for="(project, index) in projects" :key="index" class="project" @click="openProject(project)">
        <img :src="project.image" :alt="project.title">
        <div class="project-title">{{ project.title }}</div>
      </div>
    </div>
    <!-- Transition for modal appearance and disappearance -->
    <transition name="fade" mode="out-in">
      <div v-if="showModal" class="modal">
        <button @click="closeModal" class="close-button">Close</button>
        <h2>{{ selectedProject?.title }}</h2>
        <img :src="selectedProject?.image" :alt="selectedProject?.title">
        <p>{{ selectedProject?.description }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      projects: [
        { id: 1, title: 'Project 1', image: 'path/to/image1.jpg', description: 'Description here' },
        { id: 2, title: 'Project 2', image: 'path/to/image2.jpg', description: 'Description here' },
      ],
      selectedProject: null,
      showModal: false
    };
  },
  methods: {
  openProject(project) {
    // Immediately clear any existing project data to reset the modal
    this.selectedProject = null;
    this.showModal = false; // Ensure modal is closed before reopening

    // Use Vue.nextTick to update project details after the current view has been updated
    this.$nextTick(() => {
      setTimeout(() => { // Introduce a minimal timeout to ensure transition is triggered
        this.selectedProject = project;
        this.showModal = true; // Open modal with new project data
        history.pushState({ project: project.id }, '', '/experience/' + project.id);
      }, 10); // Small delay to ensure reactivity system updates
    });
  },
  closeModal() {
    this.showModal = false;
    setTimeout(() => {
      this.selectedProject = null;
      history.pushState({}, '', '/experience');
    }, 500); // Ensure the fade-out transition completes
  }
},


  mounted() {
    window.addEventListener('popstate', () => {
      if (!history.state || !history.state.project) {
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
  right: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 16px;
  color: black;
  text-decoration: underline;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* Initially invisible */ {
  opacity: 0;
}
</style>
