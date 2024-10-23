<template>
  <section id="about">
    <div class="about-container" data-aos="fade-left">
      <div class="text-content">
        <h1>Jason Beucher</h1>
        <p>Je suis un développeur passionné par l'art de la création, que ce soit pour écrire le plus petit algorithme
          ou concevoir une application complète. Ce que j'aime le plus, c'est la possibilité de
          transformer des idées abstraites en solutions concrètes et fonctionnelles.</p>
      </div>
      <img src="../assets/me.jpg" alt="Jason Beucher" class="profile-image" />
    </div>
  </section>
</template>

<script>


export default {
  name: 'AboutView',
}
</script>

<style scoped>
#about {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
  min-height: 600px;
}

.about-container {
  color: var(--secondary-color);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  text-align: left;
  gap: 300px;
  justify-content: center;
}



.profile-image {
  border-radius: 50%;
  width: 400px;
  height: 400px;
  object-fit: cover;
}
@media (max-height: 600px) {
  .profile-image
  {
    width: 250px;
    height: 250px;
  }
  
}
/* Responsive layout */
@media (max-width: 960px) {
  .about-container {
    flex-direction: column;
    text-align: center;
    gap:50px;
  }
  .profile-image {
    width: 250px;
    height: 250px;
  }
  /* Si la hauteur est inférieur à 3200 alors on baisse la taille de l'image et on réduit le gap */
  @media (max-height: 3200px) {
    #about {
      height: 100%;
    }
  }
}



.text-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 1.125rem;
  line-height: 1.75rem;
  max-width: 600px;
}

.text-content h1 {
  font-size: 3rem;
  margin: 0 0 10px 0;
}

.text-content p {
  margin: 0;
}


</style>
