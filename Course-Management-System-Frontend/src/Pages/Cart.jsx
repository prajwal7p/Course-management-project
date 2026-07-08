import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <h1 className="text-3xl font-bold">
          🛒 Your Cart is Empty
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-6 grid md:grid-cols-3 gap-8">

      <div className="md:col-span-2 space-y-5">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex gap-5 rounded-xl bg-white p-5 shadow"
          >
            <img
              src={item.image}
              className="h-32 w-32 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h2 className="text-xl font-bold">
                {item.title}
              </h2>

              <p className="mt-2 text-gray-500">
                ₹{item.price}
              </p>

              <div className="mt-4 flex items-center gap-3">

                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="h-8 w-8 rounded bg-gray-200"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item._id)}
                  className="h-8 w-8 rounded bg-gray-200"
                >
                  +
                </button>

              </div>
            </div>

            <button
              onClick={() => removeFromCart(item._id)}
              className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Remove
            </button>

          </div>
        ))}
      </div>

      <div className="h-fit rounded-xl bg-white p-6 shadow">

        <h1 className="mb-5 text-2xl font-bold">
          Order Summary
        </h1>

        <div className="flex justify-between">
          <span>Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="mt-4 flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button className="mt-6 w-full rounded-lg bg-green-600 py-3 text-white hover:bg-green-700">
          Checkout
        </button>

      </div>

    </div>
  );
};

export default Cart;