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
  );

  return (
<div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-5xl mx-auto flex items-center justify-center h-auto">
  <div className="flex flex-col lg:flex-row gap-6 w-full max-h-[1000px]">
    {/* Product Image */}
    <div className="relative w-full sm:w-2/3 lg:w-1/3 max-w-[250px] aspect-[2/3] mx-auto">
  <Image
    src={selectedColor.image || "/assets/default-product.jpg"}
    alt={`Image of ${product.name} in ${selectedColor.name}`}
    fill
    priority
    className="object-cover rounded-lg"
  />
</div>
    {/* Product Details */}
    <div className="flex flex-col lg:w-1/2 justify-center p-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 text-center lg:text-left">
        {product.name}
      </h1>
      <p className="text-gray-700 text-base sm:text-lg mb-4 text-center lg:text-left">
        {product.description}
      </p>
      <p className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6 text-center lg:text-left">
        ${product.price.toFixed(2)}
      </p>

      {/* Color Options */}
      {product.colors.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 text-center lg:text-left">
          <span className="text-gray-700 font-medium">Colors:</span>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {product.colors.map((color) => (
              <button
                key={color.value}
                aria-label={`Select ${color.name}`}
                onClick={() => setSelectedColor(color)}
                className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 transition-all duration-300 transform ${
                  selectedColor.value === color.value
                    ? "border-blue-500 scale-110"
                    : "border-gray-300"
                } hover:scale-105`}
                style={{ backgroundColor: `#${color.value}` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Add to Basket Button */}
      <button
        className="w-full sm:w-auto bg-blue-500 text-white text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-blue-600 transition"
        onClick={() =>
          addToBasket({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            color: selectedColor.name,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>
  );
};

export default ProductDetails;