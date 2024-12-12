// src/pages/BookingLanding.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookingLanding = () => {
  return (
    <div className="booking-landing">
      <h2>Welcome to Temple Seva Booking</h2>
      <p>To begin booking your sevas, please click below:</p>
      <Link to="/booking/form" className="btn">Start Booking</Link>
    </div>
  );
};

export default BookingLanding;
