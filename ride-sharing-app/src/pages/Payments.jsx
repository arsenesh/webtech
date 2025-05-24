import React from "react";
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Payments = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Select Payment Method</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between bg-green-100 hover:bg-green-200 text-green-800 font-medium px-4 py-3 rounded-lg transition">
              <div className="flex items-center gap-2">
                <FaMoneyBillWave className="text-2xl" />
                <span>Cash</span>
              </div>
              <span className="text-sm">Pay on Arrival</span>
            </button>

            <button className="w-full flex items-center justify-between bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-4 py-3 rounded-lg transition">
              <div className="flex items-center gap-2">
                <FaCreditCard className="text-2xl" />
                <span>Card</span>
              </div>
              <span className="text-sm">Visa / MasterCard</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
