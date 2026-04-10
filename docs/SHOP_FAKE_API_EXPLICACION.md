# Guía paso a paso: Cómo se visualiza el componente ShopFake con FakeStoreAPI

Este archivo explica cómo funciona el componente `ShopFake` del proyecto `claseReact`, usando la API `https://fakestoreapi.com/products`.

Se describe el flujo completo:
- `App.tsx` llama al hook
- el hook carga datos desde la API
- las interfaces y tipos definen la estructura
- el componente `.tsx` renderiza la UI
- los componentes auxiliares ayudan al diseño y la interacción

## 1. Estructura de archivos usada en este ejemplo

- `src/hooks/useShopProducts.ts` → hook personalizado que llama a FakeStoreAPI
- `src/types/Types.ts` → tipo `Product` que define cómo se usa cada producto
- `src/interfaces/Interfaces.ts` → interfaces de props para los componentes
- `src/components/card/CardShop.tsx` → componente `ShopFake` que muestra los productos
- `src/components/search/SearchShop.tsx` → input de búsqueda
- `src/components/navbar/NavbarShop.tsx` → botón de categorías
- `src/components/header/HeaderShop.tsx` → encabezado de la tienda
- `src/components/footer/FooterShop.tsx` → pie de página de la tienda
- `src/App.tsx` → componente principal donde se arma todo

## 2. Tipo `Product`: qué datos maneja la tienda

En `src/types/Types.ts` está definido el type:

```ts
export type Product = {
  id: number;
  nombre: string;
  desc: string;
  precio: number;
  imagen: string;
  category?: string;
}
```

Este tipo indica qué datos se usan en la tienda:
- `id`: identificador único del producto
- `nombre`: título del producto
- `desc`: descripción corta
- `precio`: precio numérico
- `imagen`: URL de la imagen
- `category`: categoría para filtrar

## 3. Hook `useShopProducts`: carga y filtra productos

Archivo: `src/hooks/useShopProducts.ts`

```ts
import { useEffect, useState } from "react";
import type { Product } from "../types/types.index";

interface FakestoreApiData {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
```

### Qué hace el hook

1. `useState<Product[]>([])` crea el estado `productos` donde guardará la lista.
2. `useState<string>("")` crea `filtroProducto`, el texto de búsqueda.
3. `useEffect(() => { ... }, [])` ejecuta la carga solo una vez cuando el componente se monta.
4. Dentro del efecto se hace:
   - `fetch("https://fakestoreapi.com/products")`
   - `await respuesta.json()` para recibir los datos JSON
   - `datos.map(...)` para transformar la respuesta de la API en el tipo `Product`
   - `setProductos(listadoReal)` para guardar productos ya tipados
5. Si falla la petición, el `catch` imprime el error en consola.

### Transformación de datos

La respuesta original usa campos como `title`, `image`, y `description`.

El hook los convierte así:
```ts
const listadoReal: Product[] = datos.map((p: FakestoreApiData) => ({
    id: p.id,
    nombre: p.title,
    desc: p.description,
    precio: p.price,
    imagen: p.image,
    category: p.category
}))
```

Así el componente recibe datos consistentes con `Product`.

### Filtrado interno

El hook también calcula:
```ts
const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtroProducto.toLowerCase())
)
```

Esto significa que el hook devuelve solo los productos cuyo nombre contiene el texto de búsqueda.

### Qué retorna el hook

```ts
return {
    productos: productosFiltrados,
    setFiltroProducto
}
```

- `productos`: lista ya filtrada
- `setFiltroProducto`: función que permite actualizar el texto de búsqueda desde el componente padre

## 4. Interfaces: cómo se definen las props

En `src/interfaces/Interfaces.ts` está la interfaz que usa el componente `ShopFake`:

```ts
export interface propsCardShop {
    productos: Product[];
}
```

Y las interfaces auxiliares:
- `propsSearchShop` → función `alEscribir` para el input
- `propsNavbarShop` → categorías y callback `onCategorias`
- `propsHeaderShop` → logo, marca y acción de carrito
- `propsFooterShop` → texto de pie y botón WhatsApp

Estas interfaces sirven para “tipar” lo que cada componente espera recibir.

