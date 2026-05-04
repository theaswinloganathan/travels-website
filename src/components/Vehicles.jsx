import React from 'react';
import './Vehicles.css';
import sedanImg from '../assets/sedan.png';
import suvImg from '../assets/suv.png';
import tempoImg from '../assets/tempo.png';

const Vehicles = () => {
  const vehicles = [
    {
      name: "Sedan Car",
      capacity: "4 Seater",
      price: "Starting from $15/hr",
      image: sedanImg,
      features: ["AC", "Music System", "Professional Driver"]
    },
    {
      name: "SUV Car",
      capacity: "6/7 Seater",
      price: "Starting from $25/hr",
      image: suvImg,
      features: ["Extra Legroom", "Roof Rack", "All-Terrain"]
    },
    {
      name: "Tempo Traveller",
      capacity: "12/14 Seater",
      price: "Starting from $40/hr",
      image: tempoImg,
      features: ["High Roof", "Reclining Seats", "LED TV"]
    },
    {
      name: "Van",
      capacity: "8/10 Seater",
      price: "Starting from $35/hr",
      image: "https://images.unsplash.com/photo-1549416878-b9ca35c2d47a?auto=format&fit=crop&q=80&w=800",
      features: ["Sliding Door", "Large Boot", "Comfort Seats"]
    }
  ];

  return (
    <section id="vehicles" className="vehicles">
      <div className="container">
        <div className="section-title">
          <h2>Our Vehicles</h2>
          <p>Choose from our wide range of well-maintained vehicles for your comfort.</p>
        </div>
        <div className="vehicles-grid">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="vehicle-card">
              <div className="vehicle-img">
                <img src={vehicle.image} alt={vehicle.name} />
              </div>
              <div className="vehicle-info">
                <h3>{vehicle.name}</h3>
                <span className="capacity">{vehicle.capacity}</span>
                <p className="price">{vehicle.price}</p>
                <ul className="vehicle-features">
                  {vehicle.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <a href="#booking" className="btn btn-primary btn-block">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
