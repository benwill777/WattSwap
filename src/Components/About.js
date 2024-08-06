import React from 'react';
import './styles/About.css';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About WattSwap</h1>
        <p>
          Welcome to WattSwap, your premier destination for EV charge-sharing. Our platform connects electric vehicle owners with a network of charge points, allowing for convenient, efficient, and eco-friendly charging experiences. At WattSwap, we believe in sustainable energy solutions and aim to make electric vehicle charging accessible to everyone.
        </p>
        <p>
          Our mission is to empower EV owners by providing a reliable and user-friendly service that maximizes the use of existing charging infrastructure. Whether you're at home, at work, or on the go, WattSwap makes it easy to find and book a charge point near you.
        </p>
      </div>
      <div className="features-section">
        <h2>Our Offerings</h2>
        <div className="features">
          <div className="feature">
            <h3>Convenient Access</h3>
            <p>Easily find and reserve charging points through our intuitive app, available 24/7.</p>
          </div>
          <div className="feature">
            <h3>Eco-Friendly</h3>
            <p>Promote sustainable energy by utilizing a shared network of charging stations.</p>
          </div>
          <div className="feature">
            <h3>Flexible Pricing</h3>
            <p>Choose from a variety of pricing plans that suit your needs, from pay-as-you-go to monthly subscriptions.</p>
          </div>
          <div className="feature">
            <h3>Community Driven</h3>
            <p>Join a growing community of EV enthusiasts and contribute to a greener future.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
