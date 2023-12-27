import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Logo = () => {
  return (
    <Link to="/" className="inline-block"> 
      <h1 className="sm:text-4xl text-4xl py-5 px-10 font-brusher">Nafisa's Canvas</h1>
    </Link>
  );
};

export default Logo;
