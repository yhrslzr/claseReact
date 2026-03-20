import "./ShopFake.css"

import type {
    propsShop
} from "../../interfaces/interfaces.index"

export const ShopFake = ({productos}: propsShop) => {
    if (!productos.length) {
        return <div className="shop-fake">Cargando productos...</div>
    }

    return (
        <div className="shop-fake-grid">
            {productos.map((prod) => (
                <div key={prod.id} className="shop-fake-item">
                    <h2>{prod.nombre}</h2>
                    <img src={prod.imagen} alt={prod.nombre} />
                    <p className="shop-fake-price">Precio: ${prod.precio}</p>
                    <p className="shop-fake-desc">Descripción: {prod.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default ShopFake