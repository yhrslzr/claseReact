import { useEffect, useState } from "react";
import type { Product } from "../types/types.index";

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
    const [productos, setProductos] = useState<Product[]>([])
    const [filtroProducto, setFiltroProducto] = useState<string>("")

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                // API: https://fakestoreapi.com/products
                // Retorna una lista de productos
                const respuesta = await fetch("https://fakestoreapi.com/products")
                const datos: FakestoreApiData[] = await respuesta.json()
                const listadoReal: Product[] = datos.map((p: FakestoreApiData) => ({
                    id: p.id,
                    nombre: p.title,
                    desc: p.description,
                    precio: p.price,
                    imagen: p.image,
                    category: p.category
                }))
                setProductos(listadoReal)
            } catch (error) {
                console.log("Error al obtener productos:", error)
            }
        }
        obtenerProductos()
    }, [])

    const productosFiltrados = productos.filter((p) =>
        p.nombre.toLowerCase().includes(filtroProducto.toLowerCase())
    )

    const productosCategorias = categorias=="all" ? 
    productos : productos.filter((p) => p.category === categorias)

    return {
    productos: productosFiltrados || productosCategorias,
    setFiltroProducto
    }
}

export default useShopProducts