## 5. Componente `ShopFake`: renderiza los productos en tarjetas

Archivo: `src/components/card/CardShop.tsx`

```tsx
export const ShopFake = ({productos}: propsCardShop) => {
    if (!productos.length) {
        return (
            <div className="text-center my-4">
                Cargando productos...
            </div>
        )
    }

    return (
        <div className="container my-4">
            <div className="row g-4">
                {productos.map((prod) => (
                    <div key={prod.id} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-center">{prod.nombre}</h5>
                                <img src={prod.imagen} alt={prod.nombre} ... />
                                <p className="card-text fw-bold text-success mb-2">
                                    Precio: ${prod.precio}
                                </p>
                                <p className="card-text text-cyan-100 small">
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
```

### Explicación del renderizado

- Si `productos` está vacío, muestra un mensaje: `Cargando productos...`.
- Si hay productos, usa Bootstrap para crear un grid responsivo:
  - `container`: contenedor centrado y responsivo
  - `row g-4`: fila con espacio entre columnas
  - `col-lg-4 col-md-6 col-sm-12`: columnas adaptables según tamaño de pantalla
  - `card`: tarjeta Bootstrap para ordenar visualmente la información
- Dentro de cada tarjeta aparece:
  - `h5` con el nombre
  - `img` con la imagen del producto
  - párrafo con precio y descripción

## 6. Componentes auxiliares: SearchShop, ShopNavbar, ShopHeader y ShopFooter

### `SearchShop` (`src/components/search/SearchShop.tsx`)

```tsx
const SearchShop = ({ alEscribir }: propsSearchShop) => {
    return (
        <input
            type="text"
            className="form-control"
            placeholder="Busca tu producto..."
            onChange={(e) => alEscribir(e.target.value)}
        />
    )
}
```

- `onChange` lee el texto que escribe el usuario.
- `alEscribir` envía ese texto al componente padre.

### `ShopNavbar` (`src/components/navbar/NavbarShop.tsx`)

```tsx
export const ShopNavbar = ({ categorias, onCategorias }: propsNavbarShop) => {
    return (
        <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categorias.map((category) => (
                <button key={category} onClick={() => onCategorias(category)}>
                    {category}
                </button>
            ))}
        </div>
    )
}
```

- Muestra botones con categorías.
- Al hacer click, llama a `onCategorias(category)`.

### `ShopHeader` y `ShopFooter`

Estas piezas solo ayudan a presentar la tienda:
- `ShopHeader`: logo, nombre de tienda y botón de carrito
- `ShopFooter`: texto de pie y botón de WhatsApp

No son esenciales para la lógica de datos, pero mejoran la UI.

## 7. Uso en `App.tsx`: cómo montar la tienda en la pantalla

`App.tsx` importa el hook y los componentes:

```tsx
import { useState } from 'react';
import { ShopFake, ShopHeader, ShopNavbar, SearchShop, ShopFooter } from './components/components.index';
import { useShopProducts } from './hooks/use.index';
```

Luego, dentro de `App()`:

```tsx
const { productos: productosArray, setFiltroProducto } = useShopProducts();
const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null);
const [carritoCount, setCarritoCount] = useState(0);
```

### Flujo de datos en `App`

1. `useShopProducts()` retorna `productosArray` y `setFiltroProducto`.
2. `productosArray` ya viene filtrado por el texto de búsqueda.
3. `categorias` se calcula usando `new Set(...)` para extraer categorías únicas.
4. `productosFiltrados` aplica el filtro por categoría:

```ts
const productosFiltrados = categoriaActiva
  ? productosArray.filter((p) => p.category === categoriaActiva)
  : productosArray;
```

5. `App` pasa `productosFiltrados` a `ShopFake`.
6. `App` pasa `setFiltroProducto` a `SearchShop`.
7. `App` pasa `onCategorias` a `ShopNavbar`.

### Renderización específica de la tienda

Dentro de `App` hay una sección que se activa cuando el componente seleccionado es `ShopFake`:

