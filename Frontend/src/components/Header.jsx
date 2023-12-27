import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const Header = ({ onCartIconClick }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    const selectedItem = data.find(item => item.name === searchTerm);
    if (selectedItem && selectedItem.id) {
      fetch(`http://127.0.0.1:8000/api/products/${selectedItem.id}`)
        .then(response => response.json())
        .then(data => {
          // Navigate to /product-categories with the data
          navigate('/product-categories', { state: { selectedProduct: data } });
        })
        .catch(error => console.error('Error fetching details:', error));
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const selectItem = (itemName) => {
    setSearchTerm(itemName);
    setIsFocused(false);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="bg-transparent p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <Logo />
        <div className="flex sm:flex-row items-center w-full mt-4 sm:mt-0 sm:w-auto" ref={searchContainerRef}>
          <div className="flex border-2 rounded overflow-hidden w-full sm:w-auto">
            <input
              type="text"
              className="px-4 py-2 w-full"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleFocus}
            />
            <button className="flex items-center justify-center px-4 border-l" onClick={handleSearchButtonClick}>
              <BiSearch />
            </button>
          </div>
          {isFocused && (
            <div className="absolute bg-white border border-gray-200 sm:top-20 top-40 w-auto z-10">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="py-2 px-10 hover:bg-gray-100"
                  onClick={() => selectItem(item.name)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          <div className="px-5">
            <FaShoppingCart className="text-2xl cursor-pointer" onClick={onCartIconClick} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
