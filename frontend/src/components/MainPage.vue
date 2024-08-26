<!-- src/components/MainPage.vue -->
<template>
  <div>
    <HomeSection />
    <ExperienceSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script>
import HomeSection from './HomeSection.vue';
import AboutSection from './AboutSection.vue';
import ExperienceSection from './ExperienceSection.vue';
import ContactSection from './ContactSection.vue';

export default {
  components: {
    HomeSection,
    ExperienceSection,
    AboutSection,
    ContactSection
  }
}
</script>

  