// src/App.js

import './App.css';
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import ProductCategories from './components/ProductCategories'; // Import your product categories component
import CartSidebar from './components/CartSidebar';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const addToCart = (product) => {
    setCartItems(currentItems => [...currentItems, product]);
  };
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header onCartIconClick={toggleCart}  />
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} cartItems={cartItems}  onRemoveFromCart={removeFromCart}/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<MainBody onAddToCart={addToCart}/>} />
          <Route path="/product-categories" element={<ProductCategories onAddToCart={addToCart}/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
