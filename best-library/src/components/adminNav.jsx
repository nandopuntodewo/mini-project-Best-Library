import React from 'react';
import {useNavigate } from "react-router-dom";

export default function AdminNavbar() {
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
          onClick={() => handleNavigate("/admin/addbook")}
        >
          <img src="/images/logo black.png" alt="Logo" className="h-12" />
          <span className="text-gray-700 text-lg font-poppins ml-2">Admin</span>
        </div>

        <div className="flex">
          <a
            className="nav-link text-white mx-4 "
            href="#"
            style={linkStyle}
            onClick={() => handleNavigate("/admin/addbook")}
          >
            Add Books
          </a>
          <a
            className="nav-link text-white mx-4 "
            href="#"
            style={linkStyle}
            onClick={() => handleNavigate("/admin/addmember")}
          >
            Add Member
          </a>
          <a
            className="nav-link text-white mx-4 "
            href="#"
            style={linkStyle}
            onClick={() => handleNavigate("/")}
          >
            Site
          </a>
        </div>
      </div>
    </nav>
  );
};

