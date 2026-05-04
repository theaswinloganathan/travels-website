import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    vehicle: 'Sedan',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="booking">
      <div className="container">
        <div className="booking-wrapper">
          <div className="booking-info">
            <h2>Book Your Ride</h2>
            <p>Fill out the form and our team will get back to you within 15 minutes to confirm your booking.</p>
            <div className="contact-small">
              <p><strong>For Instant Booking:</strong></p>
              <a href="tel:+1234567890" className="phone-link">+1 (234) 567-890</a>
            </div>
          </div>
          
          <div className="booking-form-container">
            {submitted ? (
              <div className="success-message">
                <h3>Success!</h3>
                <p>Your booking request has been received. We will contact you soon.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>New Booking</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" required placeholder="John Doe" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" required placeholder="+1 234 567 890" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Pickup Location</label>
                    <input type="text" name="pickup" required placeholder="Street, City" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Drop Location</label>
                    <input type="text" name="drop" required placeholder="Street, City" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Travel Date</label>
                    <input type="date" name="date" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Vehicle Type</label>
                    <select name="vehicle" onChange={handleChange}>
                      <option value="Sedan">Sedan Car (4 Seater)</option>
                      <option value="SUV">SUV Car (6/7 Seater)</option>
                      <option value="Tempo">Tempo Traveller (12/14 Seater)</option>
                      <option value="Van">Van (8/10 Seater)</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea name="message" rows="3" placeholder="Any special requirements..." onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit Booking</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
