import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import About from '@/components/About' // Uncomment when About.vue is ready

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About // Uncomment when About.vue is ready
    // }
  ]
})
