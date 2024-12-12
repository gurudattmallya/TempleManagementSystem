// src/components/AdminPanel/ManageSubSevas.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSubSevas = () => {
  const [subSevas, setSubSevas] = useState([]);
  const [newSubSeva, setNewSubSeva] = useState({
    parentSevaId: '',
    name: '',
    price: '',
  });

  useEffect(() => {
    // Fetch sub-sevas from the server
    axios.get('/api/sub-sevas')
      .then(response => setSubSevas(response.data))
      .catch(error => console.error('Error fetching Sub-Sevas:', error));
  }, []);

  const handleAddSubSeva = () => {
    axios.post('/api/sub-sevas', newSubSeva)
      .then(response => setSubSevas([...subSevas, response.data]))
      .catch(error => console.error('Error adding Sub-Seva:', error));
  }

  return (
    <div>
      <h2>Manage Sub-Sevas</h2>
      <input
        type="text"
        value={newSubSeva.name}
        onChange={e => setNewSubSeva({ ...newSubSeva, name: e.target.value })}
        placeholder="Enter Sub-Seva Name"
      />
      <input
        type="number"
        value={newSubSeva.price}
        onChange={e => setNewSubSeva({ ...newSubSeva, price: e.target.value })}
        placeholder="Enter Price"
      />
      <button onClick={handleAddSubSeva}>Add Sub-Seva</button>

      <ul>
        {subSevas.map(seva => (
          <li key={seva.id}>
            {seva.name} - {seva.price} - {seva.status ? 'Enabled' : 'Disabled'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageSubSevas;
