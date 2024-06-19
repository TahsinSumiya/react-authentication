import React, { useRef, useState } from 'react'
import {  signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase/firebase.config'; 
import { Link } from 'react-router-dom';
const Login = () => {
    const[showpass,setPass]=useState(false)
    const emailref = useRef(null)
    const handleLogin= (e)=>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log("User signed up:", userCredential.user);
     
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
      
      });
  
    }
    const handleforgetpass = ()=>{
        const email = emailref.current.value
console.log('reset email',emailref.current.value)
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    console.log('return a valid mail')
}
sendPasswordResetEmail(auth,email).then((e) => {
    // Signed up
    console.log("User signed up:", e.user);
 
  })
  .catch((error) => {
    console.error("Error signing up:", error.message);
  
  });
    }
  return (
    <div>

<div className='flex justify-center items-center align-middle m-auto'>
      <form className='' onSubmit={handleLogin}>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" ref={emailref} name="email" className="grow w-full" placeholder="Username" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
          </svg>
          <input type={showpass ? "text":"password"} name="password" className="grow w-full" placeholder="Password" />
          <span onClick={()=>setPass(!showpass)}>0v0</span>
        </label>
        <br />
        <input type="checkbox" name="terms"/>
        <br />
        <button className="btn btn-active btn-primary my-2">Register</button>
      </form>
     <br />
      <Link onClick={handleforgetpass}>forget pass</Link>
      {/* {
        registerError && <p className='text-red'>{registerError} </p> 
      }
        {
        success && <p className='text-red'>{success} </p> 
      } */}

    </div>
    </div>
  )
}

export default Login