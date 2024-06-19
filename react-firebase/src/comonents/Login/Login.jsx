import React, { useState } from 'react'
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const Login = () => {
    const [user,setUser]=useState(null)
    const auth = getAuth(app)
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const handleSignIn = ()=>{
        signInWithPopup(auth,googleprovider).then(res =>{
            const loggedInuser = res.user
            setUser(loggedInuser)
            console.log(loggedInuser )
        }).catch(error=>{
            console.log(error.message)
        })
    }
    const handleSignOut=()=>{
signOut(auth)
.then(res=>{
    setUser(null)
})
.catch(e=>{
    console.log(e.message)
})
    }
    const handlegithub =()=>{
        signInWithPopup(auth,githubprovider).then(res =>{
            const loggedInuser = res.user
            setUser(loggedInuser)
            console.log(loggedInuser )
        }).catch(error=>{
            console.log(error.message)
        })
    }
  return (
    <>
   {user &&  <h1 className='text-6xl'>{user?.displayName}</h1>}
    {
        user ?  <button onClick={()=>handleSignOut()}>logout</button>
        
        
        : <> <button onClick={()=>handleSignIn()}>google login</button>
<button onClick={()=>handlegithub()}>github login</button>
</>  
    }

    </>
  )
}

export default Login