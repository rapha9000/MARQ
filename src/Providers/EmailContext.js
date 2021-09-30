import React, { useState } from "react";

export const EmailContext = React.createContext({})

export const EmailProvider = (props) =>{
    const [Email,setEmail] = useState('')
    return(
        <EmailContext.Provider value={{Email,setEmail}}>
            {props.children}
        </EmailContext.Provider>
    )
}
