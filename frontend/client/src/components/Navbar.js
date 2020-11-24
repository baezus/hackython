import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar (props) {
  return (
    <nav className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
        alt=""
      />
      <h1>Watchopolis</h1>
      <ul>
        <li className="navLi">
          <Link to="/">Home</Link>
        </li>
        <li className="navLi">
          <Link to="/user">All Users</Link>
        </li>
        <li className="navLi">
          <Link to="/user/new">Add New User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;