import React from 'react'
import { IoBagCheck } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  return (
    <nav className ="navbar">
        <div className ="navbar-left">
            <a href="/" className ="logo"><IoBagCheck></IoBagCheck></a>
            <a href="/" className ="logo">BlueStore</a>
        </div>
        <div className = "navbar-center">
            <ul className ="navbar-links">
                <li> <a href="/shop">Shop</a></li>
                <li><a href = "/contact">Contact Us</a></li>
            </ul>
        </div>
        <div className = "navbar-right">
            <a href = "/cart" className = "cart-icon"> <FaShoppingCart/> Cart</a>
            <a href = "/account" className ="user-icon"> <FaRegUser/> </a>
        </div>
    </nav>
  );
};

export default Navbar
