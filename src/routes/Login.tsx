import React from 'react'
import { useState, useEffect } from 'react';
import { auth } from '../../backend/firebaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';







function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
               console.log(loggedIn);
            }
        })
    })

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password) .then((userCredential) => {
      console.log(userCredential);
      if (userCredential) {
        <Navigate to = "/"></Navigate>
      }
    })
    .catch((error) => {
      console.log(error);
    });
    
    
  }

  return (

    <div className = "login-container">
        <form onSubmit = {handleSignIn}>
      <label>
        Email
        <input id = "email" name="email" value = {email} onChange = {(e) => setEmail(e.target.value)}></input> 
        <label>
            Password
            <input id = "password" name="password" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
        </label>
      </label>
      <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login
