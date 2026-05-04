import React from 'react';
import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const points = [
    "Trusted & Experienced Drivers",
    "Clean & Sanitized Vehicles",
    "On-Time Pickup Guarantee",
    "Affordable & Transparent Pricing"
  ];

  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-content">
          <span className="subtitle">ABOUT US</span>
          <h2>Reliable Travel Partner for Your Every Destination</h2>
            At Royal Travels, we pride ourselves on delivering a premium transportation experience across Tamil Nadu. 
            With years of excellence in the local travel industry, we understand the importance of safety, 
            comfort, and punctuality. Our mission is to provide seamless travel solutions 
            for families, corporates, and solo travelers alike, covering all major destinations in the state.
          <div className="about-points">
            {points.map((point, index) => (
              <div key={index} className="about-point">
                <CheckCircle className="icon" size={20} />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <a href="#booking" className="btn btn-primary">Learn More</a>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Fleet Size</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
