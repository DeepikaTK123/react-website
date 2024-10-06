import React from 'react';
import './Services.css';
import servicesImage from '../assets/services-image.jpg'; // Replace with your actual image

const Services = () => {
  return (
    <section className="services">
      {/* Header Section */}
      <div className="services-header">
        <img src={servicesImage} alt="Services" className="services-image" />
        <h2>Our Services</h2>
        <p>At Advanced Technologies, we offer a wide range of IT and engineering services designed to help businesses innovate, scale, and optimize their operations.</p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-section">
          <h3>Python & Django Development</h3>
          <p>We offer full-stack development services using Python and Django, known for their scalability, security, and maintainability. Whether you need backend services or full web platforms, our team has the expertise to deliver.</p>
        </div>

        <div className="service-section">
          <h3>React Frontend Development</h3>
          <p>We specialize in developing modern, dynamic, and highly responsive user interfaces using React. Whether you're building a single-page application (SPA) or need to enhance an existing app, we ensure top-notch performance.</p>
        </div>

        <div className="service-section">
          <h3>Deployment & Cloud Integration</h3>
          <p>We provide comprehensive deployment support for Python/Django and React applications. Our team ensures that your applications are deployed smoothly on leading cloud platforms such as AWS, Google Cloud, and Azure.</p>
        </div>

        <div className="service-section">
          <h3>Software Training</h3>
          <p>Our training programs provide hands-on learning experiences covering Python programming and Django development, from basic concepts to advanced topics.</p>
        </div>

        <div className="service-section">
          <h3>Electrical CAD Services</h3>
          <p>We offer expertise in designing and drafting electrical schematics, wiring diagrams, and panel layouts while adhering to NFPA and IEC standards.</p>
        </div>

        <div className="service-section">
          <h3>System Integration Services</h3>
          <p>We provide high-quality system integration services for PLC, HMI, and SCADA systems. Our team also offers installation, commissioning, and training for these platforms.</p>
        </div>

        <div className="service-section">
          <h3>Technical Staffing Services</h3>
          <p>We provide engineers, Software developers, designers, and technicians for various stages of your projects, from conceptualization to commissioning and maintenance.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
