// ================================================
// ARCHIVO DE EXPORTACIÓN CENTRALIZADO: use.index.ts
// ================================================
// Este archivo centraliza la exportación de todos los hooks personalizados
// Permite importar los hooks desde un único punto en lugar de rutas complejas
// 
// Beneficios:
// - Importar es más simple: import { usePokemon } from './hooks/use.index'
// - Facilita agregar más hooks en el futuro de forma centralizada
// - Mantiene organizada la estructura de carpetas

// Exportamos los hooks personalizados
export { default as usePokemon } from "./usePokemon";
export { default as useCharacterRM } from "./useRMCharacter";
export { default as useConverterCurrency } from "./useConverterCurrency";
export { default as useConverterIMC } from "./useConverterIMC";
export { default as useShopProducts } from "./useShopProducts";
