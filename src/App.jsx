import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TwoFactor from './pages/TwoFactor';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Rides from './pages/Rides';
import RideHistory from './pages/RideHistory';
import Bookings from './pages/Bookings';
import Drivers from './pages/Drivers';
import Payments from './pages/Payments';
import Profile from './pages/Profile';
import BookRide from './pages/BookRide';
import ProtectedRoute from './utils/auth';
import { AuthProvider } from './context/AuthContext';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/2fa" element={<TwoFactor />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/rides" element={<ProtectedRoute><RideHistory /></ProtectedRoute>} />
        <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
        <Route path="/drivers" element={<ProtectedRoute><Drivers /></ProtectedRoute>} />
        <Route path="/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/BookRide" element={<ProtectedRoute><BookRide /></ProtectedRoute>} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;