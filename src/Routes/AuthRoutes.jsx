import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = () => {
  const user = localStorage.getItem('UserID');
  return !user ? <Outlet /> : <Navigate to="/home" />;
};

export default AuthRoutes;
