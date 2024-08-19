import { createRouter, createWebHistory } from 'vue-router';
import HomeSection from '../components/HomeSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';

const routes = [
  { path: '/', component: HomeSection },
  { path: '/about', component: AboutSection },
  { path: '/experience', component: ExperienceSection }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
