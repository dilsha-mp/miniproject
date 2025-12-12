import { useSelector, useDispatch } from "react-redux"
import { removeItem, updateQty, clearCart } from "../redux/cartSlice"

export default function CartDrawer({ onClose }) {
  const { items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 flex flex-col">

      {/* HEADER */}
      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black text-2xl leading-none"
        >
          ×
        </button>
      </div>

      {/* BODY */}
      <div className="flex-grow overflow-y-auto p-5">
        {items.length === 0 && (
          <p className="text-gray-500 text-center mt-10">Your cart is empty</p>
        )}

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-2">

              {/* Decrease */}
              <button
                onClick={() =>
                  item.qty > 1
                    ? dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))
                    : dispatch(removeItem(item.id))
                }
                className="w-7 h-7 flex justify-center items-center bg-gray-200 rounded-md text-lg"
              >
                –
              </button>

              <span className="font-medium">{item.qty}</span>

              {/* Increase */}
              <button
                onClick={() =>
                  dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))
                }
                className="w-7 h-7 flex justify-center items-center bg-blue-600 text-white rounded-md text-lg"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      {items.length > 0 && (
        <div className="p-5 border-t">
          <p className="font-bold text-lg flex justify-between">
            <span>Total:</span> <span>₹{total}</span>
          </p>

          <button
            onClick={() => {
              dispatch(clearCart())
              onClose()
            }}
            className="w-full bg-green-600 text-white py-2 mt-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  )
}
