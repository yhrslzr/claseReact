import "./NavbarShop.css"

import type {
    propsNavbarShop
} from "../../interfaces/interfaces.index"

export const ShopNavbar = ({categorias, onCategorias}: propsNavbarShop) => {
    return (
        <nav className="mb-4">
            {/* 
            Bootstrap class "mb-4": Margen bottom de 1.5rem para separar del contenido siguiente.
            La navegación suele tener espaciado para delimitar secciones.
            */}
            <div className="container">
                {/* 
                Bootstrap class "container": Contenedor responsivo para consistencia.
                */}
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {/* 
                    Bootstrap class "d-flex": Layout flex para botones horizontales.
                    Bootstrap class "flex-wrap": Permite que los botones se envuelvan en múltiples líneas si es necesario.
                    Bootstrap class "gap-2": Espacio de 0.5rem entre botones.
                    Bootstrap class "justify-content-center": Centra los botones horizontalmente.
                    Esto crea una barra de navegación flexible y responsiva.
                    */}
                    {categorias.map((category) => (
                        <button 
                            key={category} 
                            onClick={() => onCategorias(category)}
                            className="btn btn-outline-primary"
                        >
                            {/* 
                            Bootstrap class "btn": Clase base para botones.
                            Bootstrap class "btn-outline-primary": Variante con borde azul, fondo transparente.
                            Los botones outline son buenos para navegación secundaria, cambiando a sólido al activarse.
                            */}
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default ShopNavbar