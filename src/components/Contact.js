// Contact.js
import React from 'react';
import './Contact.css';
import contactImage from '../assets/contact-image.jpg';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-image" style={{ backgroundImage: `url(${contactImage})` }}></div>
      <h2>Contact Us</h2>
      <div className="contact-details-box">
        <div className="contact-details">
          <p><strong>Location:</strong> Bangalore</p>
          <p><strong>Email:</strong> info@advancedtech.co.in</p>
          <p><strong>Phone:</strong> +91-8309075191</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
