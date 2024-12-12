// src/components/AdminPanel/ManageMasterSevas.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageMasterSevas = () => {
  const [masterSevas, setMasterSevas] = useState([]);
  const [newSevaName, setNewSevaName] = useState('');

  useEffect(() => {
    // Fetch master sevas from the server
    axios.get('/api/master-sevas')
      .then(response => setMasterSevas(response.data))
      .catch(error => console.error('Error fetching Master Sevas:', error));
  }, []);

  const handleAddSeva = () => {
    axios.post('/api/master-sevas', { name: newSevaName })
      .then(response => setMasterSevas([...masterSevas, response.data]))
      .catch(error => console.error('Error adding Master Seva:', error));
  }

  return (
    <div>
      <h2>Manage Master Sevas</h2>
      <input
        type="text"
        value={newSevaName}
        onChange={e => setNewSevaName(e.target.value)}
        placeholder="Enter Master Seva Name"
      />
      <button onClick={handleAddSeva}>Add Master Seva</button>

      <ul>
        {masterSevas.map(seva => (
          <li key={seva.id}>
            {seva.name} - {seva.status ? 'Enabled' : 'Disabled'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageMasterSevas;
