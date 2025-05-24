import React, { useState } from "react";
import axios from "axios";
import { FaUserAlt, FaLock, FaGoogle, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/api/login", {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="auth-card p-8 sm:p-10 space-y-6">
          <h2 className="text-3xl font-bold text-center text-white">Welcome Back</h2>
          <p className="text-gray-400 text-center">Sign in to continue your journey</p>
          
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="input-field flex items-center space-x-3 p-3">
              <FaUserAlt className="text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent focus:outline-none text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-field flex items-center space-x-3 p-3">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent focus:outline-none text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => navigate("/reset-password")}
                className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Sign In
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <FaGoogle className="text-white w-5 h-5" />
            </button>
            <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <FaApple className="text-white w-5 h-5" />
            </button>
          </div>

          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;