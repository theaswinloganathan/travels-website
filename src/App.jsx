import React, { useState, useEffect } from 'react';
import {
  Car, Users, Clock, ShieldCheck, MapPin, Phone, Mail,
  MessageCircle, CheckCircle2, ChevronRight, ChevronLeft, Plane, Home,
  Briefcase, Star, Navigation, ArrowRight, Menu, X,
  Gem, Zap, Heart
} from 'lucide-react';

const vehicleList = [
  { id: 1, name: 'White Sedan Car', capacity: '4 Seater', bestFor: 'Swift Dzire / Etios', price: '₹12', tag: 'Sedan',
    features: ['AC', 'GPS', '4-Seater', 'Comfortable'],
    image: '/images/vehicles/white_swift_dzire.png' },
  { id: 2, name: 'White SUV Car', capacity: '6/7 Seater', bestFor: 'Innova Crysta / Ertiga', price: '₹18', tag: 'Luxury SUV',
    features: ['AC', 'Luxury', 'GPS', '7-Seater'],
    image: '/images/vehicles/white_innova_crysta.png' },
  { id: 3, name: 'White Van', capacity: '8/10 Seater', bestFor: 'Force Traveller / Tour', price: '₹22', tag: 'Comfort Van',
    features: ['AC', 'GPS', '10-Seater', 'Group'],
    image: '/images/vehicles/white_force_traveller.png' },
  { id: 4, name: 'White Tempo Traveller', capacity: '12/14 Seater', bestFor: 'Outstation / Large Groups', price: '₹28', tag: 'Tempo Traveller',
    features: ['AC', 'GPS', '14-Seater', 'Outstation'],
    image: '/images/vehicles/white_force_traveller.png' },
];

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

const packagesList = [
  {
    id: 1,
    title: 'Hill Station Trips',
    img: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    englishDesc: 'Enjoy peaceful hill stations with cool weather, nature views, waterfalls, and comfortable travel.',
    tamilDesc: 'குளிர்ந்த காலநிலை, இயற்கை காட்சிகள், நீர்வீழ்ச்சி மற்றும் சுகமான பயணத்துடன் மலைப்பகுதிகளை அனுபவிக்கலாம்.',
    places: ['Kodaikanal', 'Ooty', 'Yercaud'],
    bestFor: 'Family, Couples, Friends',
    duration: '2–3 Days'
  },
  {
    id: 2,
    title: 'Temple Tours',
    img: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800',
    englishDesc: 'Visit famous Tamil Nadu temples with safe and comfortable travel arrangements.',
    tamilDesc: 'தமிழ்நாட்டின் பிரசித்தி பெற்ற கோவில்களுக்கு பாதுகாப்பான மற்றும் சுகமான பயண வசதியுடன் செல்லலாம்.',
    places: ['Madurai', 'Rameswaram', 'Thanjavur', 'Kanchipuram'],
    bestFor: 'Family, Devotional Trips',
    duration: '1–3 Days'
  },
  {
    id: 3,
    title: 'Family & Group Tours',
    img: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=800',
    englishDesc: 'Perfect travel packages for family vacations, group trips, and weekend enjoyment.',
    tamilDesc: 'குடும்ப சுற்றுலா, குழு பயணம் மற்றும் வார இறுதி மகிழ்ச்சிக்கான சிறந்த பயண திட்டங்கள்.',
    places: ['Pondicherry', 'Mahabalipuram', 'Kodaikanal'],
    bestFor: 'Family, Friends, Groups',
    duration: '1–3 Days'
  },
  {
    id: 4,
    title: 'Airport Pickup & Drop',
    img: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
    englishDesc: 'Reliable airport pickup and drop service with clean vehicles and professional drivers.',
    tamilDesc: 'சுத்தமான வாகனங்கள் மற்றும் அனுபவமுள்ள டிரைவர்களுடன் நம்பகமான விமான நிலைய பிக் அப் மற்றும் டிராப் சேவை.',
    places: ['Chennai', 'Coimbatore', 'Madurai Airports'],
    bestFor: 'Business, Family, Individual Travel',
    duration: 'Based on location'
  },
  {
    id: 5,
    title: 'Weekend Trips',
    img: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    englishDesc: 'Short and refreshing weekend trips with comfortable travel and planned routes.',
    tamilDesc: 'சுகமான பயணம் மற்றும் திட்டமிட்ட பாதைகளுடன் குறுகிய மற்றும் புத்துணர்ச்சி தரும் வார இறுதி சுற்றுலா.',
    places: ['Pondicherry', 'Yercaud', 'Kodaikanal'],
    bestFor: 'Friends, Couples, Family',
    duration: '1–2 Days'
  }
];

