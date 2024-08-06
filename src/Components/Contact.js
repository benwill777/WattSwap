import React from 'react';
import './styles/Contact.css';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
        <div className="contact-details">
          <p><strong>Email:</strong> support@company.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 EV Lane, Green City, Earth</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
