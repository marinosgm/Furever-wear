"use client";

import { useState } from "react";
import Image from "next/image";
import { useBasket } from "@/context/BasketContext";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  colors: { name: string; value: string; image: string }[];
};

const ProductDetails = ({ product }: { product: Product }) => {
  const { addToBasket } = useBasket();
  const [selectedColor, setSelectedColor] = useState(
    product.colors.length > 0
      ? product.colors[0]
      : { name: "Default", value: "ffffff", image: product.image }
  ); // Default to first color or fallback to product image

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      {/* Product Image */}
      <div className="relative w-full h-96 mb-6">
        <Image
          src={selectedColor.image || "/assets/default-product.jpg"}
          alt={`Image of ${product.name} in ${selectedColor.name}`}
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
      <p className="text-gray-700 text-lg mb-4">{product.description}</p>
      <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price.toFixed(2)}</p>

      {/* Color Options */}
      {product.colors.length > 0 && (
        <div className="flex items-center gap-3 mb-6">
          <span className="text-gray-700 font-medium">Colors:</span>
          {product.colors.map((color) => (
            <button
              key={color.value}
              aria-label={`Select ${color.name}`}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-2 transition-all duration-300 transform ${
                selectedColor.value === color.value ? "border-blue-500 scale-110" : "border-gray-300"
              } hover:scale-105`}
              style={{ backgroundColor: `#${color.value}` }}
            />
          ))}
        </div>
      )}

      {/* Add to Basket Button */}
      <button
        className="bg-blue-500 text-white text-lg px-6 py-3 rounded hover:bg-blue-600 transition"
        onClick={() =>
          addToBasket({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            color: selectedColor.name, // Include selected color
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;