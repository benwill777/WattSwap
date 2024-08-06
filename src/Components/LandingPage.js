import React from 'react';
import Header from './Header';
import Footer from './Footer';
import heroImage from '../assets/hero-image.jpg';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css';

// Check for duplicate declarations here
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="hero-section"  style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Welcome to WattSwap!</h1>
        <p>Connecting EV owners with charging points everywhere.</p>
        <Link to="/services" className="cta-button">Get Started</Link>;
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;






