import { useEffect, useState } from "react";
import type { CharacterRM } from "../types/types.index";

// ================================================
// INTERFAZ para tipar los datos que viene de la API
// ================================================
// Define la estructura de cada objeto dentro de results que devuelve la PokeAPI
interface RickMortyApiResponse {
    name: string
    species: string
    status: string
  // Podrían haber más campos
}

// Define la estructura completa de la respuesta del Api
interface RickMortyApiData {
  results: RickMortyApiResponse[]
}

const useCharacterRM = () => {
    const [characterRM, setCharacterRM] = useState<CharacterRM[]>([])

    useEffect(() => {
        const obtenerCharacter = async () => {
            try {
                const respuesta = await fetch("https://rickandmortyapi.com/api/character/")
                const datos : RickMortyApiData = await respuesta.json()
                const listadoReal: CharacterRM[] = datos.results.map((p: RickMortyApiResponse, index: number) => ({
                    id: index + 1,
                    nombre: p.name,
                    especie: p.species,
                    estado: p.status,
                    imagen: `https://rickandmortyapi.com/api/character/avatar/${index + 1}.jpeg`
                }))
                
                setCharacterRM(listadoReal)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerCharacter()
    }, [])

    return {
        characterRM
    }
}

export default useCharacterRM