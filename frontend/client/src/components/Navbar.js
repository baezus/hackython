import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { render } from 'react-dom';
import figmaLogo from '../images/figmalogoScreenshot.png'



function Navbar (props) {
  return (
    <nav className="navbar">
      <img
        src={figmaLogo}
        alt=""
        className="img-fluid"
      />
      <h1>Watchopolis</h1>
      <ul className = 'nav-links'>
        <li className="navLi">
          <Link to="/">Home</Link>
        </li>
        <li className="navLi">
          <Link to="/user">Login</Link>
        </li>
        <li className="navLi">
          <Link to="/user/new">Register</Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;