import React from 'react';

const Footer = () => {
  const linkStyle = {
    color: "#ffff", 
    fontFamily: "DM Sans",
    textDecoration: "none",
  };
  return (
    <div className="bg-[#284B63] py-8 text-center"> 
      <div className="container mx-auto px-4 flex flex-col items-center">
        <img src="/images/logo white.png" alt="Best Library Logo" width="90" height="90" className="mb-2 mt-10" />
        <p style={linkStyle} className='font-semibold'>© 2023 Best Library, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
