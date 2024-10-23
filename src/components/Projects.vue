<template>
  <section id="projects">
    <h1 class="title">Mes Projets</h1>

    <div class="projects-grid">
      <div class="project-card"
        v-for="project in projects"
        :key="project.id"
        ref="projectCards"
        @mouseenter="handleMouseEnter($event, project.id)"
        @mouseleave="handleMouseLeave(project.id)"
        @click="goToUrl(project.url)"
        data-aos="fade-right">
        <div class="card" :style="cardStyles[project.id]">
          <div class="card-bg"
            :style="[cardBgTransforms[project.id], { 'background-image': `url(${project.dataImage})` }]">
          </div>
          <div class="card-info">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import ownTubeImage from '../assets/yt.png';
import optimisationCombinatoireImage from '../assets/opco.jpg';
import gogoleMapImage from '../assets/map.png';
import chatImage from '../assets/chat.png';


export default {
  name: 'ProjectsView',
  data() {
    return {
      ownTubeImage,
    };
  },
  setup() {
    const projects = ref([
      { id: 1, name: 'OwnTube', description: 'Plateforme de vidéos open source et auto-hébergée, alternative à YouTube réaliser avec Vue.', dataImage: ownTubeImage, url: 'https://github.com/JasonBeucher/OwnTube'},
      { id: 2, name: 'Optimisation combinatoire', description: "Scripts utilisant des algorithmes génétiques, gloutons, et tabous pour l'optimisation et la résolution de problèmes complexes.", dataImage: optimisationCombinatoireImage, url: 'https://github.com/JasonBeucher/optimisation-combinatoire' },
      { id: 3, name: 'Gogole Map', description: 'Application de cartographie avec une API en Java et un frontend en HTML, CSS et JavaScript (NodeJs).', dataImage: gogoleMapImage, url: 'https://github.com/JasonBeucher/gogole-map' },
      { id: 4, name: 'SpookChat', description: 'Application de chat virtuel avec un backend en Java utilisant WebSockets pour une communication en temps réel.', dataImage: chatImage, url: 'https://github.com/JasonBeucher/SpookChat---Java-WebSocket' },
    ]);

    const cardStyles = ref({});
    const cardBgTransforms = ref({});

    const handleMouseEnter = (event, id) => {
      const rect = event.target.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const rX = mouseX / 50;
      const rY = mouseY / 50;
      
      cardStyles.value[id] = {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };

      const tX = mouseX / -10;
      const tY = mouseY / -10; 
      
      cardBgTransforms.value[id] = {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    };

    const handleMouseLeave = (id) => {
      delete cardStyles.value[id];
      delete cardBgTransforms.value[id];
    };

    return {
      projects,
      cardStyles,
      cardBgTransforms,
      handleMouseEnter,
      handleMouseLeave,
    };
  },
  methods: {
    goToUrl(url) {
      window
        .open(url, '_blank')
        .focus();
    },
  },

};
</script>

<style scoped>
#projects {
  background-color: var(--secondary-color);
  padding: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--primary-color);
  min-height: 600px;
}

.title {
  margin-bottom: 50px;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.project-card {
  color: var(--secondary-color);
  border-radius: 10px;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  transition: 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border:none;
  box-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  width: 110%;
  height: 110%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.3s 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card-info h2 {
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}

.card-info p {
  opacity: 0;
  text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-info {
  transform: translateY(0);
}

.project-card:hover .card-info p {
  opacity: 1;
}
/* Baisser la taille des cartes si la largeur de la page est trop basse */
@media (max-width: 960px) {
  .project-card {
    height: 200px;
  }

}
@media (max-width: 1700px) {

  #projects {
    height: 100%;
  }
  .project-card {
    width: 300px;
  }
}

</style>
