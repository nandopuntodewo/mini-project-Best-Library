import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/welcome';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-scree">
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  );
};

export default LandingPage;
