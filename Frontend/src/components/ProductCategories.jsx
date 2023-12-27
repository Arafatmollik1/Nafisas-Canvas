import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProductCategories = ({ onAddToCart }) => {
  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const location = useLocation();
  // Effect for handling passed state from the Header component
  useEffect(() => {
    if (location.state?.selectedProduct) {
      setDisplayedProducts([location.state.selectedProduct]);
    }
  }, [location.state]);

  useEffect(() => {
    // Fetch products from the API
    fetch('http://127.0.0.1:8000/api/products/')
      .then(response => response.json())
      .then(data => {
        setProductsData(data);
        setDisplayedProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setDisplayedProducts(productsData);
    } else {
      setDisplayedProducts(productsData.filter(product => product.category_name === selectedCategory));
    }
  }, [selectedCategory, productsData]);

  // Extract unique categories
  const categories = ['All', ...new Set(productsData.map(product => product.category_name))];

  return (
    <div>
      <div className="text-center p-10 bg-gray-200">
        <h1 className="text-3xl font-bold">All Products</h1>
      </div>


      <div className="container mx-auto flex flex-wrap py-6">

        <div className="w-full sm:w-1/4 p-4">
          <h2 className="font-bold text-xl mb-4">Categories</h2>
          <ul>
            {categories.map(category => (
              <li
                key={category}
                className={`cursor-pointer py-2 ${selectedCategory === category ? 'text-yellow-500' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full sm:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedProducts.map(product => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-4 overflow-hidden">
                <div className="bg-gray-100 p-2">
                    <img src={product.image} alt={product.name} className="object-contain h-48 w-full" />
                </div>
                <p className="pt-5 text-yellow-500 text-xs font-semibold tracking-widest uppercase mb-1">{product.category_name}</p>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <p className="font-bold">{product.price}</p>
                <button className="mt-4 bg-yellow-400 text-black inline-flex items-center px-6 py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-yellow-500" onClick={() => onAddToCart(product)}>
                    Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
