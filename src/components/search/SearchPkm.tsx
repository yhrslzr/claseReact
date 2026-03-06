import "./SearchPkm.css"
import type { 
    propsSearchPkm
} from "../../interfaces/interfaces.index"

const Search=({ alEscribir }: propsSearchPkm)=>{
    return(
        <input type= "text" 
        className="search"
        placeholder="Busca tu Pokémon"
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
    )
}

export default Search