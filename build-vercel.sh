#!/bin/bash

echo "🚀 Construyendo para Vercel..."
echo "📦 Instalando dependencias..."

# Instalar dependencias
npm install

echo "🔨 Construyendo el proyecto..."
# Construir el proyecto
npm run build

echo "✅ Build completado!"
echo "📁 Directorio de salida: dist/"
echo "🌐 Listo para deploy en Vercel"

# Verificar que dist existe
if [ -d "dist" ]; then
    echo "✅ Carpeta dist creada correctamente"
    ls -la dist/
else
    echo "❌ Error: Carpeta dist no encontrada"
    exit 1
fi 