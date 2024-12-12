// src/components/AdminPanel/EnableDisableSevas.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnableDisableSevas = () => {
  const [sevas, setSevas] = useState([]);

  useEffect(() => {
    // Fetch all sevas (master, special, sub-sevas) from the server
    axios.get('/api/sevas')
      .then(response => setSevas(response.data))
      .catch(error => console.error('Error fetching Sevas:', error));
  }, []);

  const handleToggleStatus = (id, currentStatus) => {
    const updatedStatus = currentStatus === 'enabled' ? 'disabled' : 'enabled';
    axios.patch(`/api/sevas/${id}`, { status: updatedStatus })
      .then(response => {
        setSevas(sevas.map(seva => seva.id === id ? { ...seva, status: updatedStatus } : seva));
      })
      .catch(error => console.error('Error toggling status:', error));
  }

  return (
    <div>
      <h2>Enable/Disable Sevas</h2>
      <ul>
        {sevas.map(seva => (
          <li key={seva.id}>
            {seva.name} - {seva.status ? 'Enabled' : 'Disabled'}
            <button onClick={() => handleToggleStatus(seva.id, seva.status ? 'enabled' : 'disabled')}>
              {seva.status ? 'Disable' : 'Enable'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnableDisableSevas;
