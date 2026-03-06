// ================================================
// PUNTO DE ENTRADA DE LA APLICACIÓN REACT
// ================================================

// Importamos StrictMode de React para detectar problemas en modo desarrollo
// StrictMode ejecuta componentes dos veces en desarrollo para encontrar efectos secundarios no intencionales
import { StrictMode } from 'react'

// Importamos createRoot de react-dom/client para renderizar la aplicación en el DOM
// createRoot es la forma moderna de inicializar una app React (React 18+)
import { createRoot } from 'react-dom/client'

// Importamos los estilos globales de CSS que aplican a toda la aplicación
import './index.css'

// Importamos el componente principal App que contiene toda la lógica de la aplicación
import App from './App.tsx'

// ================================================
// RENDERIZADO INICIAL DE LA APLICACIÓN
// ================================================
// Buscamos el elemento HTML con id='root' en index.html donde se montará toda la app
// createRoot crea la raíz de la aplicación React
// .render() coloca el componente App dentro del elemento root, envuelto en StrictMode para detectar problemas
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
