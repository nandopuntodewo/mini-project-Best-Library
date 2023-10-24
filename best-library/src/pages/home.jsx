import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/welcome';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  );
};

export default LandingPage;
