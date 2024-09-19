import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Why Printify</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">Pricing</a></li>
            <li><a href="#" className="hover:text-green-400">Reviews</a></li>
            <li><a href="#" className="hover:text-green-400">How it works</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Sell</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">Start selling</a></li>
            <li><a href="#" className="hover:text-green-400">Custom products</a></li>
            <li><a href="#" className="hover:text-green-400">POD pro</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Tools</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">Mockup generator</a></li>
            <li><a href="#" className="hover:text-green-400">Profit calculator</a></li>
            <li><a href="#" className="hover:text-green-400">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">About us</a></li>
            <li><a href="#" className="hover:text-green-400">Careers</a></li>
            <li><a href="#" className="hover:text-green-400">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Help</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">FAQ</a></li>
            <li><a href="#" className="hover:text-green-400">Contact us</a></li>
            <li><a href="#" className="hover:text-green-400">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
        <p>&copy; 2024 Printify. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-400">Facebook</a>
          <a href="#" className="hover:text-green-400">Twitter</a>
          <a href="#" className="hover:text-green-400">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
