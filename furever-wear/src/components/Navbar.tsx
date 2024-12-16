'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useBasket } from "@/context/BasketContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { basket } = useBasket(); // Access basket from the context

  // Calculate total quantity of items in the basket
  const totalItems = basket.reduce((sum: number, item: { quantity: number }) => {
    return sum + item.quantity;
  }, 0);

  return (
    <header className="bg-white shadow-md font-titillium">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.png" // Path to your logo in the public folder
            alt="Furever-Wear Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
            Furever-Wear
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/shop" className="text-gray-600 hover:text-blue-600">
            Shop
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>

          {/* Basket Icon */}
          <Link href="/basket" className="relative flex items-center">
            <Image
              src="/assets/scart.svg" // Basket image from your assets
              alt="Basket Icon"
              width={30}
              height={30}
              className={`transition ${
                totalItems > 0 ? "text-orange-500" : "text-gray-600"
              }`}
              style={{ filter: totalItems > 0 ? "brightness(1.3)" : "none" }}
            />
            {/* Badge for total items */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-2 py-1">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[100px] z-[999] left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link href="/shop" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                Shop
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link href="/basket" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                Basket
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;