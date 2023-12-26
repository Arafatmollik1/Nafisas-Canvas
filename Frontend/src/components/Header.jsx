import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import { BiSearch } from 'react-icons/bi'; // Import the search icon
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-transparent p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <Logo />
        <div className="flex sm:flex-row items-center w-full mt-4 sm:mt-0 sm:w-auto">
          {/* Search box */}
          <div className="flex border-2 rounded overflow-hidden w-full sm:w-auto">
            <input type="text" className="px-4 py-2 w-full" placeholder="Search..." />
            <button className="flex items-center justify-center px-4 border-l">
              <BiSearch />
            </button>
          </div>
          {/* Cart icon */}
          <div className="px-5">
            <FaShoppingCart className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
