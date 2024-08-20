<!-- src/components/MainPage.vue -->
<template>
    <div>
      <NavbarMenu />
      <HomeSection />
      <AboutSection />
      <ContactSection />
    </div>
  </template>
  
  <script>
  import NavbarMenu from './NavbarMenu.vue';
  import HomeSection from './HomeSection.vue';
  import AboutSection from './AboutSection.vue';
  import ContactSection from './ContactSection.vue';
  import ExperienceSection from './ExperienceSection.vue';
  
  export default {
    components: {
      NavbarMenu,
      HomeSection,
      AboutSection,
      ContactSection,
      ExperienceSection
    }
  }
  </script>
  