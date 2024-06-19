import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.config'; // Adjust the path as necessary
import { createUserWithEmailAndPassword, sendEmailVerification ,updateProfile} from "firebase/auth";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showpass, setPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked; // Adjusted to check the checkbox

    if (password.length < 6) {
      setRegisterError('Password must be at least 6 characters long');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Password must contain at least one uppercase letter');
      return;
    } else if (!accepted) {
      setRegisterError('You must accept the terms and conditions');
      return;
    }

    setRegisterError("");
    setSuccess("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
            displayName: name
          }).then(() => {
            console.log("User updated:", userCredential.user);
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            console.error("Error signing up:", error.message);
          });
        sendEmailVerification(userCredential.user)
          .then(() => { alert('Check your email for verification'); })
          .catch((error) => { console.error("Error sending email verification:", error.message); });
        console.log("User signed up:", userCredential.user);
        setSuccess('User created successfully');
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div className='flex justify-center items-center align-middle m-auto'>
      <form className='' onSubmit={handleRegister}>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" name="name" className="grow w-full" placeholder="Username" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" name="email" className="grow w-full" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
          </svg>
          <input type={showpass ? "text" : "password"} name="password" className="grow w-full" placeholder="Password" />
          <span onClick={() => setPass(!showpass)}>👁</span>
        </label>
        <br />
        <input type="checkbox" name="terms" /> I accept the terms and conditions
        <br />
        <button className="btn btn-active btn-primary my-2">Register</button>
      </form>
      {registerError ? <p className='text-red-500'>{registerError}</p> : <p className='text-green-600'>{success}</p>}
    </div>
  );
};

export default Register;
