import React from 'react';
import HeroSection from './HeroSection';
import Products from './Products'; // Assuming you have a Products component

const MainBody = () => {
  return (
    <main className="flex-grow">
      <section className="text-center p-8">
        {/* Welcome section */}
        <HeroSection/>
        {/* ... other sections ... */}
      </section>
      <Products />
    </main>
  );
};

export default MainBody;
