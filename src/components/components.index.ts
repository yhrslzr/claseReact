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
export { default as CardPkm } from "./card/CardPkm";

// Exportamos el componente RMCard que muestra una tarjeta
export { default as CardRM } from "./card/CardRM";

// Exportamos el componente Search que muestra un campo de búsqueda
export { default as SearchPkm } from "./search/SearchPkm";

// Exportamos el componente InputCurrency que muestra un campo de búsqueda
export { default as InputCurrency } from "./input/InputCurrency";

// Exportamos el componente DropdownCurrency que muestra un campo de búsqueda
export { default as DropdownCurrency } from "./button/DropdownCurrency";

// Exportamos el componente FormIMC que muestra un formulario para calcular el IMC
export { default as FormIMC } from "./form/FormIMC"

// Exportamos los componente de ShopFake
export { default as ShopFake } from "./shop/ShopFake"
export { default as ShopHeader } from "./header/ShopHeader"
export { default as ShopNavbar } from "./navbar/ShopNavbar"
export { default as SearchShop } from "./search/SearcShop"
export { default as ShopFooter } from "./footer/ShopFooter"

// Exportamos el componente CardCocktail
export { default as CardCocktail } from "./card/CardCocktail"