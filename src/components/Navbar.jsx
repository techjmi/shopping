import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart.items); 
  const cartItemsCount = cart.length
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Logo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          {/* <li><Link to="/products" className="hover:text-gray-400">Products</Link></li> */}
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        </ul>

        {/* Cart & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-2xl" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemsCount}
              </span>
            )}
          </Link>

          {/* Hamburger Button */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <AiOutlineMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg p-5">
            <button onClick={() => setIsOpen(false)} className="text-white text-2xl mb-6">
              <AiOutlineClose />
            </button>
            <ul className="space-y-4 text-lg">
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              {/* <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li> */}
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/cart" onClick={() => setIsOpen(false)}>Cart ({cartItemsCount})</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
