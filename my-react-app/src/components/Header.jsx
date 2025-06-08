import React from 'react';
import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header>
      <img src="assets/images/icons/clear-view-escapes.svg" alt="Clear View Escapes" />
      <Link to="/#get-in-touch">Get in Touch</Link> {/* Assuming Get in Touch is a section on the homepage */}
      <nav>
        <ul>
          <li><Link to="/our-beginning">Our Beginning</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
