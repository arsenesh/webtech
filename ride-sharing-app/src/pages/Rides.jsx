import React from 'react';
import RideTable from '../components/RideTable';
import Navbar from '../components/Navbar';

const Rides = () => (
  <>
    <Navbar />
    <h2 className="text-xl font-bold p-4">Rides</h2>
    <RideTable />
  </>
);

export default Rides;