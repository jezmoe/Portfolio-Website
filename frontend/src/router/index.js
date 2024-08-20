import { createRouter, createWebHistory } from 'vue-router';
import HomeSection from '../components/HomeSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeSection },
  { path: '/about', name: 'About', component: AboutSection },
  { path: '/contact', name: 'Contact', component: ContactSection },
  { path: '/experience', name: 'Experience', component: ExperienceSection }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
