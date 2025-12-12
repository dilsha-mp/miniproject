import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error } = useSelector((state) => state.auth);
  const { dark } = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    if (!error) navigate("/");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-lg transition-colors duration-300 ${
          dark ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p
          className={`text-center mb-6 ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Join FoodWay and start your food journey 🍽️
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <input
              type="text"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring transition ${
                dark
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-orange-400"
                  : "bg-white border-gray-300 focus:ring-orange-500"
              }`}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium mb-1 block">Email</label>
            <input
              type="email"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring transition ${
                dark
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-orange-400"
                  : "bg-white border-gray-300 focus:ring-orange-500"
              }`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium mb-1 block">Password</label>
            <input
              type="password"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring transition ${
                dark
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-orange-400"
                  : "bg-white border-gray-300 focus:ring-orange-500"
              }`}
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-semibold transition"
          >
            Register
          </button>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-center text-sm mt-1">{error}</p>
          )}
        </form>

        {/* Already have account */}
        <p
          className={`text-center mt-5 text-sm ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Already have an account?{" "}
          <span
            onClick={() => navigate("/auth")}
            className="text-orange-600 font-semibold hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
