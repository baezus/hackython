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