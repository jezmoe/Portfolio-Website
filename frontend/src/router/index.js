// index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import LMS from '../components/LMS.vue';

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/lms', name: 'LMS', component: LMS }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

