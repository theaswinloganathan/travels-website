import React, { useState, useEffect } from 'react';
import {
  Car, Users, Clock, ShieldCheck, MapPin, Phone, Mail,
  MessageCircle, CheckCircle2, ChevronRight, Plane, Home,
  Briefcase, Star, Navigation, ArrowRight, Menu, X,
  Gem, Zap
} from 'lucide-react';

const vehicleList = [
  { id: 1, name: 'White Sedan Car', capacity: '4 Seater', bestFor: 'Swift Dzire / Etios', price: '₹12', tag: 'Sedan',
    image: '/images/vehicles/white_swift_dzire.png' },
  { id: 2, name: 'White SUV Car', capacity: '6/7 Seater', bestFor: 'Innova Crysta / Ertiga', price: '₹18', tag: 'Luxury SUV',
    image: '/images/vehicles/white_innova_crysta.png' },
  { id: 3, name: 'White Van', capacity: '8/10 Seater', bestFor: 'Force Traveller / Tour', price: '₹22', tag: 'Comfort Van',
    image: '/images/vehicles/white_force_traveller.png' },
  { id: 4, name: 'White Tempo Traveller', capacity: '12/14 Seater', bestFor: 'Outstation / Large Groups', price: '₹28', tag: 'Tempo Traveller',
    image: '/images/vehicles/white_force_traveller.png' },
];

const WA_LINK = 'https://wa.me/919384501016?text=Hi%20I%20want%20to%20book%20a%20car%20or%20van';
const PHONE   = 'tel:+919384501016';

