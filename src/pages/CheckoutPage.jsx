import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { updateAddress, saveProfile } from "../redux/profileSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const items = useSelector((s) => s.cart.items);
  const profile = useSelector((s) => s.profile);
  const authUser = useSelector((s) => s.auth.user);
  const isDark = useSelector((s) => s.theme.dark);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const [address, setAddress] = useState(profile.address || profile.location || "");

  // Sync profile info from auth if missing
  useEffect(() => {
    if (authUser) {
      if (!profile.name || !profile.phone || !profile.address) {
        dispatch(
          saveProfile({
            name: authUser.name || profile.name,
            email: authUser.email || profile.email,
            phone: authUser.phone || profile.phone,
            address: authUser.address || profile.address,
            location: authUser.location || profile.location,
          })
        );
      }
    }
  }, [authUser]);

  useEffect(() => {
    setAddress(profile.address || profile.location || "");
  }, [profile.address, profile.location]);

  const placeOrder = () => {
    if (!authUser) {
      alert("Please login before placing an order!");
      return nav("/auth");
    }

    if (!address.trim()) {
      alert("Please enter a valid delivery address!");
      return;
    }

    dispatch(updateAddress(address));
    dispatch(clearCart());

    alert("Order placed successfully! 🎉");
    nav("/order-success");
  };

  return (
    <div
      className={`min-h-screen pt-10 pb-20 transition-colors ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
          Checkout
        </h1>

        {/* Delivery Details */}
        <div
          className={`p-5 rounded-2xl shadow-md mb-6 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-3 text-orange-500">
            Delivery Details
          </h2>

          <p className="font-medium">{profile.name || "Name not available"}</p>
          <p className="mb-3">{profile.phone || "Phone not available"}</p>

          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your full delivery address"
            className={`mt-2 px-4 py-3 w-full rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              isDark
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-50 border-gray-300"
            }`}
          />
        </div>

        {/* Order Items */}
        <div
          className={`p-5 rounded-2xl shadow-md mb-6 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4 text-orange-500">
            Your Order
          </h2>

          {items.length === 0 ? (
            <div className="text-center py-6 text-lg">Your cart is empty</div>
          ) : (
            items.map((it) => (
              <div
                key={it.id}
                className="flex justify-between py-3 border-b last:border-b-0"
              >
                <span>
                  {it.name} × {it.qty}
                </span>
                <span className="font-semibold">₹{it.qty * it.price}</span>
              </div>
            ))
          )}
        </div>

        {/* Total Section */}
        <div
          className={`p-5 rounded-2xl shadow-md mb-6 ${
            isDark ? "bg-gray-700 border-gray-600" : "bg-orange-50 border-orange-200"
          } border`}
        >
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between mt-2 text-sm opacity-80">
            <span>Delivery Fee</span>
            <span>₹50</span>
          </div>

          <div className="flex justify-between text-2xl font-bold mt-4 pt-2 border-t">
            <span>Grand Total</span>
            <span>₹{total + 50}</span>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="flex justify-end">
          <button
            onClick={placeOrder}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
