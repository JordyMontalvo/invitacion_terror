<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-title">
          <h1 class="main-title">CONJURO IV</h1>
          <h2 class="subtitle">La Nueva Pesadilla</h2>
        </div>
        <div class="hero-description">
          <p>El terror regresa con una nueva entrega que te hará temblar hasta la médula</p>
        </div>
        <div class="hero-buttons">
          <router-link to="/trailer" class="btn btn-primary">
            <span>Ver Tráiler</span>
            <div class="btn-glow"></div>
          </router-link>
          <router-link to="/sinopsis" class="btn btn-secondary">
            <span>Leer Sinopsis</span>
          </router-link>
          <router-link to="/invitacion" class="btn btn-love">
            <span>💝 Invitación Especial</span>
            <div class="btn-glow"></div>
          </router-link>
        </div>
      </div>
      
      <!-- Efectos de partículas flotantes -->
      <div class="floating-particles">
        <div class="particle" v-for="n in 20" :key="n" :style="getParticleStyle(n)"></div>
      </div>
    </section>

    <!-- Sección de características -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">¿Por qué ver Conjuro 4?</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de estadísticas -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item" v-for="(stat, index) in stats" :key="index">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <div class="container">
        <h2>¿Lista para el terror?</h2>
        <p>No te pierdas la experiencia cinematográfica más aterradora del año</p>
        <router-link to="/galeria" class="btn btn-primary btn-large">
          <span>Explorar Galería</span>
          <div class="btn-glow"></div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      features: [
        {
          icon: '👻',
          title: 'Terror Psicológico',
          description: 'Una experiencia que te mantendrá en suspenso desde el primer minuto'
        },
        {
          icon: '🎬',
          title: 'Efectos Especiales',
          description: 'Tecnología de vanguardia para crear el ambiente más aterrador'
        },
        {
          icon: '🎭',
          title: 'Actuaciones Brillantes',
          description: 'Un elenco de primer nivel que te hará creer en cada momento'
        },
        {
          icon: '🎵',
          title: 'Banda Sonora',
          description: 'Música que intensifica cada escalofrío y susto'
        }
      ],
      stats: [
        { number: '4', label: 'Películas en la Saga' },
        { number: '15+', label: 'Años de Terror' },
        { number: '1B+', label: 'Recaudación Mundial' },
        { number: '9.2', label: 'Puntuación de Fans' }
      ]
    }
  },
  methods: {
    getParticleStyle(n) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 20 + 's',
        animationDuration: (Math.random() * 10 + 10) + 's'
      }
    }
  }
}
</script>

<style>
.home {
  padding-top: 80px;
}

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #000 0%, #1a0000 50%, #000 100%);
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="%23ff0000" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  margin-bottom: 2rem;
}

.main-title {
  font-family: 'Creepster', cursive;
  font-size: 5rem;
  color: #ff0000;
  text-shadow: 0 0 30px rgba(255, 0, 0, 0.8);
  margin: 0;
  animation: glow 3s ease-in-out infinite alternate;
}

.subtitle {
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  color: #fff;
  margin: 0;
  margin-top: 0.5rem;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.hero-description {
  margin-bottom: 3rem;
}

.hero-description p {
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn.btn-primary {
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #fff;
  border: 2px solid #ff0000;
}

.btn.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.4);
}

.btn.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn.btn-secondary:hover {
  background: #fff;
  color: #000;
}

.btn.btn-love {
  background: linear-gradient(45deg, #ff69b4, #ff1493);
  color: #fff;
  border: 2px solid #ff69b4;
}

.btn.btn-love:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.4);
}

.btn.btn-large {
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn:hover .btn-glow {
  left: 100%;
}

.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #ff0000;
  border-radius: 50%;
  opacity: 0.6;
  animation: float linear infinite;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes glow {
  0% {
    text-shadow: 0 0 30px rgba(255, 0, 0, 0.8);
  }
  100% {
    text-shadow: 0 0 50px rgba(255, 0, 0, 1), 0 0 70px rgba(255, 0, 0, 0.5);
  }
}

.features {
  padding: 5rem 0;
  background: #0a0a0a;
}

.section-title {
  text-align: center;
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: #ff0000;
  margin-bottom: 3rem;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 0, 0, 0.5);
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #ff0000;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.feature-card p {
  color: #ccc;
  line-height: 1.6;
}

.stats {
  padding: 5rem 0;
  background: #000;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 4rem;
  font-weight: bold;
  color: #ff0000;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  font-family: 'Creepster', cursive;
}

.stat-label {
  color: #ccc;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.cta {
  padding: 5rem 0;
  background: linear-gradient(135deg, #1a0000 0%, #000 100%);
  text-align: center;
}

.cta h2 {
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: #ff0000;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 