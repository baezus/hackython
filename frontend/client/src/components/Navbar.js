import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar (props) {
  return (
    <nav>
      <ul className="navUl">
        <li className = "navLi">
          <Link to="/">Home</Link>
        </li>
        <li className = "navLi">
          <Link to="/user">User Page</Link>
        </li>
        <li className="navLi">
          <Link to="/user/new">Add New User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;