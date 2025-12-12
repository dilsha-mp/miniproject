import { useSelector, useDispatch } from "react-redux";
import { updateQty, removeItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const items = useSelector((s) => s.cart.items);
  const authUser = useSelector((s) => s.auth.user);
  const dark = useSelector((s) => s.theme.dark);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);

  const handleCheckout = () => {
    if (!authUser) {
      alert("Please login before proceeding to checkout!");
      return nav("/auth");
    }
    nav("/checkout");
  };

  return (
    <div
      className={`min-h-screen pt-10 transition-colors ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 pb-20">

        <h1 className="text-4xl font-bold mb-10 text-center md:text-left">
          Your Cart
        </h1>

        {/* Empty Cart */}
        {items.length === 0 ? (
          <div
            className={`max-w-md mx-auto p-10 rounded-3xl text-center shadow-lg ${
              dark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"
            }`}
          >
            <p className="text-xl">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Cart Items */}
            <div className="flex-1 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center gap-4 p-5 rounded-3xl shadow-md ${
                    dark ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-28 h-28 rounded-xl object-cover"
                  />

                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p
                      className={`text-sm ${
                        dark ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {item.category}
                    </p>
                    <p className="mt-2 text-lg font-bold">₹{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        item.qty > 1
                          ? dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))
                          : dispatch(removeItem(item.id))
                      }
                      className={`px-3 py-1 text-lg rounded-lg ${
                        dark
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      -
                    </button>

                    <div className="text-lg font-semibold">{item.qty}</div>

                    <button
                      onClick={() =>
                        dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))
                      }
                      className="px-3 py-1 text-lg rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Summary */}
            <div
              className={`lg:w-1/3 p-6 rounded-3xl shadow-xl h-fit ${
                dark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Items ({items.length})</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₹50</span>
                </div>
              </div>

              <div className="border-t my-4"></div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{total + 50}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-orange-500 text-white py-3 rounded-2xl font-semibold hover:bg-orange-600 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
