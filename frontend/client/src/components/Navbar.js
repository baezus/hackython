import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (props) {
  return (
    <nav>
      <ul>
        <li className = "navLi">
          <Link to="/">Home</Link>
        </li>
        <li className = "navLi">
          <Link to="/users">All Users</Link>
        </li>
        <li className="navLi">
          <Link to="/users/new">Add New Haiku</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;