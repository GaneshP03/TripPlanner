import React from 'react';
import '../styles/Navbar.css'
 import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TravelBliss</div>
      <div className="nav-buttons">
        <Link to='/login'><button className="nav-button">Login</button></Link>
        <Link to='/register'><button className="nav-button signup">Signup</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;