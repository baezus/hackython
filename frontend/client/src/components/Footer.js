import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer_container">
        <ul className="footer_list">
          <li><Link to="/about">About Us</Link></li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
}

export default Footer;