import React, { useState } from 'react';
import NavItem from './NavItem';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Printify Logo" className="h-8 w-auto mr-2" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavItem title="Catalog" items={['All Products', 'Trending', 'New Arrivals']} />
            <NavItem title="Start selling" />
            <NavItem title="How it works" />
            <NavItem title="Pricing" />
            <NavItem title="Resources" items={['Blog', 'Help Center', 'API']} />
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-green-600 hover:text-green-700 transition-colors duration-300">
              Log in
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <NavItem title="Catalog" items={['All Products', 'Trending', 'New Arrivals']} />
              <NavItem title="Start selling" />
              <NavItem title="How it works" />
              <NavItem title="Pricing" />
              <NavItem title="Resources" items={['Blog', 'Help Center', 'API']} />
            </div>
            <div className="mt-4 space-y-2">
              <button className="w-full text-center text-green-600 hover:text-green-700 transition-colors duration-300">
                Log in
              </button>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
