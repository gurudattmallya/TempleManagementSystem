// src/components/Booking/SevaBooking.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SevaBooking = ({ devoteeId, onBookingSubmit }) => {
  const [masterSevas, setMasterSevas] = useState([]);
  const [specialSevas, setSpecialSevas] = useState([]);
  const [selectedSubSevas, setSelectedSubSevas] = useState([]);

  useEffect(() => {
    // Fetch all Master Sevas and Special Sevas
    axios.get('/api/master-sevas')
      .then(response => setMasterSevas(response.data))
      .catch(error => console.error('Error fetching Master Sevas:', error));

    axios.get('/api/special-sevas')
      .then(response => setSpecialSevas(response.data))
      .catch(error => console.error('Error fetching Special Sevas:', error));
  }, []);

  const handleSevaChange = (sevaId, isChecked, price) => {
    setSelectedSubSevas(prev => {
      if (isChecked) {
        return [...prev, { sevaId, price }];
      } else {
        return prev.filter(subSeva => subSeva.sevaId !== sevaId);
      }
    });
  };

  const handleSubmit = () => {
    onBookingSubmit(devoteeId, selectedSubSevas);
  };

  return (
    <div>
      <h2>Select Sevas</h2>
      <div>
        <h3>Master Sevas</h3>
        {masterSevas.map((seva) => (
          <div key={seva.id}>
            <h4>{seva.name}</h4>
            {seva.subSevas.map((subSeva) => (
              <div key={subSeva.id}>
                <input
                  type="checkbox"
                  onChange={(e) => handleSevaChange(subSeva.id, e.target.checked, subSeva.price)}
                />
                {subSeva.name} - ${subSeva.price}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        <h3>Special Sevas</h3>
        {specialSevas.map((seva) => (
          <div key={seva.id}>
            <h4>{seva.name}</h4>
            {seva.subSevas.map((subSeva) => (
              <div key={subSeva.id}>
                <input
                  type="checkbox"
                  onChange={(e) => handleSevaChange(subSeva.id, e.target.checked, subSeva.price)}
                />
                {subSeva.name} - ${subSeva.price}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button onClick={handleSubmit}>Confirm Booking</button>
    </div>
  );
}

export default SevaBooking;
