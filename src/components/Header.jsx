import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../data/products';

export const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'text-white font-medium' : 'text-gray-300 hover:text-white';
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-white mr-4 lg:hidden" />
            <Link to="/" className="text-2xl font-serif text-white tracking-wide">JAISAL FURNITURE</Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-12">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>Home</Link>
            <Link to="/shop" className={`${isActive('/shop')} transition-colors duration-200`}>Shop</Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Categories <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <div className={`absolute left-0 mt-2 w-56 bg-white shadow-lg py-2 ${isDropdownOpen ? 'block' : 'hidden'} group-hover:block`}>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-6">
            <Search className="h-6 w-6 text-white" />
            <ShoppingBag className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};