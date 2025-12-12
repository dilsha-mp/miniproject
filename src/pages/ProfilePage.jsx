import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/authSlice";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { dark } = useSelector((state) => state.theme);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    location: user?.location || "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    alert("Profile updated successfully!");
  };

  return (
    <div
      className={`min-h-screen px-4 py-10 transition-colors duration-300 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className={`max-w-lg mx-auto p-6 rounded-2xl shadow-md transition-colors duration-300 ${
          dark ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">My Profile</h2>
          <p className={`text-sm ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}>
            Update your personal information
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border transition ${
                dark
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-orange-400"
                  : "bg-white border-gray-300 focus:ring-orange-500"
              } focus:outline-none focus:ring`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border transition ${
                dark
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-orange-400"
                  : "bg-white border-gray-300 focus:ring-orange-500"
              } focus:outline-none focus:ring`}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              placeholder="Your delivery location"
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border transition ${
                dark
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-orange-400"
                  : "bg-white border-gray-300 focus:ring-orange-500"
              } focus:outline-none focus:ring`}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
