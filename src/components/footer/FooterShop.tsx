import "./ShopFooter.css"

import type {
    propsFooterShop
} from "../../interfaces/interfaces.index"

export const ShopFooter = ({info, onBotonWP}: propsFooterShop) => {
    return (
        <footer className="shop-footer">
            <p>{info}</p>
            <button onClick={onBotonWP}>WhatsApp</button>
        </footer>
    )
}

export default ShopFooter