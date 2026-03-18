import { useState } from "react";

function useIMC(){

    const[peso,setPeso]=useState(0)
    const[estatura,setEstatura]=useState(0)

    const imc= (peso>0 && estatura>0)?peso/(estatura*estatura):0
    return{
        peso,
        estatura,
        setEstatura,
        setPeso,
        imc
    }
}
export default useIMC