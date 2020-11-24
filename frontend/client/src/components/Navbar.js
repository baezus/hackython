import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { render } from 'react-dom';
import figmaLogo from '../images/figmalogoScreenshot.png';

function Navbar () {

  return (
    <div>
      <nav>
      
      <img
        src={figmaLogo}
        alt=""
        className="img-fluid"/>
      
      
      <h1>Watchopolis</h1>
      <ul className = "nav-links">
        <li className="nav-link">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/user" className="nav-link">Login</Link>
        </li>
        <li className="nav-link">
          <Link to="/user/new" className="nav">Register</Link>
        </li>
      </ul>
      </nav>
    </div>  
  )
};

export default Navbar;