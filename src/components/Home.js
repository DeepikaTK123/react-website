import React from 'react';
import './Home.css';
import homeImage from '../assets/home_new.jpg';

const Home = () => {
  const welcomeText = "Welcome to Advanced Technologies";
  const subText = "Innovating the future with cutting-edge engineering and IT solutions.";

  return (
    <div className="home">
      <div className="home-image" style={{ backgroundImage: `url(${homeImage})` }}></div>
      <div className="home-content">
        <div className="animated-welcome">
          {welcomeText.split("").map((char, index) => (
            <span
              key={index}
              className={`animated-letter bold-text ${char === " " ? "space" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="animated-subtext">
          {subText.split("").map((char, index) => (
            <span
              key={index}
              className={`animated-letter normal-text ${char === " " ? "space" : ""}`}
              style={{ animationDelay: `${(index + welcomeText.length) * 0.05}s` }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
