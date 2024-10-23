import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import VueScrollTo from 'vue-scrollto';
import store from './store/store.js';
import { createHead } from '@vueuse/head';

const app = createApp(App);

const head = createHead();

app.use(router);
app.use(store);
app.use(head);
app.use(VueScrollTo, {
  duration: 500,
  easing: 'ease',
});

app.mount('#app');
