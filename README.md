# 🎬 Conjuro 4 - Landing Page

Una landing page impresionante y aterradora para la nueva película de Conjuro 4, creada especialmente para tu novia con Node.js, Vue.js y Stylus.

## ✨ Características

- 🎭 **Diseño Terrorífico**: Interfaz oscura y elegante con efectos de terror
- 📱 **Responsive**: Optimizada para todos los dispositivos
- 🎨 **Animaciones**: Efectos visuales impresionantes y transiciones suaves
- 🎬 **Contenido Completo**: Páginas de inicio, tráiler, sinopsis y galería
- 🚀 **Performance**: Carga rápida y optimizada
- 💀 **Tema Conjuro**: Colores rojos, tipografías aterradoras y efectos de miedo

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Vue.js 3, Vue Router
- **Estilos**: Stylus
- **Backend**: Node.js, Express
- **Build Tool**: Webpack 5
- **Fuentes**: Google Fonts (Creepster, Cinzel, Roboto)

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd invitacion_conjuro
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Construye el proyecto**
   ```bash
   npm run build
   ```

4. **Inicia el servidor**
   ```bash
   npm start
   ```

5. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 🎯 Scripts Disponibles

- `npm start` - Inicia el servidor de producción
- `npm run dev` - Inicia el servidor de desarrollo con nodemon
- `npm run build` - Construye el proyecto para producción
- `npm run build:dev` - Construye el proyecto en modo desarrollo con watch

## 📁 Estructura del Proyecto

```
invitacion_conjuro/
├── src/
│   ├── views/
│   │   ├── Home.vue          # Página principal
│   │   ├── Trailer.vue       # Página del tráiler
│   │   ├── Sinopsis.vue      # Página de sinopsis
│   │   └── Galeria.vue       # Página de galería
│   ├── router/
│   │   └── index.js          # Configuración de rutas
│   ├── styles/
│   │   └── main.styl         # Estilos globales
│   ├── App.vue               # Componente principal
│   ├── main.js               # Punto de entrada
│   └── index.html            # Template HTML
├── server.js                 # Servidor Express
├── webpack.config.js         # Configuración de Webpack
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```

## 🎨 Páginas Incluidas

### 🏠 **Inicio (Home)**
- Hero section con título animado
- Características de la película
- Estadísticas impresionantes
- Call to action

### 🎬 **Tráiler**
- Reproductor de video modal
- Detalles del tráiler
- Behind the scenes
- Reseñas de fans

### 📖 **Sinopsis**
- Historia completa de la película
- Personajes principales
- Puntos clave de la trama
- Temas y elementos

### 🖼️ **Galería**
- Imágenes filtradas por categoría
- Lightbox interactivo
- Wallpapers descargables
- Behind the scenes

## 🎭 Características del Diseño

- **Colores**: Rojo (#ff0000) como color principal, negro y grises oscuros
- **Tipografías**: 
  - Creepster para títulos terroríficos
  - Cinzel para subtítulos elegantes
  - Roboto para texto legible
- **Efectos**: Glow, partículas flotantes, hover effects, transiciones suaves
- **Responsive**: Mobile-first design con breakpoints optimizados

## 🔧 Personalización

### Cambiar Colores
Edita las variables en `src/styles/main.styl`:
```stylus
$primary-color = #ff0000      // Color principal
$secondary-color = #cc0000    // Color secundario
$accent-color = #ffd700       // Color de acento
```

### Agregar Nuevas Páginas
1. Crea el componente en `src/views/`
2. Agrega la ruta en `src/router/index.js`
3. Actualiza la navegación en `src/App.vue`

### Modificar Contenido
Edita los datos en cada componente Vue para personalizar:
- Textos
- Imágenes
- Enlaces
- Información de la película

## 📱 Responsive Design

La landing page está optimizada para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Despliegue

### Heroku
```bash
heroku create tu-app-conjuro
git push heroku main
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

## 🐛 Solución de Problemas

### Error de dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de build
```bash
npm run build:dev
# Revisa los errores en la consola
```

### Puerto ocupado
Cambia el puerto en `server.js`:
```javascript
const PORT = process.env.PORT || 3001
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 💝 Créditos

- **Desarrollado con 💀 y mucho amor** para tu novia
- **Inspirado en** la saga de Conjuro
- **Fuentes**: Google Fonts
- **Iconos**: Emojis nativos

## 📞 Soporte

Si tienes alguna pregunta o problema:
- Abre un issue en GitHub
- Contacta al desarrollador
- Revisa la documentación

---

**¡Que disfrutes de esta landing page terrorífica! 🎬👻💀** # invitacion_terror
