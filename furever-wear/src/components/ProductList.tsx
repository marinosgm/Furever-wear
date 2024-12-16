"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useBasket } from "@/context/BasketContext";

// Define a type for Product
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  slug: string;
  colors: { name: string; value: string; image: string }[]; // Array of color options
};

// Define a type for Basket Item
type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToBasket } = useBasket();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/products`);
        setProducts(response.data.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message); // Extract error message if available
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8 font-titillium">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToBasket={addToBasket} />
        ))}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, addToBasket }: { product: Product; addToBasket: (item: BasketItem) => void }) => {
    const [selectedColor, setSelectedColor] = useState(
      product.colors && product.colors.length > 0 ? product.colors[0] : null
    );
  
    return (
      <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
        {/* Product Image */}
        <Link href={`/product/${product.slug}`}>
  <div className="relative w-full bg-gray-200 cursor-pointer">
    <Image
      src={selectedColor ? selectedColor.image : "/assets/default-product.jpg"}
      alt={product.name}
      layout="responsive"
      width={4} // Aspect ratio width
      height={3} // Aspect ratio height
      className="object-contain rounded-t-lg"
      priority
    />
  </div>
</Link>
  
        {/* Product Details */}
        <div className="flex flex-col flex-grow p-4">
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-lg font-semibold text-gray-800 hover:underline cursor-pointer">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
  
          {/* Color Options */}
          {product.colors && product.colors.length > 0 ? (
            <div className="flex items-center gap-2 mb-4">
              {product.colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 transition ${
                    selectedColor && selectedColor.value === color.value
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: `#${color.value}` }}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No colors available</p>
          )}
  
          <div className="mt-auto flex items-center justify-between">
            <span className="text-blue-600 text-lg font-bold">${product.price.toFixed(2)}</span>
            <button
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() =>
                addToBasket({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  color: selectedColor ? selectedColor.name : "Default", // Ensure color is passed
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
  
  export default ProductList;