import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Add smooth scroll behavior
app.directive('smooth-scroll', {
    mounted(el) {
        el.addEventListener('click', function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                const toElement = document.querySelector(hash);
                toElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }
});

app.use(router);
app.mount('#app');
