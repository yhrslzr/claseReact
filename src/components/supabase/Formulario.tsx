import { useState, useEffect } from "react"

function Formulario({insertar, actualizar, datoEditar, setDatoEditar}) {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')

    useEffect(() => {
        if (datoEditar) {
            setNombre(datoEditar.nombre)
            setTelefono(datoEditar.telefono)
        }
    }, [datoEditar])

    const manejarSubmit = (e) => {
        e.preventDefault()
        if (datoEditar) {
            actualizar(datoEditar.id, nombre, telefono)
        } else {
            insertar(nombre, telefono)
        }

        setNombre('')
        setTelefono('')
        setDatoEditar(null)
    }
    return (
        <div className="supabase-formulario">
            <form onSubmit={manejarSubmit}>
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={(e)=> setNombre(e.target.value)}
                    placeholder="Nombre"
                />
                <input 
                    type="text" 
                    value={telefono} 
                    onChange={(e)=> setTelefono(e.target.value)}
                    placeholder="Teléfono"
                />
                <button type="submit">{datoEditar ? 'Actualizar' : 'Guardar'}</button>
            </form>
        </div>
    )
}

export default Formulario