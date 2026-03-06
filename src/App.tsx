// ================================================
// COMPONENTE PRINCIPAL: APP
// ================================================
// Este es el componente raíz que maneja toda la navegación y estados globales de la aplicación

// Importamos los estilos CSS específicos de este componente
import './App.css';

// useState es un hook de React que permite agregar estado a funciones componentes
import { useState } from 'react';

// Importamos los componentes desde el archivo index de componentes
// Estos componentes están exportados centralmente en components.index.ts
import { 
  Title, 
  CardPkm, 
  CardRM,
  SearchPkm
} from './components/components.index';

// Importamos el hook personalizado usePokemon que gestiona la obtención de datos de la PokeAPI
// Este hook retorna Pokémon (array) y evolucionar (función) desde usePokemon.index.ts
import { 
  usePokemon,
  useCharacterRM
} from './hooks/use.index';

// ================================================
// DEFINICIÓN DE TIPOS
// ================================================
// ComponentType es un type literal que define los tipos válidos de componentes que se pueden mostrar
// '01301' = Componente Title
// '02041' = Componente Card con lista de Pokémon
// '02042' = Componente Card con lista de Personajes de Rick and Morty
// '03051' = Componente Search con funcionalidad de búsqueda
// '' | null = Sin componente seleccionado (estado inicial)
type ComponentType = '01301' | '02041' | '02251' | '03051' | '' | null;

// ================================================
// FUNCIÓN COMPONENTE: App (Componente Principal)
// ================================================
export default function App() {
  // ================================================
  // ESTADO: Control del componente activo
  // ================================================
  // activeComponent es el tipo de componente que se está visualizando actualmente
  // setActiveComponent actualiza cuál componente mostrar en la UI
  // Se inicia con null (ningún componente seleccionado)
  const [activeComponent, setActiveComponent] = useState<ComponentType>(null);
  
  // ================================================
  // DATOS: Obtención de Pokémon desde el hook personalizado
  // ================================================
  // Pokémon es un array de type Pokémon[] que contiene todos los Pokémon traídos de la PokeAPI
  // evolucionar es una función que alterna el estado de un Pokémon entre forma normal y shiny
  // Ambos vienen del hook usePokemon() que definimos anteriormente
  const { pokemon, evolucionar, setFiltro } = usePokemon();
  const { characterRM } = useCharacterRM();

  // ================================================
  // DATOS: Array de componentes disponibles para navegación
  // ================================================
  // Este array contiene la metadata de cada componente (id, nombre, fecha)
  // Se usa en el map() del nav para generar los botones dinámicamente
  const components = [
    // Componente Title: presentación de un título
    { id: '01301', name: 'Título', date: '30/enero/2026' },
    // Componente Card: galería de tarjetas de Pokémon con funcionalidad de evolución
    { id: '02041', name: 'Card Pokémon', date: '4/febrero/2026 - 5/febrero/2026' },
    // Componente Card: galería de tarjetas de Personajes de Rick and Morty
    { id: '02251', name: 'Card Rick & Morty', date: '20/febrero/2026 - 25/febrero/2026' },
    // Componente Search: campo de búsqueda para filtrar Pokémon por nombre
    { id: '03051', name: 'Search Pokémon', date: '5/marzo/2026 - 10/marzo/2026' },
  ];

  // ================================================
  // RETORNO: Estructura JSX de la aplicación
  // ================================================
  return (
    <div className="app-container">
      {/* Barra de navegación con botones para cambiar entre componentes */}
      <nav className="nav-menu">
        <h1>YSO DAW2 2026</h1>
        <ul>
          {/* 
            map() recorre el array de componentes y crea un <li> para cada uno
            comp contiene: id (identificador), name (nombre del componente), date (fecha)
          */}
          {components.map((comp) => (
            <li key={comp.id}>
              {/* 
                Botón que al hacer click actualiza activeComponent con el id del componente
                La clase 'active' se agrega si este componente es el activo actualmente
              */}
              <button 
                onClick={() => setActiveComponent(comp.id as ComponentType)}
                className={activeComponent === comp.id ? 'active' : ''}
              >
                {comp.name}
              </button>
              {/* Muestra la fecha asociada a cada componente */}
              <span className="date">{comp.date}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contenedor principal donde se renderiza el componente seleccionado */}
      <main className="main-content">
        {/* Si el componente seleccionado es Title (01301), mostramos el componente Title */}
        {activeComponent === '01301' && (
          <Title texto="Componente Título - 30 de enero de 2026" />
        )}
        
        {/* Si el componente seleccionado es CardPkm (02041), mostramos la galería de Pokémon */}
        {activeComponent === '02041' && (
          <div className="component-grid">
            {/* 
              map() recorre el array Pokémon y crea un componente Card para cada uno
              pkm contiene: id, nombreBase, nombreEvo, imgBase, imgEvo, estado
            */}
            {pokemon.map((pkm: typeof pokemon[0]) => (
              <CardPkm
                key={pkm.id} // React necesita key para identificar elementos en listas
                nombre={pkm.nombreBase} // Pasa el nombre del Pokémon al componente Card
                // Imagen condicional: si está evolucionado (estado=true) muestra shiny, sino muestra normal
                img={pkm.estado ? pkm.imgEvo : pkm.imgBase}
                estado={pkm.estado} // Indica si el Pokémon está en forma normal (false) o shiny (true)
                onEvolucionar={() => evolucionar(pkm.id)} // Función callback que evoluciona este Pokémon
              />
            ))}
          </div>
        )}

        {/* Si el componente seleccionado es CardRM (02251), mostramos la lista de personajes de Rick and Morty */}

        {activeComponent === '02251' && (
          <div className="component-grid">
            {characterRM.map((rimo: typeof characterRM[0]) =>(
              <CardRM
                key={rimo.id}
                nombre={rimo.nombre}
                img={rimo.imagen}
                especie={rimo.especie}
                estado={rimo.estado}
              />
            ))}
          </div>
        )}

        {/* Si el componente seleccionado es SearchPkm (03051), mostramos el campo de búsqueda */}
        {activeComponent === '03051' && (
          <div className="search-container">
            <SearchPkm
            alEscribir={(valor)=>setFiltro(valor)}
            />
            {/* 
              Aquí podríamos implementar la lógica para filtrar el array de Pokémon basado en el texto ingresado
              y mostrar solo los Pokémon que coincidan con la búsqueda. Por ahora, solo mostramos el campo de búsqueda.
            */}

            {/* 
              map() recorre el array Pokémon y crea un componente Card para cada uno
              pkm contiene: id, nombreBase, nombreEvo, imgBase, imgEvo, estado
            */}
            {pokemon.map((pkm: typeof pokemon[0]) => (
              <CardPkm
                key={pkm.id} // React necesita key para identificar elementos en listas
                nombre={pkm.nombreBase} // Pasa el nombre del Pokémon al componente Card
                // Imagen condicional: si está evolucionado (estado=true) muestra shiny, sino muestra normal
                img={pkm.estado ? pkm.imgEvo : pkm.imgBase}
                estado={pkm.estado} // Indica si el Pokémon está en forma normal (false) o shiny (true)
                onEvolucionar={() => evolucionar(pkm.id)} // Función callback que evoluciona este Pokémon
              />
            ))}

          </div>
        )}

        {/* Mensaje por defecto cuando no hay componente seleccionado */}
        {!activeComponent && (
          <div className="welcome">
            <h2>Selecciona un componente</h2>
          </div>
        )}
      </main>
    </div>
  );
}
