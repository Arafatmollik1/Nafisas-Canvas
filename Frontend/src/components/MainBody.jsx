import React from 'react';
import HeroSection from './HeroSection';
import Products from './Products'; // Assuming you have a Products component

const MainBody = ({onAddToCart}) => {
  return (
    <main className="flex-grow">
      <section className="text-center p-8">
        {/* Welcome section */}
        <HeroSection/>
        {/* ... other sections ... */}
      </section>
      <Products addToCart={onAddToCart}/>
    </main>
  );
};

export default MainBody;
