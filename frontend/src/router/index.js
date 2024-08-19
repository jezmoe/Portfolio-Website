import { createRouter, createWebHistory } from 'vue-router';
import HomeSection from '../components/HomeSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import ContactSection from '../components/ContactSection.vue';

const routes = [
  { path: '/', component: HomeSection },
  { path: '/about', component: AboutSection },
  { path: '/experience', component: ExperienceSection },
  { path: '/contact', component: ContactSection }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
