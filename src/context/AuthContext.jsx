import { createContext, useContext, useState, useEffect, } from "react";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider =({children}) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const storedUser = JSON.stringify(localStorage.getItem("user"))
        if(storedUser){
            setUser(storedUser)
        }
    },[])
    const login = (userData)=>{
        setUser(userData);
        localStorage.setItem("user",JSON.stringify(useState))   
    }
    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("user")
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
