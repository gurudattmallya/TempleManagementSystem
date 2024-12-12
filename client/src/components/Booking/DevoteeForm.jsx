// src/components/Booking/DevoteeForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DevoteeForm = ({ onDevoteeSubmit }) => {
  const [devotee, setDevotee] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobile: '',
    country: '',
    state: '',
    city: '',
    addressLane1: '',
    addressLane2: '',
    pincode: ''
  });
  const [existingDevotee, setExistingDevotee] = useState(null);

  useEffect(() => {
    if (devotee.mobile) {
      // Check if the mobile number already exists
      axios.get(`/api/devotees/check/${devotee.mobile}`)
        .then(response => setExistingDevotee(response.data))
        .catch(error => console.error('Error checking devotee:', error));
    }
  }, [devotee.mobile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingDevotee) {
      // If the devotee already exists, use the existing data
      onDevoteeSubmit(existingDevotee);
    } else {
      // Otherwise, submit new devotee data
      axios.post('/api/devotees', devotee)
        .then(response => onDevoteeSubmit(response.data))
        .catch(error => console.error('Error saving devotee:', error));
    }
  };

  return (
    <div>
      <h2>Devotee Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={devotee.firstName}
          onChange={(e) => setDevotee({ ...devotee, firstName: e.target.value })}
          placeholder="First Name"
        />
        <input
          type="text"
          value={devotee.middleName}
          onChange={(e) => setDevotee({ ...devotee, middleName: e.target.value })}
          placeholder="Middle Name"
        />
        <input
          type="text"
          value={devotee.lastName}
          onChange={(e) => setDevotee({ ...devotee, lastName: e.target.value })}
          placeholder="Last Name"
        />
        <input
          type="text"
          value={devotee.mobile}
          onChange={(e) => setDevotee({ ...devotee, mobile: e.target.value })}
          placeholder="Mobile Number"
        />
        <input
          type="text"
          value={devotee.country}
          onChange={(e) => setDevotee({ ...devotee, country: e.target.value })}
          placeholder="Country"
        />
        <input
          type="text"
          value={devotee.state}
          onChange={(e) => setDevotee({ ...devotee, state: e.target.value })}
          placeholder="State"
        />
        <input
          type="text"
          value={devotee.city}
          onChange={(e) => setDevotee({ ...devotee, city: e.target.value })}
          placeholder="City"
        />
        <input
          type="text"
          value={devotee.addressLane1}
          onChange={(e) => setDevotee({ ...devotee, addressLane1: e.target.value })}
          placeholder="Address Lane 1"
        />
        <input
          type="text"
          value={devotee.addressLane2}
          onChange={(e) => setDevotee({ ...devotee, addressLane2: e.target.value })}
          placeholder="Address Lane 2"
        />
        <input
          type="text"
          value={devotee.pincode}
          onChange={(e) => setDevotee({ ...devotee, pincode: e.target.value })}
          placeholder="Pincode"
        />
        <button type="submit">Submit</button>
      </form>
      {existingDevotee && (
        <p>Existing devotee found. Click submit to update details or continue booking.</p>
      )}
    </div>
  );
}

export default DevoteeForm;
