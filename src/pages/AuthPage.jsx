import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/authSlice";
import { saveProfile } from "../redux/profileSlice";
import { toggleTheme } from "../redux/themeSlice";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dark = useSelector((state) => state.theme.dark);

    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        location: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

        if (isLogin) {
            const user = storedUsers.find(
                (u) => u.email === formData.email && u.password === formData.password
            );
            if (!user) {
                setError("Invalid login. Please try again or register.");
                return;
            }
            dispatch(login(user));
            dispatch(
                saveProfile({
                    name: user.name,
                    email: user.email,
                    location: user.location || "",
                })
            );
            navigate("/");
        } else {
            if (storedUsers.some((u) => u.email === formData.email)) {
                setError("User already exists. Please login.");
                return;
            }
            const newUser = { ...formData };
            storedUsers.push(newUser);
            localStorage.setItem("users", JSON.stringify(storedUsers));

            dispatch(register(newUser));
            dispatch(saveProfile(newUser));
            navigate("/");
        }
    };

    const inputClass = `px-4 py-3 rounded-lg border w-full transition focus:outline-none focus:ring-2
    ${dark
            ? "bg-gray-800 text-white border-gray-700 focus:ring-orange-500"
            : "bg-white text-gray-900 border-gray-300 focus:ring-orange-400"
        }
  `;

    return (
        <div
            className={`min-h-screen flex items-center justify-center px-4 py-10 ${dark ? "bg-gray-900" : "bg-orange-50"
                }`}
        >
            <div
                className={`w-full max-w-md p-8 rounded-2xl shadow-lg transition-colors duration-300
        ${dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
            >

                {/* Form Switch */}
                <div className="flex justify-center mb-6 space-x-8">
                    <button
                        onClick={() => {
                            setIsLogin(true);
                            setError("");
                        }}
                        className={`pb-2 text-lg font-semibold border-b-2 transition-all ${isLogin
                                ? "border-orange-500 text-orange-600"
                                : "border-transparent text-gray-500"
                            }`}
                    >
                        Login
                    </button>

                    <button
                        onClick={() => {
                            setIsLogin(false);
                            setError("");
                        }}
                        className={`pb-2 text-lg font-semibold border-b-2 transition-all ${!isLogin
                                ? "border-orange-500 text-orange-600"
                                : "border-transparent text-gray-500"
                            }`}
                    >
                        Register
                    </button>
                </div>

                {/* Error */}
                {error && (
                    <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <>
                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={inputClass}
                                required
                            />

                            <input
                                name="location"
                                type="text"
                                placeholder="Location / Address"
                                value={formData.location}
                                onChange={handleChange}
                                className={inputClass}
                                required
                            />
                        </>
                    )}

                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition-all"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>

                {/* Switch Text */}
                <p className="text-center text-sm mt-5">
                    {isLogin ? (
                        <>
                            Don’t have an account?{" "}
                            <button
                                className="text-orange-600 font-medium hover:underline"
                                onClick={() => setIsLogin(false)}
                            >
                                Register
                            </button>
                        </>
                    ) : (
                        <>
                            Already a member?{" "}
                            <button
                                className="text-orange-600 font-medium hover:underline"
                                onClick={() => setIsLogin(true)}
                            >
                                Login
                            </button>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
