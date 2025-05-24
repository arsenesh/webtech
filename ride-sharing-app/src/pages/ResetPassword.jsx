import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-100 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Reset Your Password</h2>
        <form className="space-y-5">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Back to{" "}
          <a href="/login" className="text-orange-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
