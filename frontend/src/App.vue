<!-- App.vue -->
<template>
  <div id="app">
    <div v-if="loading" class="loading">
      <div class="progress-bar-background">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <span class="progress-text">{{ parseInt(progress) }}%</span>
    </div>
    <div v-else>
      <NavbarMenu />
      <router-view :key="$route.fullPath"></router-view> <!-- Dynamic component rendering based on route -->
    </div>
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue';

export default {
  name: 'App',
  components: {
    NavbarMenu
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
        }, 500);
      }
    }, 30);
  }
}
</script>



<style>

body, html {
  scroll-behavior: smooth;
  overflow-x: hidden; /* Hide horizontal overflow which might be causing the white line */
  margin: 0; /* Remove default margins */
  padding: 0; /* Remove default padding */
}

/* CSS transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

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

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: make scrollbar completely transparent */
}

</style>


