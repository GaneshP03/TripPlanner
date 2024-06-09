import React from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div>
      <header>
      <Navbar />
        <div className="hero">
          <h1>Explore the World with Us</h1>
          <p>Your adventure starts here. Discover beautiful destinations and unique experiences.</p>
          <img 
            src="https://png.pngtree.com/background/20210711/original/pngtree-travel-together-white-minimalist-banner-picture-image_1095592.jpg" 
            alt="Hero" 
          />
          <div className="a">
            <a href="#destinations" className="cta">Discover More</a>
          </div>
        </div>
      </header>
      <section id="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          <div className="destination">
            <img 
              src="https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg" 
              alt="Paris, France" 
            />
            <h3>Paris, France</h3>
          </div>
          <div className="destination">
            <img 
              src="https://image.urlaubspiraten.de/720/image/upload/v1603282722/mediavault_images/ihjatwhtozn7ljfgtad7.jpg" 
              alt="Bali, Indonesia" 
            />
            <h3>Bali, Indonesia</h3>
          </div>
          <div className="destination">
            <img 
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/aa/b1/79/caption.jpg?w=1200&h=-1&s=1" 
              alt="New York, USA" 
            />
            <h3>New York, USA</h3>
          </div>
          <div className="destination">
            <img 
              src="https://outpostmagazine.com/wp-content/uploads/2020/07/tokyo-38585313-L-Okutama-3.jpg" 
              alt="Tokyo, Japan" 
            />
            <h3>Tokyo, Japan</h3>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Travel Bliss. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
