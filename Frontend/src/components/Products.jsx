import React from 'react';
import { Link } from 'react-router-dom';

const productsData = [
  { id: 1, name: 'Desert Night', category: 'Oil painting', price: '15 €', imageUrl: '/product_pictures/dessert.jpg' },
  { id: 2, name: 'Black Texts', category: 'Glittery painting',  price: '25 €', imageUrl: '/product_pictures/black-texts.jpg' },
  { id: 3, name: 'Greeny Things', category: 'Oil painting', price: '20 €', imageUrl: '/product_pictures/greeny-things.jpg' },
  { id: 4, name: 'Norway Place', category: 'Dry painting', price: '10 €', imageUrl: '/product_pictures/norway-place.png' },
  { id: 5, name: 'Black Names', category: 'Dry painting', price: '55 €', imageUrl: '/product_pictures/black-names.jpg' },
  { id: 6, name: 'Mandala', category: 'Mandala painting', price: '50 €', imageUrl: '/product_pictures/mandala.jpg' },
];

const Products = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {productsData.map((product) => (
            <div key={product.id} className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-2"> 
                  <img 
                    alt={product.name}
                    className="object-contain h-48 w-full"  
                    src={product.imageUrl}
                  />
                </div>
                <div className="p-6"> 
                  <p className="text-yellow-500 text-xs font-semibold tracking-widest uppercase mb-1">{product.category}</p>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                  <p className=" font-bold mt-1">{product.price}</p>
                  <button className="mt-4 bg-yellow-400 text-black inline-flex items-center px-6 py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-yellow-500">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full text-center mt-6">
            <Link
              to="/product-categories"
              className="text-black font-bold hover:text-yellow-500 underline decoration-yellow-500 hover:decoration-2 transition duration-300"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
