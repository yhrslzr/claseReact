// ================================================
// DEFINICIÓN DE TIPOS
// ================================================
// Este archivo centraliza todos los types/tipos personalizados de la aplicación
// Los types ayudan a TypeScript a entender qué estructura deben tener los datos

// ================================================
// TYPE: Pokemon
// ================================================
// Define la estructura de cada objeto pokémon en la aplicación
// Incluye solo los campos que realmente se usan en usePokemon y Card
export type Pokemon = {
  id: number; // Identificador único del pokémon (1, 2, 3...)
  nombreBase: string; // Nombre de la forma normal del pokémon (ej: "Litwick")
  nombreEvo: string; // Nombre asociado a la forma evolucionada/shiny (ej: "Lampent")
  imgBase: string; // URL de la imagen del pokémon en su forma normal
  imgEvo: string; // URL de la imagen del pokémon en su forma shiny (especial)
  estado: boolean; // Indica el estado actual: false = normal, true = shiny/evolucionado
};

export type CharacterRM = {
    id: number; // Identificador único del personaje de Rick and Morty
    nombre: string; // Nombre del personaje (ej: "Rick Sanchez")
    especie: string; // Especie del personaje (ej: "Humano", "Alien")
    estado: string; // Estado del personaje (ej: "Vivo", "Muerto", "Desconocido")
    imagen: string; // URL de la imagen del personaje
}

export type Currency = {
    id: number; // Identificador único de la moneda
    nombre: string; // Nombre de la moneda (ej: "Euro")
    simbolo: string; // Simbolo de la moneda (ej: "€", "$")
    valor: number; // Valor de la moneda en relación a la moneda base (ej: 1.0 para Euro si es la base)
}