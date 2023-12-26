// CartSidebar.js
import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the cross icon
import { CiCircleMinus } from "react-icons/ci";

const CartSidebar = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <button className="text-3xl text-black p-4" onClick={onClose}>
        <FaTimes />
      </button>
      <h2 className="text-xl font-semibold px-6 py-4">Your Cart</h2>
      <ul className="px-6 py-2">
        {cartItems.map((item, index) => (
          <li key={index} className="mb-4 border-b pb-4 flex justify-between">
            <div>
              <span className="block font-medium">{item.name}</span>
              <span className="block text-gray-600">Price: {item.price}</span>
            </div>
            <button className="text-red-500 hover:text-red-600" onClick={() => onRemoveFromCart(item.id)}>
              <CiCircleMinus className="text-2xl" />
            </button>
          </li>
        ))}
      </ul>
      <div className="px-6 py-4 ">
        <h3 className="text-lg font-semibold">Total Amount: €{totalAmount.toFixed(2)}</h3>
      </div>
      {cartItems.length > 0 && (
        <div className="px-6 py-4">
          <button className="bg-yellow-400 text-white w-full py-2 rounded hover:bg-yellow-500 transition-colors duration-200">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
