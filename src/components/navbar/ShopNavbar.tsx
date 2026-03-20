import "./ShopNavbar.css"

import type {
    propsNavbarShop
} from "../../interfaces/interfaces.index"

export const ShopNavbar = ({categorias, onCategorias}: propsNavbarShop) => {
    return (
        <nav className="shop-categories">
            <ul className="shop-navbar-list">
                {categorias.map((category) => (
                    <li key={category} className="shop-navbar-item">
                        <button onClick={() => onCategorias(category)}>{category}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default ShopNavbar