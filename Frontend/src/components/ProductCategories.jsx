import React, { useState, useEffect } from 'react';

const productsData = [
  { id: 1, name: 'Desert Night', category: 'Oil painting', price: '15 €', imageUrl: '/product_pictures/dessert.jpg' },
  { id: 2, name: 'Black Texts', category: 'Glittery painting',  price: '25 €', imageUrl: '/product_pictures/black-texts.jpg' },
  { id: 3, name: 'Greeny Things', category: 'Oil painting', price: '20 €', imageUrl: '/product_pictures/greeny-things.jpg' },
  { id: 4, name: 'Norway Place', category: 'Dry painting', price: '10 €', imageUrl: '/product_pictures/norway-place.png' },
  { id: 5, name: 'Black Names', category: 'Dry painting', price: '55 €', imageUrl: '/product_pictures/black-names.jpg' },
  { id: 6, name: 'Mandala', category: 'Mandala painting', price: '50 €', imageUrl: '/product_pictures/mandala.jpg' },
];

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedProducts, setDisplayedProducts] = useState(productsData);

  // Extract unique categories
  const categories = ['All', ...new Set(productsData.map(product => product.category))];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setDisplayedProducts(productsData);
    } else {
      setDisplayedProducts(productsData.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center p-10 bg-gray-200">
        <h1 className="text-3xl font-bold">All Products</h1>
      </div>

      {/* Sidebar and Products Grid */}
      <div className="container mx-auto flex flex-wrap py-6">
        {/* Sidebar for Categories */}
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

        {/* Products Grid */}
        <div className="w-full sm:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedProducts.map(product => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-4 overflow-hidden">
                <div className="bg-gray-100 p-2">
                    <img src={product.imageUrl} alt={product.name} className="object-contain h-48 w-full" />
                </div>
                <p className="pt-5 text-yellow-500 text-xs font-semibold tracking-widest uppercase mb-1">{product.category}</p>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <p className="font-bold">{product.price}</p>
                <button className="mt-4 bg-yellow-400 text-black inline-flex items-center px-6 py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-yellow-500">
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
