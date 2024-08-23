<!-- ContactSection.vue -->
<template>
  <div class="contact-section" id="contact" ref="contactSection">
    <video ref="videoBackground" autoplay muted loop class="video-background">
      <source :src="videoSource" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <h1>Questions?</h1>
    <p>Would you like to discuss a new project? Explore the idea of collaborating? Let’s connect.</p>
    <a href="mailto:janrubido@gmail.com" class="email-link">janrubido@gmail.com</a>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      videoSource: require('@/assets/98064-646668892.mp4') // Ensures Webpack processes the file path
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.restartVideo();
          } else {
            this.pauseVideo();
          }
        });
      },
      {
        threshold: 0.5
      }
    );
    this.observer.observe(this.$refs.contactSection);
  },
  methods: {
    restartVideo() {
      const video = this.$refs.videoBackground;
      if (video) {
        video.currentTime = 0; // Reset the video to start
        const promise = video.play();
        if (promise !== undefined) {
          promise.then(() => {
            console.log('Video playback started.');
          }).catch(error => {
            console.error('Error starting video playback:', error);
          });
        }
      }
    },
    pauseVideo() {
      const video = this.$refs.videoBackground;
      if (video) {
        video.pause();
        console.log('Video paused.');
      }
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
</script>


<style scoped>
.contact-section {
  padding: 50px;
  position: relative;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 24px;
  max-width: 600px;
}

.email-link {
  font-size: 24px;
  color: white;
  text-decoration: underline;
  margin-top: 20px;
}
</style>
