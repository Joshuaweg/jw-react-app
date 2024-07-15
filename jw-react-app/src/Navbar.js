import React from 'react';
import logo from './logo.svg'; // Import your logo image here
import './styles.css'; // Make sure to import the CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-text-container">
        <img src={logo} alt="Analystrix Logo" className="logo" />
        <div>
          <h1 className="nav-title">Analystrix</h1>
          <p className="nav-tagline">Demystifying AI for All</p>
        </div>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Models</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
