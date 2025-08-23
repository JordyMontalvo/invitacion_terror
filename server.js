const express = require('express');
const path = require('path');
const config = require('./config');
const app = express();
const PORT = config.server.port;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://${config.server.host}:${PORT}`);
  console.log(`🎬 ${config.app.name} lista para tu novia!`);
  console.log(`💀 ¡El terror está servido!`);
}); 