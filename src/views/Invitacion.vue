<template>
  <div class="invitacion-page">
    <div class="invitacion-hero">
      <div class="container">
        <h1 class="page-title">💝 Invitación Especial 💝</h1>
        <p class="page-subtitle">Una propuesta que te hará temblar... de amor</p>
      </div>
    </div>

    <section class="love-letter">
      <div class="container">
        <div class="letter-content">
          <div class="letter-header">
            <h2>🎬 Mi amor hermoso</h2>
            <div class="heart-beat">💓</div>
          </div>
          
          <div class="letter-text">
            <p>
              Como sabes, he creado esta landing page terrorífica especialmente para ti. 
              Pero hay algo más importante que quiero preguntarte...
            </p>
            
            <div class="special-question">
              <h3>🌹 ¿Te gustaría que vayamos juntos a ver Conjuro 4?</h3>
              <p class="question-details">
                Una noche de terror, palomitas, y mucho amor... ¿Qué dices?
              </p>
            </div>
            
            <p>
              Si aceptas, prometo:
            </p>
            
            <ul class="promises">
              <li>🎭 Abrazarte durante las escenas más aterradoras</li>
              <li>🍿 Compartir las palomitas (aunque se caigan del susto)</li>
              <li>💕 Sostener tu mano en los momentos de tensión</li>
              <li>🎬 Explicarte la trama si te pierdes del miedo</li>
              <li>💝 Darte un beso después de cada susto</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="response-section">
      <div class="container">
        <h2 class="section-title">💝 Tu Respuesta</h2>
        
        <div class="response-options">
          <div class="response-card yes-card" @click="respond('yes')">
            <div class="response-icon">💖</div>
            <h3>¡SÍ, QUIERO!</h3>
            <p>Me encantaría ir contigo a ver Conjuro 4</p>
            <div class="response-effect">✨</div>
          </div>
          
          <div class="response-card maybe-card" @click="respond('maybe')">
            <div class="response-icon">🤔</div>
            <h3>DÉJAME PENSAR</h3>
            <p>Necesito un poco más de tiempo para decidir</p>
            <div class="response-effect">💭</div>
          </div>
          
          <div class="response-card no-card" @click="respond('no')">
            <div class="response-icon">😱</div>
            <h3>¡DEMASIADO TERROR!!</h3>
            <p>Prefiero algo más romántico y menos aterrador</p>
            <div class="response-effect">💔</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de respuesta -->
    <div class="response-modal" v-if="showResponseModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        
        <div class="modal-response" v-if="userResponse === 'yes'">
          <div class="success-animation">
            <div class="hearts">💖💖💖</div>
            <h2>¡YAY! 🎉</h2>
            <p>¡Me haces la persona más feliz del mundo!</p>
            <div class="celebration">
              <span>🎬</span>
              <span>💕</span>
              <span>👻</span>
              <span>💝</span>
            </div>
            <p class="next-steps">
              Pronto te enviaré los detalles de nuestra cita de terror romántica
            </p>
          </div>
        </div>
        
        <div class="modal-response" v-else-if="userResponse === 'maybe'">
          <div class="thinking-animation">
            <h2>🤔 Entiendo</h2>
            <p>El terror no es para todos, pero el amor sí</p>
            <p class="alternative">
              ¿Qué tal si vemos algo más romántico juntos?
            </p>
            <div class="romantic-options">
              <span>🌹</span>
              <span>🍝</span>
              <span>🎵</span>
              <span>💕</span>
            </div>
          </div>
        </div>
        
        <div class="modal-response" v-else-if="userResponse === 'no'">
          <div class="sad-animation">
            <h2>😢 Oh no...</h2>
            <p>Pero entiendo que el terror no sea lo tuyo</p>
            <p class="comfort">
              Lo importante es que estemos juntos, sin importar qué veamos
            </p>
            <div class="comfort-icons">
              <span>🤗</span>
              <span>💕</span>
              <span>🌹</span>
              <span>💝</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="special-message">
      <div class="container">
        <div class="message-card">
          <h3>💝 Un Mensaje Especial</h3>
          <p>
            Querida novia, esta landing page fue creada con mucho amor y dedicación. 
            Cada línea de código, cada efecto visual, cada detalle fue pensado en ti.
          </p>
          <p>
            Espero que te guste tanto como me gustas tú. 
            Eres la razón por la que hago todo lo que hago.
          </p>
          <div class="signature">
            <p>Con todo mi amor,</p>
            <h4>Tu Novio 💕</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Invitacion',
  data() {
    return {
      showResponseModal: false,
      userResponse: null
    }
  },
  methods: {
    respond(response) {
      this.userResponse = response
      this.showResponseModal = true
      
      // Efecto de confeti si acepta
      if (response === 'yes') {
        this.createConfetti()
      }
    },
    
    closeModal() {
      this.showResponseModal = false
      this.userResponse = null
    },
    
    createConfetti() {
      // Simular confeti con emojis
      const confetti = ['💖', '🎉', '✨', '💕', '🎬', '👻', '💝', '🌹']
      const container = document.querySelector('.success-animation')
      
      confetti.forEach((emoji, index) => {
        setTimeout(() => {
          const confettiEl = document.createElement('div')
          confettiEl.className = 'confetti-piece'
          confettiEl.textContent = emoji
          confettiEl.style.left = Math.random() * 100 + '%'
          confettiEl.style.animationDelay = index * 0.1 + 's'
          container.appendChild(confettiEl)
          
          setTimeout(() => {
            confettiEl.remove()
          }, 3000)
        }, index * 100)
      })
    }
  }
}
</script>

