import { IoBagCheck } from "react-icons/io5";
import './NavbarLogin.css'
import { Outlet } from "react-router-dom";

function NavbarLogin() {
    return (
        <>
      <nav className ="navbar-login">
          <div className ="navbar-center">
              <a href="/" className ="logo"><IoBagCheck></IoBagCheck></a>
              <a href="/" className ="logo">BlueStore</a>
          </div>
        </nav>
        <Outlet/>
        </>
    )
}

export default NavbarLogin;
    