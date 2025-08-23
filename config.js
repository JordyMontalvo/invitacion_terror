// Configuración del proyecto Conjuro 4
module.exports = {
  // Configuración del servidor
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  },
  
  // Configuración de la aplicación
  app: {
    name: 'Conjuro 4 - La Nueva Pesadilla',
    description: 'Landing page terrorífica para la nueva película de Conjuro 4',
    version: '1.0.0'
  },
  
  // Configuración de desarrollo
  development: {
    debug: process.env.NODE_ENV === 'development',
    logLevel: process.env.LOG_LEVEL || 'info'
  },
  
  // Configuración de la película
  movie: {
    title: 'Conjuro 4',
    subtitle: 'La Nueva Pesadilla',
    director: 'James Wan',
    releaseDate: '2024',
    genre: 'Terror',
    rating: 'B-15'
  },
  
  // URLs y enlaces
  urls: {
    base: process.env.BASE_URL || 'http://localhost:3000',
    trailer: 'https://www.youtube.com/watch?v=example',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  }
}; 