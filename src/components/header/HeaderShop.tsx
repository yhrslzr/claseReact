import "./HeaderShop.css"
import type { 
    propsHeaderShop
} from "../../interfaces/interfaces.index"

export const ShopHeader = ({logo, marca, onCarrito}: propsHeaderShop) => {
    return (
        <header className="bg-white border-bottom py-3 mb-4">
            {/* 
            Bootstrap class "bg-white": Fondo blanco para el header.
            Bootstrap class "border-bottom": Borde inferior para separar del contenido.
            Bootstrap class "py-3": Padding vertical de 1rem.
            Bootstrap class "mb-4": Margen bottom de 1.5rem para separar de elementos siguientes.
            Los headers suelen tener fondos claros y bordes delimitadores.
            */}
            <div className="container">
                {/* 
                Bootstrap class "container": Contenedor responsivo que centra el contenido.
                Proporciona consistencia en el ancho máximo y centrado.
                */}
                <div className="d-flex align-items-center justify-content-between">
                    {/* 
                    Bootstrap class "d-flex": Establece display flex para layout horizontal.
                    Bootstrap class "align-items-center": Alinea verticalmente los elementos al centro.
                    Bootstrap class "justify-content-between": Distribuye espacio entre elementos (logo izquierda, botón derecha).
                    Flexbox es fundamental para layouts modernos y responsivos en Bootstrap.
                    */}
                    <div className="d-flex align-items-center">
                        {/* 
                        Bootstrap class "d-flex": Flex container para logo y título.
                        Bootstrap class "align-items-center": Alinea logo y texto verticalmente.
                        Agrupa elementos relacionados visualmente.
                        */}
                        <img 
                            src={logo} 
                            alt={`${marca} logo`} 
                            className="me-3"
                            style={{width: '40px', height: '40px', objectFit: 'contain'}}
                        />
                        {/* 
                        Bootstrap class "me-3": Margen derecho (end) de 1rem para separar del título.
                        El style inline mantiene dimensiones fijas y object-fit para evitar distorsión.
                        */}
                        <h1 className="h4 mb-0 text-dark">
                            {/* 
                            Bootstrap class "h4": Tamaño de heading 4 (más pequeño que h1 estándar).
                            Bootstrap class "mb-0": Sin margen bottom para evitar espacio extra.
                            Bootstrap class "text-dark": Color de texto oscuro para buen contraste.
                            Los headings de Bootstrap tienen tamaños predefinidos y pesos de fuente.
                            */}
                            {marca}
                        </h1>
                    </div>
                    <button 
                        className="btn btn-primary d-flex align-items-center"
                        onClick={onCarrito}
                    >
                        {/* 
                        Bootstrap class "btn": Clase base para botones.
                        Bootstrap class "btn-primary": Color azul primario de Bootstrap.
                        Bootstrap class "d-flex": Flex para alinear ícono y texto.
                        Bootstrap class "align-items-center": Centra verticalmente.
                        Los botones primarios se usan para acciones principales como "Carrito".
                        */}
                        Carrito :3
                    </button>
                </div>
            </div>
        </header>
    )
}

export default ShopHeader