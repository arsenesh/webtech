import React from 'react';

const ProtectedRoute = ({ children }) => {
  return children;  // Always allow access, no matter what
};

export default ProtectedRoute;
