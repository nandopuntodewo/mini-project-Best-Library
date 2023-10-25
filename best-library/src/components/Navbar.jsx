import React from 'react';

const Navbar = () => {
  const linkStyle = {
    color: "#818181",
    fontFamily: "Inter",
    textDecoration: "none",
  };

  const logoStyle = {
    marginRight: "auto",
    marginLeft: "10px",
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container-fluid px-4 py-2 flex items-center">
        {/* Logo */}
        <div className="flex items-center" style={logoStyle}>
          <img src="images/logo black.png" alt="Logo" className="h-12" />
        </div>

        <div className="flex">
          <a className="nav-link text-white mx-4" href="#" style={linkStyle}>Category</a>
          <a className="nav-link text-white mx-4" href="#" style={linkStyle}>Books</a>
          <a className="nav-link text-white mx-4" href="#" style={linkStyle}>Loans</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
