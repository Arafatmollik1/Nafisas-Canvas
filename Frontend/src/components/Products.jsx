import React from 'react';

const Products = () => {
  // Dummy product data
  const products = [
    // ... your products here ...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {products.map((product) => (
        <div className="border rounded shadow p-4">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.price}</p>
          {/* More product details */}
        </div>
      ))}
    </div>
  );
};

export default Products;
