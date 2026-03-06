// ================================================
// DATOS MOCK: pokemon.data.ts
// ================================================
// Este archivo contiene datos de prueba (mock data) con Pokémon locales
// Se usa para tener datos de respaldo sin depender siempre de la API externa

// Importamos las imágenes de Pokémon desde el archivo centralizado de assets
// pkmBase1, pkmEvo11: imágenes de Litwick (normal y shiny)
// pkmBase2, pkmEvo21: imágenes de Fennekin (normal y shiny)
import { 
    pkmBase1,   // Imagen: Litwick forma normal
    pkmEvo11,   // Imagen: Litwick forma shiny
    pkmBase2,   // Imagen: Fennekin forma normal
    pkmEvo21    // Imagen: Fennekin forma shiny
} from "../assets/assets.index";

// Importamos el type Pokemon de types.index para tipar el array de datos
// Esto asegura que los datos cumplan con la estructura esperada
import type { Pokemon } from "../types/types.index";

// ================================================
// VARIABLE: POKEMON_MOCK
// ================================================
// Array de Pokémon con datos locales tipados como Pokemon[]
// Cada objeto pokemon contiene: id, nombreBase, nombreEvo, imgBase, imgEvo, estado
const POKEMON_MOCK: Pokemon[] = [
    {
    id: 1,
    nombreBase: "Litwick",           // Nombre en su forma normal
    nombreEvo: "Lampent",            // Nombre de la forma evolucionada
    imgBase: pkmBase1,               // URL/import de imagen forma normal
    imgEvo: pkmEvo11,                // URL/import de imagen forma shiny
    estado: false,                   // Inicia en forma normal (false)
    },
    {
    id: 2,
    nombreBase: "Fennekin",          // Nombre en su forma normal
    nombreEvo: "Braixen",            // Nombre de la forma evolucionada
    imgBase: pkmBase2,               // URL/import de imagen forma normal
    imgEvo: pkmEvo21,                // URL/import de imagen forma shiny
    estado: false,                   // Inicia en forma normal (false)
    }
]

// Exportamos el array POKEMON_MOCK como default para usarlo en otros archivos
export default POKEMON_MOCK