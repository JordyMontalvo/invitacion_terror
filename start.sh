#!/bin/bash

echo "🎬 Iniciando Landing Page de Conjuro 4..."
echo "💀 Preparando el terror para tu novia..."
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js no está instalado"
    echo "Por favor instala Node.js desde https://nodejs.org/"
    exit 1
fi

# Verificar si npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm no está instalado"
    echo "Por favor instala npm junto con Node.js"
    exit 1
fi

echo "✅ Node.js y npm detectados"
echo ""

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    echo ""
fi

# Construir el proyecto
echo "🔨 Construyendo el proyecto..."
npm run build
echo ""

# Iniciar el servidor
echo "🚀 Iniciando el servidor..."
echo "🌐 Abre tu navegador en: http://localhost:3000"
echo "💀 ¡La landing page terrorífica está lista!"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

npm start 