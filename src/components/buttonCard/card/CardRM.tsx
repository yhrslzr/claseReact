import './CardRM.css';
import type {
    propsCardRM,   // Props requeridas por el componente Card
} from "../../../interfaces/interfaces.index" // Importamos las interfaces para las props (si es necesario)

const CardRM = ({ nombre, img, especie, estado }: propsCardRM) => {
    return (
        <div className={`card ${estado ? "card-change1" : "card-normal"}`}>
            <img src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p>{especie}</p>
            <p>{estado}</p>
        </div>
    )
}


export default CardRM;