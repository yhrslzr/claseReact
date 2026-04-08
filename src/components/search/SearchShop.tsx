import "./SearchShop.css"
import type { 
    propsSearchShop
} from "../../interfaces/interfaces.index"

const SearchShop=({ alEscribir }: propsSearchShop)=>{
    return(
        <div className="mb-3">
            {/* 
            Bootstrap class "mb-3": Margen bottom de 1rem para separar del contenido siguiente.
            Los formularios necesitan espaciado para claridad visual.
            */}
            <input 
                type="text" 
                className="form-control"
                placeholder="Busca tu producto..."
                onChange={(e)=> alEscribir(e.target.value)}
                /*
                - "e" significa event
                - alEscribir es la función que se ejecuta cada 
                vez que el usuario escribe en el campo de búsqueda,
                - "target" es el elemento que dispara el evento
                - "value" es  lo que el usuario escribe en el campo 
                de búsqueda, se pasa a la función "alEscribir" para 
                actualizar el estado de búsqueda en el componente padre
                */
            />
            {/* 
            Bootstrap class "form-control": Clase para inputs de formulario.
            Proporciona estilos consistentes: bordes, padding, focus states, etc.
            Los form-controls de Bootstrap tienen validación visual y accesibilidad integrada.
            */}
        </div>
    )
}

export default SearchShop