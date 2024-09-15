import React from 'react'
import { IoBagCheck } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  return (
    <nav className ="navbar">
        <div className ="navbar-left">
            <a href="/"><IoBagCheck></IoBagCheck></a>
            <a href="/">BlueStore</a>
        </div>
        <div className = "navbar-center">
            <ul className ="navbar-links">
                <li> <a href="/shop">Shop</a></li>
                <li> <a href ="/about">About Us</a></li>
                <li><a href = "/contact">Contact Us</a></li>
            </ul>
        </div>
        <div className = "navbar-right">
            <a href = "/cart"> <FaShoppingCart/> Cart</a>
            <a href = "/account"> <FaRegUser/> </a>
        </div>
    </nav>
  );
};

export default Navbar
