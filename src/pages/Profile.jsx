import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { FiUser, FiMail, FiLock, FiMapPin } from 'react-icons/fi';

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    country: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        password: '',
        country: user.country || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">My Profile</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Full Name</label>
              <div className="input-field flex items-center">
                <FiUser className="text-gray-400 ml-3" />
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent p-3 focus:outline-none text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <div className="input-field flex items-center">
                <FiMail className="text-gray-400 ml-3" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent p-3 focus:outline-none text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Country</label>
              <div className="input-field flex items-center">
                <FiMapPin className="text-gray-400 ml-3" />
                <input
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-transparent p-3 focus:outline-none text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2">New Password</label>
              <div className="input-field flex items-center">
                <FiLock className="text-gray-400 ml-3" />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-transparent p-3 focus:outline-none text-white"
                  placeholder="Leave blank to keep current"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;