<style>
.invitacion-page {
  padding-top: 80px;
}

.invitacion-hero {
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 50%, #c71585 100%);
  padding: 4rem 0;
  text-align: center;
}

.page-title {
  font-family: 'Creepster', cursive;
  font-size: 4rem;
  color: #fff;
  margin: 0;
  text-shadow: 0 0 30px rgba(255, 105, 180, 0.8);
  animation: loveGlow 3s ease-in-out infinite alternate;
}

.page-subtitle {
  font-size: 1.3rem;
  color: #fff;
  margin-top: 1rem;
  font-weight: 300;
}

@keyframes loveGlow {
  0% { text-shadow: 0 0 30px rgba(255, 105, 180, 0.8); }
  100% { text-shadow: 0 0 50px rgba(255, 105, 180, 1), 0 0 70px rgba(255, 105, 180, 0.5); }
}

.love-letter {
  padding: 4rem 0;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe4e1 100%);
}

.letter-content {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.2);
  border: 2px solid #ff69b4;
}

.letter-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.letter-header h2 {
  color: #ff1493;
  font-family: 'Cinzel', serif;
  font-size: 2.5rem;
  margin: 0;
}

.heart-beat {
  font-size: 3rem;
  animation: heartbeat 1.5s ease-in-out infinite;
  margin-top: 1rem;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.letter-text {
  line-height: 1.8;
  color: #333;
}

.letter-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.special-question {
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
  color: #fff;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  margin: 2rem 0;
  box-shadow: 0 5px 20px rgba(255, 105, 180, 0.3);
}

.special-question h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.question-details {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
}

.promises {
  list-style: none;
  padding: 0;
}

.promises li {
  background: #fff;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  border-left: 5px solid #ff69b4;
  box-shadow: 0 3px 10px rgba(255, 105, 180, 0.1);
  transition: all 0.3s ease;
}

.promises li:hover {
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.2);
}

.response-section {
  padding: 4rem 0;
  background: #000;
}

.section-title {
  text-align: center;
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: #ff69b4;
  margin-bottom: 3rem;
  text-shadow: 0 0 20px rgba(255, 105, 180, 0.3);
}

.response-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.response-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.response-card:hover {
  transform: translateY(-10px);
}

.yes-card {
  border-color: #4CAF50;
}

.yes-card:hover {
  background: rgba(76, 175, 80, 0.1);
  box-shadow: 0 15px 40px rgba(76, 175, 80, 0.3);
}

.maybe-card {
  border-color: #FF9800;
}

.maybe-card:hover {
  background: rgba(255, 152, 0, 0.1);
  box-shadow: 0 15px 40px rgba(255, 152, 0, 0.3);
}

.no-card {
  border-color: #f44336;
}

.no-card:hover {
  background: rgba(244, 67, 54, 0.1);
  box-shadow: 0 15px 40px rgba(244, 67, 54, 0.3);
}

.response-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.response-card h3 {
  color: #fff;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
}

.response-card p {
  color: #ccc;
  line-height: 1.6;
  margin: 0;
}

.response-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  opacity: 0;
  transition: all 0.5s ease;
  pointer-events: none;
}

.response-card:hover .response-effect {
  opacity: 0.1;
  transform: translate(-50%, -50%) scale(1.2);
}

.response-modal {
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
  background: #fff;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  z-index: 2001;
}

.modal-close:hover {
  color: #ff69b4;
}

.modal-response {
  padding: 3rem 2rem;
  text-align: center;
}

.success-animation h2 {
  color: #4CAF50;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.thinking-animation h2 {
  color: #FF9800;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.sad-animation h2 {
  color: #f44336;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.modal-response p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.hearts {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: float 2s ease-in-out infinite;
}

.celebration, .romantic-options, .comfort-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.celebration span, .romantic-options span, .comfort-icons span {
  font-size: 2rem;
  animation: bounce 1s ease-in-out infinite;
}

.celebration span:nth-child(2) { animation-delay: 0.1s; }
.celebration span:nth-child(3) { animation-delay: 0.2s; }
.celebration span:nth-child(4) { animation-delay: 0.3s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.next-steps {
  background: #4CAF50;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 600;
}

.alternative {
  background: #FF9800;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 600;
}

.comfort {
  background: #f44336;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 600;
}

.special-message {
  padding: 4rem 0;
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
}

.message-card {
  background: #fff;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.message-card h3 {
  color: #ff1493;
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.message-card p {
  color: #333;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.signature {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #ff69b4;
}

.signature p {
  color: #666;
  margin: 0;
  font-style: italic;
}

.signature h4 {
  color: #ff1493;
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  margin: 0.5rem 0 0 0;
}

.confetti-piece {
  position: absolute;
  font-size: 1.5rem;
  animation: confettiFall 3s linear forwards;
  pointer-events: none;
}

@keyframes confettiFall {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
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
  
  .response-options {
    grid-template-columns: 1fr;
  }
  
  .letter-content {
    padding: 2rem;
    margin: 0 1rem;
  }
  
  .special-question h3 {
    font-size: 1.5rem;
  }
}
</style> 