const WA_LINK = 'https://wa.me/919384501016?text=Hi%20I%20want%20to%20book%20a%20car%20or%20van';
const PHONE   = 'tel:+919384501016';

const ChargingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <path d="M12 7l-2 4h4l-2 4" fill="currentColor" />
  </svg>
);

const WashroomIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="5" r="2.5" />
    <path d="M8 8c-1.5 0-3 1.2-3 2.8v5.2h1.5v5h3v-5H11V10.8C11 9.2 9.5 8 8 8z" />
    <circle cx="16" cy="5" r="2.5" />
    <path d="M16 8c-1.5 0-3 1.2-3 2.8v4.2h1.5v6h3v-6H19V10.8C19 9.2 17.5 8 16 8z" />
  </svg>
);

const PillowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    <path d="M3 13h18a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
  </svg>
);

const WifiIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.1a6 6 0 0 1 6.94 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
  </svg>
);

const SkylineSVG = () => (
  <svg className="skyline-svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 120 L40 100 L45 100 L45 88 L50 88 L50 76 L55 76 L55 64 L60 64 L60 44 L68 44 L68 64 L73 64 L73 76 L78 76 L78 88 L83 88 L83 100 L88 100 L88 120 Z" />
    <line x1="45" y1="100" x2="83" y2="100" />
    <line x1="50" y1="88" x2="78" y2="88" />
    <line x1="55" y1="76" x2="73" y2="76" />
    
    <rect x="110" y="55" width="35" height="65" />
    <line x1="118" y1="55" x2="118" y2="120" />
    <line x1="127" y1="55" x2="127" y2="120" />
    <line x1="136" y1="55" x2="136" y2="120" />

    <path d="M170 120 L170 80 Q170 58 190 58 Q210 58 210 80 L210 120 Z" />
    <line x1="190" y1="58" x2="190" y2="40" />
    <line x1="185" y1="48" x2="195" y2="48" />

    <path d="M230 120 L240 85 L245 85 L250 55 L255 55 L260 25 L268 25 L273 55 L278 55 L283 85 L288 85 L298 120 Z" />
    <line x1="240" y1="85" x2="288" y2="85" />
    <line x1="250" y1="55" x2="278" y2="55" />
    <line x1="260" y1="25" x2="268" y2="25" />
    <circle cx="264" cy="18" r="2.5" />

    <path d="M330 120 L330 90 L370 90 L370 120 Z" />
    <path d="M335 90 Q350 72 365 90 Z" />
    <line x1="350" y1="72" x2="350" y2="58" />

    <rect x="400" y="35" width="45" height="85" />
    <rect x="410" y="45" width="8" height="8" />
    <rect x="427" y="45" width="8" height="8" />
    <rect x="410" y="60" width="8" height="8" />
    <rect x="427" y="60" width="8" height="8" />
    <rect x="410" y="75" width="8" height="8" />
    <rect x="427" y="75" width="8" height="8" />
    <rect x="410" y="90" width="8" height="8" />
    <rect x="427" y="90" width="8" height="8" />

    <path d="M470 120 L475 95 L480 95 L485 70 L490 70 L495 45 L500 45 L505 20 L513 20 L518 45 L523 45 L528 70 L533 70 L538 95 L543 95 L548 120 Z" />
    <line x1="475" y1="95" x2="543" y2="95" />
    <line x1="485" y1="70" x2="533" y2="70" />
    <line x1="495" y1="45" x2="523" y2="45" />
    <circle cx="509" cy="12" r="3" />

    <path d="M585 120 L593 120 L593 35 L589 5 L585 35 Z" />
    <line x1="589" y1="5" x2="589" y2="120" />

    <path d="M620 120 L620 100 L625 100 L625 88 L630 88 L630 76 L635 76 L635 64 L640 64 L640 44 L648 44 L648 64 L653 64 L653 76 L658 76 L658 88 L663 88 L663 100 L668 100 L668 120 Z" />
    <line x1="625" y1="100" x2="663" y2="100" />
    <line x1="630" y1="88" x2="658" y2="88" />
    <line x1="635" y1="76" x2="653" y2="76" />

    <path d="M700 120 L700 85 L745 85 L745 120 Z" />
    <path d="M705 85 Q722.5 60 740 85 Z" />
    <line x1="708" y1="85" x2="708" y2="120" />
    <line x1="722.5" y1="85" x2="722.5" y2="120" />
    <line x1="737" y1="85" x2="737" y2="120" />

    <path d="M770 120 L780 85 L785 85 L790 55 L795 55 L800 25 L808 25 L813 55 L818 55 L823 85 L828 85 L838 120 Z" />
    <line x1="780" y1="85" x2="828" y2="85" />
    <line x1="790" y1="55" x2="818" y2="55" />
    <line x1="800" y1="25" x2="808" y2="25" />
    <circle cx="804" cy="18" r="2.5" />

    <rect x="870" y="65" width="40" height="55" />
    <line x1="880" y1="65" x2="880" y2="120" />
    <line x1="890" y1="65" x2="890" y2="120" />
    <line x1="900" y1="65" x2="900" y2="120" />

    <path d="M935 120 L935 70 L950 40 L965 70 L965 120 Z" />
    <line x1="950" y1="40" x2="950" y2="15" />
    <line x1="945" y1="25" x2="955" y2="25" />

    <path d="M990 120 L995 95 L1000 95 L1005 70 L1010 70 L1015 45 L1020 45 L1025 20 L1033 20 L1038 45 L1043 45 L1048 70 L1053 70 L1058 95 L1063 95 L1068 120 Z" />
    <line x1="995" y1="95" x2="1063" y2="95" />
    <line x1="1005" y1="70" x2="1053" y2="70" />
    <line x1="1015" y1="45" x2="1043" y2="45" />
    <circle cx="1029" cy="12" r="3" />

    <rect x="1100" y="75" width="30" height="45" />
    <path d="M1145 120 L1150 100 L1154 100 L1154 88 L1158 88 L1158 76 L1162 76 L1162 64 L1166 64 L1166 44 L1174 44 L1174 64 L1178 64 L1178 76 L1182 76 L1182 88 L1186 88 L1186 100 L1190 100 L1190 120 Z" />
  </svg>
);

