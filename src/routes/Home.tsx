import React from 'react';
import './Home.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className ="home">
      <div className = "home-top">
        <div className ="home-right-side">
        <div className = "textbox">Ready for <span>endless deals?</span></div>
      <div className="under-main-text">At BlueStore we strive to offer you the best tech at the best prices!</div>
      <div className ="buttonbox">
        <Link to="/shop">
        <Button buttonText="Shop Now"/>
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
