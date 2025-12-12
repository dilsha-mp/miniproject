import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, user, loading } = useSelector((state) => state.auth);

  // Redirect after login success
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "380px", borderRadius: "15px" }}>
        
        {/* FoodWay Branding */}
        <h2 className="text-center mb-4" style={{ fontWeight: "600", color: "#ff6a00" }}>
          FoodWay Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="btn w-100"
            style={{ backgroundColor: "#ff6a00", color: "white" }}
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="text-danger text-center mt-3">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
