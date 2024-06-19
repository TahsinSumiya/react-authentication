import React, { createContext, useEffect, useState } from 'react'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut  } from "firebase/auth";
import auth from '../../firebaselocation/Firebase.config'
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
   const [user,setUser]= useState(null)
   const [loading,setLoading]= useState(null)
   const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
   }

   const SignInUser= (email,password)=>{
   setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut = ()=>{
    setLoading(true)
       return signOut(auth)
   }
   useEffect(()=>{
const unsubscribe =    onAuthStateChanged (auth, (currentUser)=>{
setUser(currentUser)
console.log('obsering current user',currentUser)
setLoading(false)
    });

    return ()=>{
      unsubscribe()
    }

  },[])


   const authInfo ={
    user,
    loading,
    createUser,
    SignInUser,
    logOut}


  return (
    <AuthContext.Provider value={authInfo}>
{children}

    </AuthContext.Provider>
  )
}

export default AuthProvider