import { useEffect } from "react";

const QuickView = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/3 rounded-lg shadow-lg p-5 relative">
        {/* Close */}
        <button className="absolute top-3 right-3 text-xl text-gray-600" onClick={onClose}>&times;</button>
        {/* Details */}
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <img src={product.thumbnail} alt={product.title} className="w-full h-60 object-cover rounded mt-2" />
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="font-bold mt-2">Price: ${product.price}</p>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
