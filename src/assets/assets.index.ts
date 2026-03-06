// ================================================
// ARCHIVO DE IMPORTACIÓN DE ASSETS (IMÁGENES)
// ================================================
// Este archivo importa todas las imágenes de Pokémon desde la carpeta assets/
// Cada import carga la imagen y la asigna a una variable descriptiva

// ================================================
// IMÁGENES DE LITWICK (ID: 1)
// ================================================
// Importamos la imagen de Litwick en su forma base (normal)
import pkmBase1 from './litwick.png'
// Importamos la imagen de Lampent (primera evolución de Litwick)
import pkmEvo11 from './lampent.png'
// Importamos la imagen de Chandelure (segunda evolución de Litwick)
import pkmEvo12 from './chandelure.png'
// Importamos la imagen de Chandelure en forma Mega
import pkmMegaEvo1 from './chandelure-mega.png'

// ================================================
// IMÁGENES DE FENNEKIN (ID: 2)
// ================================================
// Importamos la imagen de Fennekin en su forma base (normal)
import pkmBase2 from './fennekin.png'
// Importamos la imagen de Braixen (primera evolución de Fennekin)
import pkmEvo21 from './braixen.png'
// Importamos la imagen de Delphox (segunda evolución de Fennekin)
import pkmEvo22 from './delphox.png'
// Importamos la imagen de Delphox en forma Mega
import pkmMegaEvo2 from './delphox-mega.png'

// ================================================
// EXPORTACIÓN CENTRALIZADA DE ASSETS
// ================================================
// Re-exportamos todas las imágenes para que pueden ser importadas desde este único archivo
// De esta forma otros archivos importan: import { pkmBase1, pkmEvo11 } from "../assets/assets.index"
export { 
    pkmBase1,    // Litwick forma normal
    pkmEvo11,    // Lampent (evolución 1)
    pkmEvo12,    // Chandelure (evolución 2)
    pkmMegaEvo1, // Chandelure forma Mega
    pkmBase2,    // Fennekin forma normal
    pkmEvo21,    // Braixen (evolución 1)
    pkmEvo22,    // Delphox (evolución 2)
    pkmMegaEvo2  // Delphox forma Mega
}