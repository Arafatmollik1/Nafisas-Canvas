// src/App.js

import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import ProductCategories from './components/ProductCategories'; // Import your product categories component

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/product-categories" element={<ProductCategories />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
