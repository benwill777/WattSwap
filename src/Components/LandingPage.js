import React from 'react';
import Header from './Header';
import Footer from './Footer';
import heroImage from '../assets/hero-image.jpg';
import FeatureSection from './FeatureSection';
import TestimonialSection from './TestimonialSection.js';
import CallToAction from './CallToAction';
import './styles/LandingPage.css';

// Check for duplicate declarations here
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="hero-section"  style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Welcome to EVShare</h1>
        <p>Connecting EV owners with charging points everywhere.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;






