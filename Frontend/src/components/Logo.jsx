import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Logo = () => {
  return (
    <Link to="/" className="inline-block"> {/* Link to home */}
      <h1 className="text-2xl py-5 px-10 font-brusher">Nafisa's Canvas</h1>
    </Link>
  );
};

export default Logo;
