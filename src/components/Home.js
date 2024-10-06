import React from 'react';
import './Home.css';
import homeImage from '../assets/home-image.jpg'; // Replace with your actual image

const Home = () => {
  return (
    <section className="home">
      <img src={homeImage} alt="Home" className="home-image" />
      <div className="home-content">
        <h1>Welcome to Advanced Technologies</h1>
        <p>Innovating the future with cutting-edge engineering and IT solutions.</p>
      </div>
    </section>
  );
};

export default Home;
