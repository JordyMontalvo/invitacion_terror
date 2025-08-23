<template>
  <div id="app">
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="nav-container">
        <div class="nav-logo">
          <h2>CONJURO IV</h2>
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Inicio</router-link>
          <router-link to="/trailer" class="nav-link">Tráiler</router-link>
          <router-link to="/sinopsis" class="nav-link">Sinopsis</router-link>
          <router-link to="/galeria" class="nav-link">Galería</router-link>
          <router-link to="/invitacion" class="nav-link">💝 Invitación</router-link>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Conjuro 4 - Una experiencia de terror para tu novia</p>
        <p>Hecho con 💀 y mucho amor</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  background: #000;
  color: #fff;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 0, 0, 0.3);
}

.navbar.navbar-scrolled {
  background: rgba(0, 0, 0, 0.95);
  box-shadow: 0 2px 20px rgba(255, 0, 0, 0.2);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo h2 {
  font-family: 'Creepster', cursive;
  color: #ff0000;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  margin: 0;
  font-size: 1.8rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #ff0000;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #ff0000;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.footer {
  background: rgba(0, 0, 0, 0.9);
  border-top: 1px solid rgba(255, 0, 0, 0.3);
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-content p {
  margin: 0.5rem 0;
  color: #888;
}

.footer-content p:first-child {
  color: #ff0000;
  font-weight: 500;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style> 