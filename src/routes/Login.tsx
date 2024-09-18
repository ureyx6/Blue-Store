import React from 'react'
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSignIn(e) {
    e.preventDefault();
    console.log("meow");
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
