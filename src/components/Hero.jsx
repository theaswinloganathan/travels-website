import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImg})` }}>
      <div className="container hero-content animate-fade-in">
        <h1>Comfortable Car & Van Rentals for Every Journey</h1>
        <p>Experience safe, clean, and affordable travel with our premium fleet. Whether it's a quick city trip or a long family vacation, we've got you covered.</p>
        <div className="hero-btns">
          <a href="#booking" className="btn btn-primary">Book Now</a>
          <a href="tel:+1234567890" className="btn btn-outline-white">Call Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
