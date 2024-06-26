import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unsubscribe =    onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
    setLoading(false)
    console.log('obsering current user',currentUser)

        });
    
        return ()=>{
          unsubscribe()
        }
    
      },[])
  const SignInUser= (email,password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
      setLoading(true)
      return signOut(auth)
  }
  const authInfo = {
    user,
    createUser,
    SignInUser,
    logOut,loading
  };
 
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
