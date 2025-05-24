import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FiCalendar, FiMapPin, FiDollarSign, FiClock } from 'react-icons/fi';

const RideHistory = () => {
  const [filter, setFilter] = useState('all');
  
  // Dummy data for ride history
  const rides = [
    {
      id: 1,
      date: '2025-05-24',
      pickup: 'Airport Terminal 1',
      dropoff: 'Downtown Hotel',
      status: 'completed',
      fare: '$25.00',
      driver: 'John Doe',
      time: '14:30'
    },
    {
      id: 2,
      date: '2025-05-23',
      pickup: 'Shopping Mall',
      dropoff: 'Residential Area',
      status: 'cancelled',
      fare: '$15.00',
      driver: 'Jane Smith',
      time: '10:15'
    },
    {
      id: 3,
      date: '2025-05-22',
      pickup: 'Office Complex',
      dropoff: 'Restaurant District',
      status: 'completed',
      fare: '$18.50',
      driver: 'Mike Johnson',
      time: '19:45'
    }
  ];

  const filteredRides = filter === 'all' ? rides : rides.filter(ride => ride.status === filter);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Ride History</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`btn-secondary ${filter === 'all' ? 'bg-blue-600' : ''}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`btn-secondary ${filter === 'completed' ? 'bg-blue-600' : ''}`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('cancelled')}
              className={`btn-secondary ${filter === 'cancelled' ? 'bg-blue-600' : ''}`}
            >
              Cancelled
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredRides.map(ride => (
            <div key={ride.id} className="card p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FiCalendar className="text-gray-400" />
                    <span className="text-gray-300">{ride.date}</span>
                    <FiClock className="text-gray-400 ml-4" />
                    <span className="text-gray-300">{ride.time}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <FiMapPin className="text-green-500 mt-1" />
                      <div>
                        <p className="text-gray-400">Pickup</p>
                        <p className="text-white">{ride.pickup}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <FiMapPin className="text-red-500 mt-1" />
                      <div>
                        <p className="text-gray-400">Dropoff</p>
                        <p className="text-white">{ride.dropoff}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-2">
                    <FiDollarSign className="text-gray-400" />
                    <span className="text-xl font-bold text-white">{ride.fare}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    ride.status === 'completed' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                  }`}>
                    {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RideHistory;