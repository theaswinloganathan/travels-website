import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img src={logoImg} alt="Royal Travels Kanchipuram" className="logo-img footer-logo-img" />
            </div>
            <p>Your trusted partner for comfortable and safe travel experiences. We provide premium car and van rentals for all your needs.</p>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#vehicles">Our Vehicles</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#booking">Booking</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to get latest travel updates and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email Address" required />
              <button type="submit" className="btn btn-primary">Join</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Royal Travels. All rights reserved.</p>
          <p>Designed with ❤️ for travelers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
