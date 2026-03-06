// ================================================
// COMPONENTE: Card (Tarjeta de Pokémon)
// ================================================
// Este componente muestra una tarjeta individual de un pokémon con su imagen,
// nombre, estado actual y botón para evolucionar entre forma normal y shiny

// Importamos los estilos CSS específicos de este componente
import "./CardPkm.css";
import type {
    propsCardPkm,   // Props requeridas por el componente Card
} from "../../../interfaces/interfaces.index" // Importamos las interfaces para las props (si es necesario)

// ================================================
// FUNCIÓN COMPONENTE: PkmCard
// ================================================
// Recibe las props mediante destructuring para acceder directamente a nombre, img, estado y onEvolucionar
const CardPkm = ({ nombre, img, estado, onEvolucionar }: propsCardPkm) => {
  // ================================================
  // RETORNO: Estructura JSX de la tarjeta
  // ================================================
  return (
    <div className={`card ${estado ? "card-evo1" : "card-normal"}`}>
      {/* 
        La clase CSS se cambia dinámicamente basándose en el estado:
        - Si estado es true: aplica clase "card-evo1" (estilos para forma shiny)
        - Si estado es false: aplica clase "card-normal" (estilos para forma normal)
      */}
      
      {/* Imagen del pokémon que cambia según el estado (normal o shiny) */}
      <img src={img} alt={nombre} />
      
      {/* Nombre del pokémon obtenido de las props */}
      <h3>{nombre}</h3>
      
      {/* 
        Texto indicador del estado actual del pokémon:
        - Si estado es true: muestra "¡Shiny!" (forma evolucionada)
        - Si estado es false: muestra "Normal" (forma original)
      */}
      <p>{estado ? "¡Shiny!" : "Normal"}</p>
      
      {/* Contenedor de acciones (botones) */}
      <div className="card-actions">
        {/* 
          Botón que ejecuta la función onEvolucionar cuando se hace click
          El texto del botón cambia dependiendo del estado:
          - Si estado es true: muestra "Revertir" (volver a forma normal)
          - Si estado es false: muestra "¡Shiny!" (evolucionar a forma shiny)
        */}
        <button onClick={onEvolucionar}>
          {estado ? "Revertir" : "¡Shiny!"}
        </button>
      </div>
    </div>
  );
};

// Exportamos el componente PkmCard para que pueda ser usado en otras partes de la aplicación
export default CardPkm;
