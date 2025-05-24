import React from 'react';
import Navbar from '../components/Navbar';
import { FiMapPin, FiClock, FiUser, FiDollarSign } from 'react-icons/fi';

const Dashboard = () => {
  const stats = [
    { icon: <FiMapPin />, label: 'Total Rides', value: '24' },
    { icon: <FiClock />, label: 'Active Rides', value: '2' },
    { icon: <FiDollarSign />, label: 'Total Spent', value: '$342' },
    { icon: <FiUser />, label: 'Favorite Drivers', value: '5' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between">
                <div className="text-blue-500 text-2xl">{stat.icon}</div>
                <span className="text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 cursor-pointer" onClick={() => window.location.href = '/BookRide'}>
            <h3 className="text-xl font-semibold text-white mb-4">Book a Ride</h3>
            <p className="text-gray-400">Need to go somewhere? Book a ride now and get there safely.</p>
            <button className="btn-primary mt-4">Book Now</button>
          </div>

          <div className="card p-6 cursor-pointer" onClick={() => window.location.href = '/profile'}>
            <h3 className="text-xl font-semibold text-white mb-4">View Profile</h3>
            <p className="text-gray-400">Check your profile, update preferences, and manage payment methods.</p>
            <button className="btn-primary mt-4">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;