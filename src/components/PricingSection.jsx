import React from 'react';

const PricingSection = () => (
  <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left side content */}
            <div className="p-8 lg:p-12 lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Make Money, Risk-Free
              </h2>
              <p className="text-teal-100 mb-8">
                You pay for fulfillment only when you make a sale
              </p>
              <div className="bg-teal-900/50 rounded-xl p-6 mb-8">
                <div className="flex justify-between mb-3">
                  <span className="text-teal-100">You sell a t-shirt</span>
                  <span className="text-white font-semibold">$ 30</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="text-teal-100">You pay for its production</span>
                  <span className="text-white font-semibold">$ 12</span>
                </div>
                <div className="border-t border-teal-700 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-green-400 font-semibold">Your profit</span>
                    <span className="text-green-400 font-semibold">$ 18</span>
                  </div>
                </div>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Start selling
              </button>
              <p className="text-teal-300 text-sm mt-6">
                100% Free to use · 900+ Products · Largest print network
              </p>
            </div>
            {/* Right side illustration */}
            <div className="lg:w-1/2 bg-green-50 flex items-center justify-center p-8 lg:p-12">
              <svg className="w-full max-w-sm" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="150" r="40" fill="#4CAF50"/>
                <path d="M190 150 L200 160 L220 140" stroke="white" strokeWidth="4"/>
                <circle cx="280" cy="100" r="30" fill="#FFC107"/>
                <text x="275" y="105" fontSize="24" fill="white">$</text>
                <circle cx="120" cy="200" r="30" fill="#2196F3"/>
                <text x="115" y="205" fontSize="24" fill="white">$</text>
                <rect x="180" y="220" width="40" height="60" fill="#9C27B0"/>
                <circle cx="200" cy="210" r="20" fill="#E91E63"/>
                <path d="M160 280 Q200 220 240 280" stroke="#4CAF50" strokeWidth="4" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default PricingSection;
