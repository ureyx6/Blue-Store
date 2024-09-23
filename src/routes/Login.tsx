import React from 'react'
import { useState } from 'react';
import { auth } from '../../backend/firebaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import AuthListener from '../components/AuthListener';
import { PuffLoader } from 'react-spinners';
import LoginButton from '../components/LoginButton';
import './Login.css'








function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const {loggedIn, checkingStatus} = AuthListener();
  
if (loggedIn) {
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

    <div className="login-page">
    <div className = "login-holder">
    { checkingStatus ? <PuffLoader/> :
    <div className = "login-container">
      <div className="login-top-text">Login</div>
        <form onSubmit = {handleSignIn}>
      <label>
        <input placeholder = "Email" id = "email" name="email" value = {email} onChange = {(e) => setEmail(e.target.value)}></input> 
        <label>
            <input placeholder = "Password" id = "password" name="password" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
        </label>
      </label>
      <LoginButton buttonText="Login"/>
      </form>
    </div>
}
    </div>
    </div>
  )
}
export default Login
