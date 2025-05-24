import React from 'react';

const TwoFactor = () => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
      <form>
        <input type="text" placeholder="Enter code" className="block mb-2 p-2 border" />
        <button type="submit" className="bg-green-500 text-white p-2">Verify</button>
      </form>
    </div>
  );
};

export default TwoFactor;