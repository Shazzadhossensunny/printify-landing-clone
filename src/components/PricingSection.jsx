import React from 'react';

const PricingSection = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Make Money, Risk-Free</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{ plan: 'Free', price: '0' },
          { plan: 'Pro', price: '29' },
          { plan: 'Business', price: '79' }
        ].map((pricing, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{pricing.plan}</h3>
            <p className="text-4xl font-bold mb-4">${pricing.price}</p>
            <p className="text-gray-600 mb-4">
              {pricing.plan === 'Free' ? 'Basic features and limited support.' : 'Advanced features and priority support.'}
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-300">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
