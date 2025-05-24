import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px'
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

  // Haversine formula to calculate distance between two lat/lng points in km
  const calculateDistance = (loc1, loc2) => {
    const toRad = (value) => (value * Math.PI) / 180;

    const R = 6371; // Earth radius in km
    const dLat = toRad(loc2.lat - loc1.lat);
    const dLon = toRad(loc2.lng - loc1.lng);

    const lat1 = toRad(loc1.lat);
    const lat2 = toRad(loc2.lat);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // distance in km
  };

  const handleCheckPrice = () => {
    const distance = calculateDistance(pickup, drop);
    const calculatedFare = Math.round(distance * RWF_PER_KM);
    setFare(calculatedFare.toString());
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Book a Ride</h2>

        <label className="block text-sm font-medium mb-1">Pickup Location</label>
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            placeholder="Enter pickup location"
            value={pickupText}
            onChange={(e) => setPickupText(e.target.value)}
          />
          <button onClick={handlePickupGeocode} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Go
          </button>
        </div>

        <label className="block text-sm font-medium mb-1">Drop Location</label>
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            className="w-full p-3 border rounded"
            placeholder="Enter drop location"
            value={dropText}
            onChange={(e) => setDropText(e.target.value)}
          />
          <button onClick={handleDropGeocode} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
            Go
          </button>
        </div>

        <label className="block text-sm font-medium mb-1">Estimated Fare (RWF)</label>
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            className="w-full p-3 border rounded"
            placeholder="Fare will show here"
            value={fare}
            readOnly
          />
          <button onClick={handleCheckPrice} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200">
            Check Price
          </button>
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded mt-4 transition duration-200">
          Confirm Booking
        </button>
      </div>

      <div className="w-full md:w-1/2 rounded-lg shadow-md overflow-hidden">
        <LoadScript googleMapsApiKey="AIzaSyB0ohi0GzuJIHUCkVFk4sW8vdqn_n5VAJ0">
          <GoogleMap mapContainerStyle={containerStyle} center={pickup} zoom={13}>
            <Marker position={pickup} label="P" />
            <Marker position={drop} label="D" />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default BookRide;