```tsx
{activeComponent === '03181' && (
  <div className="container-fluid py-4">
    <ShopHeader ... />
    <div className="row mb-4">
      <div className="col-md-8">
        <SearchShop alEscribir={setFiltroProducto} />
      </div>
      <div className="col-md-4">
        <ShopNavbar categorias={categorias} onCategorias={onCategorias} />
      </div>
    </div>
    <p className="text-center mb-3">Carrito: {carritoCount} ítem(s)</p>
    <ShopFake productos={productosFiltrados} />
    <ShopFooter info="2026 - Mi tienda" onBotonWP={onBotonWP} />
  </div>
)}
```

Esto organiza la pantalla con Bootstrap y pasa los datos necesarios a cada componente.

## 8. Por qué funciona esto como un proyecto de React

### 1) Separación de responsabilidades

- `useShopProducts` se encarga solo de cargar y filtrar datos.
- `ShopFake` se encarga solo de mostrar productos.
- `SearchShop` se encarga solo de capturar texto.
- `ShopNavbar` se encarga solo de botones de categoría.
- `App` conecta todo y decide qué mostrar.

### 2) Reutilización y lectura clara

- Las interfaces tipan los props para evitar errores.
- El tipo `Product` normaliza los datos de la API.
- El hook devuelve una API simple: `{ productos, setFiltroProducto }`.

### 3) Diseño visual con Bootstrap

Bootstrap se usa en todos los componentes para que la UI sea responsiva y clara:
- `container`, `row`, `col-*`
- `card`, `btn`, `form-control`
- `text-center`, `shadow-sm`, `mb-3`

## 9. Cómo usar este ejemplo en un proyecto nuevo

Si creas un nuevo proyecto React con TypeScript, copia estos pasos:

1. Crea `src/types/Types.ts` con el type `Product`.
2. Crea `src/interfaces/Interfaces.ts` con `propsCardShop`, `propsSearchShop`, `propsNavbarShop`, `propsHeaderShop`, `propsFooterShop`.
3. Crea el hook `src/hooks/useShopProducts.ts` con `fetch("https://fakestoreapi.com/products")`.
4. Crea los componentes `ShopFake`, `SearchShop`, `ShopNavbar`, `ShopHeader`, `ShopFooter`.
5. En `App.tsx`, importa el hook y los componentes.
6. Usa `useState` para manejar categoría activa y carrito.
7. Renderiza el componente principal pasando `productosFiltrados`.

### Ejemplo mínimo de `App.tsx`

```tsx
import { useState } from 'react';
import { ShopFake, ShopHeader, ShopNavbar, SearchShop, ShopFooter } from './components/components.index';
import useShopProducts from './hooks/useShopProducts';

function App() {
  const { productos, setFiltroProducto } = useShopProducts();
  const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null);

  const categorias = Array.from(new Set(productos.map((p) => p.category).filter(Boolean)));
  const productosFiltrados = categoriaActiva
    ? productos.filter((p) => p.category === categoriaActiva)
    : productos;

  return (
    <div>
      <ShopHeader logo="..." marca="Mi tienda" onCarrito={() => {}} />
      <SearchShop alEscribir={setFiltroProducto} />
      <ShopNavbar categorias={categorias} onCategorias={setCategoriaActiva} />
      <ShopFake productos={productosFiltrados} />
      <ShopFooter info="Mi tienda" onBotonWP={() => {}} />
    </div>
  );
}

export default App;
```

## 10. Resumen del flujo final

1. `App` monta el hook `useShopProducts`.
2. El hook busca productos en FakeStoreAPI.
3. La API entrega datos JSON.
4. El hook transforma los datos al type `Product`.
5. El hook guarda productos en estado y filtra según búsqueda.
6. `App` calcula categorías únicas.
7. `App` renderiza `ShopHeader`, `SearchShop`, `ShopNavbar`, `ShopFake` y `ShopFooter`.
8. El usuario puede buscar y filtrar.
9. `ShopFake` muestra tarjetas Bootstrap con los productos.

---

Esta guía explica cómo llamar al componente desde `App`, cómo trabaja el hook con la API y qué hace cada fragmento de código. Si quieres, puedo crear también un archivo `EXPLICACION_PASO_A_PASO.md` para otro proyecto similar del repositorio.
