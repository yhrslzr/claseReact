// ================================================
// ARCHIVO DE EXPORTACIÓN CENTRALIZADO: types.index.ts
// ================================================
// Este archivo actúa como un punto de entrada único para importar tipos
// Permite importar desde 'types.index.ts' en lugar de desde 'Types.ts'
// Ejemplo: import type { Pokemon } from "../types/types.index"

// Re-exportamos el type Pokemon desde Types.ts para que esté disponible centralmente
export type { 
    Pokemon, // Type que define la estructura de cada pokémon en la aplicación
    CharacterRM, // Type que define la estructura de cada personaje de Rick and Morty en la aplicación
    Currency // Type que define la estructura de cada moneda en la aplicación de conversión de divisas
} from "./Types";
