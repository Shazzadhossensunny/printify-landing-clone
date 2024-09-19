import React from 'react';

const IntegrationSection = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Connect your store</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
        {['Shopify', 'Etsy', 'WooCommerce', 'Wix', 'BigCommerce', 'API'].map((platform, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
            <img src={`/api/placeholder/100/50?text=${platform}`} alt={platform} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationSection;
