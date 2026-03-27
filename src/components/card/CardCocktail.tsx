import "./CardCocktail.css"
import type {
    propsCardCocktail,   // Props requeridas por el componente Card
} from "../../interfaces/interfaces.index" // Importamos las interfaces para las props (si es necesario)

const CardCocktail = ({ nombre, img }: propsCardCocktail) => {
    return (
        <div className="card-v1">
            <img src={img} alt={nombre} />
            <h3>{nombre}</h3>
        </div>
    )
}

export default CardCocktail