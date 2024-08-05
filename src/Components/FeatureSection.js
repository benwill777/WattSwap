import React from 'react';
import './styles/FeatureSection.css';

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2>Our Features</h2>
      <div className="features">
        <div className="feature">
          <h3>Find Charging Points</h3>
          <p>Locate nearby charging points effortlessly.</p>
        </div>
        <div className="feature">
          <h3>Host a Charger</h3>
          <p>Earn money by sharing your EV charger.</p>
        </div>
        <div className="feature">
          <h3>Easy Payments</h3>
          <p>Seamlessly handle payments and billing.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
