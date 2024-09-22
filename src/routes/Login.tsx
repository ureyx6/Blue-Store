import React from 'react'
import { useState } from 'react';
import { auth } from '../../backend/firebaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import AuthListener from '../components/AuthListener';







function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const {loggedIn} = AuthListener();

  if (loggedIn == true) {
    Navigate("/dashboard");
  }

  
  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password) .then((userCredential) => {
      console.log(userCredential);
      if (userCredential) {
        Navigate("/");
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
