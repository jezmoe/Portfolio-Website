<template>
  <div id="app">
    <div v-if="loading" class="loading">
      <div class="progress-bar-background">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <span class="progress-text">{{ parseInt(progress) }}%</span>
    </div>
    <div v-else class="content">
      <NavbarMenu />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
    </div>
    <img src="@/assets/logo.png" alt="Jan Jefferson Rubido Logo" style="height: 50px;">
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue';
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';

export default {
  name: 'App',
  components: {
    NavbarMenu,
    HomeSection,
    AboutSection,
    ExperienceSection
  },
  data() {
    return {
      loading: true,
      progress: 0
    };
  },
  mounted() {
    let interval = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.loading = false;
          this.$nextTick(() => {
            this.$el.querySelector('.content').style.opacity = 1;
          });
        }, 500);
      }
    }, 30);
  }
}
</script>

<style>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.progress-bar-background {
  width: 50%;
  height: 20px;
  background-color: #333;
}

.progress-bar {
  height: 100%;
  background-color: white;
  width: 0%;
  transition: width 0.5s ease;
}

.progress-text {
  color: white;
  margin-top: 20px; /* Position below the bar */
  font-size: 20px;
}

.content {
  opacity: 0; /* Start invisible and will be made visible by script */
  transition: opacity 0.5s ease-in-out;
}
</style>
