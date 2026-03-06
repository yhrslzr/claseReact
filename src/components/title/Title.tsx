// ================================================
// COMPONENTE: Title (Componente de Título)
// ================================================
// Este componente renderiza un encabezado h1 que muestra un texto personalizado
// Es un componente funcional simple que solo recibe y muestra contenido

// Importamos los estilos CSS específicos de este componente
import "./Title.css";

// Importamos la interfaz propsTitle de Interfaces.ts que define la estructura de props
// propsTitle especifica que este componente recibe una prop llamada 'texto' de tipo string
import type { propsTitle } from "../../interfaces/Interfaces";

// ================================================
// FUNCIÓN COMPONENTE: Title
// ================================================
// Recibe un objeto con destructuring que contiene la prop 'texto'
// El tipo propsTitle asegura que solo se puede pasar una prop 'texto' de tipo string
function Title({ texto }: propsTitle) {
  // ================================================
  // RETORNO: Elemento H1 con el texto recibido
  // ================================================
  // Renderiza un encabezado h1 con clase CSS personalizada y el contenido pasado como prop
  return <h1 className="titulito">{texto}</h1>
}

// Exportamos el componente Title para que pueda ser usado en otras partes de la aplicación
export default Title