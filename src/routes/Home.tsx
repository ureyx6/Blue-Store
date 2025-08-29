import React from 'react';
import './Home.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { TiStarFullOutline } from "react-icons/ti";
import HomeModal from '../components/HomeModal';
import holderImage from '../assets/default_sm.jpg';
import proGalaxy from '../assets/pro galaxybook.jpg';
import proPad from '../assets/pro ipad.jpg';
import proThink from '../assets/pro thinkbook.jpg';
import { ImAirplane } from "react-icons/im";
import { FaBoltLightning } from "react-icons/fa6";
import { MdImportantDevices } from "react-icons/md";

function Home() {
  return (
    <div className ="home">
      <div className = "home-top">
        <div className ="home-right-side">
        <div className = "textbox">Ready For <span>Endless Deals?</span></div>
      <div className="under-main-text">All the best tech at all the best prices.</div>
      <div className ="buttonbox">
        <Link to="/shop">
        <Button buttonText="Shop Now"/>
        </Link>
        </div>
      </div>
      </div>
      <div className = "home-promises"> 
        <div className = "promises-header">
          Our Promises To You
        </div>
        <div className = "promises-icons">
          <div className ="promises-icons-1st">
          <ImAirplane/>
          Free Shipping
          </div>
          <div className = "promises-icons-2nd">
            <FaBoltLightning/>
            1-2 Day Delivery
          </div>
          <div className = "promises-icons-3rd">
            <MdImportantDevices/>
            10 Year Warranty 
          </div>
        </div>
      </div>
       <div className = "home-modals">
        <HomeModal modalImage={proPad} modalHeader = "iPad by Apple" modalText = "Timeless, Sleek, Classic"/>
        <HomeModal modalImage={proGalaxy} modalHeader = "Galaxy Book by Samsung" modalText = "The Galaxy In Your Lap"/>
        <HomeModal modalImage={proThink} modalHeader = "ThinkBook by Lenovo" modalText = "Think Better, Think Smarter"/>
      </div>
       <div className = "home-sr">
        <div className = "star-rating">
          <TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/>
        </div>
        <div className = "text-under-stars">
          Over 9000 Five Star Reviews
        </div>
      </div>
    </div>
  )
}

export default Home
