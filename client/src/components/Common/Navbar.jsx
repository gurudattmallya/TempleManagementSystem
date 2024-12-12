// src/components/Common/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SevaBooking from '../Booking/SevaBooking';
import Dashboard from '../AdminPanel/Dashboard';
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <h1>Temple Management</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="SevaBooking">Booking</Link>
          <Link to="Dashboard">Admin Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
