import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with us for any inquiries or special travel requests.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-box"><Phone /></div>
              <div>
                <h3>Phone</h3>
                <p>+91 93845 01016</p>
                <p>+91 44 2345 6789</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon-box"><MessageSquare /></div>
              <div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/919384501016" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">Chat Now</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box"><Mail /></div>
              <div>
                <h3>Email</h3>
                <p>info@royaltravels.com</p>
                <p>support@royaltravels.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box"><MapPin /></div>
              <div>
                <h3>Address</h3>
                <p>12/34, Mount Road, T. Nagar,<br />Chennai, Tamil Nadu 600017, India</p>
              </div>
            </div>
          </div>

          <div className="map-placeholder">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.142293761144!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625575631489!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
