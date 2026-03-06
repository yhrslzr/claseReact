import { useEffect, useState } from 'react'
// Importamos el type Pokemon de types.index para tipar el estado de Pokémon
import type { Pokemon } from "../types/types.index"

// ================================================
// INTERFAZ para tipar los datos que viene de la API
// ================================================
// Define la estructura de cada objeto dentro de results que devuelve la PokeAPI
interface PokemonApiResponse {
  name: string
  // Podrían haber más campos, pero solo usamos 'name'
}

// Define la estructura completa de la respuesta de la PokeAPI
interface PokeApiData {
  results: PokemonApiResponse[]
}

// ================================================
// HOOK PERSONALIZADO: usePokemon
// ================================================
const usePokemon = () => {
  // ================================================
  // ESTADO: Gestión de datos usando useState
  // ================================================
  // pokemon es un array de tipo Pokemon[] que contiene todos los Pokémon traídos de la API
  // setPokemon es la función para actualizar este estado
  // <Pokemon[]> es el genérico que especifica que will ser un array de objetos type Pokemon
  // useState es un hook de React que permite agregar estado a funciones componentes
  // filtro es un string que almacena el término de búsqueda para filtrar los Pokémon por nombre
  // setFiltro es la función para actualizar el estado de filtro

  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [filtro, setFiltro] = useState<string>("")

  // ================================================
  // EFECTO: Ejecuta la carga de Pokémon una sola vez cuando monta el componente
  // ================================================
  // useEffect es un hook que actúa como disparador o trigger
  // La función dentro se ejecuta después de que el componente monta (aparece en pantalla)
  // El array vacío [] significa que solo se ejecuta UNA VEZ, no en cada render
  // Esto evita que se realicen fetch infinitos o cascadas de renders innecesarias
  useEffect(() => {
    // Definimos la función async DENTRO del useEffect para obtener los Pokémon
    // Esto sigue el patrón recomendado por React, evitando renderizaciones en cascada
    const obtenerPokemon = async () => {
      try {
        // PASO 1: Realiza el fetch (como un mensajero "Rappi") a la PokeAPI
        // Solicitamos 1025 Pokémon con el parámetro limit=1025
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025")
        
        // PASO 2: Convertimos la respuesta a formato JSON para poder usar los datos
        // Tipamos la respuesta como PokeApiData para asegurar que tiene la estructura correcta
        const datos: PokeApiData = await respuesta.json()
        
        // PASO 3: Transformamos los datos de la API al formato de nuestra interfaz Pokemon
        // Usamos map() para recorrer cada pokemon en results
        // index es la posición (0, 1, 2...) de cada elemento en el array
        const listadoReal: Pokemon[] = datos.results.map((p: PokemonApiResponse, index: number) => ({
          id: index + 1, // El id es el índice + 1 (porque la API comienza de 1)
          nombreBase: p.name, // Nombre del pokemon que viene de la API
          nombreEvo: "pokemon shiny", // Nombre de la forma shiny (forma alternativa)
          // URL de la imagen normal del pokemon obtenida del repositorio de sprites
          imgBase: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          // URL de la imagen shiny (versión especial coloreada) del pokemon
          imgEvo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png`,
          estado: false, // Estado booleano que indica si está evolucionado (false = forma normal)
        }))
        
        // PASO 4: Actualizamos el estado local con todos los Pokémon transformados
        setPokemon(listadoReal)
      } catch (error) {
        // Si ocurre un error en el fetch o transformación, lo registramos en la consola
        console.error("Error al traer los datos de la PokeAPI", error)
      }
    }
    
    // Ejecutamos la función async para obtener los Pokémon
    obtenerPokemon()
  }, []) // Dependencias vacías: solo ejecuta al montar el componente

  // ================================================
  // FUNCIÓN: evolucionar
  // ================================================
  // Esta función alterna el estado de un pokemon específico entre su forma normal y shiny
  // Recibe el id del pokemon que se desea evolucionar/cambiar
  const evolucionar = (id: number) => {
    // Usamos setPokemon con una función de actualización (prev)
    // prev contiene el estado anterior del array de Pokémon
    // Usamos map() para recorrer todos los Pokémon y modificar solo el que tenga el id coincidente
    // El operador ternario (?) cambia solo el pokemon que coincide, los demás quedan igual
    setPokemon((prev: Pokemon[]) =>
      prev.map((p: Pokemon) =>
        p.id === id ? { ...p, estado: !p.estado } : p
      )
    )
  }

  const PkmFiltrado = pokemon.filter((p)=>{
    return p.nombreBase.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    /* 
    - return p.nombreBase == filtro
    - Chandelure == Chandelure; chandelure == Chandelure;
    - bulbasaur.debeIncluir(filtro.enMinusculas)
    - "toLocaleLowerCase": convierte el string a minúsculas para hacer una 
    comparación insensible a mayúsculas/minúsculas. 
    - "includes": verifica si el nombre del pokemon contiene el término de 
    búsqueda (filtro) en cualquier parte del nombre. Devuelve true si lo 
    encuentra, false si no. Esto permite que al escribir "char" en el campo 
    de búsqueda, se muestren Pokémon como "Charmander", "Charmeleon" y 
    "Charizard", ya que todos contienen "char" en su nombre.
    */
  })

  // ================================================
  // RETORNO del hook
  // ================================================
  // El hook retorna un objeto con:
  // - pokemon: el array de pokemon filtrados según el término de búsqueda
  // - evolucionar: la función para cambiar el estado del pokemon
  // - setFiltro: la función para actualizar el filtro de búsqueda
  return {
    pokemon: PkmFiltrado,
    evolucionar,
    setFiltro
  }
}

export default usePokemon