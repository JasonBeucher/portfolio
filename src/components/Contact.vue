<template>
  <footer id="footer">
    <div class="footer-content">
      <h3>Jason Beucher</h3>
      <p>Vous pouvez me contacter via les plateformes suivantes.</p>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/jason-beucher" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:contact@jasonbeucher.fr" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/JasonBeucher" target="_blank" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ContactView',
}
</script>

<style scoped>
#footer {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
  padding: 2rem 0;
}

.footer-content {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 24px; /* Adjust the size of the icons */
}

.social-links a:hover {
  color: #ddd; /* Lighter shade for hover effect */
}
</style>