import { useEffect, useState } from "react";
import type { Currency } from "../types/types.index";

// ================================================
// INTERFAZ para tipar los datos que viene de la API
// ================================================
// Define la estructura de cada objeto dentro de results que devuelve la Frankfurter API

interface FrankfurterApiResponse {
    name: string;   // Nombre de la moneda (ejemplo: "Euro")
    symbol: string; // Símbolo de la moneda (ejemplo: "€")
    value: number;  // Valor de la moneda en relación a la moneda base (ejemplo: 1.0 para Euro si es la base)
    // Podrían haber más campos
}

// Define la estructura completa de la respuesta del Api
interface FrankfurterApiData {
    results: FrankfurterApiResponse[]
}

const useConverterCurrency = () => {
    const [currency, setCurrency] = useState<Currency[]>([])

    useEffect(() => {
        const obtenerCurrency = async () => {
            try {
                const respuesta = await fetch("https://api.frankfurter.app/latest")
                const datos : FrankfurterApiData = await respuesta.json()
                const listadoReal: Currency[] = datos.results.map((p: FrankfurterApiResponse, index: number) => ({
                    id: index + 1,
                    nombre: p.name,
                    simbolo: p.symbol,
                    valor: p.value
                }))
                
                setCurrency(listadoReal)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerCurrency()
    }, [])

    return {
        currency
    }
}

export default useConverterCurrency
