"use client";

import { useBasket } from "@/context/BasketContext";
import axios from "axios";
import { useRouter } from "next/navigation";

const BasketPage = () => {
  const { basket, removeFromBasket } = useBasket();
  const router = useRouter();

  const totalAmount = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle Checkout
  const handleCheckout = async () => {
    try {
      // Create a Checkout Session on the server
      const response = await axios.post("/api/checkout", { basket });

      // Redirect to Stripe Checkout
      if (response.data.url) {
        router.push(response.data.url);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Your Basket</h2>
      {basket.length === 0 ? (
        <p className="text-gray-500 text-center">Your basket is empty.</p>
      ) : (
        <div className="space-y-4">
          {basket.map((item) => (
            <div
              key={`${item.id}-${item.color}`} // Unique key based on id and color
              className="flex justify-between items-center bg-white p-4 rounded shadow border border-gray-200"
            >
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">
                  Price: ${item.price.toFixed(2)} | Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => removeFromBasket(item.id, item.color)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Amount */}
          <div className="flex justify-end items-center mt-4">
            <span className="text-2xl font-bold text-gray-800">
              Total: ${totalAmount.toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketPage;