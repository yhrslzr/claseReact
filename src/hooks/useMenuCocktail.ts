import type { Cocktail } from "../types/types.index"
import { useEffect, useState } from "react"

// ================================================
// HOOK PERSONALIZADO: useMenuCocktail
// ================================================
// Define la estructura de cada objeto dentro de drinks que devuelve The CocktailDB API

interface CocktailApiResponse {
    strDrink: string
    strDrinkThumb: string
    idDrink: string
}

interface CocktailApiData {
    drinks: CocktailApiResponse[]
}

const useMenuCocktail = () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([])
    
    useEffect(() => {
        const obtenerCocktails = async () => {
            try {
                const respuesta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
                const datos: CocktailApiData = await respuesta.json()
                const listadoReal: Cocktail[] = datos.drinks.map((p: CocktailApiResponse, index: number) => ({
                    id: index + 1,
                    nombre: p.strDrink,
                    imagen: p.strDrinkThumb,
                    codigo: p.idDrink
                }))
                setCocktails(listadoReal)
            } catch (error) {
                console.error("Error al obtener los cocktails:", error)
            }
        }
        obtenerCocktails()
    }, [])
    return cocktails
}

export default useMenuCocktail