import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FiMapPin, FiNavigation, FiDollarSign } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const RWF_PER_KM = 1500;

const BookRide = () => {
  const [pickup, setPickup] = useState({ lat: -1.9577, lng: 30.1127 });
  const [drop, setDrop] = useState({ lat: -1.95, lng: 30.10 });
  const [pickupText, setPickupText] = useState('');
  const [dropText, setDropText] = useState('');
  const [fare, setFare] = useState('');

  const geocode = async (address) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyB0ohi0GzuJIHUCkVFk4sW8vdqn_n5VAJ0`
      );
      const data = await response.json();
      if (data.status === 'OK') {
        return data.results[0].geometry.location;
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
    return null;
  };

  const handlePickupGeocode = async () => {
    const location = await geocode(pickupText);
    if (location) setPickup(location);
  };

  const handleDropGeocode = async () => {
    const location = await geocode(dropText);
    if (location) setDrop(location);
  };

  const calculateDistance = (loc1, loc2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(loc2.lat - loc1.lat);
    const dLon = toRad(loc2.lng - loc1.lng);
    const lat1 = toRad(loc1.lat);
    const lat2 = toRad(loc2.lat);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleCheckPrice = () => {
    const distance = calculateDistance(pickup, drop);
    const calculatedFare = Math.round(distance * RWF_PER_KM);
    setFare(calculatedFare.toString());
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Book a Ride</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Pickup Location</label>
                <div className="flex gap-2">
                  <div className="input-field flex-1 flex items-center">
                    <FiMapPin className="text-gray-400 ml-3" />
                    <input
                      type="text"
                      className="w-full bg-transparent p-3 focus:outline-none text-white"
                      placeholder="Enter pickup location"
                      value={pickupText}
                      onChange={(e) => setPickupText(e.target.value)}
                    />
                  </div>
                  <button onClick={handlePickupGeocode} className="btn-primary">
                    <FiNavigation className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Drop Location</label>
                <div className="flex gap-2">
                  <div className="input-field flex-1 flex items-center">
                    <FiMapPin className="text-gray-400 ml-3" />
                    <input
                      type="text"
                      className="w-full bg-transparent p-3 focus:outline-none text-white"
                      placeholder="Enter drop location"
                      value={dropText}
                      onChange={(e) => setDropText(e.target.value)}
                    />
                  </div>
                  <button onClick={handleDropGeocode} className="btn-primary">
                    <FiNavigation className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Estimated Fare (RWF)</label>
                <div className="flex gap-2">
                  <div className="input-field flex-1 flex items-center">
                    <FiDollarSign className="text-gray-400 ml-3" />
                    <input
                      type="text"
                      className="w-full bg-transparent p-3 focus:outline-none text-white"
                      placeholder="Fare will show here"
                      value={fare}
                      readOnly
                    />
                  </div>
                  <button onClick={handleCheckPrice} className="btn-primary">
                    Check Price
                  </button>
                </div>
              </div>

              <button className="btn-primary w-full mt-6">
                Confirm Booking
              </button>
            </div>
          </div>

          <div className="card p-6">
            <div className="map-container h-[400px]">
              <LoadScript googleMapsApiKey="AIzaSyB0ohi0GzuJIHUCkVFk4sW8vdqn_n5VAJ0">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={pickup}
                  zoom={13}
                  options={{
                    styles: [
                      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                    ]
                  }}
                >
                  <Marker position={pickup} label="P" />
                  <Marker position={drop} label="D" />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRide;