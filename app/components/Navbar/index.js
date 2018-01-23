import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Navbar() {
  const userPicUrl = 'ttps://images.pexels.com/photos/819848/pexels-photo-819848.jpeg?w=940&h=650&auto=compress&cs=tinysrgb';
  return (
    <header>
      <div id="top-wrapper">
        <nav className="left">
          <ul>
            <li><span>&#9776;</span></li>
            <li id="logo"><Link to="#" style={linkLogoStyle}><h3>SiteTitle</h3></Link></li>
          </ul>
        </nav>
        <nav className="right">
          <img src={userPicUrl} alt="userMob-img" className="avatar" id="user-mob-img" />
          <ul>
            <li><input type="search" id="search" placeholder="search" /></li>
            <li><Link to="#" className="link">Home</Link></li>
            <li><Link to="#" className="link">Category</Link></li>
            <li><Link to="#" className="link">Shop</Link></li>
            <li><Link to="#" className="link">Friends</Link></li>
            <li><img src={userPicUrl} alt="user-img" className="avatar" /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
const linkLogoStyle = {
  color: 'black',
  textDecoration: 'none',
};


Navbar.propTypes = {

};

export default Navbar;
