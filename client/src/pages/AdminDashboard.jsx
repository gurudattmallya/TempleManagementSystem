// src/pages/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="admin-actions">
        <Link to="/admin/manage/master-sevas">Manage Master Sevas</Link>
        <Link to="/admin/manage/special-sevas">Manage Special Sevas</Link>
        <Link to="/admin/manage/sub-sevas">Manage Sub Sevas</Link>
        <Link to="/admin/enable-disable">Enable/Disable Sevas</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
