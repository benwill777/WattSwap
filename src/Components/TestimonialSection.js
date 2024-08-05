import React from 'react';
import './styles/TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2>What Our Users Say</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>"WattSwap made finding a charger so easy. It's a lifesaver!"</p>
          <p>- Alex</p>
        </div>
        <div className="testimonial">
          <p>"Hosting my charger on WattSwap has been a great way to earn extra money."</p>
          <p>- Jamie</p>
        </div>
        <div className="testimonial">
          <p>"The app's payment system is straightforward and hassle-free."</p>
          <p>- EV Oddly</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
