import "./FooterShop.css"

import type {
    propsFooterShop
} from "../../interfaces/interfaces.index"

export const ShopFooter = ({info, onBotonWP}: propsFooterShop) => {
    return (
        <footer className="bg-light border-top mt-4 py-3">
            {/* 
            Bootstrap class "bg-light": Establece un fondo gris claro para el footer.
            Bootstrap class "border-top": Agrega un borde superior delgado.
            Bootstrap class "mt-4": Margen top de 1.5rem para separar del contenido anterior.
            Bootstrap class "py-3": Padding vertical de 1rem (16px) para espaciado interno.
            Los footers suelen tener colores neutros y bordes para delimitar secciones.
            */}
            <div className="container text-center">
                {/* 
                Bootstrap class "container": Contenedor responsivo que centra y limita el ancho.
                Bootstrap class "text-center": Centra todo el contenido horizontalmente.
                El container asegura consistencia en el layout responsivo.
                */}
                <p className="mb-3 text-muted">
                    {/* 
                    Bootstrap class "mb-3": Margen bottom de 1rem para separar del botón.
                    Bootstrap class "text-muted": Color gris para texto secundario.
                    El texto del footer suele ser menos prominente visualmente.
                    */}
                    {info}
                </p>
                <button 
                    onClick={onBotonWP} 
                    className="btn btn-success"
                >
                    {/* 
                    Bootstrap class "btn": Clase base para botones, establece estilos básicos.
                    Bootstrap class "btn-success": Variante verde para acciones positivas (como contactar).
                    Los botones de Bootstrap tienen estados hover, focus y active predefinidos.
                    */}
                    WhatsApp
                </button>
            </div>
        </footer>
    )
}

export default ShopFooter