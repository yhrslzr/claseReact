import "./ShopFake.css"

import type {
    propsShop
} from "../../interfaces/interfaces.index"

export const ShopFake = ({productos}: propsShop) => {
    return (
        <div className="shop-fake">
            {productos.map((product) => (
                <div className="shop-fake-card" key={product.id}>
                    <img src={product.imagen} alt={product.nombre} />
                    <h3>{product.nombre}</h3>
                    <p>{product.desc}</p>
                    <p>${product.precio}</p>
                </div>
            ))}
        </div>
    )
}

export default ShopFake