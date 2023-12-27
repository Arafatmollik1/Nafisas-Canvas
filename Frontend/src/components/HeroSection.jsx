import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {

  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-4 px-6 lg:px-24">
      <div className="flex flex-col w-full lg:w-auto justify-center items-start text-left">
        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900">
          Hello, Welcome to my gallery!
        </h1>
        <p className="mt-4 mb-8 text-lg text-gray-600">
          You can find my wonderful artwork and purchase them here!
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <Link
            to="/product-categories"
            className="inline-flex items-center text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg transition-colors duration-300"
          >
            See more
          </Link>
          <a
            href="https://www.facebook.com/subhe.nafisa" target="_blank" rel="noreferrer"
            className="inline-flex items-center text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg transition-colors duration-300"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="w-full lg:py-0 py-6">
          <div className="relative w-full">
            <img
              className="relative rounded-lg object-cover object-center w-full mx-auto lg:mx-0 z-0"  // Adjust the size of the image as needed
              alt="hero"
              src="/Nafis_main_pic.png"
            />
          </div>
        </div>
    </div>
  );
};

export default HeroSection;
