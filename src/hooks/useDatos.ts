import { supabase } from "../utils/supabase"
import { useState, useEffect } from "react"
import { Usuario } from "../interfaces/Interfaces"

function useDatos() {
    const [datos, setDatos] = useState<Usuario[]>([])

    const traer = async()=>{
        const { data } = await supabase.from("usuario").select("*")
        if(data){
            setDatos(data)
        }
    }

    const insertar = async(nombre, telefono)=>{
        try {
            const { error } = await supabase.from("usuario").insert([{ nombre, telefono }])
            if(error){
                console.log(error)
            } else {
                traer()
            }
        } catch (error) {
            console.error("Error inserting user:", error)
        }
    }

    const actualizar = async(id, nombre, telefono)=>{
        try {
            const { error } = await supabase.from("usuario").update({ nombre, telefono }).eq("id", id)
            if(error){
                console.log(error)
            } else {
                traer()
            }
        } catch (error) {
            console.error("Error updating user:", error)
        }
    }

    const eliminar = async(id)=>{
        try {
            const { error } = await supabase.from("usuario").delete().eq("id", id)
            if(error){
                console.log(error)
            } else {
                traer()
            }
        } catch (error) {
            console.error("Error deleting user:", error)
            }
    }

    useEffect(()=>{
        traer()
    },[])

    return { 
        datos, 
        insertar, 
        actualizar, 
        traer, 
        eliminar }
}

export default useDatos