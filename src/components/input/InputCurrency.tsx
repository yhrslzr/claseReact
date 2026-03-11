import "./InputCurrency.css"
import type { 
    propsConverterCurrency 
} from "../../interfaces/interfaces.index"

const InputCurrency = ({ onValorConvertido }: propsConverterCurrency) => {
    return (
        <input type="number" className="input" 
        onChange={(e) => onValorConvertido(parseFloat(e.target.value))}
        placeholder="0.00" step="0.01" min="0"/>
        /*
        - type="number" indica que el campo es de tipo numérico
        - className="input" asigna la clase "input" al input para aplicar estilos desde InputCurrency.css        
        - onChange es un evento que se dispara cuando el valor del input cambia
        - onValorConvertido es la función que se ejecuta cuando el usuario cambia el valor del input
        - parseFloat se utiliza para convertir el valor del input (que es una cadena) a un número decimal
        - placeholder="0.00" muestra un texto de ejemplo dentro del input cuando está vacío
        - step="0.01" permite ingresar valores con dos decimales (ej: 10.50)
        - min="0" evita que el usuario ingrese valores negativos, ya que no tendría sentido convertir una cantidad negativa de dinero
        */
    )
}


export default InputCurrency