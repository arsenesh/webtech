import React, { useState } from "react";
import axios from "axios";
import { FaUserAlt, FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/api/signup", {
        name,
        role,
        email,
        password,
      });

      if (res.data.success) {
        alert("Registration successful! You can now log in.");
        navigate("/login");
      } else {
        alert("Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);

      if (error.response) {
        console.error("Backend response data:", error.response.data);
        console.error("Backend status code:", error.response.status);
        alert(error.response.data.error || "Signup failed: " + error.response.status);
      } else if (error.request) {
        console.error("No response received from backend:", error.request);
        alert("No response from server. Please ensure the backend is running.");
      } else {
        console.error("Error in setting up request:", error.message);
        alert("Error setting up request: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Create Your Account</h2>
        <form className="space-y-5" onSubmit={handleSignup}>
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              <option value="Rider">Rider</option>
              <option value="Driver">Driver</option>
            </select>
          </div>

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition duration-150">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition duration-150">
            <input
              type="email"
              placeholder="Email or Phone"
              className="w-full focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition duration-150">
            <input
              type="password"
              placeholder="Password"
              className="w-full focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition duration-150">
            <input
              type="text"
              placeholder="Country/Region"
              className="w-full focus:outline-none"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              required
            />
            <label className="text-sm text-gray-700">I agree to the terms and conditions</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Create Account
          </button>

          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200">
              <FaGoogle className="text-red-500" />
            </button>
            <button className="bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200">
              <FaApple className="text-black" />
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
