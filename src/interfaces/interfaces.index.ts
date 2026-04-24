// ================================================
// ARCHIVO DE EXPORTACIÓN CENTRALIZADO: interfaces.index.ts
// ================================================
// Este archivo centraliza las exportaciones de todas las interfaces
// Permite importar interfaces desde un único punto en lugar de relaciones complejas
// 
// Beneficios:
// - Importar es más simple: import type { propsTitle } from './interfaces/interfaces.index'
// - En lugar de: import type { propsTitle } from './interfaces/Interfaces'
// - Facilita agregar más interfaces en el futuro de forma centralizada

// Re-exportamos las interfaces de props desde Interfaces.ts
// propsTitle: interfaz para las props del componente Title
// propsCardPkm: interfaz para las props del componente CardPkm
// propsCardRM: interfaz para las props del componente CardRM
export type { 
    propsTitle,  // Props requeridas por el componente Title
    propsCardPkm,   // Props requeridas por el componente Card
    propsCardRM,   // Props requeridas por el componente CardRM
    propsSearchPkm,   // Props requeridas por el componente SearchPkm
    propsConverterCurrency,  // Props requeridas por el componente InputCurrency
    propsDropdownCurrency,  // Props requeridas por el componente DropdownCurrency
    propsFormIMC, // Props requeridas por el componente FormIMC
    propsHeaderShop, // Props requeridas por el componente ShopHeader
    propsNavbarShop, // Props requeridas por el componente ShopNavbar
    propsSearchShop, // Props requeridas por el componente SearchShop
    propsCardShop, // Props requeridas por el componente CardShop
    propsFooterShop, // Props requeridas por el componente ShopFooter
    propsCardCocktail, // Props requeridas por el componente CardCocktail
    propsSupabaseUser, // Props requeridas para manejar datos de usuario en Supabase
} from "./Interfaces";