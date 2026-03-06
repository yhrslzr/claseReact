// ================================================
// DEFINICIÓN DE INTERFACES
// ================================================
// Este archivo centraliza todas las interfaces para las props de los componentes
// Las interfaces definen qué propiedades debe recibir cada componente y de qué tipo

// ================================================
// INTERFAZ: propsTitle
// ================================================
// Define la estructura de las props que recibe el componente Title
// Creada el: 30 de enero de 2026
export interface propsTitle {
    texto: string; // El contenido de texto que se mostrará en el encabezado h1
}

// ================================================
// INTERFAZ: propsCard
// ================================================
// Define la estructura de las props que recibe el componente Card
// Actualizado para el componente Card con funcionalidad de evolución
// Creada el: 4-5 de febrero de 2026
export interface propsCardPkm {
    nombre: string; // Nombre del pokémon a mostrar en la tarjeta
    img: string; // URL de la imagen (normal o shiny según el estado actual)
    estado: boolean; // Estado de la tarjeta: false = forma normal, true = forma shiny
    onEvolucionar: () => void; // Función que se ejecuta cuando el usuario hace click en evolucionar
}

export interface propsCardRM {
    nombre: string; // Nombre del personaje a mostrar en la tarjeta
    img: string; // URL de la imagen del personaje
    especie: string; // Especie del personaje (ej: "Humano", "Alien")
    estado: string; // Estado del personaje (ej: "Vivo", "Muerto", "Desconocido")
    onCambio?:() => void; // Función que se ejecuta cuando el usuario hace click en el botón de acción
}

export interface propsSearchPkm {
    // Función que se ejecuta cada vez que el usuario escribe en el campo de búsqueda
    alEscribir: (valor: string) => void
}