import { createContext,useState,useContext,useEffect } from "react";

const AuthContext=createContext()

export const Authprovider=({children})=>{
        const [auth,setAuth]=useState('')

   return <AuthContext.Provider
    value={{auth,setAuth}}
   >
        {children}
    </AuthContext.Provider>
}



export function useAuth() {
    return useContext(AuthContext)
}

