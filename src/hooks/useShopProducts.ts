import { useEffect, useState } from "react";

// ================================================
// INTERFAZ para tipar los datos que viene de la API
// ================================================
// Define la estructura de la respuesta del Fakestore API

interface FakestoreApiData {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const useShopProducts = () => {
    const [products, setProducts] = useState<FakestoreApiData[]>([])

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                // API: https://fakestoreapi.com/products
                // Retorna una lista de productos
                const respuesta = await fetch("https://fakestoreapi.com/products")
                const datos: FakestoreApiData[] = await respuesta.json()
                setProducts(datos)
            } catch (error) {
                console.log("Error al obtener productos:", error)
            }
        }
        obtenerProductos()
    }, [])

    return products
}

export default useShopProducts
