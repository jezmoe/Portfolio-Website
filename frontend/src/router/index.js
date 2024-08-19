import { createRouter, createWebHistory } from 'vue-router';
import HomeSection from '@/components/HomeSection';
// other imports

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeSection
    },
    // other routes
  ]
});

export default router;
