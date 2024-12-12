// src/components/AdminPanel/ManageSpecialSevas.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSpecialSevas = () => {
  const [specialSevas, setSpecialSevas] = useState([]);
  const [newSeva, setNewSeva] = useState({
    name: '',
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    // Fetch special sevas from the server
    axios.get('/api/special-sevas')
      .then(response => setSpecialSevas(response.data))
      .catch(error => console.error('Error fetching Special Sevas:', error));
  }, []);

  const handleAddSeva = () => {
    axios.post('/api/special-sevas', newSeva)
      .then(response => setSpecialSevas([...specialSevas, response.data]))
      .catch(error => console.error('Error adding Special Seva:', error));
  }

  return (
    <div>
      <h2>Manage Special Sevas</h2>
      <input
        type="text"
        value={newSeva.name}
        onChange={e => setNewSeva({ ...newSeva, name: e.target.value })}
        placeholder="Enter Special Seva Name"
      />
      <input
        type="date"
        value={newSeva.startDate}
        onChange={e => setNewSeva({ ...newSeva, startDate: e.target.value })}
      />
      <input
        type="date"
        value={newSeva.endDate}
        onChange={e => setNewSeva({ ...newSeva, endDate: e.target.value })}
      />
      <button onClick={handleAddSeva}>Add Special Seva</button>

      <ul>
        {specialSevas.map(seva => (
          <li key={seva.id}>
            {seva.name} ({seva.startDate} - {seva.endDate}) - {seva.status ? 'Enabled' : 'Disabled'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageSpecialSevas;
