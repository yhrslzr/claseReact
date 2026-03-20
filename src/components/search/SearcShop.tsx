import "./SearchShop.css"
import type { 
    propsSearchShop
} from "../../interfaces/interfaces.index"

const SearchShop=({ alEscribir }: propsSearchShop)=>{
    return(
        <input type= "text" 
        className="search"
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
    )
}

export default SearchShop