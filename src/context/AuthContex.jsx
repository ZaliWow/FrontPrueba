import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApiStatus } from "../hooks/useApiStatus";

export const AuthContext = createContext()

export function AuthProvider({children}){
   
    const [auth, setAuth]= useState({token:null})
    const navigate=useNavigate()
    const {handleApiStatus} = useApiStatus()
    const login = async (credentials) => {
        try {
            handleApiStatus('Enviando...')
            const response = await fetch(import.meta.env.VITE_API_JWT_LOGIN, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(credentials)
            })
            const data = await response.json();
            setAuth({ token: data.access_token });
            localStorage.setItem('token', data.access_token);
            navigate('/')
            handleApiStatus('enviado')
        } catch (error) {
            console.log(error)
      
        }         
    }


return(
    <AuthContext.Provider value={{auth, setAuth, login,}}>
        {children}
    </AuthContext.Provider>
)
}