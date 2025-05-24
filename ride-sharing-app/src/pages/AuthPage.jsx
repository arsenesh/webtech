import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white min-h-screen">
      {/* Left Section */}
      <div className={`w-full md:w-1/2 space-y-4 transform transition-transform duration-500 ${isLogin ? 'translate-x-0' : '-translate-x-full'}`}>
        <h1 className="text-4xl font-bold">
          {isLogin ? "Log in to see your recent activity" : "Sign up for an account"}
        </h1>
        <p className="text-gray-600">
          {isLogin
            ? "View past trips, tailored suggestions, support resources, and more."
            : "Join us to start your journey."}
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded focus:outline-none"
          />
          <button className="bg-black text-white py-2 px-4 rounded mt-4">
            {isLogin ? "Log in to your account" : "Create your account"}
          </button>
        </form>
        <p className="text-gray-600 mt-2">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button onClick={() => setIsLogin(false)} className="underline">
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setIsLogin(true)} className="underline">
                Log in
              </button>
            </>
          )}
        </p>
      </div>

      {/* Right Section with Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/image2.png"
          alt="Illustration"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default AuthPage; 