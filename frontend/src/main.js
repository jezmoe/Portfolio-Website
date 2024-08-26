// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);
app.use(router);

app.mount('#app');

// AOS Initialization
app.config.globalProperties.$AOS = AOS.init({
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
});
