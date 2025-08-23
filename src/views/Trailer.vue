<template>
  <div class="trailer-page">
    <div class="trailer-hero">
      <div class="container">
        <h1 class="page-title">Tráiler Oficial</h1>
        <p class="page-subtitle">Descubre el terror que acecha en Conjuro 4</p>
      </div>
    </div>

    <section class="trailer-section">
      <div class="container">
        <div class="video-container">
          <div class="video-placeholder">
            <div class="play-button" @click="showTrailer = true">
              <div class="play-icon">▶</div>
            </div>
            <div class="video-info">
              <h3>Conjuro 4 - Tráiler Oficial</h3>
              <p>Duración: 2:35 | Clasificación: B-15</p>
            </div>
          </div>
          
          <!-- Modal del tráiler -->
          <div class="trailer-modal" v-if="showTrailer" @click="showTrailer = false">
            <div class="modal-content" @click.stop>
              <button class="close-button" @click="showTrailer = false">&times;</button>
              <div class="video-frame">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="trailer-details">
      <div class="container">
        <div class="details-grid">
          <div class="detail-card">
            <h3>🎬 Detalles del Tráiler</h3>
            <ul>
              <li>Fecha de lanzamiento: 15 de Marzo, 2024</li>
              <li>Duración: 2 minutos 35 segundos</li>
              <li>Director: James Wan</li>
              <li>Productora: New Line Cinema</li>
            </ul>
          </div>
          
          <div class="detail-card">
            <h3>⚠️ Advertencias</h3>
            <ul>
              <li>Contenido de terror intenso</li>
              <li>Imágenes perturbadoras</li>
              <li>Sonidos fuertes y súbitos</li>
              <li>No recomendado para menores de 15 años</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="behind-scenes">
      <div class="container">
        <h2 class="section-title">Detrás de Escenas</h2>
        <div class="scenes-grid">
          <div class="scene-item" v-for="(scene, index) in behindScenes" :key="index">
            <div class="scene-image">
              <div class="scene-placeholder">{{ scene.emoji }}</div>
            </div>
            <h3>{{ scene.title }}</h3>
            <p>{{ scene.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="social-proof">
      <div class="container">
        <h2 class="section-title">Lo que dicen los fans</h2>
        <div class="reviews-grid">
          <div class="review-card" v-for="(review, index) in reviews" :key="index">
            <div class="review-stars">
              <span v-for="n in 5" :key="n" class="star">⭐</span>
            </div>
            <p class="review-text">"{{ review.text }}"</p>
            <div class="review-author">- {{ review.author }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Trailer',
  data() {
    return {
      showTrailer: false,
      behindScenes: [
        {
          emoji: '🎭',
          title: 'Preparación de Actores',
          description: 'Los actores pasaron semanas preparándose para sus roles aterradores'
        },
        {
          emoji: '🎬',
          title: 'Efectos Especiales',
          description: 'Tecnología de vanguardia para crear el ambiente más realista'
        },
        {
          emoji: '🎵',
          title: 'Banda Sonora',
          description: 'Composición musical que intensifica cada momento de terror'
        },
        {
          emoji: '👻',
          title: 'Maquillaje y Vestuario',
          description: 'Equipo de maquillaje trabajando para crear criaturas aterradoras'
        }
      ],
      reviews: [
        {
          text: "El tráiler me dejó sin aliento. No puedo esperar a ver la película completa!",
          author: "María G."
        },
        {
          text: "James Wan ha superado todas las expectativas. Esto será épico!",
          author: "Carlos R."
        },
        {
          text: "Los efectos especiales se ven increíbles. Definitivamente iré al cine.",
          author: "Ana L."
        }
      ]
    }
  }
}
</script>

<style>
.trailer-page {
  padding-top: 80px;
}

.trailer-hero {
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

.trailer-section {
  padding: 4rem 0;
  background: #0a0a0a;
}

.video-container {
  max-width: 800px;
  margin: 0 auto;
}

.video-placeholder {
  position: relative;
  background: #000;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid rgba(255, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.video-placeholder:hover {
  border-color: rgba(255, 0, 0, 0.6);
  transform: scale(1.02);
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: rgba(255, 0, 0, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: rgba(255, 0, 0, 1);
  transform: translate(-50%, -50%) scale(1.1);
}

.play-icon {
  color: #fff;
  font-size: 2rem;
  margin-left: 5px;
}

.video-info {
  padding: 2rem;
  text-align: center;
}

.video-info h3 {
  color: #ff0000;
  margin-bottom: 0.5rem;
  font-family: 'Cinzel', serif;
}

.video-info p {
  color: #ccc;
  margin: 0;
}

.trailer-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2001;
}

.close-button:hover {
  color: #ff0000;
}

.video-frame {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
}

.video-frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.trailer-details {
  padding: 4rem 0;
  background: #000;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.detail-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 0, 0, 0.2);
}

.detail-card h3 {
  color: #ff0000;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.detail-card ul {
  list-style: none;
  padding: 0;
}

.detail-card li {
  color: #ccc;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.detail-card li:last-child {
  border-bottom: none;
}

.behind-scenes {
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

.scenes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.scene-item {
  text-align: center;
}

.scene-image {
  margin-bottom: 1rem;
}

.scene-placeholder {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.scene-item h3 {
  color: #ff0000;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.scene-item p {
  color: #ccc;
  line-height: 1.6;
}

.social-proof {
  padding: 4rem 0;
  background: #000;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.review-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 0.2);
}

.review-stars {
  margin-bottom: 1rem;
}

.star {
  color: #ffd700;
  font-size: 1.2rem;
}

.review-text {
  color: #ccc;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.review-author {
  color: #ff0000;
  font-weight: 600;
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
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .scenes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .reviews-grid {
    grid-template-columns: 1fr;
  }
}
</style> 