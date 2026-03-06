// ================================================
// ARCHIVO DE EXPORTACIÓN CENTRALIZADO: usePokemon.index.ts
// ================================================
// Este archivo centraliza la exportación del hook personalizado usePokemon
// Permite importar el hook desde un único punto en lugar de relaciones complejas
// 
// Beneficios:
// - Importar es más simple: import { usePokemon } from './hooks/usePokemon.index'
// - En lugar de: import { default as usePokemon } from './hooks/usePokemon'
// - Facilita agregar más hooks en el futuro de forma centralizada

// Exportamos el hook personalizado usePokemon que gestiona la obtención de pokemons de la PokeAPI
export { default as usePokemon } from "./usePokemon";
export { default as useCharacterRM } from "./useRMCharacter";