export default function TravelsWebsite() {
  const galleryItems = [
    { 
      img: '/images/gallery/kanchipuram_temple.jpg', 
      label: 'Kanchipuram Temple Travel',
      alt: 'Kailasanathar Temple architecture in Kanchipuram'
    },
    { 
      img: '/images/gallery/chennai_airport.jpg', 
      label: 'Chennai Airport Pickup',
      alt: 'Travel car at Chennai International Airport'
    },
    { 
      img: '/images/gallery/pondicherry.jpg', 
      label: 'Pondicherry Trip',
      alt: 'French colony and beaches of Pondicherry'
    },
    { 
      img: '/images/gallery/kodaikanal.jpg', 
      label: 'Kodaikanal Hill Trip',
      alt: 'Mist-covered hills of Kodaikanal'
    },
    { 
      img: '/images/gallery/Ooty.jpg', 
      label: 'Ooty Family Trip',
      alt: 'Tea gardens and mountain views of Ooty'
    },
    { 
      img: '/images/gallery/rameshwaram.webp', 
      label: 'Rameswaram Temple Tour',
      alt: 'The iconic Pamban Bridge road in Rameswaram'
    },
    { 
      img: '/images/gallery/madurai_temple.jpg', 
      label: 'Madurai Temple Tour',
      alt: 'Madurai Meenakshi Temple Tower View'
    },
    { 
      img: '/images/vehicles/white_force_traveller.png', 
      label: 'Tempo Traveller Group Trip',
      alt: 'White premium Tempo Traveller for group travel'
    }
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllRoutes, setShowAllRoutes] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const close = (e) => {
      if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-toggle'))
        setIsMenuOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [isMenuOpen]);

  const goTo = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const routes = [
    { from: 'Kanchipuram', to: 'Chennai Airport', type: 'Local Pickup/Drop' },
    { from: 'Kanchipuram', to: 'Pondicherry', type: 'ECR Coastal Road' },
    { from: 'Kanchipuram', to: 'Tirupati', type: 'Temple Trip' },
    { from: 'Kanchipuram', to: 'Bangalore', type: 'Inter-State' },
    { from: 'Kanchipuram', to: 'Kodaikanal', type: 'Hill Station Tour' },
    { from: 'Kanchipuram', to: 'Ooty', type: 'Hill Station Tour' },
    { from: 'Kanchipuram', to: 'Rameswaram', type: 'Spiritual Tour' },
    { from: 'Kanchipuram', to: 'Madurai', type: 'Heritage Tour' },
    { from: 'Kanchipuram', to: 'Mahabalipuram', type: 'Coastal Heritage' },
    { from: 'Kanchipuram', to: 'Yercaud', type: 'Hill Station' },
    { from: 'Kanchipuram', to: 'Trichy', type: 'Central TN' },
    { from: 'Kanchipuram', to: 'Thanjavur', type: 'Heritage Tour' },
  ];

  const features = [
    { title: 'Tamil Nadu Experienced Drivers', icon: <Zap />, desc: 'Local experts with deep knowledge of TN roads.' },
    { title: 'Hill Station Driving Experience', icon: <ShieldCheck />, desc: 'Safe & skilled drivers for Ooty, Kodaikanal, etc.' },
    { title: 'Doorstep Pickup & Drop', icon: <MapPin />, desc: 'Convenient pickup from your home or office.' },
    { title: 'Ladies Safety Assurance', icon: <ShieldCheck />, desc: 'Verified drivers & tracking for safe female travel.' },
    { title: 'On-Time Pickup Guarantee', icon: <Clock />, desc: 'Punctuality is our core promise.' },
    { title: 'Clean & Safe Family Travel', icon: <ShieldCheck />, desc: 'Fully sanitized premium white vehicles.' },
    { title: 'Group Travel Experts', icon: <Users />, desc: 'Perfectly managed tours for large families & groups.' },
    { title: 'Long Distance Expertise', icon: <Navigation />, desc: 'Comfortable & safe driving for 500+ km trips.' },
    { title: 'Affordable Packages', icon: <Navigation />, desc: 'Best rates for all Tamil Nadu tours.' },
    { title: '24/7 Support', icon: <Phone />, desc: 'Round the clock assistance for your journey.' },
  ];

  return (
    <div className="main-wrapper">
      {/* Floating WhatsApp */}
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="WhatsApp">
        <MessageCircle size={28} />
      </a>

      {/* Navbar */}
      <nav className={`navbar${isScrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="logo" onClick={() => goTo('home')}>ROYAL<span>TRAVELS</span></div>
          <div className={`nav-links${isMenuOpen ? ' mobile-active' : ''}`}>
            {['home','about','vehicles','packages','services','gallery','routes','contact'].map(id => (
              <a key={id} href={`#${id}`}
                onClick={e => { e.preventDefault(); goTo(id); }}
                className={['packages', 'services', 'gallery'].includes(id) ? 'hide-mobile-nav' : ''}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-whatsapp hide-mobile">
              <MessageCircle size={17} /> WhatsApp
            </a>
            <button className="mobile-toggle" onClick={() => setIsMenuOpen(o => !o)} aria-label="Menu">
              {isMenuOpen ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="premium-badge"><Gem size={14} /> All Over Tamil Nadu Travel Service</div>
              <h1>Book Clean &amp; Comfortable Cars and Vans Across Tamil Nadu</h1>
              <p>Book clean and comfortable cars, vans, and tempo travellers for local trips, outstation trips, hill stations, temple tours, airport pickup, and family tours across Tamil Nadu.</p>
              <div className="hero-trust-badges">
                <div className="trust-item"><CheckCircle2 size={15} /> 500+ Happy Customers</div>
                <div className="trust-item"><CheckCircle2 size={15} /> 24/7 Support</div>
                <div className="trust-item"><CheckCircle2 size={15} /> Verified Drivers</div>
              </div>
              <div className="hero-actions">
                <button className="btn btn-sky" onClick={() => goTo('vehicles')}>
                  Book Your Ride <ArrowRight size={17} />
                </button>
                <a href={PHONE} className="btn btn-outline-hero"><Phone size={17} /> Call Now</a>
              </div>
            </div>

            {/* Contact Card */}
            <div className="hero-contact-card">
              <div className="contact-card-header">
                <h3>Contact Us to Book Your Ride</h3>
                <p>Call or WhatsApp us directly for quick booking confirmation.</p>
              </div>
              <div className="contact-cta-btns">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="contact-btn-wa">
                  <MessageCircle size={22} /> WhatsApp Now
                </a>
                <a href={PHONE} className="contact-btn-call">
                  <Phone size={22} /> Call Now
                </a>
              </div>
              <div className="contact-info-rows">
                <div className="contact-info-row">
                  <div className="contact-info-icon"><Phone size={18} /></div>
                  <div><span className="contact-info-label">Phone</span><span className="contact-info-value">+91 93845 01016</span></div>
                </div>
                <div className="contact-info-row">
                  <div className="contact-info-icon"><Clock size={18} /></div>
                  <div><span className="contact-info-label">Available</span><span className="contact-info-value">24/7 Support</span></div>
                </div>
                <div className="contact-info-row">
                  <div className="contact-info-icon"><Car size={18} /></div>
                  <div><span className="contact-info-label">Services</span><span className="contact-info-value">Car, Van, Outstation, Airport Pickup</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section id="about" className="fade-in">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Experience Premium Travel</h2>
          </div>
          <div className="features-grid">
            {features.slice(0, showAllFeatures ? features.length : 10).map((f, i) => (
              <div key={i} className={`feature-card-new card-lift scroll-reveal ${!showAllFeatures && i >= 4 ? 'mobile-hidden' : ''}`}>
                <div className="feature-icon-new">{f.icon}</div>
                <h4>{f.title}</h4><p>{f.desc}</p>
              </div>
            ))}
          </div>
          {!showAllFeatures && (
            <div className="view-more-container mobile-only">
              <button className="btn btn-outline w-100" onClick={() => setShowAllFeatures(true)}>
                View More <ChevronRight size={17} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Vehicles */}
      <section id="vehicles" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Fleet</span>
            <h2 className="section-title">Premium White Vehicles in Kanchipuram</h2>
          </div>
          <div className="vehicles-grid">
            {vehicleList.map(v => (
              <div key={v.id} className="vehicle-card-premium">
                <div className="v-img-wrapper">
                  <img src={v.image} alt={v.name} loading="lazy" decoding="async"
                    onError={e => { e.target.onerror = null; e.target.src = 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
                  <div className="v-tag">{v.tag}</div>
                </div>
                <div className="v-content">
                  <h3>{v.name}</h3>
                  <div className="v-specs">
                    <span><Users size={15} /> {v.capacity}</span>
                    <span><Briefcase size={15} /> {v.bestFor}</span>
                  </div>
                  <div className="v-footer">
                    <div className="v-price"><span>Starting from</span><h4>{v.price} /km</h4></div>
                    <button className="btn btn-sky btn-sm" onClick={() => goTo('home')}>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist Packages Section */}
      <section id="packages" className="fade-in hide-mobile">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Special Tours</span>
            <h2 className="section-title">Tamil Nadu Tourist Packages</h2>
          </div>
          <div className="packages-grid">
            {[
              { title: 'Hill Station Trips', img: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800', places: ['Kodaikanal', 'Ooty', 'Yercaud'] },
              { title: 'Temple Tours', img: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800', places: ['Madurai', 'Rameswaram', 'Thanjavur', 'Kanchipuram'] },
              { title: 'Family & Group Tours', img: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=800', places: ['Pondicherry', 'Mahabalipuram', 'Kodaikanal'] },
              { title: 'Airport Pickup & Drop', img: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800', places: ['Chennai', 'Coimbatore', 'Madurai Airports'] },
              { title: 'Weekend Trips', img: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800', places: ['Pondicherry', 'Yercaud', 'Kodaikanal'] },
            ].map((p, idx) => (
              <div key={idx} className="package-card card-lift scroll-reveal">
                <div className="p-img"><img src={p.img} alt={p.title} /></div>
                <div className="p-content">
                  <h3>{p.title}</h3>
                  <div className="p-places">
                    {p.places.map(place => <span key={place} className="p-place-tag">{place}</span>)}
                  </div>
                  <div className="p-footer">
                    <button className="btn btn-sky btn-sm w-100" onClick={() => goTo('home')}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section id="routes">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Destinations</span>
            <h2 className="section-title">Most Popular Routes</h2>
          </div>
          <div className="routes-grid-new">
            {routes.slice(0, showAllRoutes ? routes.length : 12).map((r, i) => (
              <div key={i} className={`route-card-new card-lift scroll-reveal ${!showAllRoutes && i >= 4 ? 'mobile-hidden' : ''}`} onClick={() => goTo('home')}>
                <div className="route-dot"></div>
                <div className="route-details"><h4>{r.from} → {r.to}</h4><p>{r.type}</p></div>
                <ArrowRight className="route-arrow" size={17} />
              </div>
            ))}
          </div>
          
          {!showAllRoutes && (
            <div className="view-more-container mobile-only" style={{ marginTop: '1.5rem' }}>
              <button className="btn btn-outline w-100" onClick={() => setShowAllRoutes(true)}>
                View More Routes <ChevronRight size={17} />
              </button>
            </div>
          )}

          <div className="pickup-areas scroll-reveal">
            <h4>Major Pickup Areas:</h4>
            <div className="area-tags">
              {['Kanchipuram', 'Sriperumbudur', 'Walajabad', 'Chengalpattu', 'Oragadam', 'Uthiramerur', 'Chennai Airport'].map(area => (
                <span key={area} className="area-tag"><MapPin size={14} /> {area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="hide-mobile" style={{ background: 'var(--navy)', color: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle" style={{ color: 'var(--gold)' }}>Services</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Trusted Tamil Nadu Travel Service</h2>
          </div>
          <div className="services-grid-premium">
            {[
              { title: 'All TN Outstation Trips', icon: <Navigation />, desc: 'Safe travel across all major Tamil Nadu cities.' },
              { title: 'Hill Station Travel', icon: <Home />, desc: 'Expert driving on winding mountain roads like Ooty & Kodaikanal.' },
              { title: 'Temple Tour Packages', icon: <Star />, desc: 'Spiritual journeys to Madurai, Rameswaram, and Thanjavur.' },
              { title: 'Family & School Tours', icon: <Users />, desc: 'Comfortable vans for group and educational trips.' },
              { title: 'Wedding & Events', icon: <Star />, desc: 'Premium white cars for special functions.' },
              { title: 'Airport Pickup & Drop', icon: <Plane />, desc: 'Reliable transfers for Chennai & other TN airports.' },
              { title: 'Corporate Travel', icon: <Briefcase />, desc: 'Professional service for business clients.' },
              { title: 'Safe & Comfortable', icon: <ShieldCheck />, desc: 'Well-maintained fleet for peace of mind.' },
            ].map((s, i) => (
              <div key={i} className="service-card-premium scroll-reveal">
                <div className="s-icon">{s.icon}</div>
                <h3>{s.title}</h3><p>{s.desc}</p>
                <div className="s-link" onClick={() => goTo('home')}>Book Now <ChevronRight size={15} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="hide-mobile">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Reviews</span>
            <h2 className="section-title">What Customers Say</h2>
          </div>
          <div className="testimonials-grid">
            {[
              { name: 'Rajesh Kumar', review: 'Excellent service! The car was super clean and the driver was very professional. Highly recommended for family trips.' },
              { name: 'Anita Sharma', review: 'Booked a van for my wedding guests. Everything was on time and the vehicles were premium. Great experience!' },
              { name: 'Suresh Raina', review: 'Best rates in Chennai for outstation travel. Very reliable and safe. 5 stars for Royal Travels!' },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{[...Array(5)].map((_, j) => <Star key={j} size={15} fill="var(--gold)" color="var(--gold)" />)}</div>
                <p>"{t.review}"</p>
                <h4>— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="fade-in hide-mobile">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Gallery</span>
            <h2 className="section-title">Real Travel Moments in Tamil Nadu</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="gallery-item scroll-reveal">
                <img src={item.img} alt={item.alt} loading="lazy" 
                  onError={(e) => { 
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800';
                  }} />
                <div className="gallery-overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">ROYAL<span>TRAVELS</span></div>
              <p>Your trusted partner for premium car and van rentals. Quality service since 2010.</p>
              <div className="social-footer">
                <a href={PHONE}><Phone size={19} /></a>
                <a href="mailto:info@royaltravels.com"><Mail size={19} /></a>
                <a href={WA_LINK} target="_blank" rel="noreferrer"><MessageCircle size={19} /></a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Why Choose Us</a></li>
                <li><a href="#vehicles">Our Vehicles</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact Us</h4>
              <ul className="contact-list">
                <li><Phone size={15} className="text-gold" /> +91 93845 01016</li>
                <li><Mail size={15} className="text-gold" /> info@royaltravels.com</li>
                <li><MapPin size={15} className="text-gold" /> Chennai, Tamil Nadu, India</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">&copy; {new Date().getFullYear()} Royal Travels. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
