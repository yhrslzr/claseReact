import "./FormIMC.css"
import type {
    propsFormIMC
} from "../../interfaces/interfaces.index"



function Form({ peso, estatura, cambioPeso, cambioEstatura }: propsFormIMC) {
    <>
    <label htmlFor="Peso">Peso</label>
        <input 
            type="text"
            name="Peso"
            id="Peso"
            value={peso}
            onChange={(e)=>cambioPeso(e.target.value)}
        />

        <label htmlFor="Estatura">Estatura</label>
        <input 
            type="text" 
            id="Estatura"
            value={estatura}
            onChange={(e)=>cambioEstatura(e.target.value)}
        />

    <h1>IMC</h1>
    {/* sobrepeso: rojo 
        regular: verde
        desnutrido: naranja
    */}
    </>
}

export default Form