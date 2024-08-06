import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">WattSwap</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/team">Team</Link>
        <Link to="/testimonials">Testimonials</Link>
      </nav>
    </header>
  );
};

export default Header;
