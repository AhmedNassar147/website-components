import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Navbar() {
  return (
    <header>
      <div id="top-wrapper">
        <div id="logo"><Link to="#" style={linkLogoStyle}>Logo</Link></div>
        <nav>
          <span>&#9776;</span>
          <ul>
            <li><Link to="#" style={LinkStyle}>Home</Link></li>
            <li><Link to="#" style={LinkStyle}>Category</Link></li>
            <li><Link to="#" style={LinkStyle}>Shop</Link></li>
            <li><Link to="#" style={LinkStyle}>Friends</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
const LinkStyle = {
  display: 'block',
  width: '90px',
  fontSize: '20px',
  color: 'white',
  textDecoration: 'none',
};

const linkLogoStyle = {
  color: 'black',
  textDecoration: 'none',
};


Navbar.propTypes = {

};

export default Navbar;
