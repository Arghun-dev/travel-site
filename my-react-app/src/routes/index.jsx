import React from 'react';
import Hero from '../components/Hero'; // Adjust path as needed
import OurBeginning from '../components/OurBeginning'; // Adjust path as needed
import Features from '../components/Features'; // Adjust path as needed
import Testimonials from '../components/Testimonials'; // Adjust path as needed

export const Route = () => {
  return (
    <main>
      <Hero />
      <OurBeginning />
      <Features />
      <Testimonials />
    </main>
  );
};
