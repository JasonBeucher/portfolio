<template>
  <section id="competences">
    <h1 class="title">Mes Compétences</h1>
    <div class="competences-container">
      <div class="skill-category" v-for="(list, category) in competences" :key="category" data-aos="fade-right">
        <h2>{{ category }}</h2>
        <ul>
          <li v-for="skill in list" :key="skill">
            <i :class="skill.icon"></i> {{ skill.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'competencesView',
  data() {
    return {
      competences: {
        'Langages': [
          { name: 'JavaScript', icon: 'fab fa-js' },
          { name: 'Java', icon: 'fab fa-java' },
          { name: 'C++', icon: 'fas fa-code' },
          { name: 'HTML', icon: 'fab fa-html5' },
          { name: 'CSS', icon: 'fab fa-css3-alt' },
          { name: 'PHP', icon: 'fab fa-php' },
          { name: 'SQL', icon: 'fas fa-database' },
          { name: 'TypeScript', icon: 'fab fa-js' },
          { name: 'Rust', icon: 'fab fa-rust' }
        ],
        'Frameworks & Bibliothèques': [
          { name: 'Vue.js', icon: 'fab fa-vuejs' },
          { name: 'React', icon: 'fab fa-react' },
          { name: 'Spring Boot', icon: 'fas fa-coffee' },
          { name: 'Node.js', icon: 'fab fa-node-js' },
          { name: 'Express', icon: 'fas fa-server' },
          { name: 'Symfony', icon: 'fab fa-symfony' }
        ],
        'Outils & Technologies': [
          { name: 'Git', icon: 'fab fa-git-alt' },
          { name: 'Docker', icon: 'fab fa-docker' },
          { name: 'MySQL', icon: 'fas fa-database' },

        ]
      }
    };
  },
};
</script>

<style scoped>
#competences {
  background-color: var(--secondary-color);
  padding: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 800px;
}

.title {
  margin-bottom: 30px;
  color: var(--primary-color)
}

.competences-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  color: var(--secondary-color);
  margin: auto;
}

.skill-category {
  background-color: var(--primary-color);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 450px;
}

.skill-category h2 {
  margin-bottom: 15px;
  text-align: center;
}

.skill-category ul {
  list-style-type: none;
  padding: 0;
}

.skill-category li {
  margin-bottom: 10px;
  padding: 5px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-radius: 5px;
}

@media (max-height: 600px) {
  .competences{
    height: 100%;
  }
}

@media (max-width: 1600px) {
  .skill-category {
    width: 32%;
  }
}

@media (max-width: 1200px) {
  .competences-container {
    flex-direction: column;
  }

  .skill-category {
    width: 100%;
  }

  #competences {
    height: 100%;
  }
}
</style>