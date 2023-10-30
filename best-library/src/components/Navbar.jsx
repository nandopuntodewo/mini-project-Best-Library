import React from 'react';
import {useNavigate } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    color: "#818181",
    fontFamily: "poppins",
    textDecoration: "none",
  };

  const navigate = useNavigate();
  const handleNavigate = (to) => {
    navigate(to);
  };

  const logoStyle = {
    marginRight: "auto",
    marginLeft: "10px",
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container-fluid px-4 py-2 flex items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          style={logoStyle}
          onClick={() => handleNavigate("/")}
        >
          <img src="images/logo black.png" alt="Logo" className="h-12" />
        </div>

        <div className="flex">
          <a
            className="nav-link text-white mx-4 "
            href="#"
            style={linkStyle}
            onClick={() => handleNavigate("/bookcategory")}
          >
            Category
          </a>
          <a
            className="nav-link text-white mx-4 "
            href="#"
            style={linkStyle}
            onClick={() => handleNavigate("/booklist")}
          >
            Books
          </a>
          <a
            className="nav-link text-white mx-4 "
            href="#"
            style={linkStyle}
            onClick={() => handleNavigate("/loans")}
          >
            Loans
          </a>
          <a
            className="nav-link text-white mx-4 "
            href="#"
            style={linkStyle}
            onClick={() => handleNavigate("/chatbot")}
          >
            Chatbot
          </a>
        </div>
      </div>
    </nav>
  );
};

