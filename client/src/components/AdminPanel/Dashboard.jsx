// src/components/AdminPanel/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/manage-master-sevas">Manage Master Sevas</Link></li>
          <li><Link to="/admin/manage-special-sevas">Manage Special Sevas</Link></li>
          <li><Link to="/admin/manage-sub-sevas">Manage Sub-Sevas</Link></li>
          <li><Link to="/admin/enable-disable-sevas">Enable/Disable Sevas</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
