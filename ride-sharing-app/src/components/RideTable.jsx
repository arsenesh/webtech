import React, { useState } from 'react';

const dummyData = [
  { id: 1, rider: 'John Doe', driver: 'Alice', status: 'Completed' },
  { id: 2, rider: 'Jane Doe', driver: 'Bob', status: 'Cancelled' },
  { id: 3, rider: 'Sam Smith', driver: 'Charlie', status: 'Pending' },
  { id: 4, rider: 'Max Steel', driver: 'Diana', status: 'Completed' },
];

const RideTable = () => {
  const [search, setSearch] = useState('');
  const filteredData = dummyData.filter(
    (ride) =>
      ride.rider.toLowerCase().includes(search.toLowerCase()) ||
      ride.driver.toLowerCase().includes(search.toLowerCase()) ||
      ride.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-2 border w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border p-2">ID</th>
            <th className="border p-2">Rider</th>
            <th className="border p-2">Driver</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((ride) => (
            <tr key={ride.id} className="hover:bg-gray-100">
              <td className="border p-2">{ride.id}</td>
              <td className="border p-2">{ride.rider}</td>
              <td className="border p-2">{ride.driver}</td>
              <td className="border p-2">{ride.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RideTable;