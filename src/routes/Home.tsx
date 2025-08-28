import React from 'react';
import './Home.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { TiStarFullOutline } from "react-icons/ti";
import HomeModal from '../components/HomeModal';
import holderImage from '../assets/default_sm.jpg';

function Home() {
  return (
    <div className ="home">
      <div className = "home-top">
        <div className ="home-right-side">
        <div className = "textbox">Ready For <span>Endless Deals?</span></div>
      <div className="under-main-text">Shop with confidence, we have the best prices!</div>
      <div className ="buttonbox">
        <Link to="/shop">
        <Button buttonText="Shop Now"/>
        </Link>
        </div>
      </div>
      </div>
      <div className = "home-sr">
        <div className = "star-rating">
          <TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/>
        </div>
        <div className = "text-under-stars">
          Over 9000 Five Star Reviews
        </div>
      </div>
      <div className = "home-modals">
        <HomeModal modalImage={holderImage} modalHeader = "Example" modalText = "meow meow meow"/>
      </div>
    </div>
  )
}

export default Home
