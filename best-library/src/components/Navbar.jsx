import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-end items-center">
          <a className="nav-link text-white font-bold" href="#">Home</a>
          <a className="nav-link text-white mx-4" href="#">Products</a>
          <a className="nav-link text-white mx-4" href="#">About</a>
          <a className="nav-link text-white mx-4" href="#">Contacts</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;