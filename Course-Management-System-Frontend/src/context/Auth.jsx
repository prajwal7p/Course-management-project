import React, { useState } from 'react'
import { createContext } from 'react';
export let AuthContext = createContext()
const AuthProvider = (props) => {
    let [user , setUser] = useState(()=>{
        return localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null
    })
    
    let login = (userData)=>{
      setUser(userData)
      localStorage.setItem('user' , JSON.stringify(userData))
    }

    let logout = ()=>{
        setUser(null)
        localStorage.removeItem('user')
    }
  return (
    <AuthContext.Provider value={{user , login , logout}}>
       {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider