import "./CardShop.css"

import type {
    propsCardShop
} from "../../interfaces/interfaces.index"

export const ShopFake = ({productos}: propsCardShop) => {
    if (!productos.length) {
        return (
            <div className="text-center my-4">
                {/* 
                Bootstrap class "text-center": Centra el texto horizontalmente.
                Bootstrap class "my-4": Agrega margen vertical (top y bottom) de 1.5rem (24px en Bootstrap).
                Esto es útil para centrar mensajes de carga o estados vacíos.
                */}
                Cargando productos...
            </div>
        )
    }

    return (
        <div className="container my-4">
            {/* 
            Bootstrap class "container": Crea un contenedor responsivo que centra el contenido y limita el ancho máximo.
            Bootstrap class "my-4": Margen vertical de 1.5rem para separar del contenido anterior y posterior.
            El container es fundamental en Bootstrap para layouts responsivos.
            */}
            <div className="row g-4">
                {/* 
                Bootstrap class "row": Define una fila en el sistema de grid de Bootstrap.
                Bootstrap class "g-4": Establece el gap (espacio) entre columnas en 1.5rem (24px).
                Las filas contienen columnas (col) y manejan el espaciado entre ellas.
                */}
                {productos.map((prod) => (
                    <div key={prod.id} className="col-lg-4 col-md-6 col-sm-12">
                        {/* 
                        Bootstrap classes para columnas responsivas:
                        - "col-lg-4": En pantallas grandes (lg, >=992px), ocupa 4/12 del ancho (33.33%, 3 columnas por fila).
                        - "col-md-6": En pantallas medianas (md, >=768px), ocupa 6/12 (50%, 2 columnas por fila).
                        - "col-sm-12": En pantallas pequeñas (sm, >=576px), ocupa 12/12 (100%, 1 columna por fila).
                        Esto crea un grid responsivo que se adapta al tamaño de pantalla.
                        */}
                        <div className="card h-100 shadow-sm">
                            {/* 
                            Bootstrap class "card": Crea una tarjeta con bordes redondeados y sombra sutil.
                            Bootstrap class "h-100": Hace que la tarjeta ocupe toda la altura disponible (iguala alturas en el grid).
                            Bootstrap class "shadow-sm": Agrega una sombra pequeña para dar profundidad visual.
                            Las cards son componentes versátiles para mostrar contenido agrupado.
                            */}
                            <div className="card-body d-flex flex-column">
                                {/* 
                                Bootstrap class "card-body": Contenedor interno de la card con padding.
                                Bootstrap class "d-flex": Establece display flex para controlar el layout interno.
                                Bootstrap class "flex-column": Organiza los elementos hijos en columna (verticalmente).
                                Esto permite que el contenido se distribuya verticalmente dentro de la card.
                                */}
                                <h5 className="card-title text-center">
                                    {/* 
                                    Bootstrap class "card-title": Estilo específico para títulos de cards (fuente más grande y negrita).
                                    Bootstrap class "text-center": Centra el texto horizontalmente.
                                    Los títulos de cards siguen una jerarquía visual clara.
                                    */}
                                    {prod.nombre}
                                </h5>
                                <img 
                                    src={prod.imagen} 
                                    alt={prod.nombre} 
                                    className="card-img-top mb-3"
                                    style={{height: '160px', objectFit: 'contain'}}
                                />
                                {/* 
                                Bootstrap class "card-img-top": Posiciona la imagen en la parte superior de la card.
                                Bootstrap class "mb-3": Margen bottom de 1rem para separar de elementos siguientes.
                                El style inline mantiene la altura fija y object-fit para evitar distorsión.
                                */}
                                <p className="card-text fw-bold text-success mb-2">
                                    {/* 
                                    Bootstrap class "card-text": Estilo para texto de cards.
                                    Bootstrap class "fw-bold": Hace el texto negrita (font-weight: bold).
                                    Bootstrap class "text-success": Color verde para indicar precio (éxito/positivo).
                                    Bootstrap class "mb-2": Margen bottom pequeño.
                                    Los colores semánticos ayudan a comunicar significado visualmente.
                                    */}
                                    Precio: ${prod.precio}
                                </p>
                                <p className="card-text text-cyan-100 small">
                                    {/* 
                                    Bootstrap class "card-text": Estilo base para texto de cards.
                                    Bootstrap class "text-muted": Color gris suave para texto secundario.
                                    Bootstrap class "small": Reduce el tamaño de fuente.
                                    Esto crea jerarquía visual: precio destacado, descripción secundaria.
                                    */}
                                    Descripción: {prod.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopFake