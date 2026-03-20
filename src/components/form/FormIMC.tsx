import "./FormIMC.css"
import type {
    propsFormIMC
} from "../../interfaces/interfaces.index"

function Form({ peso, estatura, cambioPeso, cambioEstatura, imc }: propsFormIMC) {
    const formatearNumero = (valor: string) => {
    const numero = parseFloat(valor);
    return Number.isNaN(numero) ? 0 : numero;
    };
    
    const obtenerClasificacion = (imcValor: number) => {
    if (imcValor === 0) return { texto: "Sin datos", color: "grey" };
    if (imcValor < 18.5) return { texto: "Bajo peso", color: "orange" };
    if (imcValor < 25) return { texto: "Normal", color: "green" };
    if (imcValor < 30) return { texto: "Sobrepeso", color: "yellow" };
    return { texto: "Obesidad", color: "red" };
    };
    const clasificacion = obtenerClasificacion(imc);
    
    return (
        <section className="form-imc">
        <h2>Calculadora IMC</h2>

        <label htmlFor="Peso">Peso (kg)</label>
        <input
            type="number"
            name="Peso"
            id="Peso"
            value={peso > 0 ? peso : ""}
            min="0"
            step="0.1"
            onChange={(e) => cambioPeso(formatearNumero(e.target.value))}
        />
        <label htmlFor="Estatura">Estatura (m)</label>
        <input
            type="number"
            name="Estatura"
            id="Estatura"
            value={estatura > 0 ? estatura : ""}
            min="0"
            step="0.01"
            onChange={(e) => cambioEstatura(formatearNumero(e.target.value))}
        />

    <div className="imc-result">
        <p>
        IMC: <strong>{imc.toFixed(2)}</strong>
        </p>
        <p className={`imc-status imc-status-${clasificacion.texto.replace(/\s+/g, "-").toLowerCase()}`}>
            Estado: <strong>{clasificacion.texto}</strong>
        </p>
    </div>
    </section>
);
}

export default Form