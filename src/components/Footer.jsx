import { useSelector } from "react-redux";

export default function Footer() {
  const { dark } = useSelector((s) => s.theme);

  return (
    <footer
      className={`mt-10 py-6 border-t ${
        dark
          ? "bg-gray-900 text-gray-300 border-gray-700"
          : "bg-white text-gray-800 border-gray-300"
      }`}
    >
      <div className="text-center space-y-1">
        {/* Brand Name */}
        <h3 className="text-lg font-semibold tracking-wide">FoodWay</h3>

        {/* Tagline */}
        <p className="text-xs opacity-80">
          Fresh Taste • Fast Delivery • Happy Eating
        </p>

        {/* Copyright */}
        <p className="text-xs opacity-70 pt-1">
          © {new Date().getFullYear()} FoodWay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
