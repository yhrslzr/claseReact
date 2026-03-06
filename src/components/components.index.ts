// ================================================
// ARCHIVO DE EXPORTACIÓN CENTRALIZADO: components.index.ts
// ================================================
// Este archivo centraliza las exportaciones de todos los componentes
// Permite importar componentes desde un único punto en lugar de rutas largas
// 
// Beneficios:
// - Importar es más simple: import { Title, Card } from './components.index'
// - En lugar de: import Title from './title/Title'
// - Facilita refactorización: cambiar la ubicación de componentes sin afectar imports

// Exportamos el componente Title que muestra un encabezado personalizado
export { default as Title } from "./title/Title";

// Exportamos el componente PkmCard que muestra una tarjeta
export { default as CardPkm } from "./buttonCard/card/CardPkm";

// Exportamos el componente RMCard que muestra una tarjeta
export { default as CardRM } from "./buttonCard/card/CardRM";

// Exportamos el componente Search que muestra un campo de búsqueda
export { default as SearchPkm } from "./search/SearchPkm";