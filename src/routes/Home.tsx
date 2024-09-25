import React from 'react';
import './Home.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className ="home">
      <div className = "home-top">
        <div className = "textbox">
      Ready to experience <span>endless deals?</span></div><div className="under-main-text">at BlueStore we strive to offer you the best tech at the best prices! Ready to get started?</div>
      <div className ="buttonbox">
        <Link to="/shop">
        <Button buttonText="Shop Now"/>
        </Link>
      </div>
      </div>
      <div className = "home-bottom">
        <div className = "firstbox">
          <div className = "firstboxheader">
           All Your Tech Needs
          </div>
          <div className = "firstboxtext"> </div>
        </div>
        <div className = "secondbox">
          <div className = "secondboxheader"> Unofficial Retailer Of </div>
          <div className = "secondboximages">
            <img className ="logo" src="https://imgs.search.brave.com/1bhL6ufZamxoV5Ikhs9IXvQoGD4DPumk9Nh2polNLQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FwcGxlX2xvZ29f/Z3JleS02MjR4NDAw/LnBuZw"></img>
            <img className ="logo" src="https://imgs.search.brave.com/C5amKpPS1s9CLpv8ZmGwoStJ3DiBHhHjUwM8dkw609U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MzMu/cG5n"></img>
            <img className ="logo" src="https://imgs.search.brave.com/VlPYwQnFdWo7MPu8a8wesFMRZem4xYJhR7FGSlTLEQw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FuZHJvaWQtTG9n/by0yMDE5LTUwMHgz/MTMucG5n"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
