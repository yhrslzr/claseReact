export interface SupaProps {
    id: number,
    nombre: string,
    telefono: string,
    onEditar: (id: number) => void
    onEliminar: (id: number) => void
}

function TableList({id, nombre, telefono, onEditar, onEliminar}: SupaProps) {
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{telefono}</td>
            <td>
                <button onClick={onEditar}>Editar</button>
                <button onClick={onEliminar}>Eliminar</button>
            </td>
        </tr>
    )
}

export default TableList