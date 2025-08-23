<template>
  <div class="sinopsis-page">
    <div class="sinopsis-hero">
      <div class="container">
        <h1 class="page-title">Sinopsis</h1>
        <p class="page-subtitle">Descubre la historia detrás del terror</p>
      </div>
    </div>

    <section class="story-section">
      <div class="container">
        <div class="story-content">
          <h2 class="section-title">La Historia</h2>
          <div class="story-text">
            <p>
              En las profundidades de una antigua mansión victoriana, una familia descubre que su nuevo hogar 
              esconde secretos más aterradores de lo que podrían imaginar. Cuando Sarah y su hija Emma se mudan 
              a la casa de sus sueños, pronto descubren que los sueños pueden convertirse en pesadillas.
            </p>
            <p>
              La mansión, construida en el siglo XIX, fue el escenario de rituales ocultos y sacrificios humanos. 
              Ahora, las entidades que fueron convocadas hace más de 100 años han regresado, y están hambrientas 
              de nuevas almas.
            </p>
            <p>
              Con la ayuda de un investigador paranormal y un sacerdote que conoce la verdad sobre la casa, 
              la familia debe enfrentar no solo a los espíritus malignos, sino también a su propio pasado 
              y a los secretos que han estado ocultando.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="characters-section">
      <div class="container">
        <h2 class="section-title">Personajes Principales</h2>
        <div class="characters-grid">
          <div class="character-card" v-for="(character, index) in characters" :key="index">
            <div class="character-image">
              <div class="character-avatar">{{ character.avatar }}</div>
            </div>
            <div class="character-info">
              <h3>{{ character.name }}</h3>
              <p class="character-role">{{ character.role }}</p>
              <p class="character-description">{{ character.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="plot-points">
      <div class="container">
        <h2 class="section-title">Puntos Clave de la Trama</h2>
        <div class="plot-timeline">
          <div class="timeline-item" v-for="(point, index) in plotPoints" :key="index">
            <div class="timeline-marker">{{ point.icon }}</div>
            <div class="timeline-content">
              <h3>{{ point.title }}</h3>
              <p>{{ point.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="themes-section">
      <div class="container">
        <h2 class="section-title">Temas y Elementos</h2>
        <div class="themes-grid">
          <div class="theme-card" v-for="(theme, index) in themes" :key="index">
            <div class="theme-icon">{{ theme.icon }}</div>
            <h3>{{ theme.title }}</h3>
            <p>{{ theme.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="spoiler-warning">
      <div class="container">
        <div class="warning-card">
          <h3>⚠️ Advertencia de Spoilers</h3>
          <p>
            Esta sinopsis contiene información sobre la trama de la película. Si prefieres mantener 
            la sorpresa, te recomendamos ver la película primero y regresar después.
          </p>
          <router-link to="/trailer" class="btn btn-primary">
            Ver Tráiler en su lugar
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Sinopsis',
  data() {
    return {
      characters: [
        {
          avatar: '👩‍👧',
          name: 'Sarah Mitchell',
          role: 'Protagonista',
          description: 'Una madre soltera que busca un nuevo comienzo para su familia. Su determinación será puesta a prueba cuando enfrente las fuerzas sobrenaturales.'
        },
        {
          avatar: '👧',
          name: 'Emma Mitchell',
          role: 'Hija de Sarah',
          description: 'Una niña de 8 años con una sensibilidad especial que la hace vulnerable a las entidades paranormales, pero también le da fortalezas únicas.'
        },
        {
          avatar: '👨‍💼',
          name: 'Dr. Marcus Chen',
          role: 'Investigador Paranormal',
          description: 'Un científico que ha dedicado su vida a estudiar fenómenos sobrenaturales. Su conocimiento será crucial para la supervivencia de la familia.'
        },
        {
          avatar: '⛪',
          name: 'Padre Michael O\'Connor',
          role: 'Sacerdote',
          description: 'Un exorcista con un pasado oscuro que conoce la verdad sobre la mansión y los rituales que se realizaron allí.'
        },
        {
          avatar: '👻',
          name: 'La Entidad',
          role: 'Antagonista Principal',
          description: 'Una criatura demoníaca que fue convocada hace más de un siglo y que ahora busca venganza contra todos los que habiten la casa.'
        }
      ],
      plotPoints: [
        {
          icon: '🏠',
          title: 'La Mudanza',
          description: 'Sarah y Emma se mudan a la mansión victoriana, ignorando las advertencias de los vecinos locales.'
        },
        {
          icon: '👻',
          title: 'Primeros Signos',
          description: 'Emma comienza a ver sombras y escuchar voces, mientras Sarah atribuye todo a la imaginación de su hija.'
        },
        {
          icon: '📚',
          title: 'Descubrimiento de la Verdad',
          description: 'El Dr. Chen investiga la historia de la casa y descubre los rituales ocultos del pasado.'
        },
        {
          icon: '⛪',
          title: 'Intervención Divina',
          description: 'El Padre O\'Connor es llamado para realizar un exorcismo, pero las fuerzas malignas son más poderosas de lo esperado.'
        },
        {
          icon: '🔥',
          title: 'El Confrontamiento Final',
          description: 'La familia debe unirse para enfrentar a la entidad en una batalla épica por su supervivencia.'
        }
      ],
      themes: [
        {
          icon: '👨‍👩‍👧‍👦',
          title: 'Familias Disfuncionales',
          description: 'Explora cómo las relaciones familiares pueden ser tanto una fortaleza como una debilidad en tiempos de crisis.'
        },
        {
          icon: '🏚️',
          title: 'El Hogar como Prisión',
          description: 'La mansión representa tanto la seguridad como el peligro, simbolizando los miedos más profundos de la familia.'
        },
        {
          icon: '⏰',
          title: 'El Pasado que Persiste',
          description: 'Los errores del pasado siempre regresan para atormentar a las generaciones futuras.'
        },
        {
          icon: '🙏',
          title: 'Fe vs. Ciencia',
          description: 'El conflicto entre la explicación científica y la intervención divina para resolver problemas sobrenaturales.'
        }
      ]
    }
  }
}
</script>

<style>
.sinopsis-page {
  padding-top: 80px;
}

.sinopsis-hero {
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

.story-section {
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

.story-content {
  max-width: 800px;
  margin: 0 auto;
}

.story-text p {
  color: #ccc;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.characters-section {
  padding: 4rem 0;
  background: #000;
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.character-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.character-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 0, 0, 0.5);
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
}

.character-image {
  text-align: center;
  margin-bottom: 1.5rem;
}

.character-avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.character-info h3 {
  color: #ff0000;
  margin-bottom: 0.5rem;
  font-family: 'Cinzel', serif;
  text-align: center;
}

.character-role {
  color: #ffd700;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  font-style: italic;
}

.character-description {
  color: #ccc;
  line-height: 1.6;
  text-align: center;
}

.plot-points {
  padding: 4rem 0;
  background: #0a0a0a;
}

.plot-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 2rem;
  top: 4rem;
  bottom: -3rem;
  width: 2px;
  background: linear-gradient(to bottom, #ff0000, transparent);
}

.timeline-marker {
  font-size: 2rem;
  margin-right: 2rem;
  background: #ff0000;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
}

.timeline-content {
  flex: 1;
}

.timeline-content h3 {
  color: #ff0000;
  margin-bottom: 0.5rem;
  font-family: 'Cinzel', serif;
}

.timeline-content p {
  color: #ccc;
  line-height: 1.6;
}

.themes-section {
  padding: 4rem 0;
  background: #000;
}

.themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.theme-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.theme-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 0, 0, 0.5);
}

.theme-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.theme-card h3 {
  color: #ff0000;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.theme-card p {
  color: #ccc;
  line-height: 1.6;
}

.spoiler-warning {
  padding: 4rem 0;
  background: #0a0a0a;
}

.warning-card {
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid #ff0000;
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.warning-card h3 {
  color: #ff0000;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.warning-card p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .characters-grid {
    grid-template-columns: 1fr;
  }
  
  .themes-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    flex-direction: column;
    text-align: center;
  }
  
  .timeline-item::after {
    display: none;
  }
  
  .timeline-marker {
    margin: 0 auto 1rem auto;
  }
}
</style> 