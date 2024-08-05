// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from './ItemList'; // Assuming ItemList component exists
import './Home.css'; // Add your styling here

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to WattSwap</h1>
          <p>Swap your unused items for something new. Find what you need, give what you don't!</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Why Choose WattSwap?</h2>
        <div className="features">
          <div className="feature">
            <h3>Easy to Use</h3>
            <p>Quickly list your items and find swaps that interest you.</p>
          </div>
          <div className="feature">
            <h3>Community Driven</h3>
            <p>Connect with others in your area and build a sustainable community.</p>
          </div>
          <div className="feature">
            <h3>Safe and Secure</h3>
            <p>Our platform ensures a secure and trustworthy experience.</p>
          </div>
        </div>
      </div>
      
      <div className="recent-listings">
        <h2>Recent Listings</h2>
        <ItemList />
      </div>
      
      <div className="cta-section">
        <h2>Ready to Swap?</h2>
        <Link to="/signup" className="cta-button">Join Now</Link>
      </div>
    </div>
  );
};

export default Home;
