import "./HeaderShop.css"
import type { 
    propsHeaderShop
} from "../../interfaces/interfaces.index"

export const ShopHeader = ({logo, marca, onCarrito}: propsHeaderShop) => {
    return (
        <header className="shop-header">
            <div className="shop-logo">
                <img src={logo} alt={`${marca} logo`} />
            </div>
            <h1 className="shop-title">{marca}</h1>
            <button className="shop-carrito-button" onClick={onCarrito}>
                Carrito :3
            </button>
        </header>
    )
}

export default ShopHeader