// ================================================
// COMPONENTE PRINCIPAL: APP
// ================================================
// Este es el componente raíz que maneja toda la navegación y estados globales de la aplicación

// Importamos los estilos CSS específicos de este componente
import './App.css';

// useState es un hook de React que permite agregar estado a funciones componentes
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importamos los componentes desde el archivo index de componentes
// Estos componentes están exportados centralmente en components.index.ts
import { 
  Title, 
  CardPkm, 
  CardRM,
  SearchPkm,
  InputCurrency,
  DropdownCurrency,
  FormIMC,
  ShopFake,
  ShopHeader,
  ShopNavbar,
  SearchShop,
  ShopFooter,
  CardCocktail,
} from './components/components.index';

// Importamos los hooks personalizados
import { 
  usePokemon,
  useCharacterRM,
  useConverterCurrency,
  useConverterIMC,
  useShopProducts,
  useMenuCocktail,

} from './hooks/use.index';

// ================================================
// DEFINICIÓN DE TIPOS
// ================================================
// ComponentType es un type literal que define los tipos válidos de componentes que se pueden mostrar
// '01301' = Componente Title
// '02041' = Componente Card con lista de Pokémon
// '02042' = Componente Card con lista de Personajes de Rick and Morty
// '03051' = Componente Search con funcionalidad de búsqueda
// '03111' = Componente Currency con funcionalidad de conversión de divisas
// '03121' = Componente IMC con funcionalidad de cálculo
// '03181' = Componente ShopFake con funcionalidad de tienda falsa
// '' | null = Sin componente seleccionado (estado inicial)
type ComponentType = 
'01301' | 
'02041' | 
'02251' | 
'03051' | 
'03111' | 
'03121' | 
'03181' | 
'03261' | 
'' | 
null;

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
  // ESTADO: Control del convertidor de divisas
  // ================================================
  const [monedaOrigen, setMonedaOrigen] = useState("EUR"); // Moneda origen seleccionada
  const [monedaDestino, setMonedaDestino] = useState("USD"); // Moneda destino seleccionada
  const [valorIngresado, setValorIngresado] = useState(0); // Valor ingresado por el usuario
  const [valorConvertido, setValorConvertido] = useState(0); // Valor después de la conversión
  
  // ================================================
  // DATOS: Obtención desde el hook personalizado
  // ================================================

  // Usamos el hook usePokemon para obtener el listado de Pokémon, la función de evolución y el filtro
  const { pokemon, evolucionar, setFiltro } = usePokemon();

  // Usamos el hook useCharacterRM para obtener el listado de Personajes de Rick and Morty
  const { characterRM } = useCharacterRM();

  // Usamos el hook useConverterCurrency para obtener las funciones de conversión
  const { convertir } = useConverterCurrency();

  // Usamos el hook useConverterIMC para obtener los datos y funciones relacionados con el cálculo de IMC
  const { peso, estatura, setEstatura, setPeso, imc } = useConverterIMC();

  // Usamos el hook useShopProducts para obtener los datos relacionados con la tienda falsa
  const { productos: productosArray, setFiltroProducto } = useShopProducts();
  const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null);
  const [carritoCount, setCarritoCount] = useState(0);

  const categorias = Array.from(
    new Set(productosArray.map((p) => p.category).filter((c): c is string => Boolean(c)))
  );

  const productosFiltrados = categoriaActiva
    ? productosArray.filter((p) => p.category === categoriaActiva)
    : productosArray;

  const onCategorias = (categoria: string) => {
    setCategoriaActiva(categoriaActiva === categoria ? null : categoria);
  };

  const onCarrito = () => {
    setCarritoCount((p) => p + 1);
    window.alert("Producto agregado al carrito");
  };

  const onBotonWP = () => {
    window.alert("Abrir WhatsApp");
  };

  // Usamos el hook useMenuCocktail para obtener el listado de cocktails
  const cocktails = useMenuCocktail();

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
    // Componente Currency: conversor de divisas con dropdown para seleccionar monedas
    { id: '03111', name: 'Currency Converter', date: '11/marzo/2026 - 12/marzo/2026' },
    // Componente IMC: formulario para calcular el Índice de Masa Corporal (IMC) basado en peso y altura
    { id: '03121', name: 'IMC Calculator', date: '13/marzo/2026 - 14/marzo/2026' },
    // Componente ShopFake: tienda falsa con productos obtenidos de una API
    { id: '03181', name: 'Shop Fake', date: '18/marzo/2026 - 20/marzo/2026' },
    // Componente CardCocktail: galería de tarjetas de cócteles obtenidos de una API
    { id: '03261', name: 'Card Cocktail', date: '26/marzo/2026 - 27/marzo/2026' },
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

        {/* Si el componente seleccionado es InputCurrency (03111), mostramos el campo de conversión de divisas */}
        {activeComponent === '03111' && (
          <div className="currency-container">
            {/* Contenedor para los dos dropdowns de selección de monedas */}
            <div className="currency-selectors">
              {/* Dropdown para seleccionar moneda origen */}
              <div className="currency-dropdown-group">
                <label htmlFor="currency-origin-select">Moneda Origen:</label>
                <DropdownCurrency
                  monedaSeleccionada={monedaOrigen}
                  onMonedaSeleccionada={(moneda) => {
                    setMonedaOrigen(moneda);
                    // Recalcula automáticamente cuando cambia la moneda origen
                    const resultado = convertir(valorIngresado, moneda, monedaDestino);
                    setValorConvertido(resultado);
                  }}
                />
              </div>

              {/* Dropdown para seleccionar moneda destino */}
              <div className="currency-dropdown-group">
                <label htmlFor="currency-destination-select">Moneda Destino:</label>
                <DropdownCurrency
                  monedaSeleccionada={monedaDestino}
                  onMonedaSeleccionada={(moneda) => {
                    setMonedaDestino(moneda);
                    // Recalcula automáticamente cuando cambia la moneda destino
                    const resultado = convertir(valorIngresado, monedaOrigen, moneda);
                    setValorConvertido(resultado);
                  }}
                />
              </div>
            </div>

            {/* Campo de entrada para la moneda origen */}
            <div className="currency-input-group">
              <label>Cantidad en {monedaOrigen}:</label>
              <InputCurrency
                valor={valorIngresado}
                monedaOrigen={monedaOrigen}
                onValorConvertido={(valor) => {
                  setValorIngresado(valor);
                  // Calcula el valor convertido automáticamente
                  const resultado = convertir(valor, monedaOrigen, monedaDestino);
                  setValorConvertido(resultado);
                }}
              />
            </div>

            {/* Campo de salida con el valor convertido */}
            <div className="currency-output-group">
              <label>Cantidad en {monedaDestino}:</label>
              <InputCurrency
                valor={valorConvertido}
                monedaOrigen={monedaDestino}
                onValorConvertido={() => {}} // No hacer nada, es un campo de solo lectura
              />
            </div>
          </div>
        )}

        {/* Si el componente seleccionado es FormIMC (03121), mostramos el formulario para calcular el IMC */}
        {activeComponent === '03121' && (
          <div className="imc-container">
            <FormIMC 
            peso={peso}
            estatura={estatura}
            cambioPeso={setPeso}
            cambioEstatura={setEstatura}
            imc = {imc}
            />
          </div>
        )}

        {/* Si el componente seleccionado es ShopFake (03181), mostramos la tienda falsa */}
        {activeComponent === '03181' && (
          <div className="shop-container">
            <ShopHeader 
              logo="https://mario.wiki.gallery/images/3/31/Green_Star_Artwork_-_Super_Mario_3D_World.png" 
              marca="Tienda 'La Falsedad'" 
              onCarrito={onCarrito}
            />

            {/* Navbar debajo del header: barra de búsqueda y categorías */}
            <div className="shop-navbar">
              <SearchShop
                alEscribir={setFiltroProducto}
              />

              <ShopNavbar 
                categorias={categorias}
                onCategorias={onCategorias}
              />
            </div>

            <p>Carrito: {carritoCount} ítem(s)</p>
            <ShopFake productos={productosFiltrados} />
            <ShopFooter info="2026 - Mi tienda" onBotonWP={onBotonWP} />
          </div>
        )}

        {/* Si el componente seleccionado es CardCocktail (03261), mostramos el componente CardCocktail */}
        {activeComponent === '03261' && (
          <div className="component-grid">
            {
              cocktails.map((c) => (
                <CardCocktail 
                  key={c.id}
                  nombre={c.nombre}
                  img={c.imagen}
                />
              ))
            }
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
