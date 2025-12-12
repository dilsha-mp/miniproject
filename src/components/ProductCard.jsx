import { useDispatch, useSelector } from "react-redux";
import { addItem, updateQty, removeItem } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart.items);
  const inCart = cart.find((i) => i.id === product.id);
  const isDark = useSelector((s) => s.theme.dark);

  const cardBg = isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const subText = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <div
      className={`${cardBg} rounded-2xl shadow-md p-4 flex flex-col border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg`}
    >
      {/* Food Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-xl mb-4"
      />

      {/* Name + Category */}
      <h4 className="font-semibold text-lg">{product.name}</h4>
      <p className={`text-sm ${subText}`}>{product.category}</p>

      {/* Price + Add / Qty Buttons */}
      <div className="mt-4 flex items-center justify-between">
        <div className="font-bold text-lg">₹{product.price}</div>

        {!inCart ? (
          // ADD Button
          <button
            onClick={() => dispatch(addItem(product))}
            className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-all"
          >
            Add
          </button>
        ) : (
          // Quantity Controller
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                inCart.qty > 1
                  ? dispatch(updateQty({ id: product.id, qty: inCart.qty - 1 }))
                  : dispatch(removeItem(product.id))
              }
              className={`px-3 py-1.5 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition`}
            >
              -
            </button>

            <div className="w-6 text-center font-semibold">{inCart.qty}</div>

            <button
              onClick={() =>
                dispatch(updateQty({ id: product.id, qty: inCart.qty + 1 }))
              }
              className="px-3 py-1.5 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
