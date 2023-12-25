import React from 'react';
import Products from './Products'; // Assuming you have a Products component

const MainBody = () => {
  return (
    <main className="flex-grow">
      <section className="text-center p-8">
        {/* Welcome section */}
        <h1 className="text-4xl font-bold">Hello, Welcome to my gallery!</h1>
        <p className="mt-4">You can find my wonderful artwork and purchase them here!</p>
        {/* ... other sections ... */}
      </section>
      <Products />
    </main>
  );
};

export default MainBody;
