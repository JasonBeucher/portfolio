
<template>
  <section id="home">
    <div class="content">
      <h1 :class="this.isLightTheme ? 'title light' : 'title dark'">Bienvenue</h1>
      <h2 class="subtitle">Le portfolio d'un développeur passionné</h2>
      <button class="center-button" @click="scrollTo('#about')">à propos de moi</button>
    </div>
    <div class="cloud-container left">
      <div class="cloud" v-for="i in 3" :key="i"></div>
    </div>
    <div class="cloud-container right">
      <div class="cloud" v-for="i in 3" :key="i"></div>
    </div>
  </section>
</template>

<script>
import '../assets/style.css';
export default {
  name: 'HomeView',
  data() {
    return {
     
    }
  },
  computed: {
    isLightTheme() {
      return this.$store.state.isLightTheme;
    },
  },
  mounted() {
    this.handleThemeChange();
  },
  beforeUnmount() {

  },
  watch: {
    isLightTheme(newVal, oldVal) {
      if(newVal !== oldVal) {
        this.handleThemeChange();
      }
    }
  },
  methods: {
    createRandomStars(){
      const stars = 200;
      const container = document.getElementById('home');
      //Create stars with random position and position absolute
      for (let i = 0; i < stars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.position = 'absolute';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random()}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        container.appendChild(star);
      }
    },
    showClouds() {
      const clouds = document.querySelectorAll('.cloud');
      const cloudContainer = document.querySelectorAll('.cloud-container');
      cloudContainer.forEach(cloud => {
        cloud.style.display = 'block';
      });
      clouds.forEach(cloud => {
        cloud.style.opacity = '1';
        cloud.classList.add('lift'); // Add the lift class
      });
    },
    hideClouds() {
      const clouds = document.querySelectorAll('.cloud');
      const cloudContainer = document.querySelectorAll('.cloud-container');
      cloudContainer.forEach(cloud => {
        cloud.style.display = 'none';
      });
      clouds.forEach(cloud => {
        cloud.style.opacity = '0';
        cloud.classList.remove('lift'); 
      });
    },
    destroyStars() {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => star.remove());
    },
    handleThemeChange() {
      if(this.isLightTheme){
        this.showClouds();
        this.destroyStars();
      } else {
        this.destroyStars();
        this.createRandomStars();
        this.hideClouds();
      }
    },
    scrollTo(target) {
      this.$scrollTo(target, 500);
    },
  }
}
</script>

<style scoped>
#home {
  position: relative;
  background-color: var(--primary-color);
  padding: 50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .4s ease-in-out;
  overflow:hidden;
  min-height: 600px;
}
.content {
  text-align: center;
}
.cloud-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 600px;
  height: 600px;
  background-color: transparent;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}
.cloud-container.right {
  left: auto;
  right: 0;
  transform: rotate(270deg);
}
.cloud {
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: var(--secondary-color);
  border-radius: 50%;
}

.cloud-container .cloud.lift {
  animation: liftClouds 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.cloud-container.right .cloud.lift {
  animation: liftCloudsRight 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

@keyframes liftClouds {
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(-50px);
  }
}

@keyframes liftCloudsRight {
  0% {
    transform: translateX(-300px);
  }
  100% {
    transform: translateX(50px);
  }
}
.cloud:nth-child(1) {
  bottom: -75px;
  left: -100px;
}

.cloud:nth-child(2) {
  bottom: -170px;
  left: 75px;
}

.cloud:nth-child(3) {
  bottom: 145px;
  left: -225px;
}
.title{
  -webkit-text-fill-color: transparent;
  font-size: 6rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  letter-spacing: 2px;
}
.title.light {
  background: var(--secondary-color);
  -webkit-background-clip: text;
}
.title.dark
{
  background: linear-gradient(120deg,#1c99fe 20.69%,#7644ff 50.19%,#fd4766 79.69%);
  -webkit-background-clip: text;
}

.subtitle {
  color: white;
  font-size: 24px;
  line-height: 40px;
  margin: 0;
  font-weight: 300;
  letter-spacing: 2px;
}

.center-button {
  background: var(--primary-color);
  color: whitesmoke;
  border: 2px solid whitesmoke;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 40px;
  border-radius: 500px;
  transition: all .4s ease-in-out;

}
.center-button:hover{
  background: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  color: #000;
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(0,0,0,.1);
}

/* Si la taille de la page est reduite */
@media (max-width: 650px) {
  .cloud-container {
    bottom : -200px;
  }
  .title {
    font-size: 4rem;
  }
}
@media (max-height: 600px) {
  .cloud-container {
    bottom : -200px;
  }
}
</style>