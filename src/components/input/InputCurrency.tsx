import "./InputCurrency.css"
import type { 
    propsConverterCurrency 
} from "../../interfaces/interfaces.index"

const InputCurrency = ({ valor, monedaOrigen, onValorConvertido }: propsConverterCurrency) => {
    return (
        <>
            {/* Muestra el código de la moneda */}
            <span className="currency-code">{monedaOrigen}</span>
            
            {/* Input para que el usuario ingrese el valor a convertir */}
            <input 
                type="text" 
                className="input" 
                value={valor || ''}
                onChange={(e) => onValorConvertido(parseFloat(e.target.value) || 0)}
                placeholder="0.00" 
                step="0.01" 
            />
        </>
    )
}

export default InputCurrency