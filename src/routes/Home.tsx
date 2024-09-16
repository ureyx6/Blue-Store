import React from 'react';
import './Home.css';
import Button from '../components/Button';

function Home() {
  return (
    <div className ="home">
      <div className = "home-left">
        <div className = "textbox">
      Ready to experience endless deals?
      </div>
      <div className ="buttonbox">
        <Button buttonText="Shop Now"/>
      </div>
      </div>
      <div className ="home-right">
        <img className ="home-image" src="https://m.media-amazon.com/images/I/41bIlvE1rdL._AC_SX679_.jpg"></img>
        <img className = "home-image" src="https://m.media-amazon.com/images/I/61hZrbHRMWL._AC_SX679_.jpg"></img>
      </div>
    </div>
  )
}

export default Home
