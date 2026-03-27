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

import type {  
    Product 
} from "../types/types.index";

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

// ================================================
// INTERFAZ: propsConverter
// ================================================
// Define la estructura de las props que recibe el componente InputCurrency
// Obtiene el valor ingresado por el usuario y lo convierte en tiempo real a otra moneda seleccionada
// Creada el: 11 de marzo de 2026

export interface propsConverterCurrency {
    valor: number; // Valor numérico ingresado por el usuario para convertir
    monedaOrigen: string; // Código de la moneda que se muestra en este campo (ej: "USD", "EUR")
    onValorConvertido: (valor: number) => void; // Callback cuando cambia el valor
}

// ================================================
// INTERFAZ: propsDropdownCurrency
// ================================================
// Define la estructura de las props que recibe el componente DropdownCurrency
// Permite seleccionar el tipo de divisa a la que se desea convertir el valor ingresado en InputCurrency
// Creada el: 11 de marzo de 2026

export interface propsDropdownCurrency {
    monedaSeleccionada: string; // Código de la moneda actualmente seleccionada en el dropdown (ej: "USD", "EUR")
    onMonedaSeleccionada: (moneda: string) => void; 
    // Función que se ejecuta cada vez que el usuario selecciona una moneda diferente en el dropdown, pasando el nuevo valor al componente padre para actualizar el estado
}

export interface propsFormIMC {
    peso: number; // Peso ingresado por el usuario en kilogramos
    estatura: number; // Estatura ingresada por el usuario en metros
    imc: number; // Valor del Índice de Masa Corporal calculado a partir del peso y estatura ingresados por el usuario
    cambioPeso: (valor: number) => void; 
    // Función que se ejecuta cuando el usuario hace click en el botón de calcular, pasando el peso y altura para que el componente padre calcule el IMC y actualice el estado
    cambioEstatura: (valor: number) => void;
    // Función que se ejecuta cuando el usuario hace click en el botón de calcular, pasando el peso y altura para que el componente padre calcule el IMC y actualice el estado
}

export interface propsHeaderShop{
    logo: string; 
    // URL de la imagen del logo que se muestra en el encabezado del componente ShopFake
    marca: string;
    // Nombre de la tienda que se muestra en el encabezado del componente ShopFake
    onCarrito: () => void; 
    // Función que se ejecuta cuando el usuario hace click en el botón del carrito, para mostrar el estado del carrito o realizar alguna acción relacionada
}

export interface propsNavbarShop {
    categorias: string[];
    // Lista de categorías de productos que se muestran en la barra de navegación del componente ShopFake
    onCategorias: (categoria: string) => void;
    // Función que se ejecuta cuando el usuario hace click en una categoría, pasando el nombre de la categoría para que el componente padre actualice el estado
}

export interface propsSearchShop {
    alEscribir: (valor: string) => void;
    // Función que se ejecuta cada vez que el usuario escribe en el campo de búsqueda
}

export interface propsShop {
    productos: Product[];
    // Lista de productos que se muestran en el componente ShopFake
}

export interface propsFooterShop {
    info: string; 
    // Información del desarrollador o de contacto que se muestra en el pie de página del componente ShopFake
    onBotonWP: () => void;
    // Función que se ejecuta cuando el usuario hace click en el botón de WhatsApp, para mostrar el estado del contacto o realizar alguna acción relacionada
}

export interface propsCardCocktail {
    nombre: string; // Nombre del cóctel a mostrar en la tarjeta
    img: string; // URL de la imagen del cóctel
}