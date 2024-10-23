<template>
  <div id="app">
    <nav class="navbar-transparent navbar-expand-lg navbar-dark">
      <a href="#" class="navbar-name">
        jas<img :src="getLogoSrc" alt="Logo" class="navbar-logo">n
      </a>
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { 'show': isNavbarOpen || isDesktopView }]" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" @click="scrollTo('#home')">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="scrollTo('#about')">À propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="scrollTo('#projects')">Projets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="scrollTo('#competences')">Competences</a>
          </li>
          <li class="nav-item theme-switch-item">
            <input type="checkbox" id="theme-switch" class="theme-switch" v-model="isLightTheme" @click="toggleTheme">
            <label for="theme-switch" class="theme-switch-label">
              <span class="theme-switch-control"></span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
    <Home />
    <Projects />
    <About />
    <Competences />
    <Contact />
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Competences from './components/Competences.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'App',
  components: {
    Home,
    About,
    Projects,
    Contact,
    Competences
  },
  setup() {
    useHead({
      title: 'Jason Beucher',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './assets/favicon.ico' }
      ]
    });
  },
  data() {
    return {
      isNavbarOpen: false,
      isDesktopView: window.innerWidth >= 992
    }
  },
  computed: {
    isLightTheme() {
      return this.$store.state.isLightTheme;
    },
    getLogoSrc() {
      return this.isLightTheme ? require('./assets/sun.png') : require('./assets/planet.png');
    }
  },
  mounted() {
    //Retirer le # de l'url
    if (window.location.hash) {
      window.location.href = window.location.href.replace(window.location.hash, "");
    }
    window.addEventListener('resize', this.onResize);
    AOS.init();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    toggleTheme() {
      this.$store.commit('toggleTheme');
      document.documentElement.style.setProperty('--primary-color', this.isLightTheme ? '#08AFF7' : '#000');
      document.documentElement.style.setProperty('--secondary-color', this.isLightTheme ? '#fff' : '#fff');
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    },
    scrollTo(target) {
      this.$scrollTo(target, 500);
      if (!this.isDesktopView) {
        this.closeNavbar();
      }
    },
    onResize() {
      this.isDesktopView = window.innerWidth >= 992;
      if (this.isDesktopView) {
        this.isNavbarOpen = false;
      }
    }
  },
}
</script>

<style>
/* Définition de la variable --primary-color */
:root {
  --primary-color: #08AFF7;
  --secondary-color: #fff;
}

/* Scrollbar */
/* Firefox */
* {
  scrollbar-width: thin;
  /* Largeur de la barre de défilement */
  scrollbar-color: var(--primary-color) transparent;
  /* Couleur de la barre de défilement et couleur de fond */
}

/* --- */
/* Chromium */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}

/* --- */
/* --- */

.theme-switch-item {
  display: flex;
  align-items: center;
}

body {
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar-transparent {
  position: absolute;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
  background-color: var(--primary-color);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.25rem;
  transition: all .4s ease-in-out;
  z-index: 2;
}

.navbar-collapse {
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.navbar-collapse.show {
  max-height: 500px;
  opacity: 1;
}

.navbar-name {
  display: flex;
  flex-direction: row;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 2rem;
  line-height: inherit;
  white-space: nowrap;
  color: white;
  align-items: center;
  transition: all 0.3s ease;
}

.navbar-name:hover {
  color: #fff;
  text-decoration: none;
  letter-spacing: 5px;
}

.navbar-name:hover img {
  margin-right: 5px;
}

.navbar-nav .nav-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

section {
  padding: 50px;
  height: 100vh;
}

.navbar-logo {
  height: 24px;
  /* Ajustez la taille comme vous le souhaitez */
  width: 24px;
  /* Ajustez la taille comme vous le souhaitez */
  transition: all 0.3s ease;
}

.theme-switch {
  height: 0;
  width: 0;
  visibility: hidden;
}

.theme-switch-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 52px;
  height: 26px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color .2s;
  margin: 0;
}

.theme-switch-control {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  border-radius: 90px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
}

.theme-switch:checked+.theme-switch-label {
  background: #b6eaff;
}

.theme-switch:checked+.theme-switch-label .theme-switch-control {
  transform: translateX(26px);
}
</style>
