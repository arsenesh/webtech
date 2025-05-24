import React from 'react';
import Navbar from '../components/Navbar';
import mapImage from '../assets/image2.png';
import profileImage from '../assets/image3.png';

const Dashboard = () => (
  <>
    <Navbar />
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>

      <div className="flex flex-wrap justify-center gap-8">
        
        {/* Book Ride Card */}
        <div
          className="bg-white w-[200px] p-5 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer"
          onClick={() => window.location.href = '/BookRide'}
        >
          <img
            src={mapImage}
            alt="Map"
            className="w-24 h-24 mx-auto mb-4 object-contain"
          />
          <h3 className="text-lg font-bold text-blue-700 text-center">Book Ride</h3>
          <p className="text-sm text-gray-600 text-center">Plan your next journey</p>
        </div>

        {/* Profile Card */}
        <div
          className="bg-white w-[200px] p-5 rounded-2xl border border-green-200 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer"
          onClick={() => window.location.href = '/profile'}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 mx-auto mb-4 object-contain"
          />
          <h3 className="text-lg font-bold text-green-700 text-center">Profile</h3>
          <p className="text-sm text-gray-600 text-center">View and edit your profile</p>
        </div>

      </div>
    </div>
  </>
);

export default Dashboard;
