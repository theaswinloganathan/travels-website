import React from 'react';
import { MapPin, Plane, Users, Heart, Briefcase, Globe } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Local Trips",
      desc: "Daily commuting or city exploration with ease.",
      icon: <MapPin size={32} />
    },
    {
      title: "Outstation Trips",
      desc: "Reliable long-distance travel for your weekends.",
      icon: <Globe size={32} />
    },
    {
      title: "Airport Pickup & Drop",
      desc: "Punctual airport transfers 24/7.",
      icon: <Plane size={32} />
    },
    {
      title: "Family Tours",
      desc: "Spacious vehicles for your loved ones.",
      icon: <Users size={32} />
    },
    {
      title: "Wedding & Functions",
      desc: "Premium fleet for your special occasions.",
      icon: <Heart size={32} />
    },
    {
      title: "Corporate Travel",
      desc: "Professional service for business meetings.",
      icon: <Briefcase size={32} />
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We provide a wide range of travel solutions tailored to your needs.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
