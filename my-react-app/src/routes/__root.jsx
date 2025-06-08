import React from 'react';
import { Outlet } from '@tanstack/react-router';
import Header from '../components/Header'; // Adjust path as needed
import Footer from '../components/Footer'; // Adjust path as needed

export const Route = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
