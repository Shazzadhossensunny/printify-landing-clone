import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavItem = ({ title, items }) => {
  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-green-600"
      >
        <span>{title}</span>
        {items && (
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        )}
      </button>
      {items && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item, index) => (
              <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
