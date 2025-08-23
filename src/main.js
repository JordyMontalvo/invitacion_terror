import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Ocultar loading después de que Vue se monte
setTimeout(() => {
  const loading = document.querySelector('.loading')
  if (loading) {
    loading.style.opacity = '0'
    setTimeout(() => {
      loading.style.display = 'none'
    }, 500)
  }
}, 1000) 