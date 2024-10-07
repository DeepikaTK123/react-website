import React from 'react';
import './Contact.css';
import contactImage from '../assets/contact-images.jpg'; 

const Contact = () => {
  return (
    <section className="contact">
      <img src={contactImage} alt="Contact" className="contact-image" />
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Reach out to us for any queries or collaboration opportunities.</p>
        <div className="contact-details">
          <p><strong>Email:</strong> info@advancedtech.co</p>
          <p><strong>Phone:</strong> +91-9945631865</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
