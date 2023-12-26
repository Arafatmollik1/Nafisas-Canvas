import React from 'react';

const HeroSection = () => {

  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-24 px-6 lg:px-24">
      <div className="flex flex-col w-full lg:w-auto justify-center items-start text-left">
        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900">
          Hello, Welcome to my gallery!
        </h1>
        <p className="mt-4 mb-8 text-lg text-gray-600">
          You can find my wonderful artwork and purchase them here!
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <button className="inline-flex items-center text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg transition-colors duration-300">
            See more
          </button>
          <button className="inline-flex items-center text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition-colors duration-300">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="w-full lg:py-0 py-6">
          <div className="relative w-full">
            <img
              className="relative rounded-lg object-cover object-center w-auto mx-auto lg:mx-0 z-0"  // Adjust the size of the image as needed
              alt="hero"
              src="/Nafis_main_pic.png"
            />
          </div>
        </div>
    </div>
  );
};

export default HeroSection;
