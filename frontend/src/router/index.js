// index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import LMS from '../components/LMS.vue';
import AOS from 'aos';

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/lms', name: 'LMS', component: LMS, meta: { hideNavbar: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach(() => {
  AOS.init({
    once: false,
    mirror: true,
    delay: 150,
    disable: 'mobile',
    duration: 700,
  });
  AOS.refresh();  // Ensure AOS refreshes after each route transition
});

export default router;
