import React, { useState } from "react";

export const usuariosContext = React.createContext({})

export const usuariosProvider = (props) =>{
    const [usuarios,setUsuarios] = useState('')
    return(
        <usuariosContext.Provider value={{usuarios,setUsuarios}}>
            {props.children}
        </usuariosContext.Provider>
    )
}