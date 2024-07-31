import { createContext } from "react";
import { useState } from "react";

export const ApiStatusContext = createContext();


export function ApiStatusProvider({children}) {

    const [status, setStatus]= useState(null)
    return(
        <ApiStatusContext.Provider value={{status, setStatus}}>
            {children}
        </ApiStatusContext.Provider>
    )


}