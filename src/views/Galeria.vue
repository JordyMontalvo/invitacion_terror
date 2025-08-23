<template>
  <div class="galeria-page">
    <div class="galeria-hero">
      <div class="container">
        <h1 class="page-title">Galería</h1>
        <p class="page-subtitle">Imágenes que te harán temblar</p>
      </div>
    </div>

    <section class="filters-section">
      <div class="container">
        <div class="filter-buttons">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeFilter = category.id"
            :class="['filter-btn', { active: activeFilter === category.id }]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <section class="gallery-section">
      <div class="container">
        <div class="gallery-grid">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="index"
            class="gallery-item"
            @click="openLightbox(index)"
          >
            <div class="image-container">
              <div class="image-placeholder">{{ image.emoji }}</div>
              <div class="image-overlay">
                <div class="overlay-content">
                  <h3>{{ image.title }}</h3>
                  <p>{{ image.description }}</p>
                  <div class="view-icon">👁️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div class="lightbox" v-if="showLightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <div class="lightbox-image">
          <div class="lightbox-placeholder">{{ currentImage.emoji }}</div>
        </div>
        <div class="lightbox-info">
          <h3>{{ currentImage.title }}</h3>
          <p>{{ currentImage.description }}</p>
          <div class="lightbox-meta">
            <span>📅 {{ currentImage.date }}</span>
            <span>🎬 {{ currentImage.category }}</span>
          </div>
        </div>
        <div class="lightbox-navigation">
          <button @click="previousImage" class="nav-btn">‹</button>
          <span class="image-counter">{{ currentImageIndex + 1 }} / {{ filteredImages.length }}</span>
          <button @click="nextImage" class="nav-btn">›</button>
        </div>
      </div>
    </div>

    <!-- Sección de wallpapers -->
    <section class="wallpapers-section">
      <div class="container">
        <h2 class="section-title">Wallpapers para Descargar</h2>
        <div class="wallpapers-grid">
          <div class="wallpaper-item" v-for="(wallpaper, index) in wallpapers" :key="index">
            <div class="wallpaper-preview">{{ wallpaper.emoji }}</div>
            <div class="wallpaper-info">
              <h3>{{ wallpaper.name }}</h3>
              <p>{{ wallpaper.resolution }}</p>
              <button class="download-btn" @click="downloadWallpaper(wallpaper)">
                📥 Descargar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de behind the scenes -->
    <section class="behind-scenes-gallery">
      <div class="container">
        <h2 class="section-title">Detrás de Escenas</h2>
        <div class="behind-scenes-grid">
          <div class="scene-item" v-for="(scene, index) in behindScenes" :key="index">
            <div class="scene-image">{{ scene.emoji }}</div>
            <div class="scene-info">
              <h3>{{ scene.title }}</h3>
              <p>{{ scene.description }}</p>
              <span class="scene-date">{{ scene.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Galeria',
  data() {
    return {
      activeFilter: 'all',
      showLightbox: false,
      currentImageIndex: 0,
      categories: [
        { id: 'all', name: 'Todas' },
        { id: 'scenes', name: 'Escenas' },
        { id: 'characters', name: 'Personajes' },
        { id: 'locations', name: 'Locaciones' },
        { id: 'effects', name: 'Efectos' }
      ],
      images: [
        {
          emoji: '🏠',
          title: 'La Mansión Victorian',
          description: 'La casa embrujada que es el escenario principal de la película',
          category: 'locations',
          date: '15 Mar 2024'
        },
        {
          emoji: '👻',
          title: 'La Entidad',
          description: 'La criatura demoníaca que aterroriza a la familia',
          category: 'characters',
          date: '14 Mar 2024'
        },
        {
          emoji: '👩‍👧',
          title: 'Sarah y Emma',
          description: 'La familia Mitchell en su nuevo hogar',
          category: 'characters',
          date: '13 Mar 2024'
        },
        {
          emoji: '🔥',
          title: 'Ritual de Exorcismo',
          description: 'El Padre O\'Connor realizando el exorcismo',
          category: 'scenes',
          date: '12 Mar 2024'
        },
        {
          emoji: '📚',
          title: 'Biblioteca Ocultista',
          description: 'Los libros antiguos que contienen los secretos de la casa',
          category: 'locations',
          date: '11 Mar 2024'
        },
        {
          emoji: '⚡',
          title: 'Efectos Especiales',
          description: 'Tecnología de vanguardia para crear el ambiente aterrador',
          category: 'effects',
          date: '10 Mar 2024'
        },
        {
          emoji: '🌙',
          title: 'Noche de Terror',
          description: 'La mansión bajo la luz de la luna llena',
          category: 'scenes',
          date: '9 Mar 2024'
        },
        {
          emoji: '🔮',
          title: 'Objetos Malditos',
          description: 'Los artefactos que canalizan la energía maligna',
          category: 'effects',
          date: '8 Mar 2024'
        }
      ],
      wallpapers: [
        {
          emoji: '🏠',
          name: 'Mansión Victorian',
          resolution: '1920x1080',
          url: '#'
        },
        {
          emoji: '👻',
          name: 'La Entidad',
          resolution: '2560x1440',
          url: '#'
        },
        {
          emoji: '🌙',
          name: 'Noche de Terror',
          resolution: '3840x2160',
          url: '#'
        }
      ],
      behindScenes: [
        {
          emoji: '🎭',
          title: 'Preparación de Actores',
          description: 'Los actores ensayando las escenas más intensas',
          date: '7 Mar 2024'
        },
        {
          emoji: '🎬',
          title: 'Equipo de Filmación',
          description: 'El equipo trabajando en las escenas de efectos especiales',
          date: '6 Mar 2024'
        },
        {
          emoji: '🎵',
          title: 'Grabación de Música',
          description: 'La orquesta grabando la banda sonora aterradora',
          date: '5 Mar 2024'
        },
        {
          emoji: '👻',
          title: 'Maquillaje y Vestuario',
          description: 'Creando las criaturas más aterradoras del cine',
          date: '4 Mar 2024'
        }
      ]
    }
  },
  computed: {
    filteredImages() {
      if (this.activeFilter === 'all') {
        return this.images
      }
      return this.images.filter(img => img.category === this.activeFilter)
    },
    currentImage() {
      return this.filteredImages[this.currentImageIndex]
    }
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index
      this.showLightbox = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.showLightbox = false
      document.body.style.overflow = 'auto'
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.filteredImages.length
    },
    previousImage() {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.filteredImages.length - 1 
        : this.currentImageIndex - 1
    },
    downloadWallpaper(wallpaper) {
      // Simular descarga
      alert(`Descargando wallpaper: ${wallpaper.name} (${wallpaper.resolution})`)
    }
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style>
.galeria-page {
  padding-top: 80px;
}

.galeria-hero {
  background: linear-gradient(135deg, #1a0000 0%, #000 100%);
  padding: 4rem 0;
  text-align: center;
}

.page-title {
  font-family: 'Creepster', cursive;
  font-size: 4rem;
  color: #ff0000;
  margin: 0;
  text-shadow: 0 0 30px rgba(255, 0, 0, 0.8);
}

.page-subtitle {
  font-size: 1.3rem;
  color: #ccc;
  margin-top: 1rem;
}

.filters-section {
  padding: 2rem 0;
  background: #0a0a0a;
  border-bottom: 1px solid rgba(255, 0, 0, 0.2);
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid rgba(255, 0, 0, 0.3);
  color: #fff;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover {
  border-color: rgba(255, 0, 0, 0.6);
  background: rgba(255, 0, 0, 0.1);
}

.filter-btn.active {
  background: #ff0000;
  border-color: #ff0000;
  color: #fff;
}

.gallery-section {
  padding: 4rem 0;
  background: #000;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.gallery-item {
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.image-container {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.image-container:hover {
  border-color: rgba(255, 0, 0, 0.6);
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.3);
}

.image-placeholder {
  font-size: 8rem;
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #1a0000 0%, #000 100%);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: #fff;
}

.overlay-content h3 {
  color: #ff0000;
  margin-bottom: 0.5rem;
  font-family: 'Cinzel', serif;
}

.overlay-content p {
  color: #ccc;
  margin-bottom: 1rem;
}

.view-icon {
  font-size: 2rem;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-content {
  background: #000;
  border-radius: 15px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  border: 2px solid rgba(255, 0, 0, 0.3);
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2001;
}

.lightbox-close:hover {
  color: #ff0000;
}

.lightbox-image {
  text-align: center;
  padding: 3rem;
}

.lightbox-placeholder {
  font-size: 12rem;
}

.lightbox-info {
  padding: 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.lightbox-info h3 {
  color: #ff0000;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.lightbox-info p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.lightbox-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #888;
  font-size: 0.9rem;
}

.lightbox-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
}

.nav-btn:hover {
  color: #ff0000;
}

.image-counter {
  color: #ccc;
  font-weight: 500;
}

.wallpapers-section {
  padding: 4rem 0;
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

.wallpapers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.wallpaper-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.wallpaper-item:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 0, 0, 0.5);
}

.wallpaper-preview {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.wallpaper-info h3 {
  color: #ff0000;
  margin-bottom: 0.5rem;
  font-family: 'Cinzel', serif;
}

.wallpaper-info p {
  color: #ccc;
  margin-bottom: 1rem;
}

.download-btn {
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 0, 0, 0.4);
}

.behind-scenes-gallery {
  padding: 4rem 0;
  background: #000;
}

.behind-scenes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.scene-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.scene-item:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 0, 0, 0.5);
}

.scene-image {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
}

.scene-info h3 {
  color: #ff0000;
  margin-bottom: 0.5rem;
  font-family: 'Cinzel', serif;
  text-align: center;
}

.scene-info p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: center;
}

.scene-date {
  color: #888;
  font-size: 0.9rem;
  text-align: center;
  display: block;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .filter-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .wallpapers-grid {
    grid-template-columns: 1fr;
  }
  
  .behind-scenes-grid {
    grid-template-columns: 1fr;
  }
  
  .lightbox-content {
    margin: 1rem;
    max-width: 95vw;
  }
}
</style> 