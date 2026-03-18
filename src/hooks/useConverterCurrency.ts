import { useEffect, useState } from "react";

// ================================================
// INTERFAZ para tipar los datos que viene de la API
// ================================================
// Define la estructura de la respuesta del Frankfurter API

interface FrankfurterApiData {
    rates: Record<string, number>; // Objeto con códigos de moneda como claves y tasas de cambio como valores
    base: string; // Moneda base (ej: "EUR")
}

const useConverterCurrency = () => {
    const [tasasDeambio, setTasasDeambio] = useState<Record<string, number>>({})
    const [monedaBase, setMonedaBase] = useState("EUR")

    useEffect(() => {
        const obtenerCurrency = async () => {
            try {
                // API: https://api.frankfurter.app/latest?from=EUR
                // Retorna las tasas de cambio de EUR a todas las monedas disponibles
                const respuesta = await fetch("https://api.frankfurter.app/latest?from=EUR")
                const datos: FrankfurterApiData = await respuesta.json()
                
                // Guardamos las tasas de cambio para usarlas en la función convertir
                setTasasDeambio(datos.rates)
                setMonedaBase(datos.base)

            } catch (error) {
                console.log("Error al obtener tasas de cambio:", error)
            }
        }
        obtenerCurrency()
    }, [])

    // ================================================
    // FUNCIÓN: convertir
    // ================================================
    // Convierte un monto de una moneda origen a una moneda destino
    // usando las tasas de cambio obtenidas de la API
    // 
    // Parámetros:
    // - monto: cantidad a convertir
    // - monedaOrigen: código de moneda origen (ej: "USD")
    // - monedaDestino: código de moneda destino (ej: "EUR")
    //
    // Retorna: el monto convertido
    const convertir = (monto: number, monedaOrigen: string, monedaDestino: string): number => {
        // Si no hay tasas de cambio aún, retorna 0
        if (Object.keys(tasasDeambio).length === 0) return 0;

        // Si son la misma moneda, retorna el monto sin cambios
        if (monedaOrigen === monedaDestino) return monto;

        try {
            // Obtener la tasa de cambio hacia la moneda destino
            // Si tasasDeambio tiene EUR como base, tasasDeambio["USD"] da la tasa EUR -> USD
            const tasaDestino = tasasDeambio[monedaDestino];
            
            // Si la moneda destino no existe en las tasas, retorna 0
            if (!tasaDestino) return 0;

            // Si monedaOrigen no es EUR, necesitamos convertir primero a EUR
            if (monedaOrigen !== "EUR") {
                const tasaOrigen = tasasDeambio[monedaOrigen];
                if (!tasaOrigen) return 0;
                // Convertir de moneda origen a EUR, luego de EUR a destino
                return (monto / tasaOrigen) * tasaDestino;
            }

            // Si monedaOrigen es EUR, solo multiplica por la tasa destino
            return monto * tasaDestino;
        } catch (error) {
            console.log("Error al convertir:", error);
            return 0;
        }
    };

    return {
        convertir,
        tasasDeambio,
        monedaBase
    }
}

export default useConverterCurrency
