import "./DropdownCurrency.css"
import type {
    propsDropdownCurrency
} from "../../interfaces/interfaces.index"

const DropdownCurrency = ({ monedaSeleccionada, onMonedaSeleccionada }: propsDropdownCurrency) => {
    // Lista de opciones disponibles para el dropdown
    const opciones = ["USD", "EUR", "MXN", "JPY", "GBP", "CAD", "AUD", "CHF"];
    
    return (
        <div className="dropdown-container">
            {/* Label para indicar cuál es la moneda de destino */}
            <label htmlFor="currency-select">Convertir a:</label>
            
            {/* Select que crea un dropdown (lista desplegable) */}
            <select 
                id="currency-select"
                className="dropdown" 
                value={monedaSeleccionada} 
                onChange={(e) => onMonedaSeleccionada(e.target.value)}
            >
                {/* Recorre el array de opciones y crea un elemento <option> para cada una */}
                {opciones.map((opcion) => (
                    <option key={opcion} value={opcion}>{opcion}</option>
                ))}
            </select>
        </div>
    )
}

export default DropdownCurrency