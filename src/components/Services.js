import React, { useEffect } from 'react';
import './Services.css';
import servicesImage from '../assets/servicess.jpg';

const Services = () => {
  useEffect(() => {
    // Add animation classes to the service boxes with a delay
    const serviceBoxes = document.querySelectorAll('.service-box');
    serviceBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('animate-in');
        box.classList.add(getAnimationDirection(index));
      }, index * 300);
    });
  }, []);

  const getAnimationDirection = (index) => {
    // Alternate between different directions for animations
    switch (index % 4) {
      case 0:
        return 'from-left';
      case 1:
        return 'from-right';
      case 2:
        return 'from-bottom';
      case 3:
        return 'from-top';
      default:
        return '';
    }
  };

  return (
    <section className="services">
      <div className="services-image" style={{ backgroundImage: `url(${servicesImage})` }}></div>
      <h2>Our Services</h2>
      <p className="services-intro">
        At Advanced Technologies, we offer a wide range of IT and engineering services designed to help businesses innovate, scale, and optimize their operations.
      </p>
      <div className="services-columns">
        <div className="service-box">
          <h3>Python & Django Development</h3>
          <p>We offer full-stack development services using Python and Django, known for their scalability, security, and maintainability. Whether you need backend services or full web platforms, our team has the expertise to deliver.</p>
        </div>
        <div className="service-box">
          <h3>React Frontend Development</h3>
          <p>We specialize in developing modern, dynamic, and highly responsive user interfaces using React. Whether you're building a single-page application (SPA) or need to enhance an existing app, we ensure top-notch performance.</p>
        </div>
        <div className="service-box">
          <h3>Deployment & Cloud Integration</h3>
          <p>We provide comprehensive deployment support for Python/Django and React applications. Our team ensures that your applications are deployed smoothly on leading cloud platforms such as AWS, Google Cloud, and Azure.</p>
        </div>
        <div className="service-box">
          <h3>Software Training</h3>
          <p>Our training programs provide hands-on learning experiences covering Python programming and Django development, from basic concepts to advanced topics.</p>
        </div>
        <div className="service-box">
          <h3>Electrical CAD Services</h3>
          <p>We offer expertise in designing and drafting electrical schematics, wiring diagrams, and panel layouts while adhering to NFPA and IEC standards.</p>
        </div>
        <div className="service-box">
          <h3>System Integration Services</h3>
          <p>We provide high-quality system integration services for PLC, HMI, and SCADA systems. Our team also offers installation, commissioning, and training for these platforms.</p>
        </div>
        <div className="service-box">
          <h3>Technical Staffing Services</h3>
          <p>We provide engineers, software developers, designers, and technicians for various stages of your projects, from conceptualization to commissioning and maintenance.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
