// src/components/Booking/BookingConfirmation.jsx
import React from 'react';

const BookingConfirmation = ({ bookingDetails }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Thank you for your booking, {bookingDetails.devoteeName}!</p>
      <h3>Your Seva Details:</h3>
      <ul>
        {bookingDetails.selectedSevas.map((seva, index) => (
          <li key={index}>{seva.name} - ${seva.price}</li>
        ))}
      </ul>
      <p>Total Amount: ${bookingDetails.totalAmount}</p>
      <p>Your booking has been successfully submitted. We will send you a confirmation message soon!</p>
    </div>
  );
}

export default BookingConfirmation;