export default function TravelsWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllRoutes, setShowAllRoutes] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [whyChooseUsVisible, setWhyChooseUsVisible] = useState(() => typeof window !== 'undefined' && !window.IntersectionObserver);

  // Amenities list
  const amenities = [
    { title: "Charging Point", desc: "USB & power charging points available for your devices.", icon: <ChargingIcon /> },
    { title: "Clean Washroom", desc: "Hygienic and well-maintained washrooms for your comfort.", icon: <WashroomIcon /> },
    { title: "Pillow & Blanket", desc: "Soft pillow and clean blankets for a relaxed journey.", icon: <PillowIcon /> },
    { title: "WiFi", desc: "High-speed WiFi to keep you connected throughout your journey.", icon: <WifiIcon /> }
  ];

  // Carousel states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [visibleCards, setVisibleCards] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const amenitiesCount = amenities.length;
  const maxIndex = amenitiesCount - visibleCards;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1100) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const targetMax = maxIndex >= 0 ? maxIndex : 0;
      if (prev - 1 < 0) return targetMax;
      return prev - 1;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const targetMax = maxIndex >= 0 ? maxIndex : 0;
      if (prev + 1 > targetMax) return 0;
      return prev + 1;
    });
  };

  useEffect(() => {
    const targetMax = maxIndex >= 0 ? maxIndex : 0;
    if (targetMax <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + direction;
        if (nextIndex > targetMax) {
          setDirection(-1);
          return targetMax - 1 >= 0 ? targetMax - 1 : 0;
        } else if (nextIndex < 0) {
          setDirection(1);
          return 1 <= targetMax ? 1 : 0;
        }
        return nextIndex;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [maxIndex, direction]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onResize(); // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyChooseUsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById('about');
    if (el) observer.observe(el);

    return () => observer.disconnect();
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

  // Performance optimized gallery items
  const activeGalleryItems = isMobile && !showAllGallery 
    ? galleryItems.slice(0, 4) 
    : galleryItems;

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
                className={['packages', 'services'].includes(id) ? 'hide-mobile-nav' : ''}
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
        <div className="hero-bg-wrapper">
          <img 
            src="/images/hero/hero_tn_road.webp" 
            alt="Tamil Nadu Road" 
            fetchpriority="high"
            className="hero-bg-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/hero/hero_tn_road.png';
            }}
          />
          <div className="hero-overlay-gradient"></div>
        </div>
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
      <section id="about" className="why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Experience Premium Travel</h2>
          </div>
        </div>

        {/* Full-width premium amenities showcase container */}
        <div className="amenities-showcase-wrapper">
          <div className="container amenities-container">
            <div className="amenities-left">
              <h3 className="amenities-title">
                Our<br />Premium<br /><span className="highlight-yellow">Amenities</span>
              </h3>
              <div className="vertical-divider"></div>
            </div>

            <div className="amenities-right">
              <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous amenity">
                <ChevronLeft size={20} />
              </button>

              <div 
                className="carousel-viewport"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                >
                  {amenities.map((amenity, index) => {
                    const active = index >= currentIndex && index < currentIndex + visibleCards;
                    return (
                      <div 
                        key={index} 
                        className={`amenity-card-wrapper ${active ? 'active' : ''}`}
                        style={{ width: `${100 / visibleCards}%` }}
                      >
                        <div className="amenity-card">
                          <div className="amenity-icon-container">
                            {amenity.icon}
                          </div>
                          <h4 className="amenity-card-title">{amenity.title}</h4>
                          <p className="amenity-card-desc">{amenity.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next amenity">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Skyline & Road Animation at the bottom */}
          <div className="skyline-container">
            <SkylineSVG />
          </div>
          <div className="road-container">
            <div className="road-lines"></div>
          </div>
          <img 
            src="/images/vehicles/white_tempo_cutout.png" 
            alt="White Tempo Traveller" 
            className="tempo-vehicle" 
          />
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
                  <img src={v.image.replace('.png', '.webp')} alt={v.name} loading="lazy" decoding="async"
                    onError={e => { e.target.onerror = null; e.target.src = v.image; }} />
                  <div className="v-tag">{v.tag}</div>
                </div>
                <div className="v-content">
                  <h3>{v.name}</h3>
                  <div className="v-feature-tags">
                    {v.features.map(f => <span key={f} className="v-feature-tag">{f}</span>)}
                  </div>
                  <div className="v-specs">
                    <span><Users size={15} /> {v.capacity}</span>
                    <span><Briefcase size={15} /> {v.bestFor}</span>
                  </div>
                  <div className="v-footer">
                    <div className="v-price"><span>Starting from</span><h4>{v.price} /km</h4></div>
                    <button className="btn-book-premium" onClick={() => {
                      const msg = `Hi Royal Travels, I want to book a ${v.name} (${v.capacity}). Please provide more details.`;
                      window.open(`https://wa.me/919384501016?text=${encodeURIComponent(msg)}`, '_blank');
                    }}>Book Now ✦</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist Packages Section */}
      <section id="packages" className="fade-in">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Special Tours</span>
            <h2 className="section-title">Tamil Nadu Tourist Packages</h2>
          </div>
          <div className="packages-grid">
            {packagesList.map((p) => (
              <div key={p.id} className="package-card card-lift scroll-reveal">
                <div className="p-img"><img src={p.img} alt={p.title} loading="lazy" decoding="async" /></div>
                <div className="p-content">
                  <div className="p-details-top">
                    <h3>{p.title}</h3>
                    <div className="p-places">
                      {p.places.map(place => <span key={place} className="p-place-tag">{place}</span>)}
                    </div>
                  </div>
                  <div className="p-footer">
                    <button className="btn btn-sky btn-sm w-100" onClick={() => setSelectedPackage(p)}>View Details</button>
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
              { name: 'Rajesh Kumar', initials: 'RK', role: 'Family Tour Customer', review: 'Excellent service! The car was super clean and the driver was very professional. Highly recommended for family trips.' },
              { name: 'Anita Sharma', initials: 'AS', role: 'Wedding Tour Client', review: 'Booked a van for my wedding guests. Everything was on time and the vehicles were premium. Great experience!' },
              { name: 'Suresh Raina', initials: 'SR', role: 'Business Traveller', review: 'Best rates in Chennai for outstation travel. Very reliable and safe. 5 stars for Royal Travels!' },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{[...Array(5)].map((_, j) => <Star key={j} size={15} fill="var(--gold)" color="var(--gold)" />)}</div>
                <p>"{t.review}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <span className="t-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="fade-in">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Gallery</span>
            <h2 className="section-title">Real Travel Moments in Tamil Nadu</h2>
          </div>
          <div className="gallery-grid">
            {activeGalleryItems.map((item, idx) => (
              <div key={idx} className="gallery-item scroll-reveal gallery-fade-in">
                <img 
                  src={item.img.replace('.jpg', '.webp').replace('.png', '.webp')} 
                  alt={item.alt} 
                  loading="lazy" 
                  decoding="async"
                  onError={(e) => { 
                    e.target.onerror = null;
                    e.target.src = item.img;
                  }} />
                <div className="gallery-overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="view-more-container mobile-only" style={{ marginTop: '2rem' }}>
            <button className="btn btn-outline w-100" onClick={() => setShowAllGallery(!showAllGallery)}>
              {showAllGallery ? 'Show Less' : 'View More Gallery'}
            </button>
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
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-container">
              <p className="copyright-text">© 2026 Royal Travels. All rights reserved.</p>
              <p className="thank-you-text">
                Thank you for choosing Royal Travels <Heart size={14} className="gold-heart" fill="var(--gold)" color="var(--gold)" />
              </p>
            </div>
          </div>
        </div>
      </footer>

      {selectedPackage && (
        <div className="package-modal-overlay" onClick={() => setSelectedPackage(null)}>
          <div className="package-modal-content" onClick={e => e.stopPropagation()}>
            <button className="package-modal-close" onClick={() => setSelectedPackage(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className="package-modal-img">
              <img src={selectedPackage.img} alt={selectedPackage.title} />
              <div className="package-modal-img-overlay"></div>
            </div>
            <div className="package-modal-info">
              <h2>{selectedPackage.title}</h2>
              <div className="package-modal-lang-section">
                <div className="lang-box">
                  <span className="lang-label">English Description</span>
                  <p>{selectedPackage.englishDesc}</p>
                </div>
                <div className="lang-box tamil">
                  <span className="lang-label">தமிழ் விளக்கம்</span>
                  <p>{selectedPackage.tamilDesc}</p>
                </div>
              </div>
              <div className="package-modal-details-grid">
                <div className="detail-item">
                  <strong>Places Covered:</strong>
                  <p>{selectedPackage.places.join(', ')}</p>
                </div>
                <div className="detail-item">
                  <strong>Best For:</strong>
                  <p>{selectedPackage.bestFor}</p>
                </div>
                <div className="detail-item">
                  <strong>Duration:</strong>
                  <p>{selectedPackage.duration}</p>
                </div>
              </div>
              <div className="package-modal-actions">
                <button className="btn btn-whatsapp w-100" onClick={() => {
                  const msg = `Hi Royal Travels, I want to book the "${selectedPackage.title}" package.\n- Places: ${selectedPackage.places.join(', ')}\n- Duration: ${selectedPackage.duration}\n\nPlease share availability and quote.`;
                  window.open(`https://wa.me/919384501016?text=${encodeURIComponent(msg)}`, '_blank');
                }}>
                  <MessageCircle size={18} /> Book Now via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
