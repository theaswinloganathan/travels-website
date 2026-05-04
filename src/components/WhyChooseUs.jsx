import React from 'react';
import { Shield, Clock, Award, Headphones, Star, DollarSign } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { title: "Experienced Drivers", icon: <Award /> },
    { title: "Clean & Comfortable", icon: <Star /> },
    { title: "Affordable Price", icon: <DollarSign /> },
    { title: "24/7 Support", icon: <Headphones /> },
    { title: "On-Time Pickup", icon: <Clock /> },
    { title: "Safe Travel", icon: <Shield /> }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>We go the extra mile to ensure your journey is perfect in every way.</p>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item">
              <div className="reason-icon">{reason.icon}</div>
              <h4>{reason.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
