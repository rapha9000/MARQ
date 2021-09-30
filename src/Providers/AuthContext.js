import React, { useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) =>{
    const [CPF,setCPF] = useState('')
    return(
        <AuthContext.Provider value={{CPF,setCPF}}>
            {props.children}
        </AuthContext.Provider>
    )
}
