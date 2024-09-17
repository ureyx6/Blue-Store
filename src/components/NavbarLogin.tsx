import { IoBagCheck } from "react-icons/io5";
import './NavbarLogin.css'

function NavbarLogin() {
    return (
      <nav className ="navbar">
          <div className ="navbar-center">
              <a href="/" className ="logo"><IoBagCheck></IoBagCheck></a>
              <a href="/" className ="logo">BlueStore</a>
          </div>
        </nav>
    )
}

export default NavbarLogin;
    