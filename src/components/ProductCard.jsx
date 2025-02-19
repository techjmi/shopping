import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import QuickView from './QuickView';

const ProductCard = ({ product }) => {
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const handleAddToCart = async () => {
    dispatch(addToCart(product));
    toast.success('Added Successfully')
    navigate('/cart')
  };

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white">
    {/* Product Image */}
    <div className="relative overflow-hidden rounded-lg">
      <img src={product.thumbnail} alt={product.title} loading='lazy' className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105" />
    </div>

    {/* Product Title & Price */}
    <h3 className="font-semibold text-lg mt-4 text-gray-800">{product.title}</h3>
    <div className="flex justify-between items-center mt-2">
      <span className="text-lg font-bold text-gray-700">${product.price}</span>
    </div>

    {/* Buttons */}
    <div className="flex  gap-3 mt-4">
      <button 
        onClick={handleAddToCart}
        className="flex-1 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
      >
        Add to Cart
      </button>
      <button 
        className="flex-1 bg-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
        onClick={() => setQuickViewOpen(true)}
      >
        Quick View
      </button>
    </div>

    {/* Quick View Modal */}
    <QuickView product={product} isOpen={isQuickViewOpen} onClose={() => setQuickViewOpen(false)} />
  </div>
  );
};

export default ProductCard;