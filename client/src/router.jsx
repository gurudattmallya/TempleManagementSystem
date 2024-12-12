// src/router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BookingLanding from './pages/BookingLanding';
import NotFound from './pages/NotFound';
import Router from './router';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BookingLanding />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
