// ================================================
// ARCHIVO DE EXPORTACIÓN CENTRALIZADO: pokemon.data.index.ts
// ================================================
// Este archivo centraliza la exportación de datos de Pokémon
// Permite importar desde un único punto en lugar de relaciones complejas
// 
// Beneficios:
// - Importar es más simple: import POKEMON_MOCK from './data/pokemon.data.index'
// - En lugar de: import POKEMON_MOCK from './data/pokemon.data'
// - Facilita agregar más datos en el futuro de forma centralizada

// Exportamos los datos mock de Pokémon para uso en otros archivos
export { default as POKEMON_MOCK } from "./pokemon.data"